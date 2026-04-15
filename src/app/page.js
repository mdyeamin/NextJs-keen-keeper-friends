import Image from "next/image";
import Header from "./components/Home/Header";
import AllFriends from "./components/Home/AllFriends";
import { Geist } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <>
    <Header />
    <AllFriends/>
    </>
  );
}
