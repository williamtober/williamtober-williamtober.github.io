import { faJs, faReact, faAws, faGoogle, faWordpress, faSquareJs, faBootstrap, faDiscord, faHtml5, faCss3  } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const TechIcon = (props) => {
    const [name, icon] = props; 
    const [output, setOutput] = useState(null);

    switch(icon) {
        case "js":
            setOutput(<FontAwesomeIcon icon={faJs} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black" />)
            break;
        case "react":
            setOutput(<FontAwesomeIcon icon={faReact} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black"/>)
            break;
        case "aws":
            setOutput(<FontAwesomeIcon icon={faAws} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black"/>)
            break;
        case "google":
            setOutput(<FontAwesomeIcon icon={faGoogle} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black"/>)
            break;
        case "wordpress":
            setOutput(<FontAwesomeIcon icon={faWordpress} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black"/>)
            break;
        case "square":
            setOutput(<FontAwesomeIcon icon={faSquareJs} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black"/>)
            break;
        case "bootstrap":
            setOutput(<FontAwesomeIcon icon={faBootstrap} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black"/>)
            break;
        case "discord":
            setOutput(<FontAwesomeIcon icon={faDiscord} data-tooltip-target={`tooltip-logo-${name.toLowerCase()}`} className="object-contain w-auto h-8" color="black"/>)
            break;
        default:
            break;
    }

    return (
        [<div class="p-2 rounded-lg text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800">
            <FontAwesomeIcon data-tooltip-target="tooltip-logo-html5" className="object-contain w-auto h-8"
            icon={faHtml5} alt=""/>
        </div>,
        <div id="tooltip-logo-html5" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            {name}
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>]
    )
}