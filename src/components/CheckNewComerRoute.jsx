import React from "react";
// import { useGlobalContext } from "../GlobalProvider";
import { Navigate } from "react-router-dom";
import { rolesEnums } from "../constants";
import { useGlobalContext } from "../../GlobalProvider";

const CheckNewComerRoute = ({ children }) => {
  const { user } = useGlobalContext();
  return user?.roleId === rolesEnums.NEWCOMER_ROLE ? (
    <Navigate to="/welcome" />
  ) : (
    children
  );
};

export default CheckNewComerRoute;
