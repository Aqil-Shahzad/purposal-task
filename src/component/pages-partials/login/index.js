import "../../../app/globals.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import {app} from "../../firebase";

const auth= getAuth(app);
export default function SignIn() {
  const router = useRouter();

  // const goToSign = () => {
  //   router.push("project");
  // };
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const signInUser=()=>{
    signInWithEmailAndPassword(auth,email,password).then((value)=>console.log("Successfully SignedIn"));
  }

  return (
    <>
      <div className="flex justify-center items-center lg:flex-row flex-col lg:h-full lg:w-full">
        <div className=" flex justify-center items-center background-color lg:h-[60rem] h-96 lg:w-2/4 w-full relative flex lg:flex-row flex-col lg:justify-center  ">
          <div className="bg-cover lg:block hidden overflow-hidden relative">
            <Image
              src="/svg/bg-img.svg"
              alt="Landscape picture"
              width={800}
              height={500}
            />
          </div>
          <div className=" absolute lg:flex-row flex-col  py-10 mt-10 ">
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

        <div className=" flex flex-col justify-center items-center lg:w-2/4 w-full lg:px-0 px-5 lg:py-0 py-5 space-y-5">
         
          <h2 className="text-5xl font-bold text-color-blue">Welcome</h2>
          <div>
            <input
               onChange={(e)=> setEmail(e.target.value)}
                value={email}
              type="text"
              placeholder="User Name"
              className="p-3 rounded-lg lg:w-80 md:w-72 w-48"
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
            <button onClick={signInUser}  className="background-color p-3 rounded-lg lg:w-80 w-48 text-color-white">
              SignIn
            </button>
          </div>
          <div>
            <Link href={"sign-up"}>
              <p> Dont have an account? SignUp Here </p>
            </Link>
          </div>
          {/* <div>
            <button onClick={goToSign}> Go to Project Create Page </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
