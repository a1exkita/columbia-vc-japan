import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div className=" bg-black absolute w-full">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar />

            <main className="mt-32 flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
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
                        noValidate
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
