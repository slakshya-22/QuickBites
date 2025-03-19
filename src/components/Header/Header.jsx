import logo from '../../assets/Logo.png';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Disable/Enable scrolling based on menu state
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isMenuOpen]);

    return (
        <header className='fixed top-0 left-0 w-full z-50 p-3 flex bg-[#FFFAF0] justify-between items-center shadow-md'>
            <a href="#" className='flex gap-1 items-center'>
                <img src={logo} alt="Logo" className='object-cover max-w-14 max-h-14' />
                <span className='text-2xl font-bold text-[#F97316]' id='logo'>QuickBites</span>
            </a>

            <div className='hidden md:flex gap-12'>
                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Home</a>
                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Menu</a>
                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Cart</a>
                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Contact</a>
            </div>

            <div className='hidden md:flex gap-5'>
                <FontAwesomeIcon icon={faCartShopping} className='text-[#1E293B] hover:text-[#F97316] cursor-pointer'/>
                <FontAwesomeIcon icon={faUser} className='text-[#1E293B] hover:text-[#F97316] cursor-pointer'/>
            </div>

            <button className='p-2 md:hidden' onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} className='text-[#1E293B] cursor-pointer hover:text-orange-400'/>
            </button>

            <div
                className={`fixed inset-0 backdrop-blur-md bg-black/30 z-40 transition-opacity duration-300 
                ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={handleMenu}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-1/2 bg-[#FFFFFF] p-5 flex flex-col gap-4 z-50 shadow-xl transition-transform duration-300 ease-in-out 
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button 
                    className='self-end text-[#EF4444] font-bold mb-4' 
                    onClick={handleMenu}
                >
                    <FontAwesomeIcon icon={faXmark} className='hover:text-[#F97316] cursor-pointer'/>
                </button>

                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Home</a>
                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Menu</a>
                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Cart</a>
                <a href="#" className='font-medium text-[#1E293B] hover:text-[#F97316]'>Contact</a>

                <div className='flex gap-5 mt-5'>
                    <FontAwesomeIcon icon={faCartShopping} className='text-[#1E293B] hover:text-[#F97316] cursor-pointer'/>
                    <FontAwesomeIcon icon={faUser} className='text-[#1E293B] hover:text-[#F97316] cursor-pointer'/>
                </div>
            </div>
        </header>
        
    );
};

export default Header;
