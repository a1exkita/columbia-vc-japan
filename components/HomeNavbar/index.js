import React from "react";
import { useState } from "react";

export const NAVIGATION = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "Events",
        route: "/events",
    },
    {
        name: "Members",
        route: "/members",
    },
    /*{
        name: "Jobs",
        route: "/jobs",
    },*/
    {
        name: "Partners",
        route: "/partners",
    },
    {
        name: "Contact",
        route: "/contact",
    },
    {
        name: "Donation",
        route: "https://www.buymeacoffee.com/cvcjp",
    },
];

function HomeNavbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <div>
            <header className="flex flex-col w-full">
                <div
                    className={`${
                        active ? "bg-black" : "bg-transparent"
                    } lg:hidden pt-16 pb-16 p-4 h-20 flex flex-row justify-between items-center fixed w-full`}
                >
                    <img src="/logo.svg" alt="logo" />
                    <p className="font-serif font-extrabold text-md text-white ml-4">
                        Columbia Venture Community <br /> Japan Chapter
                    </p>
                    <button
                        className=" inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
                        onClick={handleClick}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        active
                            ? "pt-8 animate-fade-in-down-quick items-end overflow-hidden mt-24 flex flex-col ml-8 fixed z-10 px-4 h-full w-full inset-y-0 right-0 bg-black bg-opacity-90"
                            : "hidden"
                    } `}
                >
                    {NAVIGATION.map(({ name, route }) => (
                        <a
                            className="text-white py-2 items-center font-sans font-extrabold"
                            key={name}
                            href={route}
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </header>
            <header className="hidden  lg:pt-16 lg:bg-transparent lg:p-4 lg:h-20 lg:flex lg:flex-row lg:justify-between lg:items-center lg:fixed lg:w-full">
                <div className="flex flex-row items-center justify-around ml-12">
                    <img src="/logo.svg" alt="logo" />
                    <p className="font-serif font-extrabold text-md text-white ml-4">
                        Columbia Venture Community <br /> Japan Chapter
                    </p>
                </div>
                <div>
                    {NAVIGATION.map(({ name, route }) => (
                        <a
                            className="text-white px-4 font-sans font-extrabold"
                            key={name}
                            href={route}
                        >
                            {name}
                        </a>
                    ))}
                </div>
                <div></div>
            </header>
            {/* <header className="p-4 bg-transparent h-20 flex flex-row justify-between items-center mt-8 fixed w-full">
                <div className="flex flex-row items-center justify-around ml-12">
                    <img src="/logo.svg" alt="logo" />
                    <p className="font-serif font-extrabold text-md text-white ml-4">
                        Columbia Venture Community <br /> Japan Chapter
                    </p>
                </div>
                <div>
                    {NAVIGATION.map(({ name, route }) => (
                        <a
                            className="text-white px-4 font-sans font-extrabold"
                            key={name}
                            href={route}
                        >
                            {name}
                        </a>
                    ))}
                </div>
                <div></div>
            </header> */}
        </div>
    );
}

export default HomeNavbar;
