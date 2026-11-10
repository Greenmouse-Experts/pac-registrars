import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";

function SecretarialForm() {
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
      nameFirm: "",
      needCompanySecretarialService: false,
      addressFirm: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
    },
  });

  console.log(errors)

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
      nameFirm: "",
      needCompanySecretarialService: false,
      addressFirm: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
    },
    url: "company/secretarial/service",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (data:any) => {

    try {
      await submitForm({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        whatsappNumber: data.whatsappNumber,
        nameFirm: data.nameFirm,
        needCompanySecretarialService:
          data.needCompanySecretarialService && "Yes",
        addressFirm: data.addressFirm,
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
        className="flex flex-col gap-5 w-full bg-white p-10 form-shadow text-[#787878]"
      >
        <h5 className="font-montserrat text-[1.4rem] font-semibold text-black">
          Company Secretarial Service
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

        <div className="justify-between gap-8 w-full">
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
        </div>

        <div>
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

        <div>
          <Controller
            name="nameFirm"
            control={control}
            rules={{ required: "Firm name is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Name of Firm"
                label="Name of Firm"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className="flex items-center gap-4">
          <div>
            <p className="text-grayPrimary2">
              Need company secretarial service?
            </p>
          </div>
          <label className="text-lg flex gap-2 text-grayPrimary2">
            <input
              type="radio"
              {...register("needCompanySecretarialService", { required: "Field is required" })}
              value="Yes"
            />
            Yes
          </label>
          <label className="text-lg flex gap-2 text-grayPrimary2">
            <input
              type="radio"
              {...register("needCompanySecretarialService", { required: "Field is required" })}
              value="No"
            />
            No
          </label>
          {errors.needCompanySecretarialService && (
            <p className="text-red-600">{errors.needCompanySecretarialService.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="addressFirm"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Address of Firm"
                label="Address of Firm"
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <div className="flex items-start gap-10">
          <Controller
            name="serviceBriefDetails"
            control={control}
            rules={{ required: "Service details are required" }}
            render={({ field }) => (
              <div className="flex flex-col w-full">
                <textarea
                  {...field}
                  placeholder="Brief details of the service you want from us"
                  className="bg-[#F4F4F4] placeholder:text-[text-grayPrimary2] h-[7.5rem] pl-5 pt-4 w-full"
                />
                {errors.serviceBriefDetails && (
                  <p className="text-red-600">{errors.serviceBriefDetails.message}</p>
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

export default SecretarialForm;
