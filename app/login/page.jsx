"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { ClipLoader } from "react-spinners";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setError("Invalid email or password. Please try again.");
        setSubmitting(false);
      } else {
        setSubmitting(false);
        router.push("/"); // Redirect to home page on successful login
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form
        onSubmit={handleLogin}
        className="mt-10 w-full max-w-xl flex flex-col gap-7 glassmorphism"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-center">
            Login to <span className="orange_gradient">RedSight</span>
          </h2>

          <p className="font-satoshi text-gray-700">
            Monitor and manage traffic violations in real-time
          </p>
        </div>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Email
          </span>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            required
            className="form_input"
          ></input>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Password
          </span>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            required
            className="form_input"
          ></input>
        </label>

        <div className="mt-6">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="black_btn w-full !p-3 !rounded-md hover:bg-black hover:text-white"
          >
            {submitting ? (
              <ClipLoader
                color="#ffffff"
                loading={true}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
