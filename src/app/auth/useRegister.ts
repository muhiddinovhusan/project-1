import axios from "axios";
import { produce } from "immer";
import { toast } from "react-hot-toast";
import { create } from "zustand";


interface RegisterState {
  email: string;
  full_name: string;
  password: string;
  phone_number: string;
message: string;
}


interface RegisterActions {
  Register: (user: { email: string; full_name:string, password: string ,phone_number:string }) => Promise<void>;
}

const RegisterStore = (set:(produce:(state:RegisterState)=> RegisterState)=>void)=>({
  
    email: "",
    full_name: "",
    password: "",
    phone_number: "",
    message : "",
    success : false , 
    Register : async(user: {email:string, password:string, phone_number:string, full_name:string})=>{
        try {
            const res = await axios.post(
              "https://app.olimjanov.uz/v1/auth/register",
              user
            );
            const data = await res.data;
            console.log(data);
            set(
              produce((state :RegisterState) => {
                state.password = data.password;
                state.email = data.email;
                state.phone_number = data.phone_number;
                state.full_name = data.full_name;
                state.message = data.message;
                toast.success("Successfully Registered ! you are need to input verification code ");
              })
            );
          } catch (error:any) {
            console.log(error.message);
            toast.error(error.message);
          }
    }
  }
)

export const useRegisterStore = create<RegisterState & RegisterActions>(RegisterStore)