import React, { useState } from 'react'
import { useServiceStore } from '../../app/auth/useGetService'

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
    <form onSubmit={handleSubmit}>
<input type="text"
id='name'
name='name'
className='bg-black text-white'
value={data.name}
onChange={handleChange}

/>
<input type="number"
id='price'
name='price'
className='bg-black text-white w-20'
onChange={handleChange}
value={data.price}

/>
<button type='submit'>Submit</button>
    </form>
  )
}

export default CreateServices