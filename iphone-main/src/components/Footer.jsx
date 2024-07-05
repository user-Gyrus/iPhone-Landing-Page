import React,{useState} from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const email = 'balaji.nandakumar2005@gmail.com';
  const handleEmailClick = () => {
    window.open(`mailto:${email}`);
  };

  const handlePhoneClick = () => {
    setShowPhone(!showPhone);
  };
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
      <div>
          <p className="font-semibold text-gray text-xs">
          Want to get in touch?
          <ol className="custom-counter font-semibold text-gray text-xs mt-1">
            <li>
              <span className='text-gray semibold hover:text-blue' onClick={handleEmailClick}>
                EMAIL US
              </span>
            </li>
            <li>
              {showPhone?'+91-7993746991': 
                <span className=" cursor-pointer  hover:text-blue" onClick={handlePhoneClick}>
                  CALL US
                </span>
              }
            </li>
          </ol>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Made by Nanda Kumar Balaji.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer