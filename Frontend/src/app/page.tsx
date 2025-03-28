import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">AuthEase</h1>
      <p className="text-gray-600 mb-4">Welcome to the application.</p>

      <div className="flex gap-4">
        <Link
          href="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </Link>
        <Link
          href="/login"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
