import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import "./Login.css";

function Login() {
  const [uname, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hint, setHint] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fixedUser = {
      uname: "Ye Htet Aung",
      password: "koko",
    };

    if (uname === fixedUser.uname && password === fixedUser.password) {
      login(); // ✅ mark as authenticated
      navigate("/");
    } else {
      setError("You're not my boyfriend! 😏");
    }
  };

  const handleClose = () => {
    setError("");
    window.location.reload();
  };

  const handleHint = () => {
    setHint(true);
  };

  return (
    <div className="h-screen overflow-auto font-umoe">
      <div className="LoginContainer w-120  bg-linear-to-br from-white/70 to-white/30 mx-auto mt-30 py-10 px-10 rounded-xl border-1 border-cyan-50">
        <h1 className="text-6xl font-extrabold mb-6 text-center font-rib">
          Who?!
        </h1>

        <form onSubmit={handleSubmit} className="LoginForm">
          <input
            type="text"
            className="LoginName w-full py-2 px-5 bg-white rounded-full focus:outline-0 focus:placeholder-gray-200 mb-4"
            placeholder="Your Name? :in standard form ( Aaa Aaa )"
            value={uname}
            onChange={(e) => setUName(e.target.value)}
            required
          />

          <input
            type="password"
            className="LoginName w-full py-2 px-5 bg-white rounded-full focus:outline-0 focus:placeholder-gray-200 mb-4"
            placeholder="Passcode? :small characters no space"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className=" flex justify-between items-center py-2 px-6 w-full text-red-500 outline-1 rounded-full mb-4">
              <p className=" text-xl LoginHead">{error}</p>
              <span className=" text-xl cursor-pointer" onClick={handleClose}>
                <FaWindowClose />
              </span>
            </div>
          )}

          <div className="BtnGp flex justify-between mb-4">
            <div
              className="HintBtn bg-pink-500 rounded-2xl py-2 px-4 cursor-pointer text-white"
              onClick={handleHint}
            >
              Hint :
            </div>

            <button
              type="submit"
              className="LoginBtn bg-emerald-400 rounded-2xl py-2 px-4 cursor-pointer text-white hover:scale-105 transition duration-600 ease-in-out"
            >
              Ready to have fun?
            </button>
          </div>

          {hint && (
            <div className=" flex justify-between items-center py-2 px-6 w-full text-red-500 outline-1 rounded-full mb-4">
              <p className=" text-xl ">
                "My favourite pronoun"{" "}
                <span className="text-sm text-pink-300">( 4 characters )</span>
              </p>
              <span className=" text-xl cursor-pointer" onClick={handleClose}>
                <FaWindowClose />
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
