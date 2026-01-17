import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold">iPhone 17pro</h1>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <a className="hover:text-gray-300" href="#design">Design</a>
          <a className="hover:text-gray-300" href="#camera">Camera</a>
          <a className="hover:text-gray-300" href="#perfomance">Performance</a>
          <a className="hover:text-gray-300" href="#cores">Cores</a>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-3xl">
            Comprar
          </button>
        </div>

        {/* BOTÃO HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} color="#fff"/> : <Menu size={28} color="#fff"/>}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/95 px-6 py-8 flex flex-col gap-6 text-center">
          <a onClick={() => setOpen(false)} href="#design">Design</a>
          <a onClick={() => setOpen(false)} href="#camera">Camera</a>
          <a onClick={() => setOpen(false)} href="#perfomance">Performance</a>
          <a onClick={() => setOpen(false)} href="#cores">Cores</a>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-3xl">
            Comprar
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
