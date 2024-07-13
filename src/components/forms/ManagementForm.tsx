import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import Input from "../Input";
import Button from "../Button";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";
import toast from "react-hot-toast";

function ManagementForm() {
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
      addressOrganization: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
      passport: null, // Initialize passport field as null
    },
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
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
      addressOrganization: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
      passport: null, // Initialize passport field as null
    },
    url: "document/management/system",
  });

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (data:any) => {
    if (!image) {
      console.error("Passport is required.");
      toast.error("Passport is required")
      return;
    }

    try {
      const base64Image = await imageToBase64(image);
      await submitForm({
        name: data.name,
        email: data.email,
        passport: base64Image,
        phoneNumber: data.phoneNumber,
        whatsappNumber: data.whatsappNumber,
        nameOrganization: data.nameOrganization,
        addressOrganization: data.addressOrganization,
        serviceBriefDetails: data.serviceBriefDetails,
        acceptDataPrivacyPolicy: data.acceptDataPrivacyPolicy && "Yes",
      });
      setIsSubmitted(true);
      setImage(null)
      setPreview(null)
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const imageToBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-5 w-full bg-white p-10 form-shadow text-[#787878]"
      >
        <h5 className="font-montserrat text-[1.4rem] font-semibold text-black">
          Document Management Service
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
        </div>

        <div>
          <Controller
            name="addressOrganization"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Address of Organization"
                label="Address of Organization"
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

          <div className="w-[30%]">
            <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative ">
              {preview ? (
                <img
                  src={preview}
                  className="h-full w-full object-cover object-center"
                  alt="Preview"
                />
              ) : (
                <>
                  <IoCloudUploadOutline size={30} />
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e?.target?.files ? e.target.files[0] : null;
                      setImage(file);
                    }}
                    className="absolute w-full opacity-0"
                  />
                </>
              )}
            </div>
            <p className="text-sm mt-2">Attach a Passport</p>
          </div>
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

export default ManagementForm;
