import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import ServiceCard from "../components/ui/ServiceCard";
import { useState } from "react";

const Services = () => {
  const axiosPublic = useAxios();
  const [slectedCat, setSelectedCat] = useState('')
  const [price, setPrice] = useState('')
  
  const { data: services=[], isPending } = useQuery({
    queryKey: ["services", slectedCat, price],
    queryFn: async () => {
      const res = await axiosPublic.get(`/services?category=${slectedCat}&sortField=price&sortOrder=${price}`);
      return res.data.result;
    },
    
  });

  const category = ['Residential', 'Carpet Care', 'Commercial', 'Specialty', 'Transition', 'Environmentally Friendly', 'Organization', 'Seasonal', 'Exterior', 'Pool Services', 'Special Occasions', 'Indoor Air Quality', 'Bedroom Care', 'Emergency Services']

const selectCat= (e) =>{
    setSelectedCat(e.target.value)
}
const sortByPrice = (e)=>{
    setPrice(e.target.value)
}

  return (
    <div>
      <h2 className="text-4xl text-center text-primary font-bold mt-10">
        All services
      </h2>
      <div className="flex justify-end gap-4">
        <div>
            <p className="mb-3 text-primary font-bold">Filter By Category </p>
          <select onChange={selectCat} className="select select-primary w-full max-w-xs">
            <option value={''} >
              All   
            </option>
            {
                category.map(cat=><option key={cat} value={cat}>{cat}</option>)
            }
          </select>
        </div>
        <div>
        <p className="mb-3 text-primary font-bold">Filter By Price </p>
          <select onChange={sortByPrice} className="select select-primary w-full max-w-xs">
            <option disabled selected>
             Select One 
            </option>
            <option value={'asc'}>From Low To High</option>
            <option value={'desc'}>From High To Low</option>
          </select>
        </div>
      </div>
      {
        isPending ? <div className="flex justify-center items-center h-full"><span className="loading loading-dots loading-lg bg-primary"></span></div>  : <div className="grid grid-cols-3 justify-evenly gap-10 mt-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      }
    </div>
  );
};

export default Services;
