import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import ServiceCard from "../components/ui/ServiceCard";



const Services = () => {
    const axiosPublic = useAxios()
    const {data: services=[]} = useQuery({
        queryKey : ['services'],
        queryFn : async() =>{
           const res = await axiosPublic.get('/services');
           return res.data
        }
    })
    
    return (
        <div>
            <h2 className="text-4xl text-center text-primary font-bold mt-10">All services</h2>
            <div className="grid grid-cols-3 justify-evenly gap-10 mt-10">
            {
                services.map(service =><ServiceCard key={service._id} service={service}/>)
            }
            </div>
        </div>
    );
};

export default Services;