import "../../../app/globals.css";
import Image from "next/image";
import { app, database } from "../../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

export default function Project() {
  const databaseRef = collection(database, "CRUD data");
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [fireData, setFireData] = useState([]);

  // // useEffect(() => {
  // //   let token = sessionStorage.getItem("Token");
  // //   if (token) {
     
  // //   }
  //   // if (!token) {
  //   //   router.push('/register')
  //   // }
  // }, []);
  const addData = () => {
    addDoc(databaseRef, {
      name: name,
      age: Number(age),
    })
      .then(() => {
        alert("Data send");
        setName(""), setAge(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setFireData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

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
        <div className="flex flex-col justify-center items-center  py-36 space-y-8">
          <h1 className="text-4xl font-bold">Home Page</h1>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            placeholder="Enter Name"
            className="p-3 rounded-lg lg:w-80 md:w-72 w-48"
          ></input>
          <input
            onChange={(event) => setAge(event.target.value)}
            value={age}
            type="number"
            placeholder="Enter Age"
            className="p-3 rounded-lg lg:w-80 md:w-72 w-48"
          ></input>
          <button
            onClick={addData}
            className="p-3 rounded-lg lg:w-80 md:w-72 w-48 background-color text-color-white"
          >
            Add Data
          </button>
          <button
            onClick={ getData}
            className="p-3 rounded-lg lg:w-80 md:w-72 w-48 background-color text-color-white"
          >
            Show Data
          </button>
          <div>
            {fireData.map((data) => {
              return (
                <>
                <div className="background-color p-5 w-80 text-color-white ">
                <h3 >Name: {data.name}</h3>
                  <p>Age: {data.age}</p>
                </div>
                 
                </>
              );
            })}
          </div>
        </div>
       
      </div>
    </>
  );
}
