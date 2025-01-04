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
        </div>
      </nav>
    </div>
  );
}
