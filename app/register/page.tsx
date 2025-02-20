"use client";
import React, { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "../utils/constants";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  console.log(API_URL);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === "" ||
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    await axios
      .post(`${API_URL}/user/register`, {
        username,
        name,
        email,
        password,
        confirmPassword,
      })
      .then(() => {
        alert("Conta criada com sucesso!");
        router.push("/login");
      })
      .catch(() => {
        alert("Erro ao criar conta!");
      });
  };

  return (
    <div>
      <div className="flex flex-col gap-10 items-center justify-center min-h-screen py-2">
        <div>
          <h1 className="font-bold text-xl">Crie sua conta no Orbit 🌌</h1>
          <p>
            Conecte-se com o mundo, compartilhe o que importa e descubra novas
            perspectivas. 🚀
          </p>
        </div>

        <div className="bg-steel-gray-100 p-4 rounded-xl w-96 shadow-md">
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <p className="font-bold">Nome de Usuário:</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="rounded-xl p-2 shadow-sm"
              placeholder="Digite seu nome de usuário..."
            />

            <p className="font-bold">Nome:</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="rounded-xl p-2 shadow-sm"
              placeholder="Digite seu nome de usuário..."
            />

            <p className="font-bold">Email:</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
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

            <p className="font-bold">Confirme sua Senha:</p>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="rounded-xl p-2 shadow-sm"
              placeholder="Digite sua senha..."
            />

            <PrimaryButton type="submit">Cadastrar</PrimaryButton>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          <p>Já tem conta?</p>
          <PrimaryButton onClick={() => router.push("/register")}>
            Logar
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Page;
