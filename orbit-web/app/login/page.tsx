"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    if (result?.error) {
      alert("Usuário ou senha incorretos!");
    } else {
      router.push("/home");
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen py-2">
      <div>
        <h1 className="font-bold text-xl">Bem vindo ao Orbit 🪐</h1>
        <p>
          Conecte-se, compartilhe e explore ideias que orbitam ao seu redor. O
          universo das conversas está aqui!
        </p>
      </div>

      <div className="bg-steel-gray-100 p-4 rounded-xl w-96 shadow-md">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <p className="font-bold">Nome de Usuário:</p>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="rounded-xl p-2 shadow-sm"
            placeholder="Digite seu nome de usuário..."
          />

          <p className="font-bold">Senha:</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="rounded-xl p-2 shadow-sm"
            placeholder="Digite sua senha..."
          />

          <PrimaryButton type="submit">Entrar</PrimaryButton>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        <p>Ainda não tem conta?</p>
        <PrimaryButton onClick={() => router.push("/register")}>
          Cadastrar
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Page;
