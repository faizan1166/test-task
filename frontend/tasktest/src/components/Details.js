import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Table from 'react-bootstrap/Table';

function Details() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/getallusers").then((response) => {
      setData(response.data.result);
    });
  }, []);
  console.log("all users", data);

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (<>
    <NavBar/>

    <Table className="table container my-5 " striped bordered hover>
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Name</th>
          <th scope="col">Age/Sex</th>
          <th scope="col">Mobile</th>
          <th scope="col">Address</th>
          <th scope="col">Govt ID</th>
          <th scope="col">Guardian Details</th>
          <th scope="col">Nationality</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          const age = calculateAge(item.DOB);
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.firstName}</td>
              <td>
                {age}y / {item.sex}
              </td>
              <td>{item.mobile}</td>
              <td>{item.address}</td>
              <td>
                {item.govIdType} -{" "}
                {item.govIdType === "Adhar" ? item.aadharNumber : item?.pan}
              </td>
              <td>
                {item.gradianType} - {item?.gradianName}
              </td>
              <td>{item.nationality?item.nationality: "-"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table></>
  );
}

export default Details;
