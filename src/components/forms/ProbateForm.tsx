import  {  useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";

interface ITitle {
  title?: string;
  url:string;
}

function ProbateForm({ title, url }: ITitle) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      whatsappNumber: "",
      nameOrganization: "",
      placeDeath: "",
      preferredTime: "",
      serviceBriefDetails: "",
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
      name: "",
      email: "",
      phoneNumber: "",
      whatsappNumber: "",
      nameOrganization: "",
      placeDeath: "",
      preferredTime: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
    },
    url:url
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (data:any) => {
    try {
      await submitForm({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        whatsappNumber: data.whatsappNumber,
        nameOrganization: data.nameOrganization,
        placeDeath: data.placeDeath,
        preferredTime: data.preferredTime,
        serviceBriefDetails: data.serviceBriefDetails,
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
          {title}
        </h5>

        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Name"
                label="Name"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
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
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="tel"
                placeholder="Phone Number"
                label="Phone Number"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="whatsappNumber"
            control={control}
            rules={{ required: "WhatsApp number is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="tel"
                placeholder="WhatsApp Number"
                label="WhatsApp Number"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <Controller
          name="nameOrganization"
          control={control}
          rules={{ required: "Organization name is required" }}
          render={({ field, fieldState }) => (
            <Input
              type="text"
              placeholder="Name of Organization"
              label="Name of Organization"
              errors={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="placeDeath"
          control={control}
          rules={{ required: "Place of death is required" }}
          render={({ field, fieldState }) => (
            <Input
              type="text"
              placeholder="Place of death"
              label="Place of death"
              errors={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="preferredTime"
          control={control}
          rules={{ required: "Preferred time is required" }}
          render={({ field, fieldState }) => (
            <Input
              type="text"
              placeholder="Do you have a preferred time for us to call you?"
              label="Preferred time"
              errors={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <div className="flex items-start gap-10">
          <Controller
            name="serviceBriefDetails"
            control={control}
            rules={{ required: "Service details are required" }}
            render={({ field, fieldState }) => (
              <div className="flex flex-col w-full">
                <textarea
                  {...field}
                  placeholder="Brief details of the service you want from us"
                  className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
                />
                {fieldState.error?.message && (
                  <p className="text-red-600">{fieldState.error.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex items-center gap-4">
          <label className="text-lg flex gap-2 text-grayPrimary2">
            <input
              type="checkbox"
              {...register("acceptDataPrivacyPolicy", { required: "Data policy is required" })}
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

export default ProbateForm;
