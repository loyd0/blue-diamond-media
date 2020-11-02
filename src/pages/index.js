import React from "react"
import TimeLine from "../components/elements/TimeLine";
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO"
import { Process, Services } from '../data/services';

import BGWaves from '../images/bg.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Helping you provide the best coaching experience" />
    <div
      className="absolute top-0 w-full h-screen left-0 z-0 opacity-50 animate-pulse"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1042%26quot%3b)' fill='none'%3e%3cpath d='M816.33-72.05C677.83-66.92 590.14 143.15 310.58 155.06 31.03 166.97-54.06 400.21-195.16 407.06' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M956.66-35C817.19 37.24 882.99 495.79 624.57 498.32 366.15 500.85 138.42 245.18-39.62 240.72' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M569.62-0.59C417.52 46.94 369.54 482.34 155.64 484.11-58.26 485.88-135.47 226.76-258.34 215.31' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1282.4-13.03C1147.02 6.33 1077.41 321.69 852.11 324.76 626.81 327.83 636.96 254.76 421.81 254.76 206.67 254.76 100.51 324.53-8.48 324.76' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M794.46-74.2C688.32-58.37 734.27 184.1 459.34 194.05 184.42 204-37.45 371.71-210.89 373.25' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1042'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundRepeat: "no-repeat"
      }}>

    </div>

    <section
      className="grid md:grid-cols-2 md:mb-6 min-h-screen pt-4 md:-mt-24 ">

      <div className="flex flex-col justify-center ">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 font-bold lg:text-6xl leading-tight text-4xl sm:text-5xl mb-6">We help high ticket consultants create the best coaching call experiences.</h1>
        <p className="text-2xl">Provide even more value to your clients with our transcription and call packaging services.</p>
      </div>
      <div className=" md:mt-0 flex ">
        <form data-netlify="true" name="contact" method="POST" action="/thankyou" className="px-4 sm:px-6 md:px-8 mt-4 py-6 rounded bg-gradient-to-br from-blue-900 to-blue-700 text-white max-w-md mx-auto text-sm shadow-md space-y-2 self-center w-full ">
          <input type="hidden" name="form-name" value="contact" />
          <h3 className="text-left font-black  mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600 ">GET STARTED TODAY</h3>
          <p>Fill out your details below and we'll be in touch within 24 hours.</p>

          <div>
            <label className="block" htmlFor="name">Name</label>
            <input className=" px-4 text-base text-blue-900 w-full py-1 rounded bg-gray-100" type="text" name="name" />
          </div>
          <div>
            <label className="block" htmlFor="name">Email</label>
            <input className=" px-4 text-base text-blue-900  w-full py-1 rounded bg-gray-100" type="text" name="email" />
          </div>
          <div>
            <label className="block" htmlFor="name">Phone</label>
            <input className=" px-4 text-base text-blue-900 w-full py-1 rounded bg-gray-100" type="text" name="phone" />
          </div>
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>
          <div className="mt-4">
            <button className="w-full text-white py-1 text-lg rounded mt-2 bg-blue-900 " type="submit" > Send </button>
          </div>

        </form>
      </div>
    </section>

    <div
      className="absolute sm:hidden w-full h-screen left-0 z-0 opacity-50 transform rotate-180"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1042%26quot%3b)' fill='none'%3e%3cpath d='M816.33-72.05C677.83-66.92 590.14 143.15 310.58 155.06 31.03 166.97-54.06 400.21-195.16 407.06' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M956.66-35C817.19 37.24 882.99 495.79 624.57 498.32 366.15 500.85 138.42 245.18-39.62 240.72' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M569.62-0.59C417.52 46.94 369.54 482.34 155.64 484.11-58.26 485.88-135.47 226.76-258.34 215.31' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1282.4-13.03C1147.02 6.33 1077.41 321.69 852.11 324.76 626.81 327.83 636.96 254.76 421.81 254.76 206.67 254.76 100.51 324.53-8.48 324.76' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M794.46-74.2C688.32-58.37 734.27 184.1 459.34 194.05 184.42 204-37.45 371.71-210.89 373.25' stroke='rgba(0%2c 196%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1042'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundRepeat: "no-repeat"
      }} />
    <div className="hidden sm:block w-full  absolute left-0 z-0 opacity-50 ">
      <img className=" w-full h-full transform scale-150 md:scale-100" src={BGWaves} alt="" />
    </div>


    <section className=" grid grid-cols-1 lg:grid-cols-2 relative z-20 gap-4 ">




      <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 text-base gap-2 md:gap-4 mt-6 ">

        {Services.map((service, index) => <Service key={index} {...service} />)}
      </div>
      <div className="space-y-4 lg:max-w-lg mx-auto order-1">
        <h2 className="font-bold max-w-3xl mx-auto mt-24 text-3xl md:text-4xl">Are you a high ticket coach holding monthly consulting calls with your clients?</h2>
        <p className="text-xl max-w-2xl mx-auto">We create a uniquely branded, permanent record of your training sessions for you and your clients. Allowing them to fully focus in your sessions and not have to worry about taking notes.</p>

      </div>
    </section>

    <section className="text-center space-y-5 mt-32 ">

      <TimeLine {...Process} />
    </section>

    <section className=" text-center">
      <div className=" ">
        <h2 className="font-bold max-w-3xl mx-auto mt-24 text-3xl md:text-4xl">Simple, easy pricing</h2>
        <p className="text-xl mx-auto">Let us take a weight of your hands, and help you provide even more value to your clients.</p>
        <div className="grid grid-cols-1 xl:grid-cols-3 text-left gap-8 xl:gap-4 mt-8">
        <div className="max-w-lg mx-auto ">
            <div className=" mx-auto px-4 py-4 rounded bg-white shadow-lg ">

              <div className="flex">
                <h3 className=" w-1/2 flex-grow uppercase font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600 ">Simple transcript</h3>

                <div>
                  {/* <h5 className="font-black mt-4  sm:mt-0 xl:mt-4">£29.99</h5>
                  <p><small className="text-xs">per 30 mins</small></p> */}
                </div>
              </div>  

            <p className="text-light text-base mt-2 xl:mt-5">Simple, quick transcripts of your client calls for your records and theirs.</p>
            </div>
          </div>
          <div className="max-w-lg mx-auto ">
            <div className=" mx-auto px-4 py-4 rounded bg-white shadow-lg ">
              <div className="flex">
                <h3 className=" w-1/2 flex-grow uppercase font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600 ">Formatted transcript</h3>

                <div>
                  {/* <h5 className="font-black mt-4  sm:mt-0 xl:mt-4">£39.99</h5>
                  <p><small className="text-xs">per 30 mins</small></p> */}
                </div>
              </div>  

            <p className="text-light text-base mt-2 xl:mt-5">Perfectly formatted transcripts with your own personal branding.</p>
            </div>
          </div>
          <div className="max-w-lg mx-auto ">
            <div className=" mx-auto px-4 py-4 rounded bg-white shadow-lg ">

              <div className="flex">
                <h3 className=" w-1/2 flex-grow uppercase font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600 ">Unlimited transcripts</h3>

                <div className='pl-2'>
                  {/* <h5 className="font-black mt-4  sm:mt-0 xl:mt-4">£999.99</h5>
                  <p><small className="text-xs">per month</small></p> */}
                </div>
              </div>  

            <p className="text-light text-base mt-2 xl:mt-5">Unlimited formatted transcripts <b>with summaries created for every call</b>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className=" space-y-5 mt-32 ">

      <form
        data-netlify="true"
        name="contact"
        method="post"
        action="/thankyou"
        className="px-4 sm:px-6 md:px-8 mt-4 py-6 rounded bg-gradient-to-br from-blue-900 to-blue-700 text-white max-w-md mx-auto text-sm shadow-lg space-y-2 ">
        <input type="hidden" name="form-name" value="contact" />
        <h3 className="text-left font-black  mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600 ">GET STARTED TODAY</h3>
        <p>Fill out your details below and we'll be in touch within 24 hours.</p>

        <div>
          <label className="block" htmlFor="name">Name</label>
          <input className=" px-4 text-base text-blue-900 w-full py-1 rounded bg-gray-100" type="text" name="name" />
        </div>
        <div>
          <label className="block" htmlFor="name">Email</label>
          <input className=" px-4 text-base text-blue-900  w-full py-1 rounded bg-gray-100" type="text" name="email" />
        </div>
        <div>
          <label className="block" htmlFor="name">Phone</label>
          <input className=" px-4 text-base text-blue-900 w-full py-1 rounded bg-gray-100" type="text" name="phone" />
        </div>
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <div className="mt-4">
          <button className="w-full text-white py-1 text-lg rounded mt-2 bg-blue-900 " type="submit" > Send </button>
        </div>
      </form>
    </section>


  </Layout>
)


const Service = ({ icon, text, iconAlt }) => {
  return <div
    className="max-w-xs mx-auto py-4 shadow-lg px-4 rounded-md bg-white ">
    <div className="py-5 text-blue-700 ">
      {icon}
    </div>
    <p className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-800">
      {text}
    </p>
  </div>
}

export default IndexPage
