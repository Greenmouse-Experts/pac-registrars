import  { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import Input from "../Input";
import Button from "../Button";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";
import toast from "react-hot-toast";

function UpdateMyName() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    defaultValues: {
      oldFirstName: "",
      oldMiddleName: "",
      oldLastName: "",
      newFirstName: "",
      newMiddleName: "",
      newLastName: "",
      email: "",
      phoneNumber: "",
      bvn: "",
      clearingHouse: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
      updateDocument: null,
      passport: null,
    },
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [document, setDocument] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission success
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => setOpen(false);

  const { submitForm, loading } = useSubmitForm({
    reset,
    setOpen,
    initialValues: {
      oldFirstName: "",
      oldMiddleName: "",
      oldLastName: "",
      newFirstName: "",
      newMiddleName: "",
      newLastName: "",
      email: "",
      phoneNumber: "",
      bvn: "",
      clearingHouse: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
      updateDocument: null,
      passport: null,
    },
    url: "update/my/name",
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
      toast.error("Passport is required");
      return;
    }

    if (!document) {
      console.error("Document is required.");
      toast.error("Document is required");
      return;
    }

    try {
      const base64Image = await fileToBase64(image);
      const base64Document = await fileToBase64(document);

      await submitForm({
        ...data,
        passport: base64Image,
        updateDocument: base64Document,
        acceptDataPrivacyPolicy: data.acceptDataPrivacyPolicy && "Yes",
      });
      setIsSubmitted(true);
      setImage(null);
      setPreview(null);
      setDocument(null);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
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
          Name Change Details
        </h5>

        <div>
          <label>Shareholder’s Old Name</label>
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="oldFirstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="First Name"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="oldMiddleName"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Middle Name (optional)"
                  {...field}
                />
              )}
            />
            <Controller
              name="oldLastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Last Name"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>
        </div>

        <div>
          <label>Shareholder’s New Name</label>
          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="newFirstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="First Name"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="newMiddleName"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Middle Name (optional)"
                  {...field}
                />
              )}
            />
            <Controller
              name="newLastName"
              control={control}
              rules={{ required: "Last name is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Last Name"
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
                errors={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="clearingHouse"
            control={control}
            rules={{ required: "Clearing House is required" }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                placeholder="Clearing House (if any)"
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
                  <p className="text-red-600">
                    {errors.serviceBriefDetails.message}
                  </p>
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

        <div className="flex flex-col justify-between gap-2">
          <label>Upload document</label>
          <input
            type="file"
            className="border-0"
            onChange={(e) => {
              const file = e.target.files ? e.target.files[0] : null;
              setDocument(file);
            }}
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            {...register("acceptDataPrivacyPolicy", {
              required: "You must accept the data privacy policy",
            })}
            type="checkbox"
            className="form-checkbox border-2 text-[#6D7392]"
          />
          <label className="text-sm">Accept Data Privacy Policy</label>
        </div>
        {errors.acceptDataPrivacyPolicy && (
          <p className="text-red-600">
            {errors.acceptDataPrivacyPolicy.message}
          </p>
        )}

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

export default UpdateMyName;
