import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'
import { storeData } from '../Reducer'

import './Login.css';

function Login(props) {

  const { register, handleSubmit,formState: { errors }} = useForm()

    const [authMode, setAuthMode] = useState("signin")
    const nav = useNavigate();

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
      }

      // const storeDataOfUser = useSelector((state) => state.authCheck.data)
      const dispatch = useDispatch()
     
      const passwordValidation =  {
        required: 'This filed is required', minLength: {
          value : 6,
          message : 'Min length is 6'
        } 
      }
      
      const emailValidation = {
        required: 'This filed is required', pattern: 
          {
            value : /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
            message : 'Invalid Email'
          }
      }

      const submitData = (data) => {
        console.log(data);
        if(data){
          //api call
          dispatch(storeData(data));
        }
      }

      if (authMode === "signin") {
        return (
          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit(submitData)}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    className="form-control mt-1"
                    {...register("email",{...emailValidation})}
                    />
                 <span className="text-danger">{errors.email?.message}</span>
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    className="form-control mt-1"
                    {...register("password", {...passwordValidation})}
                  />
                  <span className="text-danger">{errors.password?.message}</span>
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )
      }
    
      return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit(submitData)}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  className="form-control mt-1"
                  placeholder="Email Address"
                  {...register("email",{...emailValidation})}
                />
                <span className="text-danger">{errors.email?.message}</span>
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                    className="form-control mt-1"
                    placeholder="Enter password"
                    {...register("email",{...passwordValidation})}
                  />
                  <span className="text-danger">{errors.password?.message}</span>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )
  }
  
  export default Login;