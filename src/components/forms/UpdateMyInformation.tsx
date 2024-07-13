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
  bvn: string;
  nin: string;
  clearingHouseNumber?: string;
  gender: string;
  kinFirstName: string;
  kinLastName: string;
  kinRelationship: string;
  kinPhoneNumber: string;
  kinEmail: string;
  acceptDataPrivacyPolicy: boolean;
}

function UpdateMyInformation() {
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
      bvn: "",
      nin: "",
      clearingHouseNumber: "",
      gender: "",
      kinFirstName: "",
      kinLastName: "",
      kinRelationship: "",
      kinPhoneNumber: "",
      kinEmail: "",
      acceptDataPrivacyPolicy: false,
    },
  });

  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      bvn: "",
      nin: "",
      clearingHouseNumber: "",
      gender: "",
      kinFirstName: "",
      kinLastName: "",
      kinRelationship: "",
      kinPhoneNumber: "",
      kinEmail: "",
      acceptDataPrivacyPolicy: false,
    },
    url: "shareholder/update",
  });

  const handleFormSubmit = async (data: IFormValues) => {
    try {
      await submitForm({
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        bvn: data.bvn,
        nin: data.nin,
        clearingHouseNumber: data.clearingHouseNumber,
        gender: data.gender,
        kinFirstName: data.kinFirstName,
        kinLastName: data.kinLastName,
        kinRelationship: data.kinRelationship,
        kinPhoneNumber: data.kinPhoneNumber,
        kinEmail: data.kinEmail,
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
          Shareholder Update
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

        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Controller
            name="bvn"
            control={control}
            rules={{ required: "BVN is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="BVN"
                label="BVN"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>
        
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Controller
            name="nin"
            control={control}
            rules={{ required: "NIN is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="NIN"
                label="NIN"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="clearingHouseNumber"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Clearing House Number(CHN)(optional)"
                label="Clearing House Number(CHN)(optional)"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Gender"
                label="Gender"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div>
          <label>Next of Kin Name</label>
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="kinFirstName"
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
              name="kinLastName"
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
            name="kinRelationship"
            control={control}
            rules={{ required: "Relationship with next of kin is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Relationship with Next of kin"
                label="Relationship with Next of kin"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="kinPhoneNumber"
            control={control}
            rules={{ required: "Next of kin phone number is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Next of kin Phone"
                label="Next of kin Phone"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Controller
            name="kinEmail"
            control={control}
            rules={{
              required: "Next of kin email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Next of kin Email"
                label="Next of kin Email"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="text-lg flex gap-2 text-grayPrimary2">
            <Controller
              name="acceptDataPrivacyPolicy"
              control={control}
              rules={{ required: "Data policy acceptance is required" }}
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

export default UpdateMyInformation;
