import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { SquareCheckBig } from "lucide-react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const success = login(email, password);

    if (success) {
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-black text-white relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-white/5 rounded-full" />

        <div className="relative z-10 flex flex-col justify-center px-16 xl:px-24">

          <div className="mb-10">

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
              <SquareCheckBig size={26} strokeWidth={2.5} />
            </div>

            <h1 className="text-5xl font-bold tracking-tight">
              Todo<span className="text-gray-400">App</span>
            </h1>

            <p className="mt-5 text-gray-400 text-lg max-w-md leading-relaxed">
              Organize your tasks, manage your day, and stay focused on what
              really matters.
            </p>

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                ✓
              </div>

              <span className="text-gray-300">
                Organize your daily tasks
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                ✓
              </div>

              <span className="text-gray-300">
                Track your progress
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                ✓
              </div>

              <span className="text-gray-300">
                Get things done faster
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10">

        <div className="w-full max-w-md">

          <div className="mb-10">

            <h2 className="text-4xl font-bold text-gray-900">
              Welcome back
            </h2>

            <p className="mt-3 text-gray-500">
              Login to continue managing your tasks.
            </p>

          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >

            {/* Email */}
            <div>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3.5 rounded-xl border outline-none transition focus:ring-2 focus:ring-black/5 ${error
                  ? "border-red-300 focus:border-red-400"
                  : "border-gray-200 focus:border-black"
                  }`}
              />

            </div>

            {/* Password */}
            <div>

              <div className="flex items-center justify-between mb-2">

                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                {/* <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-black transition"
                >
                  Forgot password?
                </button> */}

              </div>

              {/* Password input */}
              <div className="relative">

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-3.5 pr-20 rounded-xl border outline-none transition focus:ring-2 focus:ring-black/5 ${error
                    ? "border-red-300 focus:border-red-400"
                    : "border-gray-200 focus:border-black"
                    }`}
                />

                {/* Show / Hide */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 cursor-pointer hover:text-black transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              {/* Error */}
              {error && (
                <p className="mt-2 text-sm text-red-500">
                  {error}
                </p>
              )}

            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full py-3.5 bg-black text-white rounded-xl cursor-pointer font-medium transition duration-300 hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0"
            >
              Login
            </button>

          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            Manage your tasks. Stay focused. Get things done.
          </p>

        </div>

      </div>

    </div>
  );
};