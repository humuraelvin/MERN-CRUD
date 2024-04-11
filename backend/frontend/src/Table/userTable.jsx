import React, { useState } from "react";
import Table from "../components/table";
import AddUser from "../components/addUser";
import UpdateUser from "../components/updateUser";
import DeleteUser from "../components/DeleteUser";
import axios from "axios";
import toast from "react-hot-toast";

export default function userTable() {
  const UpdateUser = (id) => {
    setUpdateid(id);
  };

  const [updateid, setUpdateid] = useState();
  const [deleteId, setDeleteId] = useState();
  const [value, setValue] = useState({
    name: "",
    fathername: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const editUser = await axios.put(
        `http://localhost:4000/api/update/${updateid}`,
        value
      );
      const response = editUser.data;
      if (response.success) {
        toast.success(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteUser = (deleteid) => {
    setDeleteId(deleteid);
  };

  const handleDelete = async () => {
    try {
      const deleteuser = await axios.delete(
        `http://localhost:4000/api/delete/${deleteId}`
      );
      const response = deleteuser.data;
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table UpdateUser={UpdateUser} DeleteUser={DeleteUser}></Table>
      <AddUser />
      <UpdateUser
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      ></UpdateUser>
      <DeleteUser handleDelete={handleDelete} />
    </>
  );
}
