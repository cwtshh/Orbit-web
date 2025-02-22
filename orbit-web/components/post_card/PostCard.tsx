import { API_URL } from "@/utils/constants";
import { PostType } from "@/utils/types/PostType";
import Image from "next/image";
import React from "react";
import { FaComments, FaHeart } from "react-icons/fa";

interface PostCardProps {
  post: PostType;
}

const PostCard = ({ post }: PostCardProps) => {
  const image_path = `${API_URL}/user/photo/${post.user._id}/${post._id}`;

  return (
    <div className="bg-steel-gray-200 p-4 rounded-lg flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="bg-steel-gray-950 w-14 h-14 rounded-full"></span>
        <div className="text-sm">
          <p className="font-bold">{post.user.username}</p>
          <p>{new Date(post.createdAt).toLocaleDateString("pt-br")}</p>
        </div>
      </div>

      <div>
        <p>{post.content}</p>

        {post.photo && (
          <img
            className="h-96 object-cover rounded-lg"
            alt={`${post.user.name} post photo`}
            src={image_path}
          />
        )}
      </div>

      <div className="flex gap-6">
        <div className="flex items-center gap-3">
          <FaHeart className="text-steel-gray-500" />
          <p>{post.likes}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaComments className="text-steel-gray-500" />
          <p>{post.comments_count}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
