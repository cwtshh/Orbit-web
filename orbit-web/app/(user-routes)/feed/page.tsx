"use client";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import PostCard from "@/components/post_card/PostCard";
import PrimaryButton from "@/components/primary_button/PrimaryButton";
import { API_URL } from "@/utils/constants";
import { CustomUserSessionType } from "@/utils/types/CustomUserSessionType";
import { PostType } from "@/utils/types/PostType";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { data: session, status } = useSession();

  const user = session?.user as CustomUserSessionType;

  console.log(user);

  const get_posts = async () => {
    await axios
      .get(`${API_URL}/user/posts/all`)
      .then((res) => {
        setPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    get_posts();
  }, []);
  return (
    <div className="h-screen">
      <div className="bg-steel-gray-700 p-3 text-white flex justify-between shadow-md">
        <div>
          <h1 className="font-bold text-xl">Orbit</h1>
          <p>Conecte-se com o mundo! 🚀</p>
        </div>

        <div>
          <PrimaryButton onclick={signOut} style="flex gap-2 items-center">
            <MdLogout />
            Sair
          </PrimaryButton>
        </div>
      </div>

      <div className="flex">
        <div className=" w-1/6 bg-gray-100 rounded-lg">
          <div className="bg-steel-gray-800 p-2 h-28 text-white flex items-center gap-3">
            <span className="bg-steel-gray-950 w-14 h-14 rounded-full"></span>
            <div>
              <p className="font-bold">{user?.name}</p>
              <p className="italic">@{user?.username}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-between h-[calc(100%-7rem)]">
            <div className="p-2 flex flex-col gap-3">
              <button className="font-bold bg-steel-gray-200 p-4 rounded-lg hover:bg-steel-gray-300 ease-in-out transition-all flex items-center gap-2 justify-center">
                <FaStar />
                Blips
              </button>

              <button className="font-bold bg-steel-gray-200 p-4 rounded-lg hover:bg-steel-gray-300 ease-in-out transition-all">
                Curtidas
              </button>

              <button className="font-bold bg-steel-gray-200 p-4 rounded-lg hover:bg-steel-gray-300 ease-in-out transition-all">
                Seguindo
              </button>
            </div>

            <div className=" p-2 flex flex-col gap-3">
              <button className="font-bold bg-steel-gray-200 p-4 rounded-lg hover:bg-steel-gray-300 ease-in-out transition-all">
                Ver Perfil
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 flex-1 overflow-y-auto h-[92vh]">
          <h2 className="font-bold text-xl">Blips Recentes</h2>
          <div className="flex flex-col gap-3 mt-3">
            {posts.length > 0 ? (
              posts.map((post, index: number) => {
                return <PostCard post={post} key={index} />;
              })
            ) : (
              <div>
                <p>Nenhum Blip encontrado...</p>
              </div>
            )}
          </div>
        </div>

        <div className="p-3 w-1/6 bg-gray-100 rounded-lg">
          <h2 className="font-bold text-xl">
            Usuários que talvez você conheça
          </h2>
          {/* Aqui você pode adicionar o conteúdo relacionado aos usuários */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
