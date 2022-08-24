import React from "react";
import { Routes, Route } from "react-router-dom";

import SideBar from "./Components/Sidebar/SideBar";
import Discover from "./Layouts/Discover/discover";

const Main = () => {
  return (
    <div className="d-flex flex-row">
      <SideBar />
      <Routes>
        <Route exact path="/discover" element={<Discover />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
