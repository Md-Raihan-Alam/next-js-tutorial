import Link from "next/link";
import ProductCard from "./componenets/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      {/* <a href="/users">Users</a> {not optimal way  */}
      <Link href="/users" className="btn btn-primary">
        User Page
      </Link>
      <br />
      <Link href="/users/new" className="btn btn-primary">
        Users
      </Link>
      <ProductCard></ProductCard>
      <Link href="/image" className="btn btn-primary">
        Image
      </Link>
    </main>
  );
}
export const metadata: Metadata = {
  title: "...",
};
export async function generateMetadat(): Promise<Metadata> {
  const product = await fetch("");
  return {
    title: "..",
    description: "..",
  };
}
