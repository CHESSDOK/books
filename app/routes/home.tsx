import type { Route } from "./+types/home";
import heroImg from "../assets/hero.jpg";
import Bodys from "../components/Body";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <section
        className="relative w-full h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug uppercase">
            Access a thousand of book
            <br />
            with-in your browser
            <br />
            Download or read online
          </h1>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Get Started
          </button>
        </div>
      </section>
      <Bodys />
    </>
  );
}
