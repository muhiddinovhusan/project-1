
import { useState } from "react";
import photo from '../../assets/images/photo.svg'
import { useVerificationStore } from "../../app/auth/useVerification";

const Verify = () => {
  const { Verify } = useVerificationStore();
  const [data, setData] = useState({
    code: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      email:email,
      [e.target.id]: e.target.value,
      // code: e.target.value,
    });
  };

  const email = localStorage.getItem("email") || "";
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Verify(data );

  };

  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100"
    onSubmit={handleSubmit}>
      <div className="relative flex flex-col m-6 space-y-8 shadow-lh bg-white rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14 ">
          <span className="mb-3 text-4xl font-bold">
            Welcome back
          </span>
          <span className="font-light text-gray-400 mb-8 ">
            Welcome back please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md ">Code</span>
            <input type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="code"
              id="code"
              value={data.code}
              onChange={handleChange}
            />
          </div>
      
          <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border-gray-900 ">Sign in</button>
         
        
        </div>
        <div className="relative">
          <img src={photo} alt=""  className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover "/>
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block ">
            <span className="text-black text-xl">

              We have been using Untitle to kick <br /> start every new project  and can't <br /> imagine working without in
            </span>

          </div>
          
        </div>
      </div>


    </form>
  );
};

export default Verify;
