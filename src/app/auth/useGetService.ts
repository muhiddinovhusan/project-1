import axios from "axios";
import { SetState, create } from "zustand";
import toast from "react-hot-toast";
import { produce } from "immer";
interface createService {
    name: string;
    price: number; 
}


const email = localStorage.getItem("email") || "";
const token2 = localStorage.getItem("access_token") || "";
const url = "https://app.olimjanov.uz/v1/service/get-all?page=1&limit=10&owner_email=muhiddinovhusan0207%40gmail.com";

const ServiceStore = create((set: SetState<any>) => ({
    services: [],
    getServices: async () => {
        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": token2
            };
            const res = await axios.get(url, { headers });
            const data = await res.data;
            set(
                produce((state) => {
                    state.services = data.services;
                })
            );
        } catch (error: any) {
            console.log(error.message);
        }
    },
    deleteService: async (id: string) => {
        try {
            const headers = {
                "Authorization": `${token2}`,
                "Content-Type": "application/json"
            };
            const res = await axios.post(`https://app.olimjanov.uz/v1/service?id=${id}`, {}, { headers });
            const data = await res.data;
            console.log(data);
            toast.success("Service deleted successfully");
        } catch (error: any) {
            console.log(error.message);
        }
    },
    
    addService : async (newService: createService) => {
        try {
            const headers = {
                "Authorization": token2,
                "Content-Type": "application/json"
            };
            if (typeof newService.price === "string") {
                newService.price = parseFloat(newService.price); // yoki Number(data.price) yoki +data.price ham ishlaydi
            }
            const res = await axios.post("https://app.olimjanov.uz/v1/service/create", { owner_email: email, ...newService }, { headers });
            const data = await res.data;
           
            console.log(data);
        } catch (error: any) {
            console.log(error.message);
        }
    }
    
    
}));

export const useServiceStore = ServiceStore;
