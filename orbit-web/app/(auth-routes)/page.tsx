"use client";
import { NotifyToast } from "@/components/notify_toast/NotifyToast";
import PrimaryButton from "@/components/primary_button/PrimaryButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Home = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    if (result?.error) {
      // NotifyToast("ERRO");
      console.log("ERROR");
      return;
    }

    router.replace("feed");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="font-bold text-xl">Bem vindo ao Orbit 🪐</h1>
        <p>
          Conecte-se, compartilhe e explore ideias que orbitam ao seu redor. O
          universo das conversas está aqui!
        </p>
      </div>

      <div className="bg-steel-gray-100 p-4 rounded-xl w-96 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <label className="flex flex-col gap-2 w-full ">
            <span className="font-bold">Nome de Usuário:</span>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="rounded-xl p-2"
            />
          </label>

          <label className="flex flex-col gap-2 w-full">
            <span className="font-bold">Senha:</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="rounded-xl p-2"
            />
          </label>

          <PrimaryButton type="submit">Entrar</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default Home;
