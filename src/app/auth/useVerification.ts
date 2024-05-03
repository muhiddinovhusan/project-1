import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";

const VerificationStore = (set: (produce: () => void) => void) => ({
  email: "",
  fullName: "",
  phoneNumber: "",
  code: "",
  login: async (user: { email: string; code: string }) => {
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/verify",
        user
      );
      const data = await res.data;
      console.log(data);
      set(
        produce((state) => {
          state.code = data.code;
          state.email = data.email;
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  },
});

export const useVerificationStore = create(VerificationStore);
