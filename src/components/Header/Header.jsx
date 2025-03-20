import logo from '../../assets/Logo.png';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleContactClick = () => {
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleLogoClick = () => {
        navigate('/');
        setTimeout(() => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isActive = (path) => location.pathname === path ? 'text-[#F97316] font-bold' : 'text-[#1E293B]';

    return (
        <header className='fixed top-0 left-0 w-full z-50 p-3 flex bg-[#FFFAF0] justify-between items-center shadow-md'>
            <div onClick={handleLogoClick} className='flex gap-1 items-center cursor-pointer'>
                <img src={logo} alt="Logo" className='object-cover max-w-14 max-h-14' />
                <span className='text-2xl font-bold text-[#F97316]'>QuickBites</span>
            </div>

            <div className='hidden md:flex gap-12 items-center'>
                <Link to="/" className={`font-medium hover:text-[#F97316] ${isActive('/')}`}>Home</Link>
                <Link to="/menu" className={`font-medium hover:text-[#F97316] ${isActive('/menu')}`}>Menu</Link>
                <Link to="/cart" className={`font-medium hover:text-[#F97316] ${isActive('/cart')}`}>Cart</Link>
                <Link
                    to="/get-recipe"
                    className={`text-amber-400 font-bold ${isActive('/get-recipe')}`}
                >
                    Get Recipe
                </Link>
                <button 
                    onClick={handleContactClick}
                    className='font-medium text-[#1E293B] hover:text-[#F97316] cursor-pointer bg-transparent border-none outline-none'
                >
                    Contact
                </button>
            </div>

            <div className='hidden md:flex gap-6 items-center'>
                <Link to="/cart" className='relative'>
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className='text-[#1E293B] hover:text-[#F97316] cursor-pointer text-lg'
                    />
                    {totalCartCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-[#F97316] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                            {totalCartCount}
                        </span>
                    )}
                </Link>

                <FontAwesomeIcon
                    icon={faUser}
                    className='text-[#1E293B] hover:text-[#F97316] cursor-pointer text-lg'
                    onClick={() => navigate('/login')}
                />
            </div>

            <button className='p-2 md:hidden' onClick={handleMenu}>
                <FontAwesomeIcon icon={faBars} className='text-[#1E293B] cursor-pointer hover:text-orange-400' />
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
                    <FontAwesomeIcon icon={faXmark} className='hover:text-[#F97316] cursor-pointer' />
                </button>

                <div className='flex flex-col gap-6'>
                    <Link to="/" className={`font-medium ${isActive('/')}`} onClick={handleMenu}>
                        Home
                    </Link>
                    <Link to="/menu" className={`font-medium ${isActive('/menu')}`} onClick={handleMenu}>
                        Menu
                    </Link>
                    <Link to="/cart" className={`font-medium ${isActive('/cart')}`} onClick={handleMenu}>
                        Cart
                    </Link>
                    <Link
                        to="/get-recipe"
                        className={`font-medium blinker text-[#F97316] ${isActive('/get-recipe')}`}
                        onClick={handleMenu}
                    >
                        Get Recipe
                    </Link>
                    <button 
                        onClick={() => {
                            handleContactClick();
                            handleMenu();
                        }} 
                        className='font-medium text-[#1E293B] hover:text-[#F97316] text-left w-full'
                    >
                        Contact
                    </button>
                </div>

                <div className='flex items-center gap-4 mt-6'>
                    <Link to="/cart" className='relative' onClick={handleMenu}>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className='text-[#1E293B] hover:text-[#F97316] cursor-pointer text-lg'
                        />
                        {totalCartCount > 0 && (
                            <span className='absolute -top-2 -right-2 bg-[#F97316] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                                {totalCartCount}
                            </span>
                        )}
                    </Link>

                    <FontAwesomeIcon
                        icon={faUser}
                        className='text-[#1E293B] hover:text-[#F97316] cursor-pointer text-lg'
                        onClick={() => {
                            navigate('/login');
                            handleMenu();
                        }}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
