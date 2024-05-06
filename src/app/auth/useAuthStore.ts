import { create } from "zustand";
import { produce } from "immer";
import axios from "axios";
import toast from "react-hot-toast";

interface AuthState {
  email: string;
  password: string;
}

interface AuthActions {
  login: (user: { email: string; password: string }) => Promise<void>;
}

const AuthStore = (set: (fn: (state: AuthState) => AuthState) => void) => ({
  email: "",
  password: "",
  login: async (user: { email: string; password: string }) => {
    try {
      const res = await axios.post(
        "https://app.olimjanov.uz/v1/auth/login",
        user
      );
      const data = await res.data;
      localStorage.setItem('access_token', data.access_token);

      console.log(data);
      set(
        produce((state: AuthState) => {
          state.email = data.email;
          state.password = data.password;
        })
      );
      toast.success("Login successful")

    } catch (error :any)  {
toast.error("Make sure you are registered or enter the correct information")
console.error(error.message);
    }
  },
});

export const useAuthStore = create<AuthState & AuthActions>(AuthStore);
