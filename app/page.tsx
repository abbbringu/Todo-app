import Image from "next/image";
import Main_Nav from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full justify-start gap-5 bg-blue-gray-50">
      <div className="w-full pt-5">
        <Main_Nav />
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="max-w-screen-2xl w-full bg-cyan-300">
          <h1>hello world! This is the main page</h1>
        </div>
      </div>
    </main>
  );
}
