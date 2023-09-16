import React from "react";
import "./form.css";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  // const [data, setData] = useState({
  //   first_name: " ",
  //   last_name: " ",
  //   email: " ",
  //   password: " ",
  // });

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  //   console.log(data);
  // };

  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost/my_project_API/", inputs);
    console.log(inputs);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      {/* install package "Axios" */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">first_name: </label>
        <input type="text" name="firstname" onChange={handleChange} />
        <br />
        <label htmlFor="">Last_name: </label>
        <input type="text" name="lastname" onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
    // <div className="container justify-content">
    //   <br />
    //   <br />
    //   <br />

    //   <div>
    //     <form action="../../pages/Home/Home">
    //       <label htmlFor="">Firstname</label>
    //       <input
    //         type="text"
    //         name="first_name"
    //         //
    //         onChange={handleChange}
    //         // Target first_name and whatever changes in input, it's value is stored in current state in useState
    //         value={data.first_name}
    //       />
    //       <label htmlFor="">Lastname</label>
    //       <input
    //         type="text"
    //         name="last_name"
    //         onChange={handleChange}
    //         value={data.last_name}
    //       />
    //       <label htmlFor="">Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         onChange={handleChange}
    //         value={data.email}
    //       />
    //       <label htmlFor="">Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         onChange={handleChange}
    //         value={data.password}
    //       />
    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Form;
