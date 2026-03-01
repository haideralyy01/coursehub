import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <>
            <div className="border-t w-full mt-9 h-80 flex justify-center">
                <div className="w-full max-w-7xl mt-12 flex">
                    <div className="w-1/2">
                        <div className="text-3xl ml-14 font-medium text-[#443dff]">100xDevs</div>
                        <div className="text-xl ml-14 text-[#040316] -mt-2">because 10x ain't enough.</div>
                        <div className="mt-16 -ml-2 font-medium text-l">Follow us</div>
                        <div className="flex space-x-6 -ml-2">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="h-7 w-7 text-[#040316]" size="lg" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="h-7 w-7 text-[#040316]" size="lg" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} className="h-7 w-7 text-[#040316]" size="lg" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="h-7 w-7 text-[#040316]" size="lg" />
                            </a>
                        </div>
                    </div>
                    <div className='ml-28 flex justify-between w-3xl'>
                        <div>
                            <div className='text-lg'>100x Links</div>
                            <div className='text-lg'>Projects</div>
                            <div className='text-lg'>Reports</div>
                        </div>
                        <div>
                            <div className='text-lg'>100x Legal</div>
                            <div className='text-lg'>Terms & Conditions</div>
                            <div className='text-lg'>Privacy Policy</div>
                            <div className='text-lg'>Refund & Cancellation</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}