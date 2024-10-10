import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";
export default function Form() {
  const API = "http://localhost:2300/file";
  const [Title, setTitle] = useState("");
  const [SubTitle, setSubTitle] = useState("");
  const [Img, setImg] = useState(null);

  

  function Send(e) {
    e.preventDefault();
    axios
      .post(`${API}/postfile`, {
        Title:Title,
        SubTitle:SubTitle,
        img:Img
      })
      .then(alert("success"))
      .catch((err) => console.log(err));
  }

  const [views, setViews] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/getfile`)
      .then((res) => {
        setViews(res.data);
      })
      .catch((err) => console.log(err));
  }, [views]);

  //setup edit
  const [edit, setEdit] = useState(false);
  function setupEdit(id) {
    localStorage.setItem("_id", id);
    axios
      .get(`${API}/getfile/${id}`)
      .then((res) => {
        setTitle(res.data.Title);
        setSubTitle(res.data.SubTitle);

        setEdit(true);
      })
      .catch((err) => console.log(err));
  }

  // handle update
  function handleupdate(e) {
    e.preventDefault();
    const id = localStorage.getItem("_id");
    axios
      .put(`${API}/updatefile/${id}`, {
        Title:Title,
        SubTitle:SubTitle,
        img:Img
      })
      .then(() => {
        setTitle("");
        setSubTitle("");
        setImg(null);
        setEdit(false)
        localStorage.clear();
      })
      .catch((err) => console.log(err));
  }

  //delete

  function handleDelete(id) {
    axios
      .delete(`${API}/deletefile/${id}`)
      .then(() => {
        alert("data deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Forms
  return (
    <div className="head">
      <form
        onSubmit={
          edit?
          handleupdate:
          Send
        }
      >
        <input
          type="text"
          placeholder="Enter title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          className="inp"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Subtitle"
          value={SubTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          className="inp"
        />
        <br/>
        <br/>

        <input
          type="file"
          placeholder=""
          onChange={(e) => setImg(e.target.files[0])}
          className="inp"
        />

        <br />
        <br />

        <button className="inp">{edit ? "Update" : "Submit"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>SubTitle</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {views.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Title}</td>
                <td>{item.SubTitle}</td>
                <td>
                  <img src={`${API}/file/${item.Filename}`} width={300} height={200} alt="" />
                </td>

                <td>
                  <button
                    onClick={() => {
                      setupEdit(item._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
