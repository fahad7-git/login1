import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = ({ onSignIn, setUsers, users }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    const updatedUsers = [...users, data];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("Account created!");
    reset();
  };

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Create Account</h2>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Enter your full name"
          className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        {errors.name && <div className="text-red-400 text-sm">{errors.name.message}</div>}

        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Enter your email address"
          className="w-90 p-3 border-b border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        {errors.email && <div className="text-red-400 text-sm">{errors.email.message}</div>}

        <input
          {...register("password", { required: "Password is required", minLength: { value: 5, message: "Password must be at least 5 characters long" } })}
          type="password"
          placeholder="Create a secure password"
          className="w-full p-3 border-b border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        {errors.password && <div className="text-red-400 text-sm">{errors.password.message}</div>}

        <button type="submit" className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-500 transition duration-300">
          Sign Up
        </button>
      </form>

      <div className="text-center mt-4">
        <span className="text-white/80">Already have an account?</span>
        <button onClick={onSignIn} className="ml-2 text-green-300 hover:underline">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signup;
