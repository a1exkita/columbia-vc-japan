import React from "react";

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
];

function HomeNavbar() {
    return (
        <div>
            <header className="p-4 bg-transparent h-20 flex flex-row justify-between items-center mt-8 fixed w-full">
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
        </div>
    );
}

export default HomeNavbar;
