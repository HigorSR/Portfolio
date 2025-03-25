import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative">
      <nav className="text-white">
        <p className="text-2xl py-4 mt-2 absolute">higor.dev</p>
        <div className="flex gap-3 absolute right-0 mt-3">
          <Link
            href="#Sobre"
            className="hidden lg:inline text-lg px-1 py-1 rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600"
          >
            <p className="block px-4 py-3 bg-[#242424] rounded-full">Sobre</p>
          </Link>
          <Link
            href="#Projetos"
            className="hidden lg:inline text-lg px-1 py-1 rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600"
          >
            <p className="block px-4 py-3 bg-[#242424] rounded-full">
              Projetos
            </p>
          </Link>
          <Link
            href="#Experiencia"
            className="hidden lg:inline text-lg px-1 py-1 rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600"
          >
            <p className="block px-4 py-3 bg-[#242424] rounded-full">
              Experiência
            </p>
          </Link>
          {/* mobile menu */}
          <div className="dropdown dropdown-end mt-1 lg:hidden">
            <div tabIndex={0} role="button" className="btn m-1">
              <MenuIcon></MenuIcon>
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <Link href="#Sobre">Sobre</Link>
              </li>
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <Link href="#Projetos">Projetos</Link>
              </li>
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <Link href="#Experiencia">Experiência</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
