import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";
import Input from "../Input";
import Button from "../Button";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  chn: string;
  tin: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TaxIdForm({ handleCloseModal }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      chn: "",
      tin: "",
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
      lastName: "",
      email: "",
      chn: "",
      tin: "",
    },
    url: "tax-id/update",
  });

  const handleFormSubmit = async (data: IFormValues) => {
    try {
      await submitForm(data);
      setIsSubmitted(true);
      handleCloseModal();
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
            Tax ID Update Form
          </h5>
          <p className="font-semibold text-black">Shareholder's Full Name *</p>
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <div className="w-full">
              <p className="text-black text-sm font-semibold mb-2">
                First Name *
              </p>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field, fieldState }) => (
                  <Input
                    type="text"
                    label=""
                    placeholder="First Name"
                    errors={fieldState.error?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <p className="text-black text-sm font-semibold mb-2">
                Last Name *
              </p>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field, fieldState }) => (
                  <Input
                    type="text"
                    label=""
                    placeholder="Last Name"
                    errors={fieldState.error?.message}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <div className="w-full">
              <p className="text-black text-sm font-semibold mb-2">
                Email Address *
              </p>
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
                    label=""
                    placeholder="Email Address"
                    errors={fieldState.error?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <p className="text-black text-sm font-semibold mb-2">
                Clearing House Number (CHN) *
              </p>
              <Controller
                name="chn"
                control={control}
                rules={{ required: "CHN is required" }}
                render={({ field, fieldState }) => (
                  <Input
                    type="text"
                    label=""
                    placeholder="CHN"
                    errors={fieldState.error?.message}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <div className="w-full">
              <p className="text-black text-sm font-semibold mb-2">
                Tax ID Number *
              </p>
              <Controller
                name="tin"
                control={control}
                rules={{ required: "Tax ID Number is required" }}
                render={({ field, fieldState }) => (
                  <Input
                    type="text"
                    label=""
                    placeholder="Tax ID Number"
                    errors={fieldState.error?.message}
                    {...field}
                  />
                )}
              />
              <a
                href="https://taxid.nrs.gov.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline mt-1 inline-block"
              >
                Generate Tax ID
              </a>
            </div>
          </div>
          <p className="text-[0.85rem] mt-2">
            By submitting this form i agree to the Privacy policy & Terms of Use
          </p>
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
