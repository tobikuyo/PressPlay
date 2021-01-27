import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../api/auth";

const initialForm = {
    email: "",
    password: ""
};

const Login = () => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);

    const history = useHistory();

    const handleChanges = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await axiosInstance.post("/login", form);
            localStorage.setItem("token", data.token);
            setForm(initialForm);
            history.push("/");
        } catch (error) {
            setError(error.response.data.message);
            console.log("LOGIN", error);
        }
    };

    return (
        <div className="login" onSubmit={handleSubmit}>
            <form className="login__form">
                <h2 className="login__form--heading">Sign In</h2>
                <input
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={handleChanges}
                    placeholder="Email"
                    className="login__form--input"
                />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChanges}
                    className="login__form--input"
                    placeholder="Password"
                />
                {error && <p className="login__form--error">{error}</p>}
                <button className="login__form--btn" type="submit">
                    Sign In
                </button>
                <p className="login__redirect">
                    New to PressPlay?{" "}
                    <span>
                        <Link to="/register">Register</Link>
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
