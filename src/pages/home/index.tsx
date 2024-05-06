import  { useEffect, useState } from "react";
import { useServiceStore } from "../../app/auth/useGetService";
import Loading from '../../components/loading/Loader';

interface ServicesType {
  id: string;
  name: string;
 
}


const Home = () => {
  const { getServices , deleteService } = useServiceStore();
  const [loading, setLoading]= useState(false);
  const services = useServiceStore(state => state.services);



  useEffect(() => {
      getServices()
  }, []);
  console.log(services);

  const handleDelete = async (id: string) => {
    setLoading(true);
    await deleteService(id);
    getServices(); 
    setLoading(false);
  };
  return (
   
    <div className="  w-full h-full relative text-black">
      {services.length > 0 &&
        services.map((item :ServicesType) => (
          <div key={item.id}>
            <h2 className="text-black">{item.name}</h2>
            <p>{item.id}</p> 
            <button onClick={()=> handleDelete(item.id)}> delete</button>
          </div>
        ))}
        {
          loading ? <Loading/> : ''
        }
    </div>
  );
};

export default Home;
