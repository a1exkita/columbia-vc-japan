import React from "react";

export const NAVIGATION = [
    {
        name: "Home",
        route: "/home",
    },
    {
        name: "Events",
        route: "/events",
    },
    {
        name: "Members",
        route: "/members",
    },
    {
        name: "Jobs",
        route: "/jobs",
    },
    {
        name: "Partners",
        route: "/partners",
    },
    {
        name: "Contact",
        route: "https://us5.list-manage.com/contact-form?u=5dec989adf2fb67035d4b7bfb&form_id=f3f793cd9591f57eb5ecb97eec1488b8",
    },
];

function Navbar() {
    return (
        <div>
            <header className="bg-black p-4 h-20 flex flex-row justify-between items-center border-b-2 border-gray-border fixed w-full">
                <img src="/logo.svg" alt="logo" />
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

export default Navbar;
