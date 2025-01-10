import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative">
      <nav className="text-white">
        <p className="text-2xl py-4 mt-2 absolute">higor.dev</p>
        <div className="flex gap-5 absolute right-0 mt-2">
          
          <Link
            href="#Sobre"
            className="hidden md:inline text-lg px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600"
          >
            <p className="block px-4 py-3 bg-[#242424] rounded-full">
              Sobre
            </p>
          </Link>
          <Link
            href="#Projetos"
            className="hidden md:inline text-lg px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600"
          >
            <p className="block px-4 py-3 bg-[#242424] rounded-full">
              Projetos
            </p>
          </Link>
          <Link
            href="#Experiencia"
            className="hidden md:inline text-lg px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600"
          >
            <p className="block px-4 py-3 bg-[#242424] rounded-full">
              Experiência
            </p>
          </Link>
          <Link
            href="#Contatos"
            className="hidden md:inline text-lg px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600"
          >
            <p className="block px-4 py-3 bg-[#242424] rounded-full">
              Contatos
            </p>
          </Link>
          <div className="dropdown dropdown-end mt-2 md:hidden">
            <div tabIndex={0} role="button" className="btn m-1">
              <MenuIcon></MenuIcon>
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <a>Sobre</a>
              </li>
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <a>Projetos</a>
              </li>
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <a>Experiência</a>
              </li>
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <a>Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
