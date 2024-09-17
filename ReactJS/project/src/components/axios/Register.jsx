import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Register() {
  const API = "https://66c57672134eb8f434946316.mockapi.io/api";
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  function Send() {
    axios
      .post(API, {
        Name: name,
        Age: age,
        Email: email,
      })
      .then(alert("success"))
      .catch((err) => console.log(err));
  }

  const [views, setViews] = useState([]);
  useEffect(() => {
    axios
      .get(API)   
      .then((res) => {
        setViews(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="enter ur name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter ur age"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter ur email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <button onClick={Send}>send</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            views.map((item,index)=>{
              return(
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.Age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
