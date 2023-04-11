import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignUpActions } from "../../Redux/actions/SignUpActions";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const state = useSelector((state) => state.Signup);

const {data}=state;

  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    profession: "",
    username:""
  });

const LoginReducer=useSelector(state=>state.Login);

const {userInfo,isLoading,error}=LoginReducer;

// useEffect(() => {
//   if (userInfo) {
//     history.push('/');
//   }
// }, [userInfo]);

// function successoption(){
//   {
//     SignupReducer.error == '' && (
//       <div className="alert alert-success">
//         SignUp Successfully
//       </div>
//     )
//    }
//    {
//     SignupReducer.error !== '' && (
//       <div className="alert alert-danger">
//         {SignupReducer.error}
//       </div>
//     )
//    }
// }



  const signUp = () => {
    const signupinfo = {
      fullname: inputs.fullname,
      email: inputs.email,
      password: inputs.password,
      phone: inputs.phone,
      gender: inputs.gender,
      profession: inputs.profession,
      username:inputs.username,
    };
    debugger;
    dispatch(SignUpActions(signupinfo));
    // navigate('/login')
    
  };
  return (
   
    <div className="container mt-4">
 {/* {
  successoption()
 } */}
      <div className="row">
        <div className="col-sm-6 text-black">
          <div className="text-center">
            <i style={{ fontSize: "66px" }} className="bi bi-book"></i>
            <h3 className="fw-bold my-3 pb-3 " style={{ letterSpacing: "1px" }}>
              Sign Up
            </h3>
          </div>
          <form className="mx-5" method="POST">
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example18">
                Full Name
              </label>
              <input
                value={inputs.fullname}
                type="email"
                id="form2Example18"
                className="form-control form-control-lg"
                onChange={(e) =>
                  setInputs({ ...inputs, fullname: e.target.value })
                }
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example18">
                User Name
              </label>
              <input
                value={inputs.username}
                type="text"
                id="form2Example18"
                className="form-control form-control-lg"
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
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
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example28">
                Phone
              </label>
              <input
                value={inputs.phone}
                type="text"
                id="form2Example28"
                className="form-control form-control-lg"
                onChange={(e) =>
                  setInputs({ ...inputs, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <select
                className="form-select"
                defaultValue=""
                aria-label="Default select example"
                onChange={(e) =>
                  setInputs({ ...inputs, gender: e.target.value })
                }
              >
                <option select="true">Select Gender</option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="mb-4">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) =>
                  setInputs({ ...inputs, profession: e.target.value })
                }
              >
                <option select="true">Select Profession</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="pt-1 mb-4">
              <button
                className="btn btn-info btn-lg w-100 text-white"
                type="button"
                onClick={signUp} 
              >
                Sign Up
              </button>
            </div>
           
            <p>
              Login To Your Account 
              <Link to="/login" className="text-decoration-none">
               Login
              </Link>
            </p>
          </form>
        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Login image"
            className="w-100 vh-100 rounded-3"
            style={{ objectFit: "cover", objectPosition: "left" ,marginTop:"100px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
