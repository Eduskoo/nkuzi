import { TFormData } from "@/components/form-section/waitlist-form/schema";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

export type TWaitlistFormPayload = {
  form: Omit<TFormData, "tandc">;
};

type TWaitlistApiResponse = {
  data: {
    form: {};
    ip_address: string;
  };
};

const createWaitlist = async (
  formData: TWaitlistFormPayload
): Promise<TWaitlistApiResponse> => {
  const response = await axios.post(
    "https://api.edusko.com/api/v1/bournvita",
    formData
  );
  return response.data;
};

const useCreateWaitlist = () => {
  return useMutation({
    mutationFn: createWaitlist,
    onError: (error: AxiosError<{ status: string; message: string }>) => {
      toast.error(error.response?.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    onSuccess: () => {
      toast.success("Application saved successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
};

export { useCreateWaitlist };
