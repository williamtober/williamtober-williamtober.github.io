import { useState } from "react";
import EButton from "../../components/eButton";

const Navigation = () => {
    const [socials, setSocials] = useState([
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/williamtober/",
            icon: "linkedin"
        },
        {
            name: "github",
            link: "https://www.github.com/williamtober",
            icon: "github"
        },
        {
            name: "twitter",
            link: "https://www.twitter.com/williamtober",
            icon: "twitter"
        }
    ])

    const centering = " flex flex-row items-center justify-center"


    return (
        <nav className="w-full top-0 left-0 fixed z-10 h-20 flex flex-row items-center justify-center md:justify-end px-10 bg-white dark:bg-gray-950 shadow-md">
            <ul className="flex w-full max-w-screen-xl flex-row items-center md:justify-end justify-center mx-auto gap-x-14 md:gap-x-4">
                
                    {
                        socials.map((social) => {
                            console.log(social);
                            return (
                                <li className={"h-20 aspect-square " + centering}>
                                    <a className={"h-full w-full " + centering} href={social.link}>
                                        <EButton type="icon" icon={social.icon} />
                                    </a>
                                </li>
                            )
                        })
                    }
                
                

            </ul>
        </nav>
    )
}

export default Navigation;