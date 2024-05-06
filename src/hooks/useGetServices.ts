import axios from "axios";
import { useEffect, useState } from "react";

type ServiceData = {
  id: number;
  name: string;
};



const useGetServices = () => {
  const [data, setData] = useState<ServiceData[]>([]);
 
  const deleteService = async (serviceId: number) => {
    try {
      await axios.delete(`https://app.olimjanov.uz/v1/service/delete/${serviceId}`, {
        headers: {
          Authorization: localStorage.getItem("access_token") || ""
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { data, deleteService };
};

export default useGetServices;
