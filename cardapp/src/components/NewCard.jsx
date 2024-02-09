/* eslint-disable no-unused-vars */
import { response } from "express";
import React, { useEffect, useState } from "react";


const UsersList = () => {
 const [users, setUsers] = useState([]);
 console.log(UsersList);

 useEffect(() => {
  const fetchData = async() => {
    try{
      const response = await fetch('http://localhost:3000/user');
      console.log(response);
      const data = await response.json();
      console.log(data);
      setUsers(data);
    }catch(error){
      console.error('error occured in finding users data', error);
    }
  };

  
 }, []);

 return(
  <div>
  <h1>User List</h1>
  <div className="user-cards">
    {users.map(user => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
</div>
 )
}


function UserCard() {

  

  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{UsersList.name}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black">
          View Profile →
        </button>
      </div>
    </div>
  );
}

export default UsersList;
