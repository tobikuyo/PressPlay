import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../api/auth";

const initialForm = {
    name: "",
    email: "",
    password: ""
};

const Register = () => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);

    const history = useHistory();

    const handleChanges = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await axiosInstance.post("/register", form);
            setForm(initialForm);
            history.push("/login", [form]);
        } catch (error) {
            setError(error.response.data.message);
            console.log("REGISTER", error);
        }
    };

    return (
        <div className="register" onSubmit={handleSubmit}>
            <form className="register__form">
                <h2 className="register__form--heading">Sign Up</h2>
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChanges}
                    placeholder="Name"
                    className="register__form--input"
                />
                <input
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={handleChanges}
                    placeholder="Email"
                    className="register__form--input"
                />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChanges}
                    className="register__form--input"
                    placeholder="Password"
                />
                {error && <p className="register__form--error">{error}</p>}
                <button className="register__form--btn" type="submit">
                    Sign Up
                </button>
                <p className="register__redirect">
                    Already have an account?{" "}
                    <span>
                        <Link to="/login">Log In</Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Register;
