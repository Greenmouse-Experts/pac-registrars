import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessDialog from "../modals/SuccessDialogue";
import useSubmitForm from "../../hooks/useSubmitForm";
import Input from "../Input";
import Button from "../Button";
import { IoCloudUploadOutline } from "react-icons/io5";
import toast from "react-hot-toast";

interface IFormValues {
  firstName: string;
  middleName: string;
  surname: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  nin: string;
  addressOfResidence: string;
  stateOfResidence: string;
  occupation: string;
  maritalStatus: string;
  nextOfKinName: string;
  nextOfKinPhoneNumber: string;
  stateOfOrigin: string;
  localGovernment: string;
  idCard: File | null;
  passportPhotography: File | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AgentOnboardForm({ handleCloseModal }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: "",
      middleName: "",
      surname: "",
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      nin: "",
      addressOfResidence: "",
      stateOfResidence: "",
      occupation: "",
      maritalStatus: "",
      nextOfKinName: "",
      nextOfKinPhoneNumber: "",
      stateOfOrigin: "",
      localGovernment: "",
      idCard: null,
      passportPhotography: null,
    },
  });

  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [passportPreview, setPassportPreview] = useState<string | null>(null);

  const handleDialogClose = () => setOpen(false);

  const { submitForm, loading } = useSubmitForm({
    reset,
    setOpen,
    initialValues: {
      firstName: "",
      middleName: "",
      surname: "",
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      nin: "",
      addressOfResidence: "",
      stateOfResidence: "",
      occupation: "",
      maritalStatus: "",
      nextOfKinName: "",
      nextOfKinPhoneNumber: "",
      stateOfOrigin: "",
      localGovernment: "",
      idCard: null,
      passportPhotography: null,
    },
    url: "agent/onboard", // Assuming an endpoint for agent onboarding
  });

  useEffect(() => {
    if (idCardFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdCardPreview(reader.result as string);
      };
      reader.readAsDataURL(idCardFile);
    } else {
      setIdCardPreview(null);
    }

    if (passportFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassportPreview(reader.result as string);
      };
      reader.readAsDataURL(passportFile);
    } else {
      setPassportPreview(null);
    }
  }, [idCardFile, passportFile]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFormSubmit = async (data: IFormValues) => {
    if (!idCardFile) {
      toast.error("ID Card is required.");
      return;
    }
    if (!passportFile) {
      toast.error("Passport Photography is required.");
      return;
    }

    try {
      const base64IdCard = await fileToBase64(idCardFile);
      const base64Passport = await fileToBase64(passportFile);

      await submitForm({
        ...data,
        idCard: base64IdCard,
        passportPhotography: base64Passport,
      });
      setIsSubmitted(true);
      handleCloseModal();
      setIdCardFile(null);
      setIdCardPreview(null);
      setPassportFile(null);
      setPassportPreview(null);
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
            Agent Onboarding
          </h5>

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
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="surname"
              control={control}
              rules={{ required: "Surname is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Surname"
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
                  type="text"
                  placeholder="Phone Number"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="whatsappNumber"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Whatsapp Number (optional)"
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
                  placeholder="Email Address"
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
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="addressOfResidence"
              control={control}
              rules={{ required: "Address of residence is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Address of Residence"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="stateOfResidence"
              control={control}
              rules={{ required: "State of Residence is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="State of Residence"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="occupation"
              control={control}
              rules={{ required: "Occupation is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Occupation"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="maritalStatus"
              control={control}
              rules={{ required: "Marital status is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  id="maritalStatus"
                  className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] h-[50px] pl-5 w-full"
                >
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              )}
            />
            {errors.maritalStatus && (
              <p className="text-red-600">{errors.maritalStatus.message}</p>
            )}
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="nextOfKinName"
              control={control}
              rules={{ required: "Next of kin name is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Next of Kin Name"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="nextOfKinPhoneNumber"
              control={control}
              rules={{ required: "Next of kin phone number is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Next of Kin Phone Number"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Controller
              name="stateOfOrigin"
              control={control}
              rules={{ required: "State of origin is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="State of Origin"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="localGovernment"
              control={control}
              rules={{ required: "Local Government is required" }}
              render={({ field, fieldState }) => (
                <Input
                  type="text"
                  placeholder="Local Government"
                  errors={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="idCard">ID Card</label>
              <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative ">
                {idCardPreview ? (
                  <img
                    src={idCardPreview}
                    className="h-full w-full object-cover object-center"
                    alt="ID Card Preview"
                  />
                ) : (
                  <>
                    <IoCloudUploadOutline size={30} />
                    <input
                      type="file"
                      id="idCard"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        setIdCardFile(file);
                      }}
                    />
                    <p className="text-[0.85rem]">Upload ID Card</p>
                  </>
                )}
              </div>
              {errors.idCard && (
                <p className="text-red-600">{errors.idCard.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="passportPhotography">Passport Photography</label>
              <div className="bg-[#F4F4F4] flex flex-col justify-center items-center h-[7.5rem] relative ">
                {passportPreview ? (
                  <img
                    src={passportPreview}
                    className="h-full w-full object-cover object-center"
                    alt="Passport Preview"
                  />
                ) : (
                  <>
                    <IoCloudUploadOutline size={30} />
                    <input
                      type="file"
                      id="passportPhotography"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        setPassportFile(file);
                      }}
                    />
                    <p className="text-[0.85rem]">
                      Upload Passport Photography
                    </p>
                  </>
                )}
              </div>
              {errors.passportPhotography && (
                <p className="text-red-600">
                  {errors.passportPhotography.message}
                </p>
              )}
            </div>
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
