import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_1mul0s6",
                "template_g8lxohn",
                form.current,
                "user_Dd1d0SvFHsv4c8DNd52XP"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        form.current.reset();
    };

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="flex flex-col items-center justify-center pt-36 ">
                <div class="w-full max-w-xs">
                    <form
                        form
                        ref={form}
                        onSubmit={sendEmail}
                        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    >
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2 font-sans font-extrabold"
                                for="username"
                            >
                                Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                name="user_name"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="email"
                            >
                                Email
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="user_email"
                                placeholder="Your email"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="message"
                            >
                                Message
                            </label>
                            <textarea
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                type="text"
                                name="message"
                                placeholder="Your message"
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
