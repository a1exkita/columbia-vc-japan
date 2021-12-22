import Head from "next/head";
import HomeNavbar from "../components/HomeNavbar";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-blue-homeblue w-screen">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
                <meta property="og:url" content="https://www.cvcjp.com/" />
                <meta property="og:type" content="website" />
                <meta
                    property="fb:app_id"
                    content={process.env.FACEBOOK_APP_ID}
                />
                <meta
                    property="og:title"
                    content="Columbia Venture Community Japan Chapter"
                />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:description"
                    content="Connect. Build. Empower."
                />
                <meta property="og:image" content="/preview.jpg" />
            </Head>
            <HomeNavbar />
            <div className="flex flex-col lg:flex-row items-center justify-around min-h-screen w-full  animate-fade-in-down">
                <div className="flex flex-col">
                    <h1 className="w-full lg:w-2/5 font-serif bg-lion bg-no-repeat bg-right-top lg:bg-none font-extrabold text-6xl mt-24 p-4 lg:ml-48 lg:mt-40 lg:text-8xl text-white">
                        Connect.
                        <br />
                        Build.
                        <br />
                        Empower.
                    </h1>
                    <p className="font-sans font-light text-white mt-16 mx-8 lg:ml-48 ">
                        The Japan Chapter of Columbia Venture Community (CVC)
                        was launched in 2020 with a mission to foster
                        entrepreneurship and innovation in Japan. CVC Japan aims
                        to contribute to the entrepreneurial ecosystem in Japan
                        through its activities and community.
                    </p>
                    <a href="/events">
                        <div className="flex flex-row text-white font-sans h-16 justify-start items-center font-extrabold p-4 mx-8 space-x-2 lg:space-x-8 lg:ml-48 mt-16 lg:mt-8 text-3xl">
                            <p className="hover:underline">CHECK OUR EVENTS</p>
                            <img className="h-12" src="arrow.svg" alt="arrow" />
                        </div>
                    </a>
                </div>
                <img
                    className="hidden lg:block lg:w-3/5 lg:h-4/6"
                    src="lion.png"
                    alt="lion"
                />
            </div>
            <div className="bg-black flex flex-col mt-16">
                <div className="flex flex-col lg:flex-row items-center py-4 mt-12 lg:mt-0 lg:py-16">
                    <h1 className="lg:w-2/5 font-sans font-extrabold mx-8 lg:ml-64 lg:pl-16 text-4xl lg:text-5xl text-white">
                        WHO WE ARE
                    </h1>
                    <p className="font-sans font-light text-base  text-center lg:text-left lg:text-lg lg:w-96 mt-8 mx-8 lg:mx-0 lg:mt-0 lg:justify-start text-white">
                        Columbia Venture Community (CVC) Japan is a regional
                        chapter and a part of the global network of Columbia
                        Venture Community. Columbia Venture Community was
                        founded at Columbia Business School. Since then, it has
                        been one of the largest and most inclusive
                        entrepreneurship-focused communities in the Columbia
                        innovation ecosystem — serving nearly 6,000 members
                        globally in 50+ countries.
                        <br />
                        🎉
                        <i>
                            We got featured in{" "}
                            <a href="https://columbiaventurecommunity.com/annual-report">
                                <u>2021 Annual Report</u>
                            </a>{" "}
                            released by CVC Global Board.
                        </i>
                    </p>
                </div>
            </div>
            <div className="bg-black flex flex-col">
                <div className="flex flex-col lg:flex-row items-center justify-center py-4 lg:py-16">
                    <h1 className=" lg:hidden lg:w-2/5 font-sans font-extrabold mt-8 lg:mt-0 text-4xl lg:text-5xl lg:pl-64  text-white">
                        WHAT WE DO
                    </h1>
                    <p className="font-sans font-light text-base text-center lg:text-left lg:text-lg mt-8 mx-8 lg:mx-0 lg:mt-0 lg:w-96 text-white">
                        CVC Japan creates a supportive community to connect
                        individuals and organizes events including startup
                        founder talks, speaker panels, startup pitch events,
                        innovation seminars, and more.
                    </p>
                    <h1 className="hidden lg:block lg:w-2/5 font-sans font-extrabold text-5xl lg:pl-64  text-white">
                        WHAT WE DO
                    </h1>
                </div>
            </div>

            {/* MailChimp Code for Mailing List */}
            <main className="bg-black flex flex-col items-center justify-center w-full flex-1 px-20 text-center font-sans font-medium py-4 lg:py-8">
                <div className="flex flex-col">
                    <p className="font-sans font-extrabold text-white text-4xl lg:text-5xl my-8">
                        JOIN OUR COMMUNITY
                    </p>
                    <form
                        action="https://cvcjp.us5.list-manage.com/subscribe/post?u=5dec989adf2fb67035d4b7bfb&amp;id=2363abf302"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        className=""
                    >
                        <p className="font-sans font-light text-white text-lg mt-4 mb-4">
                            Answer the following questions and join our
                            community! 🚀
                        </p>
                        <div className="text-white text-left lg:text-center flex justify-start ">
                            <strong>
                                Are you Columbia University's
                                affiliates(students, faculty, and staff)?{" "}
                                <span className="asterisk">*</span>
                            </strong>
                        </div>
                        <div className="font-sans font-light flex flex-col items-start text-white text-lg mc-field-group input-group mb-2 ml-2 lg:ml-0">
                            <ul className="list-none flex flex-col items-start mt-2">
                                <li>
                                    <input
                                        type="radio"
                                        value="Columbia affiliates"
                                        name="MMERGE6"
                                        id="mce-MMERGE6-0"
                                        oninvalid="this.setCustomValidity('Please select here')"
                                        oninput="this.setCustomValidity('')"
                                        required
                                    />
                                    <label className="ml-2" for="mce-MMERGE6-0">
                                        Columbia affiliates
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        value="Non-affiliates"
                                        name="MMERGE6"
                                        id="mce-MMERGE6-1"
                                    />
                                    <label className="ml-2" for="mce-MMERGE6-1">
                                        Non-affiliates
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="text-white flex justify-start mb-2">
                            <strong>
                                Your Email Address{" "}
                                <span className="asterisk">*</span>
                            </strong>
                        </div>
                        <div className="text-black flex flex-row justify-start mb-4">
                            <input
                                type="email"
                                name="EMAIL"
                                class="rounded lg:w-96 px-4"
                                placeholder="Type your email address"
                                oninvalid="this.setCustomValidity('Enter Email Here')"
                                oninput="this.setCustomValidity('')"
                                required
                            />
                            <div className="text-white bg-blue-homeblue rounded p-2 ml-4">
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
