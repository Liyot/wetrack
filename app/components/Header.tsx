import Image from "next/image";
import NavBar from "@/app/components/navBar";

export default function Header() {
  return (
    <div className={"header border-b border-b-neutral-800 flex flex-row w-full h-14 bg-gradient-to-r from-20% from-orange-950 to-black"}>
      <Image src="/wetrack_logo.png" alt={"WeTrack logo"} width={100} height={120} className={"bg-transparent"}/>
      <NavBar/>
    </div>
  );
}
