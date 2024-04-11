import React, { useEffect, useState } from "react";
import { Add, Edit, Delete } from "@material-ui/icons";
import axios from "axios";
import { UpdateUser } from '../../../backend/controller/userController'
import DeleteUser from "./DeleteUser";


export default function Table({ UpdateUser, DeleteUser }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchUser = await axios.get("http://localhost:4000/api/get");
        const response = fetchUser.data;
        //console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Employees</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <i className="material-icons">
                    <Add />
                  </i>{" "}
                  <span>Add New Employee</span>
                </a>
              </div>
            </div>
          </div>

          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Father Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.user?.map((elem, index) => {
                return (
                  <tr key={index}>
                    {" "}
                    {/* Add key to each row */}
                    <td></td>
                    <td>{elem.name}</td>
                    <td>{elem.fathername}</td>
                    <td>{elem.email}</td>
                    <td>{elem.phone}</td>
                    <td>
                      <a
                        href="#"
                        className="edit cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#editEmployeeModal"
                        onClick={() => UpdateUser(elem._id)}
                      >
                        <i
                          className="material-icons"
                          data-bs-toggle="tooltip"
                          title="Edit"
                        >
                          <Edit />
                        </i>
                      </a>
                      <a
                        href="#"
                        className="delete cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteEmployeeModal"
                        onClick={() => DeleteUser(elem._id)}
                      >
                        <i
                          className="material-icons"
                          data-bs-toggle="tooltip"
                          title="delete"
                        >
                          <Delete />
                        </i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
