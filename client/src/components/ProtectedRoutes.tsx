import { useValidateQuery } from "@/redux/slices/api/userApiSlice";
import { setUserDetails } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const { data: validUser, isLoading } = useValidateQuery("");

  useEffect(() => {
    if(validUser?.data){
      dispatch(setUserDetails(validUser.data))
    }
  }, [validUser])
  

  if (isLoading) {
    return <>Loading</>;
  }
  
  return validUser?.status ? (
    <div className="mt-10">
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/sign-in"}></Navigate>
  );
};

export default ProtectedRoutes;
