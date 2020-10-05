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
    className="flex h-screen text-center">
      <div className="self-center mx-auto -mt-32 ">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-800 font-bold lg:text-6xl leading-tight">Thanks we will be in touch.</h1>
      </div>
      
    </section>


  </Layout>
)


export default IndexPage
