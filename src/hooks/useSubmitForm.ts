/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface SubmitFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reset: (values?: any) => void;
  setOpen: (open: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues: any;
  url: string;
}



const useSubmitForm = ({ reset, setOpen, initialValues, url }: SubmitFormProps) => {
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://pacregistrars.victornwadinobi.com/api";
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitForm = async (data:any) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/${url}`, data);
      toast.success(response.data.message);
      reset(initialValues);
      setOpen(true);
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error("Error submitting form:", error);
      toast.error(error? `${error?.response?.data?.message}` : "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading };
};

export default useSubmitForm;
