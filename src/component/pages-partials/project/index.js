import "../../../app/globals.css";
import Image from "next/image";

export default function Project() {
  return (
    <>
      <div>
        <div>
          <nav className="flex h-15 items-center justify-between px-10 py-5  background-color w-screen">
            <div>
            <h2 className="text-4xl text-color-yellow ml-10">Purposals</h2>
            </div>
           <div className="flex items-center space-x-4 float-right">
           <Image
              src="/svg/nav-img.svg"
              alt="Landscape picture"
              width={60}
              height={30}
            ></Image>
            <p className="text-color-white text-xl">Logout</p>
            <Image
              src="/svg/nav-img2.svg"
              alt="Landscape picture"
              width={20}
              height={10}
            ></Image>
           </div>
            
          </nav>
        </div>
        <div>
          <label>Project</label>
        </div>
      </div>
      {/* <div className="flex justify-center items-center lg:flex-row flex-col lg:h-full lg:w-full">
        <div className=" background-color lg:h-[60rem] h-96 lg:w-2/4 w-full relative flex lg:flex-row flex-col lg:justify-center  ">
          <div className="flex justify-center items-center bg-cover lg:block hidden overflow-hidden relative">
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
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className=" lg:flex justify-center items-center  lg:w-2/4 w-full lg:px-0 px-5 lg:py-0 py-5 ">
          <div className=" space-y-5 ">
            <h2 className="text-5xl font-bold text-color-blue">Welcome to Project component</h2>
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
                Project
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
