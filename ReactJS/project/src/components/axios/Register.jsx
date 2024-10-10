import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Register() {
  const API = "https://mockapi.io/projects/66c57672134eb8f434946316";
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
  }, [views]);

  //setup edit
  const [edit,setEdit] = useState(false);
  function setupEdit(id){
    localStorage.setItem("_id",id);
    axios
      .get(`${API}/${id}`)   
      .then((res) => {
          setname(res.data.Name);
          setemail(res.data.Email);
          setage(res.data.Age);

          setEdit(true);
      })
      .catch((err) => console.log(err));
  }

  //update
  function handleupdate(){
    const id = localStorage.getItem("_id");
    axios
      .put(`${API}/${id}`,{
        Name: name,
        Age: age,
        Email: email,
      })   
      .then(() => {
          setname("");
          setemail("");
          setage("");

          setEdit(false);
          localStorage.clear()
      })
      .catch((err) => console.log(err));
  }

  //delete

  function handleDelete(id){
    axios.delete(`${API}/${id}`)
    .then(()=>{
      alert("data deleted")
    })
    .catch(err=>{console.log(err);})
  }

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
      
       <button > 
        {
          edit ? 
          "Update" :
          "Create"
        }
      </button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
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
                  <td>
                    <button onClick={()=>{
                      setupEdit(item.id);
                    }}>Edit</button>
                    <button
                      onClick={()=>{
                        handleDelete(item.id);
                      }}
                    >Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
