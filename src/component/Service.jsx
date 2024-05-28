import React from 'react'
import "../styles/service.css"
import Box from './Box'
import { Cctv,Computer,Fingerprint,GlobeLock,FileSliders}from 'lucide-react';


const Service = () => {
  return (
    <>
        <div className='boxes'>
            <Box src={<Cctv className='cctv' />} title="CCTV" desc="From corner shops to sprawling factories, we offer a full range of surveillance solutions tailored to your business needs. Our real-time video monitoring services provide top-notch security, safeguarding your assets around the clock"/>
            <Box src={<Fingerprint className='cctv' />} title="Biometrics" desc="Step into the future of security with our cutting-edge biometric solutions, ensuring unparalleled access control and identity verification for your peace of mind."/>
            <Box src={<Computer className='cctv' />} title="PC Troubleshooting" desc="Experience seamless computing with our expert PC troubleshooting services. From software glitches to hardware hiccups, we diagnose and resolve issues swiftly to keep you up and running without a hitch."/>
            <Box src={<GlobeLock className='cctv' />}  title="Software Solutions" desc="Maximize your IT capabilities with our dynamic software solutions, crafted to streamline processes and enhance performance. Harness the power of innovative technology to drive efficiency and achieve your business goals effortlessly."/>
            <Box src={<FileSliders className='cctv' />}  title="Network Solutions" desc="Transform your network infrastructure with our specialized IT solutions, ensuring seamless connectivity and optimal performance. From robust security measures to scalable architecture, we offer tailored solutions to meet the demands of your evolving business needs."/>
        </div>


    </>
  )
}

export default Service
