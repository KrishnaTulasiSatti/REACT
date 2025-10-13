import React from "react";
import CountUp from 'react-countup';
import Image from './assets/react.svg'

import Tilty from 'react-tilty';


import { ToastContainer, toast } from 'react-toastify';

import {Triangle} from 'react-loader-spinner'


// Count up
// Toastify
// Tilty
// loader-spinner
// confetti
// carousel

const Addons = () => {
    const notify = () => toast.success("Hello!");

    const { width, height } = useWindowSize()

    return (
        
        <>
            <CountUp end = {2000} duration={5}/>

            <Tilty>
                <img src={Image} alt="" />
            </Tilty>

            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer />
            </div>

            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        
        </>
    )
}

export default Addons;