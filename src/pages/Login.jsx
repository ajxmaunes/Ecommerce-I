import React from "react";
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
// Import icons
import { IoIosArrowBack } from 'react-icons/io';

const Login = () => {

    return (
        <div className="pt-[6rem]">

            <div className="container text-start text-[18px] max-md:text-[16px] py-3 bg-gray-200">
            <Link to="/" className="ml-[5rem] max-md:ml-[1rem] items-center flex font-semibold hover:text-[#1450A3]"><IoIosArrowBack/>Back</Link>
            </div>

            <section className="page h-[32rem] w-[100%] flex flex-col justify-center items-center text-[0.75rem] m-0 box-border">
                    <div className="cover w-[90%] h-[480px] py-4 relative rounded-[1rem] flex flex-col items-center justify-around md:w-[40%]">
                        <h1 className="text-[1.5rem] flex items-center mb-4 border-b-4">LOG IN</h1>
                        <input name="email" className="w-[85%] bg-[#D3D3D3] text-center p-[10px] text-[1rem]" type="text" placeholder="username" />
                        <input name="password" className="w-[85%] bg-[#D3D3D3] text-center p-[10px] text-[1rem]" type="password" placeholder="password" />

                        <p className="textLog relative b-[0.5%] text-[14px] hover:text-[#1450A3] cursor-pointer">Forgot your password?</p>

                        <button className="text-[1rem] text-white w-[30%] py-[7px] bg-[#1450A3] font-[500]">LOGIN</button>

                        <p className="textLog relative b-[0.5%] text-[14px]">Or login using</p>

                        <div className="alt-login h-[2rem] -mt-4 flex justify-around items-center">
                            <BsFacebook color="#1450A3" className="text-[1.9rem] mx-4 cursor-pointer text-blue"/>
                            <FcGoogle className="text-[2.2rem] mx-4 cursor-pointer" />
                        </div>
                    <Link to="/" className="text-[#1450A3] flex text-[16px] items-center">Create Account</Link>
                </div>
        </section>
    </div>
    )
}

export default Login