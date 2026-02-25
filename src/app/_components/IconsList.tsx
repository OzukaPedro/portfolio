import Angular from "@/public/icons/angular.svg";
import Css from "@/public/icons/css.svg";
import Html from "@/public/icons/html.svg";
import Javascript from "@/public/icons/javascript.svg";
import Nest from "@/public/icons/nest.svg";
import Next from "@/public/icons/next.svg";
import Node from "@/public/icons/node.svg";
import React from "@/public/icons/react.svg";
import Tailwind from "@/public/icons/tailwind.svg";
import Typescript from "@/public/icons/typescript.svg";
import Image from "next/image";

export default function IconList(){
  return (
    <div className="py-2 flex gap-2">
      <Image src={Next} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={React} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Angular} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Nest} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Node} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Typescript} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Javascript} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Html} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Css} alt="icons" width={32} className="hover:scale-110 transition-all" />
      <Image src={Tailwind} alt="icons" width={32} className="hover:scale-110 transition-all" />
    </div>
  )
}