import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div className="relative">
      <nav className="text-white">
        <p className="text-2xl py-4 mt-2 absolute">higor.dev</p>
        <div className="flex gap-5 absolute right-0 mt-2">
          <p className="hidden md:inline text-lg px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
            <span className="block px-4 py-3 bg-[#121212] rounded-full">
              Sobre
            </span>
          </p>
          <p className="hidden md:inline text-lg px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
            <span className="block px-4 py-3 bg-[#121212] rounded-full">
              Projetos
            </span>
          </p>
          <p className="hidden md:inline text-lg px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
            <span className="block px-4 py-3 bg-[#121212] rounded-full">
              Contatos
            </span>
          </p>
          <div className="dropdown dropdown-end mt-2 md:hidden">
            <div tabIndex={0} role="button" className="btn m-1">
              <MenuIcon></MenuIcon>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <a>Sobre</a>
              </li>
              <li className="mb-1 px-1 py-1 hover:rounded-full hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600">
                <a>Projetos</a>
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
