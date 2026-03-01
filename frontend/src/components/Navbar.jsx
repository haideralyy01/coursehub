import { SunIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-50 shadow-md w-full h-16 flex items-center justify-between px-32 border-b bg-[#443dff]">
            <div className="font-bold text-xl flex">
                <div className="text-[#dddbff]">100x</div>
                <div className="text-[#040316]">Devs</div>
            </div>
            <div className="flex items-center px-4 space-x-4">
                <SunIcon className="w-7 h-7 text-[#dddbff] cursor-pointer" />
                <div className="h-9 rounded-sm w-16 bg-[#dddbff] flex items-center justify-center cursor-pointer">
                    <a href="/login" className="text-sm font-medium font-medium">Login</a>
                </div>
                <div className="h-9 rounded-md w-24 bg-[#040316] flex items-center justify-center cursor-pointer">
                    <a href="/login" className="text-sm font-medium text-[#fbfbfe]">Join now</a>
                </div>
            </div>
        </nav>
    );
}
