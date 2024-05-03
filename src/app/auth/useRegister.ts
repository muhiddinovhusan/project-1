import axios from "axios";
import { produce } from "immer";
import { create } from "zustand";

const RegisterStore = (set:(produce:()=> void)=>void)=>({
    email: "",
    full_name: "",
    password: "",
    phone_number: "",
    Register : async(user: {email:string, password:string, phone_number:string, full_name:string})=>{
        try {
            const res = await axios.post(
              "https://app.olimjanov.uz/v1/auth/register",
              user
            );
            const data = await res.data;
            console.log(data);
            set(
              produce((state) => {
                state.password = data.password;
                state.email = data.email;
                state.phone_number = data.phone_number;
                state.full_name = data.full_name;
                
              })
            );
          } catch (error) {
            console.log(error.message);
          }
    }
  }
)

export const useRegisterStore = create(RegisterStore)