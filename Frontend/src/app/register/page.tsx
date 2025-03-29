"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState<{ firstName: string; lastName: string; email: string; password: string }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]); // Store multiple error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]); // Clear previous errors

    try {
      const res = await fetch("http://localhost:4000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();

        // Check if the response contains validation errors
        if (errorData.error && Array.isArray(errorData.error)) {
          setErrors(errorData.error); // Set validation errors from API response
        } else {
          // Handle other errors (e.g., server error or unknown error)
          setErrors([errorData.message || "An unknown error occurred"]);
        }
      } else {
        alert("Registration successful! You can now log in.");
        router.push("/login");
      }
    } catch (err: any) {
      // Catch any unexpected errors, like network issues
      setErrors([err.message || "An error occurred. Please try again."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Registerr</h1>

      {/* Display error messages */}
      {errors.length > 0 && (
        <div className="text-red-500 mb-2">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="mt-2">
        Already have an account? <a href="/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
}
