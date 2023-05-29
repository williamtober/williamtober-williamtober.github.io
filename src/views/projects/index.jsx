import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact, faCss3, faJsSquare, faFigma } from "@fortawesome/free-brands-svg-icons";
// import daisy images
import daisyLight from "../../assets/daisy_light.png";
import daisyDark from "../../assets/daisy_dark.png";
// import acute images
import acuteLight from "../../assets/acute_light.png";
import acuteDark from "../../assets/acute_dark.png";


const Projects = () => {

    const projects = [
        {
            name: "Pokeo",
            description: "Trading Card Game Management Application",
            link: "https://pokeoapp.com",
            icon: "network-wired",
            technologies: [
                {
                    name: "HTML5",
                    icon: "html5"
                },
                {
                    name: "CSS3",
                    icon: "css3"
                },
                {
                    name: "JavaScript",
                    icon: "javascript"
                },
                {
                    name: "Tailwind CSS",
                    icon: "tailwind"
                },
                {
                    name: "TypeScript",
                    icon: "typescript"
                }
            ]
        }
    ]
    
    return (
        <section id="projects" class="bg-white dark:bg-gray-900 antialiased">
            <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Project Showcases
                    </h2>
                    <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                        These projects demonstrate my ability to create some creative web applications and designs. Please note that they do not represent all the technologies I have exposure too.
                    </p>
                </div>

                <div class="mt-12 space-y-16 sm:mt-16">
                    <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
                        <div>
                            <img class="object-cover w-full rounded-lg shadow-lg dark:hidden"
                                src="https://storage.googleapis.com/general-wt/pokeoSampleLight.png" alt=""/>
                            <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden"
                                src="https://storage.googleapis.com/general-wt/pokeoSampleDark.png" alt=""/>
                        </div>

                        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
                            <div class="space-y-3">
                                <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                                    Pokeo
                                </h3>
                                <a href="https://pokeoapp.com" title="Pokeo"
                                class="inline-flex items-center text-lg font-medium text-primary hover:underline dark:text-secondary">
                                Trading Card Game Management Application
                                <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                </svg>
                                </a>
                                <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Pokeo is a web application that allows you to search for pokemon cards and count the number of cards you have in your collection. I do plan on converting the application to React Native instead of ReactJS. 
                                </p>
                            </div>

                            <div class="flex items-center gap-2.5">
                                <div class="p-2 rounded-lg text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <FontAwesomeIcon data-tooltip-target="tooltip-logo-html5" className="object-contain w-auto h-8"
                                    icon={faHtml5} alt=""/>
                                </div>
                                <div id="tooltip-logo-html5" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    HTML5
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>

                                <div class="p-1 rounded-lg text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <FontAwesomeIcon data-tooltip-target="tooltip-logo-css3" className="object-contain w-auto h-8"
                                        icon={faCss3} alt=""/>
                                </div>
                                <div id="tooltip-logo-css3" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    CSS3
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>

                                <div class="p-1 rounded-lg text-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <FontAwesomeIcon data-tooltip-target="tooltip-logo-javascript" className="object-contain w-auto h-8"
                                    icon={faJsSquare} alt=""/>
                                </div>
                                <div id="tooltip-logo-javascript" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    JavaScript
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>

                                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <img data-tooltip-target="tooltip-logo-tailwind-css" className="object-contain w-auto h-8"
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt=""/>
                                </div>
                                <div id="tooltip-logo-tailwind-css" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Tailwind CSS
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>

                                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <img data-tooltip-target="tooltip-logo-typescript" className="object-contain w-auto h-8"
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt=""/>
                                </div>
                                <div id="tooltip-logo-typescript" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    TypeScript
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </div>

                            <a href="#" title=""
                                class="text-white bg-primary justify-center hover:bg-secondary inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-primary dark:focus:ring-secondary"
                                role="button">
                                View Codebase
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
                        <div class="lg:order-2">
                            <img class="object-cover w-full rounded-lg shadow-lg dark:hidden"
                                src={daisyLight} alt=""/>
                            <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden"
                                src={daisyDark} alt=""/>
                        </div>

                        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
                            <div class="space-y-3">
                                <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                                Daisy
                                </h3>
                                <a href="https://github.com/williamtober/daisy" title="Daisy"
                                    class="inline-flex items-center text-lg font-medium text-primary hover:underline dark:text-secondary">
                                    Discord Utility Bot
                                    <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                </a>
                                <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    Daisy is a lightweight Discord utility bot that provides a variety of features to enhance your discord experience. 
                                    Mass delete messages based on keyword, create polls, and implement AI chatbots. The source code is available for cloning, and is a great bootstrap for your own Discord bot.
                                </p>
                            </div>

                            <div class="flex items-center gap-2.5">
                                <div class="p-1 rounded-lg text-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <FontAwesomeIcon data-tooltip-target="tooltip-logo-javascript" className="object-contain w-auto h-8"
                                    icon={faJsSquare} alt=""/>
                                </div>
                                <div id="tooltip-logo-javascript" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    JavaScript
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>

                                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <img data-tooltip-target="tooltip-logo-html5" class="object-contain w-auto h-8"
                                    src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt=""/>
                                </div>
                                
                            </div>

                            <a href="https://github.com/williamtober/daisy" title=""
                                class="text-white bg-primary justify-center hover:bg-secondary inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-primary dark:focus:ring-secondary"
                                role="button">
                                View Codebase
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
                        <div>
                            <img class="object-cover w-full rounded-lg shadow-lg dark:hidden" src={acuteLight}
                                alt=""/>
                            <img class="object-cover w-full rounded-lg shadow-lg dark:block hidden" src={acuteDark}
                                alt=""/>
                        </div>

                        <div class="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
                            <div class="space-y-3">
                                <h3 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                                    Acute
                                </h3>
                                <a href="https://github.com/williamtober/acute-design-system" title="Acute"
                                    class="inline-flex items-center text-lg font-medium text-primary hover:underline dark:text-secondary">
                                    Design System
                                    <svg aria-hidden="true" class="w-5 h-5 ml-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path
                                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                </a>
                                <p class="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                                    A project I started early in college, it was my first serious attempt at designing anything. I haven't touched it in a while, but I plan on revamping it soon.
                                </p>
                            </div>

                            <div class="flex items-center gap-2.5">
                                <div class="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <img data-tooltip-target="tooltip-logo-typescript" class="object-contain w-auto h-8"
                                    src="https://cdn.worldvectorlogo.com/logos/adobe-2.svg" alt=""/>
                                </div>
                                <div id="tooltip-logo-typescript" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Adobe XD
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>

                                <div class="p-1 rounded-lg text-yellow-500 hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <FontAwesomeIcon data-tooltip-target="tooltip-logo-javascript" className="object-contain w-auto h-8"
                                    icon={faFigma} alt=""/>
                                </div>
                                <div id="tooltip-logo-javascript" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    JavaScript
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </div>

                            <a href="https://github.com/williamtober/acute-design-system" title=""
                                class="text-white bg-primary justify-center hover:bg-secondary inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-primary dark:focus:ring-secondary"
                                role="button">
                                View documentation
                                <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;