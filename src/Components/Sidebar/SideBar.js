import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [selected, setSelected] = useState("SmartUp");

  const selectedStyle = { backgroundColor: "aliceblue", color: "black" };
  return (
    <div>
      <div>
        <Link style={{ textDecoration: "none" }} to="/SmartUp">
          <li
            className="header"
            style={selected === "SmartUp" ? selectedStyle : {}}
          >
            <h3>SmartUp</h3>
          </li>
        </Link>
      </div>
      <div className="SideBar">
        <ul>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/Profile"
          >
            <li
              className="list-items"
              style={selected === "Profile" ? selectedStyle : {}}
              onClick={() => {
                setSelected("Profile");
              }}
            >
              Profile
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/discover"
          >
            <li
              className="list-items"
              style={selected === "Discover" ? selectedStyle : {}}
              onClick={() => {
                setSelected("Discover");
              }}
            >
              Discover
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/smartup"
          >
            <li
              className="list-items"
              style={selected === "smartup" ? selectedStyle : {}}
              onClick={() => {
                setSelected("smartup");
              }}
            >
              SmartUp
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/salesteam"
          >
            <li
              className="list-items"
              style={selected === "TechCommunity" ? selectedStyle : {}}
              onClick={() => {
                setSelected("TechCommunity");
              }}
            >
              Main Community
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/settings"
          >
            <li
              className="list-items"
              style={selected === "settings" ? selectedStyle : {}}
              onClick={() => {
                setSelected("settings");
              }}
            >
              Fun Community
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/TechCommunity"
          >
            <li
              className="list-items"
              style={selected === "TechCommunity" ? selectedStyle : {}}
              onClick={() => {
                setSelected("TechCommunity");
              }}
            >
              Tech Community
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/LeadCommunity"
          >
            <li
              className="list-items"
              style={selected === "LeadCommunity" ? selectedStyle : {}}
              onClick={() => {
                setSelected("LeadCommunity");
              }}
            >
              Lead Community
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/Personal"
          >
            <li
              className="list-items"
              style={selected === "Personal" ? selectedStyle : {}}
              onClick={() => {
                setSelected("Personal");
              }}
            >
              Personal
            </li>
          </Link>
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/InProgress"
          >
            <li
              className="list-items"
              style={selected === "InProgress" ? selectedStyle : {}}
              onClick={() => {
                setSelected("InProgress");
              }}
            >
              In Progress
            </li>
          </Link>{" "}
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/Completed"
          >
            <li
              className="list-items"
              style={selected === "Completed" ? selectedStyle : {}}
              onClick={() => {
                setSelected("Completed");
              }}
            >
              Completed
            </li>
          </Link>{" "}
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to="/ReadLater"
          >
            <li
              className="list-items"
              style={selected === "ReadLater" ? selectedStyle : {}}
              onClick={() => {
                setSelected("ReadLater");
              }}
            >
              Read Later
            </li>
          </Link>
        </ul>
      </div>
      <div className="footer">
        About SmartUp <br />
        send feedback <br />
        Terms of use <br />
        privacy policy
      </div>
    </div>
  );
};

export default SideBar;
