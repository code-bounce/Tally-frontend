import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Home from "./page/home";
import Login from "./page/login";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <div className="h-screen w-screen min-h-screen max-h-screen flex flex-col overflow-hidden text-gray-700">
      <Header />
      <div className="flex-grow flex h-[calc(100vh-3rem)] bg-gray-50">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
