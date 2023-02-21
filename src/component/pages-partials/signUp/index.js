import "../../../app/globals.css";
import Image from "next/image";

export default function SignUp() {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:h-full lg:w-full">
        <div className=" background-color lg:h-[60rem] h-96 w-2/4 relative flex lg:flex-row flex-col lg:justify-center  ">
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
        <div className=" lg:height lg:w-2/4 py-5 ">
          <div className=" flex flex-col justify-center items-center mx-20 lg:mt-11 space-y-8 ml-50">
            <h2 className="text-5xl font-bold text-color-blue">Welcome</h2>
            <div className="lg:space-y-0 space-y-3">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg lg:w-40 w-80"
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg lg:w-40 w-80 lg:ml-1"
              ></input>
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-3 rounded-lg w-80"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-lg w-80"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 rounded-lg w-80"
              ></input>
            </div>
            <div>
              <button className="background-color p-3 rounded-lg w-80 text-color-white text-base ">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
