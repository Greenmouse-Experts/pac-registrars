// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import Input from "../Input";
import Button from "../Button";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";
import toast from "react-hot-toast";

function UpdateMySignature() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      bvn: "",
      clearingHouse: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
      bankerInfo: null,
      passport: null,
      uploadNewSignature: null,
      uploadOldSignature: null,
    },
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadNewSignature, setuploadNewSignature] = useState<File | null>(
    null
  );
  const [uploadNewSignaturePreview, setuploadNewSignaturePreview] = useState<
    string | null
  >(null);
  const [uploadOldSignature, setuploadOldSignature] = useState<File | null>(
    null
  );
  const [uploadOldSignaturePreview, setuploadOldSignaturePreview] = useState<
    string | null
  >(null);
  const [document, setDocument] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

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
      clearingHouse: "",
      serviceBriefDetails: "",
      acceptDataPrivacyPolicy: false,
      bankerInfo: null,
      passport: null,
      uploadNewSignature: null,
      uploadOldSignature: null,
    },
    url: "update/signature",
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

    if (uploadNewSignature) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setuploadNewSignaturePreview(reader.result as string);
      };
      reader.readAsDataURL(uploadNewSignature);
    } else {
      setuploadNewSignaturePreview(null);
    }

    if (uploadOldSignature) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setuploadOldSignaturePreview(reader.result as string);
      };
      reader.readAsDataURL(uploadOldSignature);
    } else {
      setuploadOldSignaturePreview(null);
    }
  }, [image, uploadNewSignature, uploadOldSignature]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (data: any) => {
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
      const base64uploadNewSignature = uploadNewSignature
        ? await fileToBase64(uploadNewSignature)
        : null;
      const base64uploadOldSignature = uploadOldSignature
        ? await fileToBase64(uploadOldSignature)
        : null;

      await submitForm({
        ...data,
        passport: base64Image,
        bankerInfo: base64Document,
        uploadNewSignature: base64uploadNewSignature,
        uploadOldSignature: base64uploadOldSignature,
        acceptDataPrivacyPolicy: data.acceptDataPrivacyPolicy && "Yes",
      });
      setIsSubmitted(true);
      setImage(null);
      setPreview(null);
      setuploadNewSignature(null);
      setuploadNewSignaturePreview(null);
      setuploadOldSignature(null);
      setuploadOldSignaturePreview(null);
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
          Signature Update
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
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="middleName"
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
              name="lastName"
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
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Clearing House (if any)"
                {...field}
              />
            )}
          />
        </div>

        <div className="flex flex-col justify-between gap-2">
          <label>Upload Banker's Information</label>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files ? e.target.files[0] : null;
              setDocument(file);
            }}
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
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      setImage(file);
                    }}
                  />
                  <p className="text-[0.85rem]">Upload Passport</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-10">
          <div className="flex flex-col w-[30%]">
            <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative">
              {uploadNewSignaturePreview ? (
                <img
                  src={uploadNewSignaturePreview}
                  className="h-full w-full object-cover object-center"
                  alt="Preview"
                />
              ) : (
                <>
                  <IoCloudUploadOutline size={30} />
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      setuploadNewSignature(file);
                    }}
                  />
                  <p className="text-[0.85rem]">Attach Your New Signature</p>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col w-[30%]">
            <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative">
              {uploadOldSignaturePreview ? (
                <img
                  src={uploadOldSignaturePreview}
                  className="h-full w-full object-cover object-center"
                  alt="Preview"
                />
              ) : (
                <>
                  <IoCloudUploadOutline size={30} />
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => {
                      const file = e.target.files ? e.target.files[0] : null;
                      setuploadOldSignature(file);
                    }}
                  />
                  <p className="text-[0.85rem]">Attach Your Old Signature</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="pt-3 flex gap-2">
          <Controller
            name="acceptDataPrivacyPolicy"
            control={control}
            rules={{
              required: "You must accept the data privacy policy",
            }}
            render={({ field }) => (
              <>
                <input type="checkbox" {...field} />
                <label className="text-sm">
                  I have read and accepted the data privacy policy
                </label>
                {errors.acceptDataPrivacyPolicy && (
                  <p className="text-red-600">
                    {errors.acceptDataPrivacyPolicy.message}
                  </p>
                )}
              </>
            )}
          />
        </div>

        <div className="mt-3">
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>

      {isSubmitted && (
        <SuccessDialog open={open} handleClose={handleDialogClose} />
      )}
    </>
  );
}

export default UpdateMySignature;
