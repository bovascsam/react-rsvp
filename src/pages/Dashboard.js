import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const colRef = collection(db, "users");
  let user = [{}];
  useEffect(() => {
     getDocs(colRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        user.push({ ...doc.data(), id: doc.id });
      });
      console.log(user)
    })

    .catch((err) => {
      console.log(err.message);
    });


  })
 
  return (
    <div>
      <h3>{user.attending}</h3>
      <h3>Home</h3>
    </div>
  );
};

export default Dashboard;
