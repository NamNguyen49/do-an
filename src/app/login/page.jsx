import Link from "next/link";
import Image from "next/image";
import "../styles/login.module.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <main
      className=" background min-h-screen flex items-center justify-center "
      style={{ background: "linear-gradient(to bottom, #9CCECB, #4CA1A3)" }}
    >
      <div className="flex w-3/4">
        <div className="w-3/4 flex items-center justify-center">
          <div className="w-4/5 max-h-full rounded-md overflow-hidden">
          
            <img
              src="/images/image1.png"
              alt="Image 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            
          </div>
        </div>
        <div className="w-1/3 p-8 shadow-md rounded-md bg-white flex flex-col items-center ">
          <h1 className="text-3xl font-bold mb-6">Log In</h1>
          <div className="mb-4 w-3/4">
            <div className="flex justify-between">
              <div className="w-1/2 mr-2">
                <button
                  type="button"
                  className="bg-transparent border border-gray-300 text-gray-700 rounded-md px-4 py-2 flex items-center justify-center w-full hover:bg-gray-100 transition duration-300 shadow-md focus:ring-2 focus:ring-gray-300"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-blue-500 text-lg"
                  />

                  <span className="ml-2 font-semibold text-sm">FACEBOOK</span>
                </button>
              </div>
              <div className="w-1/2 ml-2">
                <button
                  type="button"
                  className="bg-transparent border border-gray-300 text-gray-700 rounded-md px-4 py-2 flex items-center justify-center w-full hover:bg-gray-100 transition duration-300 shadow-md focus:ring-2 focus:ring-gray-300"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-red-500 text-lg"
                  />

                  <span className="ml-2 font-semibold text-sm">GOOGLE</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="w-1/3 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500 font-semibold">or</span>
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>

          <div className="w-3/4 text-center flex flex-col items-center">
            <input
              type="text"
              placeholder="Your email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 mb-4"
            />
            <input
              type="password"
              placeholder="Your password"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500 mb-4"
            />
            <Link href="/">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-md px-4 py-2 w-full mt-4 hover:bg-blue-600 transition duration-300"
              style={{ backgroundColor: "#4D70EB", fontWeight: "bold" }}
            >
              SIGN IN
            </button>
            </Link>
            <p className="text-center mt-4 text-gray-700">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span style={{ color: "#4d70eb", fontWeight: "bold" }}>
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
