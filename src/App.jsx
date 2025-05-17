import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import Users from "./Users";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(() =>
    JSON.parse(localStorage.getItem("isSignIn")) ?? true
  );
  const [users, setUsers] = useState(() =>
    JSON.parse(localStorage.getItem("users")) || []
  );


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("isSignIn", JSON.stringify(isSignIn));
  }, [isSignIn]);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 p-8">
      <div className="max-w-2xl text-center text-white mb-10">
        <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
        <p className="text-lg mt-2 opacity-80">
          Elevate your experience with smooth authentication and user management. Join us today!
        </p>
      </div>

    
      <div className="flex flex-col items-center gap-6 w-full">

        <div className="max-w-md p-6 bg-white/10 backdrop-blur-lg shadow-xl rounded-lg w-full text-white relative z-10">
          {isSignIn ? (
            <Signin
              onSignUp={() => setIsSignIn(false)}
              users={users}
              onSignIn={(details) => console.log("Sign In Details:", details)}
            />
          ) : (
            <Signup
              onSignIn={() => setIsSignIn(true)}
              setUsers={setUsers}
              users={users}
              onSignUp={(details) => console.log("Sign Up Details:", details)}
            />
          )}
        </div>


        {users.length > 0 && (
          <div className="w-full max-w-md bg-white/10 p-4 rounded-lg shadow-md mt-6 overflow-y-auto max-h-[300px] relative z-0">
            <Users users={users} setUsers={setUsers} />
          </div>
        )}
      </div>

      <div className="fixed bottom-1 right-4 text-black text-lg font-bold tracking-wide px-4 py-2 shadow-lg bg-transparent rounded-full hover:bg-red-200 transition duration-300 cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95">
        𝖋𝖆𝖍𝖆𝖉
      </div>
    </div>
  );
};

export default App;
