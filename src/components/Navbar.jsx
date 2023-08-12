import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import SearchInput from './SearchInput';
import { menu } from '../utils/constans';

const Navbar = ({sidebarMenu}) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    
    <section className="bg-white">
        <nav className="flex justify-between p-6 px-4">
          <div className="flex items-center">
            <a href="/">
              <img className="w-12 sm:w-14" src={logo} alt=""/>
            </a>

          </div>
          <div className="hidden xl:flex items-center">
            <ul className="hidden xl:flex ml-24">
                
                    <li><a className="text-coolGray-500 hover:text-coolGray-900 font-medium mr-5" href="http://t130631.spo.obrazovanie33.ru/" >ВТЭК</a></li>
                    <li><a className="text-coolGray-500 hover:text-coolGray-900 font-medium mr-5" href="http://docs.vztec.ru/index.php/s/W5yaNali0j7SSDD" >Расписание</a></li>
                    <li><a className="text-coolGray-500 hover:text-coolGray-900 font-medium" href="https://goshagavriloff.github.io/itcube-app/" >Блог</a></li>
                </ul>
          </div>

          <button className="navbar-burger self-center xl:hidden">
            {!toggleSidebar&&(<HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(true)} />)}

          </button>
        </nav>
        {toggleSidebar && (
                <div className="navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
                <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
                <nav className="relative p-6 h-full overflow-y-auto">
                    <a className="inline-block mb-2" href="/">
                    <img className="w-12 ml-4 sm:w-14" src={logo} alt="" />
                    </a>
                    <ul>
                       <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="http://t130631.spo.obrazovanie33.ru/" >ВТЭК</a></li>
                       <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="http://docs.vztec.ru/index.php/s/W5yaNali0j7SSDD" >Расписание</a></li>
                       <li><a className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md" href="https://goshagavriloff.github.io/itcube-app/" >Блог</a></li>

                    </ul>
                </nav>
                <button className="navbar-close absolute top-5 right-3 self-center" href="#">
                        <AiOutlineClose fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(false)} />

                </button>
                </div>
            </div>
        )}

      </section>
  )
}

export default Navbar