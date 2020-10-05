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
            <div className="flex flex-wrap md:flex-no-wrap">
                <nav className="w-full md:w-1/2 mr-2 ">
                    <ul className=" mx-auto md:w-64 text-left flex md:flex-col">
                        {steps.map((step, index) => {
                            return <li key={index} className="relative pb-10 mr-2">
                                {index !== steps.length - 1 && <div className="-ml-px absolute mt-0.5 top-8 left-4 w-0.5 h-16 bg-blue-600"></div>}
                                <a href="#" onClick={(e) => { e.preventDefault(); setStep(index) }}
                                    className="relative flex space-x-1 md:space-x-4 items-start group focus:outline-none ">
                                    <div className="h-9 flex items-center self-center">
                                        <span className={`relative z-10 w-4 h-4 md:w-8 md:h-8 flex items-center justify-center bg-transparent border-2 border-blue-600 rounded-full group-hover:border-blue-400 ${index === selectedStep && "bg-blue-600"} transition ease-in-out duration-150`}>
                                            <span className={`h-2.5 w-2.5 bg-transparent rounded-full ${index === selectedStep && "bg-blue-400"} group-hover:bg-blue-300  transition ease-in-out duration-150`}></span>
                                        </span>
                                    </div>
                                    <div className="min-w-0 bg-white ">
                                        <h3 className="text-xs  leading-4 text-blue-800 font-semibold uppercase tracking-wide">{step.header}</h3>
                                        <p className="text-sm leading-5 text-blue-600">{step.desc}</p>
                                    </div>
                                </a>
                            </li>
                        })}

                    </ul>
                </nav>

                <div className="w-full text-left md:w-1/2  mb-4 text-gray-300 flex flex-col h-full ">

                    <div className="shadow-lg bg-white rounded-md ">
                    <div className="h-48 md:h-56 lg:h-48 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-800 py-2 px-4 md:px-8 md:py-6 ">
                        <h3 className="text-xl md:text-3xl mb-0 font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-800">{steps[selectedStep].content.header}</h3>
                        <p className="bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-800">{steps[selectedStep].content.desc}</p>
                    </div>
                    </div>
                    
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent leading-6 font-medium  text-white text-lg rounded mt-12  bg-blue-800 focus:outline-none hover:bg-blue-900 focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                        Book a call with us today
                    </a>
                </div>
            </div>
        </section>
    )
}
