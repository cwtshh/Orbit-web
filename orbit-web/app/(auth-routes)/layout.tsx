import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Privatelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session) {
    redirect("/login");
  }

  return <>{children}</>;
}
