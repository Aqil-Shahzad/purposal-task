import "../../../app/globals.css";
import Image from "next/image";
import { app, database } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

export default function Project() {
  const databaseRef = collection(database, "CRUD data");
  const [ID, setID] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [fireData, setFireData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

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

  const getID = (id, name, age) => {
    setID(id)
    setName(name)
    setAge(age)
    setIsUpdate(true)
  }

  const updateFields = () => {
    let fieldToEdit = doc(database, 'CRUD data', ID);
    updateDoc(fieldToEdit, {
      name: name,
      age: Number(age)
    })
    .then(() => {
      alert('Data Updated')
      getData()
      setName('')
      setAge(null)
      setIsUpdate(false)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  const deleteDocument = (id) => {
    let fieldToEdit = doc(database, "CRUD data", id);
    console.log(fieldToEdit);
    deleteDoc(fieldToEdit)
      .then(() => {
        alert("Data Deleted");
        getData();
      })
      .catch((err) => {
        alert("Cannot Delete that field..");
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
        <div className="flex flex-col justify-center items-center  py-8 space-y-8">
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
            className="p-3  rounded-lg lg:w-80 md:w-72 w-48"
          ></input>
         {isUpdate ? (
          <button
          className="p-3 rounded-lg lg:w-80 md:w-72 w-48 background-color text-color-white"
            onClick={updateFields}
          >
            UPDATE
          </button>
        ) : (
          <button
          className="p-3 rounded-lg lg:w-80 md:w-72 w-48 background-color text-color-white"
            onClick={addData}
          >
            ADD
          </button>
        )}





          <button
            onClick={getData}
            className="p-3 rounded-lg lg:w-80 md:w-72 w-48 background-color text-color-white"
          >
            Show Data
          </button>
          <div>
            {fireData.map((data) => {
              return (
                <>
                  <div className="background-color-gray">
                    <div className="background-color rounded-lg p-5 w-80 text-color-white my-3 ">
                      <h3>Name: {data.name}</h3>
                      <p>Age: {data.age}</p>
                      <button
                        className="background-color-gray p-3 my-2 rounded-lg text-color-black "
                        onClick={() => getID(data.id, data.name, data.age)}
                      >
                        Update
                      </button>
                      <button
                        className="background-color-gray p-3 my-2 rounded-lg text-color-black ml-2"
                        onClick={() => deleteDocument(data.id)}
                      >
                        Delete
                      </button>
                    </div>
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
