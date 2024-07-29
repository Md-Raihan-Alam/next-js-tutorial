"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  // if (status==="loading")
  //     return null;
  return (
    <div className="flex bg-slate-200 p-5 mb-2 space-x-3">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/admin">Admin</Link>
      {status === "loading" && <div>Loading..</div>}
      {status === "authenticated" && <div>{session.user!.name}</div>}
      {status === "authenticated" && (
        <Link href="/api/auth/signout" className="ml-3">
          Sign Out
        </Link>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {/*page is created after auth */}
    </div>
  );
};

export default NavBar;
