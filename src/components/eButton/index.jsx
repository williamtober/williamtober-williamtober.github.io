import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const EButton = (props) => {
    const [style, setStyle] = useState("flex flex-row justify-center items-center");
    const [icon, setIcon] = useState(null);

    const defineType = () => {
        switch(props.type) {
        // depending on the type of button lets add some classes
        // if props.type == "primary" then make width 100% and the backgroudn color blue
        // if props.type == "icon" then make the height full and the aspect ratio 1:1
            case "primary":
                setStyle(style + " w-full bg-blue-500 text-gray-900");
                break;
            case "icon":
                setStyle(style + " h-full aspect-w-1 aspect-h-1");
                break;
            default:
                break;
        }
    }

    const defineIcon = () => {
        // default icon size are max to the container
        switch(props.icon) {
            case "linkedin":
                setIcon(<FontAwesomeIcon icon={faLinkedin} color="black" 
                className="h-10 text-black dark:text-white transform hover:scale-110 hover:text-secondary aspect-square" />)
                break;
            case "twitter":
                setIcon(<FontAwesomeIcon icon={faTwitter} color="black" 
                className="h-10 text-black dark:text-white transform hover:scale-110 hover:text-secondary aspect-square" />)
                break;
            case "github":
                setIcon(<FontAwesomeIcon icon={faGithub} color="black" 
                className="h-10 text-black dark:text-white transform hover:scale-110 hover:text-secondary aspect-square" />)
                break;
            default:
                break;
        }
    }

    // get the icon info chosen before the button renders.
    useEffect(() => {
        defineType();
        defineIcon();
    }, [])

    return (
        <button className={style} >
            {icon}
        </button>
    )
}

export default EButton;