import Head from "next/head";
import HomeNavbar from "../components/HomeNavbar";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="absolute w-full min-h-screen bg-blue-homeblue">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <HomeNavbar />
            <div className="flex flex-row items-center justify-around min-h-screen w-full  animate-fade-in-down">
                <div className="flex flex-col">
                    <h1 className="w-2/5 font-serif font-extrabold ml-48 mt-40 text-8xl text-white">
                        Connect. Talk. Build.
                    </h1>
                    <p className="font-sans font-light text-white mt-8 ml-48 ">
                        Founded in 2006, Columbia Venture Community (CVC) is a
                        private, global network of more than 6,000 Columbia
                        University alumni, students, and staff who are
                        interested in all aspects of entrepreneurship and
                        innovation.
                    </p>
                    <a href="/events">
                        <div className="flex flex-row text-white font-sans h-12 justify-start space-x-8 items-center font-extrabold ml-48 mt-8 text-3xl">
                            <p className="hover:underline">CHECK OUR EVENTS</p>
                            <img className="h-12" src="arrow.svg" alt="arrow" />
                        </div>
                    </a>
                </div>
                <img className="w-3/5 h-4/6" src="lion.png" alt="lion" />
            </div>
            <div className="bg-black flex flex-col mt-16">
                <div className="flex flex-row items-center py-16">
                    <h1 className="w-2/5 font-sans font-extrabold ml-64 pl-16 text-5xl text-white">
                        WHO WE ARE
                    </h1>
                    <p className="font-sans font-light text-lg w-96 justify-start text-white">
                        Founded in 2006, Columbia Venture Community (CVC) is a
                        private, global network of more than 6,000 Columbia
                        University alumni, students, and staff who are
                        interested in all aspects of entrepreneurship and
                        innovation.
                    </p>
                </div>
            </div>
            <div className="bg-black flex flex-col">
                <div className="flex flex-row items-center justify-center py-16">
                    <p className="font-sans font-light text-lg w-96 text-white">
                        Founded in 2006, Columbia Venture Community (CVC) is a
                        private, global network of more than 6,000 Columbia
                        University alumni, students, and staff who are
                        interested in all aspects of entrepreneurship and
                        innovation.
                    </p>
                    <h1 className="w-2/5 font-sans font-extrabold text-5xl pl-64  text-white">
                        WHAT WE DO
                    </h1>
                </div>
            </div>

            {/* MailChimp Code for Mailing List */}
            <main className="bg-black flex flex-col items-center justify-center w-full flex-1 px-20 text-center font-sans font-medium py-8">
                <div className="flex flex-col">
                    <form
                        action="https://cvcjp.us5.list-manage.com/subscribe/post?u=5dec989adf2fb67035d4b7bfb&amp;id=2363abf302"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        noValidate
                    >
                        <p className="font-sans font-extrabold text-white text-5xl my-8">
                            JOIN OUR COMMUNITY
                        </p>
                        <p className="font-sans font-light text-white text-lg my-8">
                            You can join our mailing list by providing with your
                            email in the following input.
                        </p>
                        <div className="flex flex-row justify-around mb-12">
                            <input
                                type="email"
                                name="EMAIL"
                                class="rounded w-96 px-4"
                                placeholder="email address"
                                required
                            />
                            <div class="text-white bg-blue-homeblue rounded p-2">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    className="rounded bg-blue-homeblue"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="text-white font-serif font-extrabold flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img src="/logo.svg" alt="cvclogo" className="h-8 ml-4" />
                </a>
            </footer>
        </div>
    );
}
