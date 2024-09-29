import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { TbBrandCoinbase } from "react-icons/tb";

const Technologies = () => {
    return(
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCoinbase className="text-6xl text-blue-300 fill-white"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src="src/assets/python-svgrepo-com.svg" className="w-16 h-16" alt="" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-6xl text-yellow-300"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-6xl text-blue-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-6xl text-yellow-400"/>
                </div>
            </div>
        </div>
    );
};

export default Technologies;