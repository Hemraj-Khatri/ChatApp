import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MessageContainer from "./MessageContainer";
import Sidebar from "./Sidebar";

const HomePage = () => {
  const { authUser } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex w-[100%] h-[100vh] rounded-lg overflow-hidden bg-green-500  bg-opacity-30">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default HomePage;
