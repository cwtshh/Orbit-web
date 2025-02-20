"use client";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PrimaryButton from "./components/button/PrimaryButton";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex flex-col gap-10 items-center justify-center min-h-screen py-2">
        <div className="w-[80%] bg-steel-gray-100 p-4 rounded-xl shadow-md">
          <h1 className="font-bold text-xl">Bem vindo ao Orbit 🪐</h1>
          <p>
            Conecte-se, compartilhe e explore ideias que orbitam ao seu redor. O
            universo das conversas está aqui!
          </p>

          <p>
            Orbit é uma rede social desenvolvida como um projeto de aprendizado,
            focada em conectar pessoas de forma intuitiva e acessível em
            qualquer dispositivo. Criada com tecnologias modernas, Orbit permite
            que os usuários compartilhem ideias, interajam com amigos e
            descubram novos conteúdos, tudo em uma experiência fluida e
            otimizada.
          </p>
        </div>

        <div>
          <PrimaryButton onClick={() => router.push("/login")}>
            Junte-se ao Orbit e explore um novo universo de conexões! 🌍🚀
          </PrimaryButton>
        </div>
        <div className="p-4 rounded-xl w-96 flex flex-col gap-4">
          <p className="text-center text-sm">&copy; 2025 Orbit.</p>
          <div className="flex gap-4 justify-center">
            <a className="text-black bg-slate-300 p-3 rounded-xl text-2xl">
              <FaGithub />
            </a>

            <a className="text-black bg-slate-300 p-3 rounded-xl text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
