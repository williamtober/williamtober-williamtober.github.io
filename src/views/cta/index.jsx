const CTA = () => {
    return (
        <section className="bg-white dark:bg-gray-900 mt-20">
            <div className="py-8 px-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md">
                    <h1 className="text-6xl mb-4 tracking-tight font-extrabold text-gray-900 dark:text-white">William Tober</h1>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Aspiring Developer, Designer, and Human.</h2>
                    <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        Welcome to my portfolio! As you navigate through my work, I hope you'll get a sense of my passion for learning and my dedication to improving my craft.
                        I believe that we are all perpetual students, and I take every opportunity to expand my knowledge and skills. 
                        At the same time, I approach every project with humility, knowing that there is always more to learn and room for growth. 
                        I'm excited to share my work with you, and I hope that you find it as engaging and thought-provoking as I do.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a href="#projects" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-primary dark:hover:bg-primary focus:ring-4 focus:ring-primary dark:focus:ring-primary">
                            Checkout my Work
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA