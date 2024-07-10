import React, { useState,useRef } from "react";
import { useAuth } from "../context/AuthContext";

const RegisterFrom = ({ setActiveForm }) => {
    const {registerUser} = useAuth();
    const formRef = useRef(null);
    const handFormData = (e)=>{
        e.preventDefault();

        registerUser(formRef.current.name.value,formRef.current.email.value, formRef.current.password.value)

        setActiveForm("login")
    }
    return (
        <div>
            <h1>Register</h1>
            <form ref={formRef} onSubmit={handFormData} >

               <div className="auth-field-wrapper">
                    <label>Name:</label>
                    <input type="text" name="name" />
                </div>
                <div className="auth-field-wrapper">
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>

                <div className="auth-field-wrapper">
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>

                <div className="auth-field-wrapper">
                    <input type="submit" value="Signup" />
                </div>


            </form>

            <p>
                Already have an account?{" "}
                <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => {
                        setActiveForm("login");
                    }}
                >
                    Login
                </span>
            </p>


        </div>
    );
};

export default RegisterFrom;