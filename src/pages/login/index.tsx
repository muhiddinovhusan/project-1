
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAuthStore } from "../../app/auth/useAuthStore";
import photo from '../../assets/images/photo.svg';
import Loading from '../../components/loading/Loader' 

const Login = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate()
  const [loading, setLoading ]=useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setLoading(true)
    localStorage.setItem('email', data.email);

   await login(data);
    setLoading(false)
  };

  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  console.log(token)

  return (
    <div className="relative">
    {loading ? <Loading/> : ''}
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
            <span className="mb-2 text-md ">Email</span>
            <input type="text"
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md ">Password</span>
            <input type="text"
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />

          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-md"> Remember for 30days</span>
            </div>
            <span className="font-bold text-md ">Forgot password</span>
          </div>

          <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border-gray-900 ">Sign in</button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white ">
            <img className="w-10 h-10 inline mr-2" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />Sign in With Google
          </button >
          <Link to="/register" className="text-center text-gray-400 ">
            Dont have an Account ? <span className="font-bold text-black"> Sign Up for free</span>
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

export default Login;
