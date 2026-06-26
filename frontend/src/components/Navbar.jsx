export default function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center px-12 py-6 border-b border-slate-800">
  
        <h1 className="text-2xl font-bold">
          CodeReview AI
        </h1>
  
        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            transition
            duration-300
            px-5
            py-2
            rounded-lg
            font-semibold
          "
        >
          GitHub Login
        </button>
  
      </nav>
    );
  }