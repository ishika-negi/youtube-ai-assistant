import { FaYoutube } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

function Header() {
  return (
    <div className="flex justify-between items-start">

      <div className="flex gap-3">

        <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center">

          <FaYoutube className="text-white text-2xl"/>

        </div>

        <div>

          <h1 className="text-2xl font-bold">

            YouTube AI

          </h1>

          <p className="text-gray-400 text-sm">

            Learn faster with AI

          </p>

        </div>

      </div>

      <button className="text-gray-400 hover:text-white">

        <FiSettings size={22}/>

      </button>

    </div>
  );
}

export default Header;