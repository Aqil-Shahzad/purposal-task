import "../../../app/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import {app} from "../firebase";



const auth= getAuth(app);
export default function SignIn() {

  const router = useRouter();

  const goToSignUp = () => {
    router.push("sign-up");
  };
  const [email,setEmail]=useState("");
  const [password,setPassword]=setPassword("");
  const createUser=()=>{
    createUserWithEmailAndPassword(getAuth,email,password)
  }

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:h-full lg:w-full">
        <div className="background-color lg:h-[60rem] h-96 w-2/4 relative flex lg:flex-row flex-col lg:justify-center  ">
          <div className="bg-cover lg:block hidden overflow-hidden relative">
            <Image
              src="/svg/bg-img.svg"
              alt="Landscape picture"
              width={800}
              height={500}
            />
          </div>
          <div className="absolute lg:flex-row flex-col py-10 mt-10 ">
            <div className=" ">
              <Image
                src="/svg/icon.svg"
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center mx-20 space-y-8 ml-50">
          <h2 className="text-5xl font-bold text-color-blue">Welcome</h2>
          <div>
            <input onChange={(e)=> setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="User Name"
              className="p-3 rounded-lg w-80"
            ></input>
          </div>
          <div>
            <input onChange={(e)=> setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg w-80"
            ></input>
          </div>

          <div>
            <button className="background-color p-3 rounded-lg w-80">
              SignIn
            </button>
          </div>
          <div>
            <Link href={"sign-up"}>
              <p> Dont have an account? SignUp Here </p>
            </Link>
          </div>
          <div>
            <button onClick={goToSignUp}> Go to SignUp </button>
          </div>
        </div>
      </div>
    </>
  );
}
