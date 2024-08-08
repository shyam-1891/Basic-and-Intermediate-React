import React, { useState } from "react";
import "./FormValidation.css";

function FormValidation() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const [emailErrmsg, setEmailErrmsg] = useState([]);
  const [passErrmsg, setPassErrmsg] = useState([]);

  function checkemail() {
    if (email !== "undefined") {
      if (email.endsWith("@webdevsimplified.com")) {
        return true;
      } else {
        setEmailErrmsg((currentArr) => {
          return [...currentArr, "Must end in @webdevsimplified.com"];
        });
      }
    }
  }

  function checkPass() {
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if (pass !== "undefined") {
      if (pass.length > 10) {
        setPassErrmsg((currentArr) => {
          return [...currentArr, "Must Be 10 characters or longer"];
        });
      } else if (!pass.match(upperCaseLetters)) {
        setPassErrmsg((currentArr) => {
          return [...currentArr, "Must include an uppercase letter"];
        });
        // setPassErrmsg("Must include an uppercase letter");
      } else if (!pass.match(numbers)) {
        setPassErrmsg((currentArr) => {
          return [...currentArr, "Must include number"];
        });
        // setPassErrmsg("Must include number");
      } else {
        return true;
      }
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setEmailErrmsg([]);
    setPassErrmsg([]);

    const checkemailvar = checkemail();
    const checkPassvar = checkPass();
    if (checkemailvar === true && checkPassvar === true) {
      alert("Form Submit Done.");
    }
  };

  return (
    <>
      <form onSubmit={formSubmit} className="form">
        <div
          className={
            emailErrmsg && emailErrmsg.length > 0
              ? `form-group error`
              : `form-group`
          }
        >
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailErrmsg && <div className="msg">{emailErrmsg}</div>}
        </div>
        <div
          className={
            passErrmsg && passErrmsg.length > 0
              ? `form-group error`
              : `form-group`
          }
        >
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            value={pass}
            type="password"
            id="password"
            onChange={(e) => setPass(e.target.value)}
            required
          />
          {passErrmsg && <div className="msg">{passErrmsg}</div>}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormValidation;
