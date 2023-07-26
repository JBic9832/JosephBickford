import Navbar from "./Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <main
        className={`${inter.className} px-10 py-10 lg:py-0 md:px-52 lg:px-96 `}
      >
        {children}
      </main>
    </>
  );
}
