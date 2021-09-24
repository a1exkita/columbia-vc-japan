import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar />

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <link
                    href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <div id="mc_embed_signup">
                    <form
                        action="https://cvcjp.us5.list-manage.com/subscribe/post?u=5dec989adf2fb67035d4b7bfb&amp;id=2363abf302"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        class="validate"
                        target="_blank"
                        novalidate
                    >
                        <div id="mc_embed_signup_scroll">
                            <input
                                type="email"
                                name="EMAIL"
                                class="email"
                                id="mce-EMAIL"
                                placeholder="email address"
                                required
                            />
                            <div
                                style={
                                    ({ position: "absolute" },
                                    { left: "-5000px" })
                                }
                                aria-hidden="true"
                            >
                                <input
                                    type="text"
                                    name="b_5dec989adf2fb67035d4b7bfb_2363abf302"
                                    tabindex="-1"
                                    value=""
                                />
                            </div>
                            <div class="clear">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    class="button"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <h1 className="text-6xl font-bold">
                    Welcome to{" "}
                    <a className="text-blue-600" href="https://nextjs.org">
                        Next.js!
                    </a>
                </h1>

                <p className="mt-3 text-2xl">
                    Get started by editing{" "}
                    <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                        pages/index.js
                    </code>
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="https://nextjs.org/docs"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">
                            Documentation &rarr;
                        </h3>
                        <p className="mt-4 text-xl">
                            Find in-depth information about Next.js features and
                            API.
                        </p>
                    </a>

                    <a
                        href="https://nextjs.org/learn"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Learn &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Learn about Next.js in an interactive course with
                            quizzes!
                        </p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Examples &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Discover and deploy boilerplate example Next.js
                            projects.
                        </p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Instantly deploy your Next.js site to a public URL
                            with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="h-4 ml-2"
                    />
                </a>
            </footer>
        </div>
    );
}
