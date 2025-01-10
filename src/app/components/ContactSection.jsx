import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="Contatos" className="flex flex-col text-white mt-10 border-t-2 border-slate-400 mb-10 sm:mb-24">
      <div className="flex flex-col gap-8 md:w-2/5 mt-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Vamos nos conectar</h1>
          <p>
            Atualmente estou em busca de novas oportunidades, minha caixa de
            entrada está sempre aberta. Se você tiver alguma dúvida ou apenas
            quiser dizer oi, farei o possível para entrar em contato com você!
          </p>
        </div>
        <div className="flex gap-4">
          <Link href={"https://github.com/HigorSR"} target="_blank">
            <GitHubIcon
              sx={{ fontSize: 60 }}
              className=" hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600 rounded-full p-1"
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/higor-silva-rocha/"}
            target="_blank"
          >
            <LinkedInIcon
              sx={{ fontSize: 60 }}
              className="hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600 rounded-full p-1"
            />
          </Link>
          <a href="mailto:higor_36rocha@hotmail.com?subject=Estou interessado no seu trabalho&body=Conteúdo do email que será preenchido automaticamente">
            <EmailIcon
              sx={{ fontSize: 60 }}
              className="hover:bg-gradient-to-br hover:from-orange-600 hover:to-purple-600 rounded-full p-1"
            />
          </a>
        </div>
      </div>
      <form action=""></form>
    </section>
  );
}
