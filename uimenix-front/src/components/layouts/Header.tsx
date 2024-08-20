import React, { useState } from "react";
import { FaRegHeart, FaUserLarge } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Header() {
    // active list-----
    const [activeNav , setActiveNav] = useState<boolean>(false);

    // language options
    const [languages, setLanguages] = useState({
        choosen: { flag: "public/flag_en.png", title: "English" },

        options: [
            { flag: "public/flag_en.png", title: "English" },
            { flag: "public/flag_ar.png", title: "العربية" },
        ],
    });

    // showMenus
    const [showMenus, setShowMenus] = useState(false);

    // handleMenus
    const handleMenus = () => setShowMenus(showMenus ? false : true);

    // handleOptions
    const handleOptions = (e: React.MouseEvent<HTMLDivElement>) => {
        // loop inside options to get the choosen and update the state--
        const choosenOption = languages.options.filter(
            (op) => op.title === e.currentTarget.innerText
        );
        setLanguages({ ...languages, choosen: choosenOption[0] });
    };

    return (
        <>
            <header className="py-5">
                {/* top part */}
                <div className="top container mx-auto px-6 flex justify-between gap-5 items-center flex-wrap">
                    {/* check the use role */}
                    <p className="text-[#727475]">
                        You are a student and students get 20% discount.
                    </p>

                    {/* search box */}
                    <div className="flex justify-between gap-5 border border-[#e5e8ec] rounded-[12px] overflow-hidden">
                        <div className="border-r border-[#e5e8ec] overflow-hidden px-2.5">
                            <select
                                name="product_type"
                                className="text-sm outline-none rounded-lg h-full"
                            >
                                <option value="*">All Categories</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Bags for men">Bags for men</option>
                                <option value="Bags for women">Bags for women</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Computer">Computer</option>
                                <option value="Computer &amp; Desktop">
                                    Computer &amp; Desktop
                                </option>
                                <option value="Dining &amp; Kitchen">
                                    Dining &amp; Kitchen
                                </option>
                                <option value="Fresh Vegetables">Fresh Vegetables</option>
                                <option value="Hat for men">Hat for men</option>
                                <option value="Hat for women">Hat for women</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Laptop &amp; Ipad">Laptop &amp; Ipad</option>
                                <option value="Living Room">Living Room</option>
                                <option value="Logitech">Logitech</option>
                                <option value="Men clothing">Men clothing</option>
                                <option value="Sectional Sofas">Sectional Sofas</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Shoes for men">Shoes for men</option>
                                <option value="Shoes for women">Shoes for women</option>
                                <option value="Smart Phones &amp; Tablets">
                                    Smart Phones &amp; Tablets
                                </option>
                                <option value="Snack &amp; Beverage">
                                    Snack &amp; Beverage
                                </option>
                                <option value="T-Shirt">T-Shirt</option>
                                <option value="Watches">Watches</option>
                                <option value="Watches &amp; Eyewear">
                                    Watches &amp; Eyewear
                                </option>
                                <option value="Wireless">Wireless</option>
                                <option value="Women clothing">Women clothing</option>
                                <option value="Women’s">Women’s</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            placeholder="search for products..."
                            className="outline-none text-[#7e7e80]"
                        />
                        <button className="bg-[#2b38d1] h-full px-4 py-2 text-white cursor-pointer border-none transition duration-300 active:bg-[#091383]">search</button>
                    </div>

                    {/* language box */}
                    <div
                        className="w-[120px] relative transition duration-300 cursor-pointer hover:text-[#2b38d1] text-[#727475] flex justify-center items-center gap-2"
                        onClick={handleMenus}
                    >
                        <img className="w-4 h-3" src={languages.choosen.flag} alt="flag" />
                        <span>{languages.choosen.title}</span>
                        <IoIosArrowDown className="text-[10px]" />

                        {/* menu */}
                        {showMenus && (
                            <div className="w-[180px] bg-white absolute left-[-100%] top-[220%] z-[100] transition duration-300 shadow-[0px_0px_6px_1px_#e2e6eb]">
                                {languages.options.map((language, i) => (
                                    <div
                                        key={i}
                                        data-option={"languages"}
                                        className="transition duration-300 hover:text-black flex items-center gap-2 py-[.5rem] px-[1rem]"
                                        onClick={handleOptions}
                                    >
                                        <img className="w-4 h-3" src={language.flag} alt="flag" />
                                        <span>{language.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* nav bar */}
            <nav className="border border-[#e5e8ec] mx-auto px-16 py-4 flex justify-between gap-5 items-center bg-white sticky top-0 z-[90]">
                {/* logo */}
                <div className="logo w-[150px] h-[50px]">
                    <img
                        className="max-w-[100%] max-h-[100%]"
                        src="public/logo.png"
                        alt="logo"
                    />
                </div>

                {/* navlinks */}
                <ul className="flex gap-5 items-center list-none">
                    <li>
                        <NavLink to={"/"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}
                        >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"dashbourd"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}>
                            dashbourd
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"about"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}>
                            about us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"blogs"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}>
                            blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}>
                            contact us
                        </NavLink>
                    </li>
                </ul>

                {/* userbox */}
                <div className="userbox flex items-center gap-5">
                    <div className="flex items-center gap-2 transition-colors duration-300 hover:text-[#2b38d1] cursor-pointer relative">
                        <FaUserLarge size={25} />
                    </div>
                    
                    <div className="transition-colors duration-300 hover:text-[#2b38d1] cursor-pointer relative">
                        <FaRegHeart size={25} />
                        <span className="absolute top-[-8px] right-[-8px] flex items-center justify-center w-[18px] h-[18px] text-white bg-[#dd3842] rounded-full font-semibold text-[10px] leading-[12px]">0</span>
                    </div>

                    <div className="transition-colors duration-300 hover:text-[#2b38d1] cursor-pointer relative">
                        <FiShoppingCart size={25} />
                        <span className="absolute top-[-8px] right-[-8px] flex items-center justify-center w-[18px] h-[18px] text-white bg-[#dd3842] rounded-full font-semibold text-[10px] leading-[12px]">0</span>
                    </div>
                </div>

                {/* list */}
                <div className="bar-btn-list hidden">
                    <div className="flex justify-center items-center">
                        <input 
                        id="checkbox" type="checkbox" className="hidden show-list-btn" 
                        onChange={(e) => setActiveNav(e.target.checked)}
                        checked = {activeNav}/>
                        <label
                            className="toggle relative w-8 cursor-pointer m-auto block h-[calc(2px*3+11px*2)]"
                            htmlFor="checkbox"
                        >
                            <div className="bar bar--top absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none delay-[calc(0s+0.35s)*0.6] duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                            <div className="bar bar--middle absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none delay-[calc(0s+0.35s*0.3)] duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                            <div className="bar bar--bottom absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                        </label>
                    </div>
                </div>
            </nav>


            {/* resposnive nav */}
            <div className={`responsive-nav-container fixed w-full flex flex-col justify-between items-center gap-8 px-8 py-14 bg-[#f4f7fb] h-[calc(100vh-85px)] transition-transform duration-300 transform -translate-x-full
                ${activeNav && "show-res-nav"}`}>
                {/* usebox */}
                <div className="userbox flex items-center gap-5 justify-between w-full">
                    {/* useraccount */}
                    <div className="flex items-center gap-2 transition-colors duration-300 hover:text-[#2b38d1] cursor-pointer relative">
                        <FaUserLarge size={25} />
                    </div>

                    {/* user-cart-whilist */}
                    <div className="user-cart-whilist flex gap-4">
                        <div className="transition-colors duration-300 hover:text-[#2b38d1] cursor-pointer relative">
                            <FaRegHeart size={25} />
                            <span className="absolute top-[-8px] right-[-8px] flex items-center justify-center w-[18px] h-[18px] text-white bg-[#dd3842] rounded-full font-semibold text-[10px] leading-[12px]">0</span>
                        </div>

                        <div className="transition-colors duration-300 hover:text-[#2b38d1] cursor-pointer relative">
                            <FiShoppingCart size={25} />
                            <span className="absolute top-[-8px] right-[-8px] flex items-center justify-center w-[18px] h-[18px] text-white bg-[#dd3842] rounded-full font-semibold text-[10px] leading-[12px]">0</span>
                        </div>
                    </div>
                </div>

                {/* nav links */}
                <ul className="flex gap-5 items-center list-none flex-col justify-center">
                    <li>
                        <NavLink to={"/"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] text-[1.5rem] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}
                        onClick={() => setActiveNav(false)}
                        >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"dashbourd"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] text-[1.5rem] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}
                        onClick={() => setActiveNav(false)}
                        >
                            dashbourd
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"about"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] text-[1.5rem] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}
                        onClick={() => setActiveNav(false)}
                        >
                            about us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"blogs"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] text-[1.5rem] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}
                        onClick={() => setActiveNav(false)}
                        >
                            blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"} className={({isActive}) => `relative block capitalize font-medium transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                        after:bg-[#2b38d1] text-[1.5rem] after:transition-width after:duration-300 hover:text-[#2b38d1]
                        hover:after:w-full ${isActive ? "text-[#2b38d1] after:w-full" : "text-black"}`}
                        onClick={() => setActiveNav(false)}
                        >
                            contact us
                        </NavLink>
                    </li>
                </ul>

                {/* search box */}
                <div className="flex items-center justify-center w-full">
                    <div className="w-full">
                        <div className="flex w-full">
                            <div className="flex items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-8">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input type="text" className="w-[100%] bg-white pl-2 pr-6 text-[20px] font-semibold outline-0" placeholder="Search For Products..." />
                            <input type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
