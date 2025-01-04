export default function ProjectsSection() {
  return (
    <div className="flex flex-col items-center gap-10 text-white my-10">
      <h1 className="text-4xl font-bold">Projetos</h1>
      <div className="flex gap-5">
        <button>Tudo</button>
        <button>Web</button>
        <button>Mobile</button>
      </div>
    </div>
  )
}