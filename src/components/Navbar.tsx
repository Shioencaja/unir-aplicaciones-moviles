import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 z-50 bg-white">
      {!isOpen ? (
        <button
          className=" px-4 py-2 bg-blue-500 hover:bg-blue-200 transition w-full h-full flex justify-center items-center rounded-lg font-black"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          menu
        </button>
      ) : (
        <div className="flex flex-col w-screen h-screen gap-2 bg-white justify-center items-center ">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-200 transition w-full h-full flex justify-center items-center rounded-lg font-black"
          >
            Inicio
          </Link>

          <Link
            href="/productos"
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-200 transition w-full h-full flex justify-center items-center rounded-lg font-black"
          >
            Productos
          </Link>
          <Link
            href="/favoritos"
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-200 transition w-full h-full flex justify-center items-center rounded-lg font-black"
          >
            Favoritos
          </Link>
        </div>
      )}
    </div>
  );
}
