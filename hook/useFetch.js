import { useState,useEffect } from "react";
import axios from 'axios'

const useFetch=(endpoint,query) =>{
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState(null);
    
      
const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'x-rapidapi-key': '4e1e956de1msh0b47a5b3f290048p111e48jsn65a7c3739c22',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      },
    params: {
      ...query
    },
   
  };

      const fetchData = async () => {
        setIsLoading(true);
    
        try {
          const response = await axios.request(options);
          console.log(response.data.data)
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          console.log(error)
        } finally {
          setIsLoading(false);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);
    
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };

      
    
      return { data, isLoading, error, refetch };
    


}

export default useFetch
