import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTasks from "./pages/AddTasks";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Tasks from "./components/Tasks";
import SingleTodo from "./components/SingleTodo";

function App() {
  return (
    <BrowserRouter>
    <SingleTodo/>
      <Routes>
        {/* <Route path="/" element={
            <div>
              <Navbar />
              <AddTasks />
            </div>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
