import  { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";


interface IFormValues {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  oldAddress: string;
  newAddress: string;
  acceptDataPrivacyPolicy: boolean;
}

function UpdateMyAddress() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      oldAddress: "",
      newAddress: "",
      acceptDataPrivacyPolicy: false,
    },
  });

  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission success

  const handleDialogClose = () => setOpen(false);

  const { submitForm, loading } = useSubmitForm({
    reset,
    setOpen,
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      oldAddress: "",
      newAddress: "",
      acceptDataPrivacyPolicy: false,
    },
    url: "update/my/address",
  });

  const handleFormSubmit = async (data: IFormValues) => {
    try {
      await submitForm({
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        oldAddress: data.oldAddress,
        newAddress: data.newAddress,
        acceptDataPrivacyPolicy: data.acceptDataPrivacyPolicy && "Yes",
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]"
      >
        <h5 className="font-montserrat text-[1.4rem] font-semibold text-black">
          Address Update
        </h5>
        
        <div>
          <label>Shareholder’s Name</label>
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="First Name"
                  label="First Name"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="middleName"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Middle Name (optional)"
                  label="Middle Name (optional)"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Last Name"
                  label="Last Name"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Email"
                label="Email"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="tel"
                placeholder="Phone"
                label="Phone"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div>
          <label className="text-[#787878]">Address</label>
          <div className="flex  flex-col justify-between gap-8">
            <Controller
              name="oldAddress"
              control={control}
              rules={{ required: "Old address is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Old Address"
                  label="Old Address"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="newAddress"
              control={control}
              rules={{ required: "New address is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="New Address"
                  label="New Address"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-lg flex gap-2 text-grayPrimary2">
            <Controller
              name="acceptDataPrivacyPolicy"
              control={control}
              rules={{ required: "Data policy is required" }}
              render={({ field }) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                <input
                  type="checkbox"
                  {...field}
                />
              )}
            />
            Accept Our Data Privacy Policy
          </label>
          {errors.acceptDataPrivacyPolicy && (
            <p className="text-red-600">{errors.acceptDataPrivacyPolicy.message}</p>
          )}
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {isSubmitted && (
        <SuccessDialog open={open} handleClose={handleDialogClose} />
      )}
    </>
  );
}

export default UpdateMyAddress;
