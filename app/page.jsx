
import Partners from "@/components/Partners";
import Backed from "@/components/Backed";
import Features from "@/components/Features";;
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Video />
      <Partners />
      <br></br>
      <br></br>
      <Backed />
      <br></br>
      <br></br>
    </>
  );
}
