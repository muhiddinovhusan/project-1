import { useEffect, useState } from "react";
import { useServiceStore } from "../../app/auth/useGetService";
import Loading from '../../components/loading/Loader';
import toast from "react-hot-toast";

interface ServicesType {
  id: string;
  name: string;
  price: number
}


const Users = () => {
  const { getServices, deleteService } = useServiceStore();
  const [loading, setLoading] = useState(false);
  const services = useServiceStore(state => state.services);



  useEffect(() => {
    getServices()
  }, []);
  console.log(services);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this service?");
    if (confirmed) {
        setLoading(true);
        await deleteService(id);
        getServices();
        setLoading(false);
    }else{
      toast.error('Delete operation cancelled')
    }
  };
  return (

    // <div className="  w-full h-full relative text-black">
    //   {services.length > 0 &&
    //     services.map((item :ServicesType) => (
    //       <div key={item.id}>
    //         <h2 className="text-black">{item.name}</h2>
    //         <p>{item.id}</p> 
    //         <button onClick={()=> handleDelete(item.id)}> delete</button>
    //       </div>
    //     ))}
    //    
    // </div>
    <div className="p-5 w-full  h-full relative bg-gray-100">
       {
          loading ? <Loading/> : ''
        }
      <h1 className="tex-xl mb-2">Orders</h1>
      <div className="overflow-auto rounded-lg shadow hidden md:block ">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200 ">
            <tr>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">№</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
              <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 ">
            {services.length > 0 &&
              services.map((item: ServicesType, i: number) => (
                <tr className="bg-white" key={item.id}>

                  <td className="whitespace-nowrap  p-3 text-sm text-gray-700">{i + 1}</td>
                  <td className="whitespace-nowrap  p-3 bg-gray-200 text-sm text-gray-700">{item.name}</td>
                  <td className="whitespace-nowrap  p-3 text-sm text-gray-700">{item.price}</td>
                  <td className="bg-gray-200">
                    <button onClick={() => handleDelete(item.id)}> delete</button>

                  </td>
                </tr>
              ))}

          </tbody>
        </table>

      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 md:hidden ">
        {services.map((item: ServicesType, i: number) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <div className=" flex gap-2 ">
              <h6 className="text-sm font-bold">
                #
              </h6>
              <h6 className="text-sm">
                price
              </h6>
              <h6 className="text-sm">
                Name    
               </h6>
              <h6 className="text-sm ">
                Actions
              </h6>
            </div>

            <div className="flex items-center space-x-2 text-sm gap-3">
              <div>

                <div className="text-blue-500 font-bold hover:underline">
                  {i + 1}
                </div>
                <div>

                </div>
              </div>
              <div className="text-gray-500">
                {item.price}
              </div>
              <div>{item.name}</div>
              <div>
                <button onClick={() => handleDelete(item.id)}> delete</button>

              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
