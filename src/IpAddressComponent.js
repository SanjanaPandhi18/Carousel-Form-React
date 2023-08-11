import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent'; 

const IpAddressComponent = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [cityInfo, setCityInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api64.ipify.org?format=json');
        setIpAddress(response.data.ip); //ipAddress fetched from API as response.data.ip
    
      } catch (error) {
        console.error('Error fetching IP address:', error);
        setError('Error fetching IP address.');
      } finally {
        setLoading(false);
      }
    };
    // setIpAddress('8.8.8.8');

    fetchIpAddress();
  }, []);

  useEffect(()=>{
    const fetchCityInfo = async () => {
        try {
          const url = `https://ipinfo.io/${ipAddress}/json`;
          // console.log("URL to fetch city", url)
          const response = await axios.get(url);
          // console.log(response);
          setCityInfo(response.data.city);
          // console.log(cityInfo);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching city info:', error);
          setError('Error fetching city information.');
          setLoading(false);
        }
      };
      setCityInfo({city: "Mumbai"});
      fetchCityInfo();
    },[ipAddress])

  // console.log("IP hsdafhas",cityInfo)

  return (
    <div>
      {
        <div>
          {/* <h2> IP Address: {ipAddress}</h2> */}
          {/*form component is given response.city fetched from API as default value */}
            <FormComponent defaultCity={cityInfo.city} /> 
        </div>
      }
    </div>
  );
};

export default IpAddressComponent;
