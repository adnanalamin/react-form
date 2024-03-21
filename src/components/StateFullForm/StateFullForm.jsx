import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState('Rajoni Klanto');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('')
  const handelSubmit = (e) => {
    e.preventDefault();
    if(password.length < 6){
        setError('Password Must be 6 charactor or longer')
    }else{
        setError('')
        console.log(name, email, password);
  }
  };
  const handelNameChange = (e) => {
    setName(e.target.value);
  };
  const handelEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handelPasswordChange = e =>{
    setPassword(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input onChange={handelNameChange} type="text" name="name" />
        <br />
        <input onChange={handelEmailChange} type="email" name="email" id="" />
        <br />
        <input
        onChange={handelPasswordChange}
         type="password" name="password" required/>
        <br />
        <input type="submit" value="Submit" />
        {
            error && <p>{error}</p>
        }
      </form>
    </div>
  );
};

export default StateFullForm;
