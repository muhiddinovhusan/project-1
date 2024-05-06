import { useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) =>{
    const navigate = useNavigate();

    const token = localStorage.getItem("access_token");
    useEffect(() => {
      if (!token) {
        navigate("/login");
      }
    }, [token]);
  return (
    <main  className="w-full h-screen flex flex-row relative">
      
    <Sidebar />

    <section className="w-full flex flex-col p-10 ml-20  gap-5">
    
    {children}
    </section>
  </main>  )
}

export default Layout