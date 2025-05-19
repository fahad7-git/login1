import { useForm } from "react-hook-form";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = ({ onSignUp, users }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Signin details:", data);
    const userExists = users.find((user) => user.email === data.email && user.password === data.password);

    if (userExists) {
      toast.dismiss();
      toast.success("Welcome back!");
    } else {
      toast.dismiss();
      toast.error("User not found!");
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <p className="text-red-400 text-sm min-h-[16px]">{errors.email?.message}</p>
        </div>

        <div>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <p className="text-red-400 text-sm min-h-[16px]">{errors.password?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
      </form>

      <div className="text-center mt-6">
        <span className="text-white/80">Don't have an account?</span>
        <button onClick={onSignUp} className="ml-2 text-blue-300 hover:underline">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signin;
