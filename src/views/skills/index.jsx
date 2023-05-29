import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faJava, faReact, faNodeJs,  } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
    const [skills, setSkills] = useState([
        {
            name: "HTML",
            icon: "html5",
            description: "Through my journey with HTML, I have developed a range of skills in building responsive, user-friendly web pages. I have gained some experience in using HTML to structure content, create layouts, and optimize pages for search engine optimization. While I have some familiarity with the latest HTML standards and best practices, there is still much more to learn. I always strive to find creative ways to enhance the user experience through dynamic elements and engaging visuals.",
        },
        {
            name: "CSS",
            icon: "css3",
            description: "I have some skill in using CSS to create visually appealing and responsive designs for web pages. I have gained some experience in using CSS to define page layouts, typography, and colors, as well as in using CSS frameworks like Bootstrap and Materialize. While I have some familiarity with the latest CSS standards and best practices, there is still much more to learn. I am always excited to experiment with new techniques and design trends to create engaging, dynamic web pages.",
        },
        {
            name: "JavaScript",
            icon: "javascript",
            description: "Through my journey with JavaScript, I have developed a range of skills in building dynamic, interactive web pages and applications. I have gained some experience in using JavaScript to manipulate the Document Object Model (DOM), create animations and effects, and build complex user interfaces. While I have some familiarity with popular JavaScript libraries and frameworks like React and Angular, there is still much more to learn. I am always eager to take on new challenges and learn new tools and techniques for developing cutting-edge web applications.",
            frameworks:[
                'React', 'Node', 'Express', 'React-Native'
            ]
        },
        {
            name: "SQL & NoSQL",
            icon: "database",
            description: "I have some skill in both SQL and NoSQL databases and some experience in designing, building, and maintaining data-driven applications. While I have developed some expertise in creating and managing database structures, writing complex queries, and optimizing database performance, there is still much more to learn. I am comfortable working with both structured and unstructured data, but I am always eager to expand my knowledge and skills in this area.",
        },
        {
            name: "Java",
            icon: "java",
            description: "Through my journey with Java, I have developed some skill in developing robust, scalable software applications. I have gained some experience in using Java to build complex systems, create graphical user interfaces, and design object-oriented programs. While I have some familiarity with popular Java frameworks like Spring and Hibernate, there is still much more to learn. I am excited to take on new challenges and learn new tools and techniques for developing front-end and back-end technologies.",
        },
        {
            name: "React",
            icon: "react",
            description: "Proficiency in React has been developed through experience in developing dynamic and responsive web applications. Skills have been gained in using React to build reusable UI components, manage state, and handle user interactions. While I am still learning Next.js, I am comfortable using redux and redux-thunk to manage state and asynchronous actions. I am always eager to learn new tools and techniques to help me build incredible web applications.",
        },
        {
            name: "Node",
            icon: "node",
            description: "Node is my runtime of choice for development. I'm comfortable with using NPM to quickly initialize projects, setup environment variables, install packages, and run scripts. I can't tell you what features node versions have, but I know enough to get the ball rolling.",
        },
        {
            name: "Computer Systems/Networking",
            icon: "network-wired",
            description: "I have some foundational knowledge in computer systems and networking. Having worked for managed service providers in the past. I have gained some experience in installing, configuring, and maintaining computer systems and networks. While I have some familiarity with the latest computer systems and networking standards and best practices, there is still much more to learn. These days I graviate more towards software but I'm not afraid to take on my own IT issues.",
        }
    ]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Experience</h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">My Journey in Software/Web development has been a long and rewarding one, filled with challenges, triumphs. These are some of the technologies I have some experience with.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 xl:gap-8 md:space-y-0">
                    {skills.map((skill, index) => {
                        let icon;
                        switch (skill.icon) {
                            case "html5":
                                icon = faHtml5;
                                break;
                            case "css3":
                                icon = faCss3;
                                break;
                            case "javascript":
                                icon = faJsSquare;
                                break;
                            case "database":
                                icon = faDatabase;
                                break;
                            case "java":
                                icon = faJava;
                                break;
                            case "network-wired":
                                icon = faNetworkWired;
                                break;
                            case "react":
                                icon = faReact;
                                break;
                            case "node":
                                icon = faNodeJs;
                                break;
                            default:
                                icon = null;
                                break;
                        }

                        return <div className="p-6 bg-white rounded shadow dark:bg-gray-800">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded bg-white border-[1px] border-gray-200 lg:h-12 lg:w-12 dark:border-none dark:bg-primary">
                                <FontAwesomeIcon icon={icon} className="w-5 h-5 text-purple-600 lg:w-6 lg:h-6 dark:text-white" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">{skill.name}</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400">{skill.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills;