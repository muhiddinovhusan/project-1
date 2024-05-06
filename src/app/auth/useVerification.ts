import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";
import toast from "react-hot-toast";

interface VerificationState {
  email : string;
  code: string;
}

interface VerifyActions {
  Verify: (user: { code: string; email: string }) => Promise<void>;
}
const VerificationStore = (set: (fn: (state: VerificationState) => VerificationState) => void) => ({
  email: "",
  code: "",
  Verify: async (user: { email: string; code: string }) => {
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/verify",
        user
      );
      const data = await res.data;
      console.log(data);
      toast.success("You have successfully registered")

      localStorage.setItem("access_token", data.access_token);
      set(
        produce((state: VerificationState) => {
          state.code = data.code;
          state.email = data.email;
          return state; 
      
        })
      );
    } catch (error :any) {
      console.log(error.message);
      toast.error(error.message)
    }
  },
});

export const useVerificationStore = create<VerificationState & VerifyActions>(VerificationStore);
