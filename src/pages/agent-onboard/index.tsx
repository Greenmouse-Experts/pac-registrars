import { useForm, Controller } from "react-hook-form";
import {
  Input,
  Button,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

export default function AgentOnboard() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const idCardFile = watch("idCard");
  const passportPhotoFile = watch("passportPhoto");

  return (
    <div className="container mx-auto p-4 py-12">
      <Typography
        variant="h4"
        color="blue-gray"
        className="mb-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Agent Onboarding Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        {/* Personal Information */}
        <div>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Personal Information
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "First name is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="First name"
                    size="lg"
                    error={!!errors.firstName}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.firstName && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.firstName.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="middleName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Middle name"
                  size="lg"
                  crossOrigin=""
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              )}
            />

            <Controller
              name="surname"
              control={control}
              rules={{ required: "Surname is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Surname"
                    size="lg"
                    error={!!errors.surname}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.surname && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.surname.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Phone number"
                    size="lg"
                    type="tel"
                    error={!!errors.phoneNumber}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.phoneNumber && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.phoneNumber.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="whatsappNumber"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Whatsapp number"
                  size="lg"
                  type="tel"
                  crossOrigin=""
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              )}
            />

            <Controller
              name="emailAddress"
              control={control}
              rules={{
                required: "Email address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Email address"
                    size="lg"
                    type="email"
                    error={!!errors.emailAddress}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.emailAddress && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.emailAddress.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="occupation"
              control={control}
              rules={{ required: "Occupation is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Occupation"
                    size="lg"
                    error={!!errors.occupation}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.occupation && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.occupation.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="maritalStatus"
              control={control}
              rules={{ required: "Marital status is required" }}
              render={({ field }) => (
                <div>
                  <Select
                    {...field}
                    label="Marital status"
                    size="lg"
                    error={!!errors.maritalStatus}
                    onChange={(value) => field.onChange(value)}
                    selected={(value) =>
                      value ? (
                        <Typography
                          color="blue-gray"
                          className="font-normal"
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}
                        >
                          {value}
                        </Typography>
                      ) : null
                    }
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <Option value="Single">Single</Option>
                    <Option value="Married">Married</Option>
                    <Option value="Divorced">Divorced</Option>
                    <Option value="Widowed">Widowed</Option>
                  </Select>
                  {errors.maritalStatus && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.maritalStatus.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        {/* Location Information */}
        <div>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Location Information
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Controller
              name="addressOfResidence"
              control={control}
              rules={{ required: "Address of residence is required" }}
              render={({ field }) => (
                <div className="md:col-span-full">
                  <Textarea
                    {...field}
                    label="Address of residence"
                    size="lg"
                    error={!!errors.addressOfResidence}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.addressOfResidence && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.addressOfResidence.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="stateOfResidence"
              control={control}
              rules={{ required: "State of Residence is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="State of Residence"
                    size="lg"
                    error={!!errors.stateOfResidence}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.stateOfResidence && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.stateOfResidence.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="stateOfOrigin"
              control={control}
              rules={{ required: "State of origin is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="State of origin"
                    size="lg"
                    error={!!errors.stateOfOrigin}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.stateOfOrigin && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.stateOfOrigin.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="localGovernment"
              control={control}
              rules={{ required: "Local Government is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Local Government"
                    size="lg"
                    error={!!errors.localGovernment}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.localGovernment && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.localGovernment.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        {/* KYC Information */}
        <div>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            KYC Information
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Controller
              name="nin"
              control={control}
              rules={{ required: "NIN is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="NIN"
                    size="lg"
                    error={!!errors.nin}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.nin && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.nin.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="nextOfKinName"
              control={control}
              rules={{ required: "Next of kin name is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Next of kin name"
                    size="lg"
                    error={!!errors.nextOfKinName}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.nextOfKinName && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.nextOfKinName.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />

            <Controller
              name="nextOfKinPhoneNumber"
              control={control}
              rules={{ required: "Next of kin phone number is required" }}
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    label="Next of kin phone number"
                    size="lg"
                    type="tel"
                    error={!!errors.nextOfKinPhoneNumber}
                    crossOrigin=""
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                  {errors.nextOfKinPhoneNumber && (
                    <Typography
                      color="red"
                      className="text-sm mt-1"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {errors.nextOfKinPhoneNumber.message as React.ReactNode}
                    </Typography>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        {/* Document Uploads */}
        <div>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Upload Documents
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="idCard"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ID Card
              </label>
              <Button
                variant="outlined"
                htmlFor="idCard"
                className="flex items-center gap-2 w-full justify-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <CloudUploadIcon />
                Upload ID Card
                <input
                  type="file"
                  id="idCard"
                  {...register("idCard", { required: "ID card is required" })}
                  className="sr-only"
                />
              </Button>
              {errors.idCard && (
                <Typography
                  color="red"
                  className="text-sm mt-1"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {errors.idCard.message as React.ReactNode}
                </Typography>
              )}
              {idCardFile && idCardFile.length > 0 && (
                <Typography
                  variant="small"
                  className="mt-2 text-gray-600"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Selected: {idCardFile[0].name}
                </Typography>
              )}
            </div>

            <div>
              <label
                htmlFor="passportPhoto"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Passport Photography
              </label>
              <Button
                variant="outlined"
                htmlFor="passportPhoto"
                className="flex items-center gap-2 w-full justify-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <CloudUploadIcon />
                Upload Passport Photo
                <input
                  type="file"
                  id="passportPhoto"
                  {...register("passportPhoto", {
                    required: "Passport photo is required",
                  })}
                  className="sr-only"
                />
              </Button>
              {errors.passportPhoto && (
                <Typography
                  color="red"
                  className="text-sm mt-1"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {errors.passportPhoto.message as React.ReactNode}
                </Typography>
              )}
              {passportPhotoFile && passportPhotoFile.length > 0 && (
                <Typography
                  variant="small"
                  className="mt-2 text-gray-600"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Selected: {passportPhotoFile[0].name}
                </Typography>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            type="submit"
            className="w-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
}
