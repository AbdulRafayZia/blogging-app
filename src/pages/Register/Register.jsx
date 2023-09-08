import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <section className='Container'>
      <h1 className="heading">Open an Account</h1>
      <form className="form">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
        />
        <input
          type="email"
          id='email'
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          autocomplete="current-password"
          required="Password"
          id="password"
          placeholder="password"
        />
        <input type="button" value="Create"  className="Create" />
      </form>
      <div className="footer">
        <p className="text">
          Already have an account?{" "}
          <a href="/Signup" id="a">
            Login here{" "}
          </a>{" "}
        </p>
      </div>
    </section>
  );
}