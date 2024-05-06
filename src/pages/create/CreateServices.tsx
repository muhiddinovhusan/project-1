import React, { useState } from 'react'
import { useServiceStore } from '../../app/auth/useGetService'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CreateServices = () => {
    const {addService} =useServiceStore();
    const [data, setData] = useState({
        name: "",
        price: 0
      })

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
          ...data,

          [e.target.id]: e.target.value,
        });
    }

 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!data.name || !data.price) {
          console.error("Name and Price are required fields");
          return;
        }
        addService(data);
      };
      





  return (
    <div className=''>

<Link to='/'>
  <ArrowLeftCircleIcon className='stroke-black w-8 h-8 '/>
</Link>

    <form className='pt-7' onSubmit={handleSubmit}>
<h2>
  Create Services
  </h2>
  <div className="py-4">
            <span className="mb-2 text-md ">Service Name</span>
            <input type="text"
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="name"
              id="name"
              value={data.name}
              onChange={handleChange}
              />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md ">Price</span>
            <input type="number"
              required
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="price"
              id="price"
              value={data.price}
              onChange={handleChange}
              />

          </div>
<button type='submit'  className="w-20 bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border-gray-900 ">Submit</button>
    </form>
              </div>
  )
}

export default CreateServices