import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";

const App = () => {
  const [formStates, setFormStates] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formStates);
  };

  const handleChange = (event) => {
    setFormStates({
      ...formStates,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <h1>APP</h1>
      <DynamicForm />
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formStates.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">What is your email?</label>
          <input
            type="email"
            name="email"
            placeholder="john@sss.com"
            value={formStates.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">What is your phone?</label>
          <input
            type="tel"
            name="phone"
            placeholder="015555670"
            value={formStates.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form> */}
    </div>
  );
};

export default App;
