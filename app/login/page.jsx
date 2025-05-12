"use client";
import { registerUser } from "../../utils/api";
import { loginUser } from "../../utils/api";
import "./login-page.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast, Bounce, Flip } from "react-toastify";

function Login() {
  const router = useRouter();
  const notify = (error) =>
    toast.warn(error, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const notifysuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [loginform, setLoginform] = useState({ email: "", password: "" });

  const [flipped, setFlipped] = useState(false);
  const [forgot, setForgot] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLoginchange = (e) =>
    setLoginform({ ...loginform, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);
      if (res.success) {
        notifysuccess("Registered successfully!");
        setFlipped(false);
        setForm({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          repassword: "",
        });
        setLoginform({ email: "", password: "" });
      } else {
        notify(res.message);
      }
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(loginform);
      if (res.success) {
        notifysuccess("Login successful");
        setTimeout(() => {
          router.push("/pages/user/dashboard");
          setLoginform({ email: "", password: "" });
          setFlipped(false);
        }, 2000);
      } else {
        notify(res.message);
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <section className="flex justify-center items-center w-screen h-screen overflow-hidden box-border ">
      <div className=" bg-gray-950 w-screen h-screen top-0 overflow-hidden flex flex-wrap justify-center items-center gap-[2px] absolute before:absolute before:bg-gradient-to-t from-gray-950 via-purple-500 to-gray-950 before:w-screen before:h-screen before:animate-[animate-login-bg_5s_linear_infinite] ">
        {[...Array(500)].map((_, index) => (
          <span
            key={index}
            className=" relative span-size block transition-all duration-1000 bg-gray-900 hover:bg-blue-700  hover:duration-0"
          />
        ))}
      </div>
      <ToastContainer />
      <div onClick={router.back} className="absolute top-10 left-14 text-3xl text-blue-400 bg-gray-800 bg-opacity-35 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-900 backdrop-blur-md backdrop-saturate-150 border-2 border-blue-950 border-opacity-40 transition-all duration-500 ease-in-out">
          <IoMdArrowRoundBack />
        </div>
      {/* card container */}
      <div
        className={`absolute ${
          forgot ? "-top-full " : "top-1/2"
        } transition-all duration-1000 flip-card ${flipped ? "flipped" : ""}`}
      >
        <div className="flip-card-inner">
          {/* login card */}
          <div className=" flip-card-front absolute w-96 bg-gray-950 bg-opacity-35  justify-center items-center p-10 rounded-lg backdrop-blur-md backdrop-saturate-150 border-2 border-blue-950 border-opacity-40">
            {/* login form */}
            <div className=" relative w-full flex justify-center items-center flex-col gap-10">
              <h2 className=" font-sans font-semibold text-3xl text-blue-500">
                LOGIN IN
              </h2>
              <form
                className="form w-full flex flex-col gap-7"
                onSubmit={handleLogin}
              >
                <div className="inputBox relative w-full">
                  <input
                    className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
                    type="email"
                    name="email"
                    value={loginform.email}
                    onChange={handleLoginchange}
                    required
                  />
                  <i>Email</i>
                </div>
                <div className="inputBox relative w-full">
                  <input
                    className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
                    type="password"
                    name="password"
                    value={loginform.password}
                    onChange={handleLoginchange}
                    required
                  />
                  <i>Password</i>
                </div>
                <div className="links cursor-pointer relative w-full flex justify-between">
                  <a onClick={() => setForgot(true)}>Forgot Password?</a>
                  <a onClick={() => setFlipped(true)}>Create Account?</a>
                </div>
                <div className="inputBox relative w-full ">
                  <input
                    className="relative w-full rounded font-semibold text-xl py-2 -mt-1 cursor-pointer text-white bg-blue-700 border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-300 transition-all duration-700 ease-in-out"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* register card */}
          <div className="flip-card-back absolute min-w-96 max-w-md bg-gray-950 bg-opacity-35  justify-center items-center p-10 rounded-lg backdrop-blur-md backdrop-saturate-150 border-2 border-blue-950 border-opacity-40">
            {/* register form */}
            <div className=" relative w-full flex justify-center items-center flex-col gap-10">
              <h2 className=" font-sans font-semibold text-3xl text-blue-500">
                Create a new account
              </h2>
              <form
                className="form w-full flex flex-col gap-7"
                onSubmit={handleSubmit}
              >
                <div className="w-full relative flex flex-row justify-between gap-3">
                  <div className="inputBox relative w-full">
                    <input
                      className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
                      type="text"
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      required
                    />
                    <i>First Name</i>
                  </div>
                  <div className="inputBox relative w-full">
                    <input
                      className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
                      type="text"
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      required
                    />
                    <i>Last Name</i>
                  </div>
                </div>
                <div className="inputBox relative w-full">
                  <input
                    className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <i>Email</i>
                </div>
                <div className="inputBox relative w-full">
                  <input
                    className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <i>Password</i>
                </div>
                <div className="inputBox relative w-full">
                  <input
                    className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
                    type="password"
                    name="repassword"
                    value={form.repassword}
                    onChange={handleChange}
                    required
                  />
                  <i>Re-enter password</i>
                </div>
                <div className="inputBox relative w-full ">
                  <input
                    className="relative w-full rounded font-semibold text-xl py-2 -mt-2 cursor-pointer text-white bg-blue-700 border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-300 transition-all duration-700 ease-in-out"
                    type="submit"
                    value="Register"
                  />
                </div>
                <div className="links cursor-pointer relative w-full flex justify-end">
                  <a onClick={() => setFlipped(false)}>
                    Already have an account? <u>Login</u>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* forgot password container */}
      <div
        className={` ${
          forgot ? "top-[35%]" : "-top-full"
        } absolute transition-all duration-1000 text-white w-96 p-8 bg-gray-950 bg-opacity-35 rounded-lg backdrop-blur-md backdrop-saturate-150 border-2 border-blue-950 border-opacity-40`}
      >
        <form
          className="inputBox relative w-full flex flex-col gap-8"
          method="POST"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div className="flex justify-between items-center">
            <h2 className=" font-sans font-semibold text-xl text-blue-500">
              Forgot Password
            </h2>
            <svg
              className="w-6 h-6 hover:bg-gray-800 p-1 rounded"
              fill="currentColor"
              viewBox="0 0 20 20"
              onClick={() => setForgot(false)}
            >
              {/* Close (X) Icon */}
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <input
              className="relative w-full bg-gray-800 border-none outline-none rounded font-sans text-base font-semibold text-gray-50 px-2 pt-3 pb-2"
              type="email"
              required
            />
            <i>Email</i>
          </div>
          <input
            className="relative w-full rounded font-semibold text-xl py-2 -mt-2 cursor-pointer text-white bg-blue-700 border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-300 transition-all duration-700 ease-in-out"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
}
export default Login;
