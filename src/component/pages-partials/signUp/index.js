import "../../../app/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";
// import Link from "next/link";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import {app} from "../../firebase";
const auth= getAuth(app);
export default function SignUp() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const createUser=()=>{
    createUserWithEmailAndPassword(auth,email,password)
  }
  return (
    <>
      <div className="flex justify-center items-center lg:flex-row flex-col lg:h-full lg:w-full">
        <div className="flex justify-center items-center background-color lg:h-[60rem] h-96 lg:w-2/4 w-full relative flex lg:flex-row flex-col lg:justify-center  ">
          <div className=" bg-cover lg:block hidden overflow-hidden relative">
          <Image
              src="/svg/bg-img.svg"
              alt="Landscape picture"
              width={600}
              height={400}
            />
          </div>
          <div className="absolute lg:flex-row flex-col py-10 mt-10  ">
            <div className=" ">
            <Image
                src="/svg/icon.svg"
                alt="Landscape picture"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <div  className=" flex flex-col justify-center items-center lg:w-2/4 w-full lg:px-0 px-5 lg:py-0 py-5 space-y-5">
          {/* <div className=" space-y-5 "> */}
            <h2 className="text-5xl font-bold text-color-blue">Welcome</h2>
            <div>

           
            <div className="lg:space-y-0 space-y-3">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg lg:w-80 w-48"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg lg:w-80 w-48 lg:ml-1"
              ></input>
            </div>
            </div>
            <div>
              <input
               onChange={(e)=> setEmail(e.target.value)}
               value={email}
                type="email"
                placeholder="Enter your Email"
                className="p-3 rounded-lg lg:w-80 w-48"
              ></input>
            </div>
            <div>
              <input
               onChange={(e)=> setPassword(e.target.value)}
               value={password}
                type="password"
                placeholder="Password"
                className="p-3 rounded-lg lg:w-80 w-48"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 rounded-lg lg:w-80 w-48"
              ></input>
            </div>
            <div>
              <button  onClick={createUser} className="background-color p-3 rounded-lg lg:w-80 w-48 text-color-white text-base ">
                SignUp
              </button>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
