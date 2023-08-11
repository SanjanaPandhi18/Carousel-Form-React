import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './style.css';

const FormComponent = ({ defaultCity}) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: defaultCity || '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onSubmit=(event)=>{
    event.preventDefault()

    if (!formData.name.trim()) {
      alert('Name is required.');  //Name Validation
      return;
    }

    
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert('Phone number must be 10 digits.');  //Phone No. validation
      return;
    }


    navigate("/thankYou")  //navigating to thankyoupage

  }

//Array for drop down city menu
 const cities = ['Delhi', 'Banglore', 'Hyderabad', 'Chennai', 'Amritsar', 'Lucknow','Varanasi','Pune','Ahemdabad'];



  return (
    <div className="form-container rounded-end-4">
      <form className="border border-primary p-2 m-3 bg-primary-subtle"onSubmit={onSubmit}>
        <h1 className='m-2 p-2'>Contact us!</h1>

        {/* name credential */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* phone no. credential */}
        <div className="form-group">
          <label htmlFor="phone">Phone No.:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="city">City:</label> 
          <select
            className="form-select p-10 m-auto" // Render a dropdown menu with options from the cities array
            aria-label="City"
            id="city"
            value={formData.city}
            onChange={handleChange}
          >
           {/* default value from API */}

            <option value="">{defaultCity}</option> 

            {/* Render all cities as options */}

            {cities.map((city) => (
              <option key={city} value={city}>
                {city}   
              </option>
            ))}
          </select>
        </div>


        <div className="d-flex justify-content-end mt-2 me-2 p-2 ">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
