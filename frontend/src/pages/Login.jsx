import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Navbar at the top */}
      <Navbar />

      {/* Login form content */}
      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
        <div className="bg-white shadow-md rounded-lg p-8 w-96">
            <div className="flex justify-center text-3xl font-bold">
                <div className="text-black">Welcome to</div>
                <div className="text-[#443dff] ml-2">100xDevs</div>
            </div>
          <h2 className="mb-6 text-center">Log in to access paid content!</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                placeholder="Enter your password"/>
            </div>
            <button
              type="submit"
              className="w-full bg-[#443dff] text-white py-2 rounded-md font-medium hover:bg-[#322ecc]">Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

