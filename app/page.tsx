"use client";
import MyMap from "./Map";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div>
        <MyMap />
      </div>

      <div className="absolute z-100 m-4 p-2 bg-black">
        <Link href="/anotherpage">Next.js Link</Link>
      </div>
    </main>
  );
}
