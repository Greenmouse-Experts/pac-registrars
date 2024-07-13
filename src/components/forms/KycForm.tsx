import  { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";
import Input from "../Input";
import Button from "../Button";

interface IFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  nameOrganization: string;
  kycService: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function KycForm({handleCloseModal}:any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
   
  } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      nameOrganization: "",
      kycService: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDialogClose = () => setOpen(false);

  const { submitForm, loading } = useSubmitForm({
    reset,
    setOpen,
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      nameOrganization: "",
      kycService: "",
    },
    url: "kyc/service",
  });

  const handleFormSubmit = async (data: IFormValues) => {
    try {
      await submitForm({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        nameOrganization: data.nameOrganization,
        kycService: data.kycService,
      });
      setIsSubmitted(true);
      handleCloseModal()
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
        <>
          <h5 className="font-montserrat text-[1.4rem] font-semibold text-black">
            KYC Service
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
                  type="text"
                  placeholder="Telephone"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <Controller
              name="nameOrganization"
              control={control}
              rules={{ required: "Name of organization is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Name of Organization"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex flex-col justify-between mt-3">
            <label htmlFor="kycService">KYC services</label>
            <Controller
              name="kycService"
              control={control}
              rules={{ required: "KYC service description is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  id="kycService"
                  className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
                >
                  <option value="">Select KYC Service</option>
                  <option value="Customer Due Diligence">Customer Due Diligence</option>
                  <option value="Address Verification">Address Verification</option>
                  <option value="Identity Verification">Identity Verification</option>
                  <option value="Document/Certificate Verification">Document/Certificate Verification</option>
                  <option value="Background Check">Background Check</option>
                </select>
              )}
            />
            {errors.kycService && (
              <p className="text-red-600">{errors.kycService.message}</p>
            )}
          </div>
        </>

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

export default KycForm;
