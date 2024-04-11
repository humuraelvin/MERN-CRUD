import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import { Toaster } from "react-hot-toast";
import UserTable from "./Table/userTable";

const App = () => {
  return (
  <>
    <Toaster></Toaster>
    <UserTable />
  </>
  )
};

export default App;
