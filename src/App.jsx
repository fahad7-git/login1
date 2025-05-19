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
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 p-4 sm:p-8">
      <div className="w-full max-w-2xl text-center text-white mb-6 sm:mb-10 px-2">
        <h1 className="text-3xl sm:text-5xl font-bold">Welcome to Our Platform</h1>
        <p className="text-base sm:text-lg mt-2 opacity-80">
          Elevate your experience with smooth authentication and user management. Join us today!
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">

        <div className="w-full max-w-md p-4 sm:p-6 bg-white/10 backdrop-blur-lg shadow-xl rounded-lg text-white relative z-10">
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
          <div className="w-full max-w-md bg-white/10 p-3 sm:p-4 rounded-lg shadow-md mt-4 sm:mt-6 overflow-y-auto max-h-[200px] sm:max-h-[300px] relative z-0">
            <Users users={users} setUsers={setUsers} />
          </div>
        )}
      </div>

      <div className="fixed bottom-1 right-2 sm:right-4 text-black text-base sm:text-lg font-bold tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg bg-transparent rounded-full hover:bg-red-200 transition duration-300 cursor-pointer hover:scale-105 hover:shadow-lg active:scale-95">
        𝖋𝖆𝖍𝖆𝖉
      </div>
    </div>
  );
};

export default App;
