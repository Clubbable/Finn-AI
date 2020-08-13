import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { randomName }  from './utils/randomName'

const Content = () => {
  const newName = randomName()

  const [data, setData] = useState(null);
  useEffect(async () => {
    const id_response = await axios.get(
      `/user/id`
    );

    console.log(id_response)
    const result = await axios.post(
      `/user/save`,
      {
        id: id_response.data.id,
        firstName: newName.firstName,
        lastName: newName.lastName,
        email: "test@gmail.com"
      }
    );
    console.log(result)
    setData(result.data.user);

    if(result.data.error)
    {
      let retryTime = localStorage.getItem("retryTime");
      if(retryTime)
      {
        let times = parseInt(retryTime)
        times++
        localStorage.setItem("retryTime",times.toString()) 
      }
      else{
        localStorage.setItem("retryTime",'0') 
      }
    }
    else{
      localStorage.setItem("retryTime",'0') 
    }
   
  }, [])

  const component = <div>
    {data && (<div><h1>Created a User!</h1>
      <div>
        ID: {data.id}
      </div>
      <div>
        Name: {data.firstName} {data.lastName}
      </div>
      <div>
        Email: {data.email}
      </div>
      </div>
    )}
    {!data && (
      <h2>Page Failed! Reloading...{localStorage.getItem("retryTime")}</h2>
    )}
    </div>
  return component
}

function App() {
  return (
    <div className="AppWrapper">
      <div className="ContentWrapper">
      <Content />
    </div>
    </div>
  );
}

export default App;
