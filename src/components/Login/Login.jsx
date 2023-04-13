import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginActions } from "../../Redux/actions/LoginActions";
import SetNavBar from "../Common/Header/Navbar/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Login);

  const {isLoading,userInfo,error}=state;
  
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    const user = {
      email: inputs.email,
      password: inputs.password,
    };
    dispatch(LoginActions(user));
      navigate('/userdashboard');
  };


  return (<>
   <SetNavBar/>
    <div className="container mt-4">
      {
        state.isLoading === true && (
          <h1>Loading.......</h1>
        )
      }
      {
        state.error !== '' && (
          <div className="alert alert-danger">
            {state.error}
          </div>
        )
      }
      {
         state.userInfo !=='' &&(
          <h2 className="alert alert-success">Login Sucessfully</h2>
          
        )
      }
      {
         state.userInfo !=='' &&(
          navigate('/userdashboard')
          
        )
      }
      <div className="row">
        <div className="col-sm-6 text-black">
          <div className="text-center">
            <i style={{ fontSize: "66px" }} className="bi bi-book"></i>
            <h3 className="fw-bold my-3 pb-3 " style={{ letterSpacing: "1px" }}>
              Log in
            </h3>
          </div>
          <form className="mx-5">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example18">
                Email
              </label>
              <input
                value={inputs.email}
                type="email"
                id="form2Example18"
                className="form-control form-control-lg"
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example28">
                Password
              </label>
              <input
                value={inputs.password}
                type="password"
                id="form2Example28"
                className="form-control form-control-lg"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="pt-1 mb-4">
              <button
                className="btn btn-info btn-lg w-100 text-white"
                type="button"
                onClick={() => login()}
              >
                Login
              </button>
            </div>
            <p className="small mb-5 pb-lg-2">
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </p>
            <p>
              Don't have an account?
              <Link to='/signup' >
                Signup
              </Link>
            </p>
          </form>
        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Login image"
            className="w-100 vh-100 rounded-3"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </div>
      </div>
    </div>
  </>
 
    
  );
};

export default Login;
