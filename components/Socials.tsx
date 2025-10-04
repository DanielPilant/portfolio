import Link from "next/link"
import path from "path";

import { FaGithub, FaLinkedin } from "react-icons/fa"

const SocialsData = [
    { icon: <FaGithub />, path: "https://github.com/DanielPilant" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/danielpilant?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
}

const Socials = ({containerStyles, iconStyles}: SocialsProps) => {
  return (
    <div className={containerStyles}>
        {SocialsData.map((item,index)=>{
          return (
            <Link target="_blank" key={index} href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
          )
        })}
    </div>
  )
}

export default Socials