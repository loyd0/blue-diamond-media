import React from 'react'



export default function TimeLine({ steps = [], header, desc, highlight }) {


    const [selectedStep, setStep] = React.useState(0)

    return (
        <section className="max-w-screen-lg mx-auto pt-6 pb-0 px-4">
            <div className="lg:text-center mb-20">
                <p className="text-base leading-6 bg-clip-text font-black text-transparent bg-gradient-to-r from-blue-300 to-blue-600 tracking-wide uppercase">{highlight}</p>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl sm:leading-10">
                    {header}
                </h3>

                {desc.map(text => <p key={text} className="mt-4 max-w-4xl text-xl leading-7 text-blue-800 lg:mx-auto">{text}</p>)}

            </div>
            <div className="flex">
                <nav className="w-1/3 md:w-1/2 mr-2 ">
                    <ul className="overflow-hidden mx-auto w-64 text-left">
                        {steps.map((step, index) => {
                            return <li className="relative pb-10">
                                {index !== steps.length - 1 && <div className="-ml-px absolute mt-0.5 top-8 left-4 w-0.5 h-16 bg-blue-600"></div>}
                                <a href="#" onClick={(e) => { e.preventDefault(); setStep(index) }}
                                    className="relative flex space-x-4 items-start group focus:outline-none">
                                    <div className="h-9 flex items-center">
                                        <span className={`relative z-10 w-8 h-8 flex items-center justify-center bg-transparent border-2 border-blue-600 rounded-full group-hover:border-blue-400 ${index === selectedStep && "bg-blue-600"} transition ease-in-out duration-150`}>
                                            <span className={`h-2.5 w-2.5 bg-transparent rounded-full ${index === selectedStep && "bg-blue-400"} group-hover:bg-blue-300  transition ease-in-out duration-150`}></span>
                                        </span>
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-xs  leading-4 text-blue-800 font-semibold uppercase tracking-wide">{step.header}</h3>
                                        <p className="text-sm leading-5 text-blue-600">{step.desc}</p>
                                    </div>
                                </a>
                            </li>
                        })}

                    </ul>
                </nav>

                <div className="text-left md:w-1/2  text-gray-300 flex flex-col h-full ">
                    <div className="h-48 md:h-56 lg:h-48 bg-white shadow-lg rounded-md bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-800 py-2 px-4 md:px-8 md:py-6 mb-4">
                        <h3 className="text-xl md:text-3xl mb-0 font-extrabold">{steps[selectedStep].content.header}</h3>
                        <p className="">{steps[selectedStep].content.desc}</p>
                    </div>
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent leading-6 font-medium  text-white py-1 text-lg rounded mt-2 bg-blue-800 focus:outline-none hover:bg-blue-900 focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                        Book a call with us today
                    </a>
                </div>
            </div>
        </section>
    )
}
