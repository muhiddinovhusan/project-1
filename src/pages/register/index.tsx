import { Link, useNavigate } from "react-router-dom";
import photo from '../../assets/images/photo.svg'

import { useRegisterStore } from "../../app/auth/useRegister";
import { useState } from "react";
import Loading from '../../components/loading/Loader';


const Register = () => {
  const { Register, message } = useRegisterStore();
  const [loading, setLoading]= useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    full_name: "",
    phone_number: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    

    });
  };
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(data.email);
localStorage.setItem('email', data.email);
  await  Register(data);
  setLoading(false);
  
  };
  if (message === "Verification code has been sent!") {
    navigate("/verify")
  }
  return (
<div className="relative">
  {
    loading? <Loading/> :""
  }
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
            <span className="mb-2 text-md ">Full Name</span>
            <input type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="full_name"
              id="full_name"
              required
              value={data.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md ">Email</span>
            <input type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              required
              id="email"
              value={data.email}
              onChange={handleChange}
            />

          </div>
          <div className="py-4">
            <span className="mb-2 text-md ">Phone number</span>
            <input type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="phone_number"
              id="phone_number"
              required
              value={data.phone_number}
              onChange={handleChange}
            />

          </div>
          <div className="py-4">
            <span className="mb-2 text-md ">Password</span>
            <input type="password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="password"
              required
              id="password"
              value={data.password}
              onChange={handleChange}
            />

          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-4">
              <input type="checkbox" className="mr-2"
                required />
              <span className="text-md"> Remember for 30days</span>
            </div>
            <span className="font-bold text-md ">Forgot password</span>
          </div>

          <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border-gray-900 ">Sign in</button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white ">
            <img className="w-10 h-10 inline mr-2" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />Sign in With Google
          </button >
          <Link to="/login" className="text-center text-gray-400 ">
            You have already account ? <span className="font-bold text-black"> Sign IN</span>
          </Link>
        </div>
        <div className="relative">
          <img src={photo} alt="" className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover " />
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block ">
            <span className="text-black text-xl">

              We have been using Untitle to kick <br /> start every new project  and can't <br /> imagine working without in
            </span>

          </div>

        </div>
      </div>


    </form>
    </div>

  );
};

export default Register;
