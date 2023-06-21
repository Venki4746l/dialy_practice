import axios from "axios";
import React, { useEffect, useState } from "react";

const JsonServer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //delete the  response with the id

  const onDeleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      alert("Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h1>Json server</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each) => (
            <tr key={each.id}>
              <td>{each.id}</td>
              <td>{each.username}</td>
              <td>{each.email}</td>
              <td className="d-flex justify-content-around">
                <button className="btn btn-primary">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteHandler(each.id)}
                >
                  Deleted
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JsonServer;
