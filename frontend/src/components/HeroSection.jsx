import dsimg from "../assets/ds.jpeg"
import web3img from "../assets/web3.png"
import adhocimg from "../assets/adhoc.jpeg"
import webdevimg from "../assets/webdev.png"
import devopsimg from "../assets/devops.png"
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/outline'
import phoneimg from "../assets/phone.png"

export default function Herosection() {
    return (
        <>
            <div className="flex justify-center mt-20">
                <div className="text-7xl font-bold text-[#443dff]">100xDevs,</div>
                <div className="text-7xl font-bold ml-4 text-[#040316]">because</div>
            </div>
            <div className="flex justify-center">
                <div className="text-7xl font-bold tracking-tight text-[#040316]">10x ain't enough!</div>
            </div>
            <div className="flex justify-center mt-5">
                <div className="text-xl">A beginner-friendly platform for mastering programming skills.</div>
            </div>
            <div className="flex justify-center mt-9 px-4 space-x-4">
                <div className="h-10 rounded-md w-36 bg-[#443dff] flex items-center justify-center cursor-pointer text-white text-xl">
                    <a href="/login" className="text-sm font-medium">Explor Courses</a>
                </div>
                <div className="h-10 rounded-md w-36 bg-[#040316] flex items-center justify-center cursor-pointer text-white text-xl">
                    <a href="/login" className="text-sm font-medium">Explor Notes</a>
                </div>
            </div>
            <div className="flex justify-center mt-14 space-x-4 w-full overflow-hidden">
                <img src={devopsimg} alt="devopsimg" className="h-56 rounded-xl animate-slideIn" />
                <img src={adhocimg} alt="adhocimg" className="h-56 rounded-xl animate-slideIn [animation-delay:200ms]" />
                <img src={webdevimg} alt="webdevimg" className="h-56 rounded-xl animate-slideIn [animation-delay:400ms]" />
                <img src={dsimg} alt="dsimg" className="h-56 rounded-xl animate-slideIn [animation-delay:600ms]" />
                <img src={web3img} alt="web3img" className="h-56 rounded-xl animate-slideIn [animation-delay:800ms]" />
            </div>
            <div className="flex justify-center">
                <div className="bg-[#443dff] h-96 w-full max-w-7xl mt-12 rounded-3xl flex overflow-hidden">
                    <div className="w-9/12">
                        <div className="ml-7 mt-7 px-4 text-4xl font-medium text-[#fbfbfe]">Every developer deserves to be a great engineer, a 100xEngineer!</div>
                        <div className="ml-7 mt-2 text-2xl font-medium text-[#fbfbfe] opacity-75 px-4">Give yourself the power you deserve with a 100xdevs today!</div>
                        <div className="flex mt-9 px-4 space-x-4 ml-7">
                            <div className="h-10 rounded-md w-40 bg-[#040316] flex items-center justify-center cursor-pointer text-[#fbfbfe] text-xl">
                                <ArrowDownTrayIcon className="h-5 w-5 text-[#fbfbfe]" />
                                <a href="/login" className="text-sm font-medium ml-2">Download App</a>
                            </div>
                            <div className="h-10 rounded-md w-36 bg-[#fbfbfe] flex items-center justify-center cursor-pointer text-[#fbfbfe] text-xl">
                                <SparklesIcon className="h-5 w-5 text-[#040316]" />
                                <a href="/login" className="text-sm font-medium text-[#040316] ml-2">Join Now</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={phoneimg} alt="phoneimg" className="h-auto mt-24 mr-24 rotate-12 rounded-3xl hover:animate-slideUp transition-transform" />
                    </div>
                </div>
            </div>
        </>
    );
}