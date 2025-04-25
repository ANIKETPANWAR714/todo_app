"use client";
import Form from "./components/Form";
import TODOHero from "./components/TODOHero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-100 via-lime-50 to-green-100 flex flex-col items-center justify-start py-12 px-4 gap-12">
      <h1 className="text-[64px] md:text-[80px] font-extrabold text-green-700 drop-shadow-md text-center">
        🌟 TODO APP
      </h1>
      <TODOHero />
      <div className="w-full max-w-3xl">
        <Form />
      </div>
    </div>
  );
}
