"use client";
import { useRouter } from "next/navigation";
import React from "react";

const UserPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>User Page</h1>
      <button className="btn btn-primary" onClick={() => router.push("/admin")}>
        Create
      </button>
    </div>
  );
};

export default UserPage;
