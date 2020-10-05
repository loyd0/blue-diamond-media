import React from 'react'

export const Services = [

    {
        text: "We create searchable guides for your clients to refer back to the advice you’ve given them",
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> 

    },
    // {
    //     text: "This allows your clients to fully focus in your sessions and not have to worry about taking notes",
    //     icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
    // },
    {
        text: "We can help you to hold your client accountable to prior advice",
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>

    },
    {
        text: "We provide you with a database of your work that you can use as inspiration for other content creation",
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
    },
    {
        text: "Using us you can provide more value to your coaching clients",
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    }
]


export const Process = {
    header: "How we work with you",
    highlight: "Our Process",
    desc: ["We’ve brought coaching calls into the 21st century with a focus on creating permanent records of your experience and giving your client a uniquely branded premium package to refer back to.", "Learning via written word is known to improve information retention and working with our 100% done-for-you service enables you to focus on what you do best and leave the rest up to us."],
    steps: [
        {
            header: "Step 1",
            desc: "Explore",
            content: {
                header: "Step 1: Explore",
                desc: "Explore your service offering and style"
            }
        },
        {
            header: "Step 2",
            desc: "Design",
            content: {
                header: "Step 2: Design",
                desc: "Design a premium, custom formatted package template for your transcripts"
            }
        },
        {
            header: "Step 3",
            desc: "Onboard",
            content: {
                header: "Step 3: Onboard",
                desc: "Onboard you, so we can instantly receive raw audio / video recordings of your client consultations"
            }
        },
        {
            header: "Step 4",
            desc: "Deliver",
            content: {
                header: "Step 4: Deliver",
                desc: "Within a 48 hour turnaround time, send you and your client a transcript of your conversation"
            }
        },
    ]
}