import { gql } from "graphql-request";
import { graphcms } from "../../lib/_graphcms";
import Navbar from "../../components/Navbar";
import Head from "next/head";

const enum_type = {
    GUEST_SPEAKER: "Guest Speaker",
    CAREER: "Career",
    PANNEL_SESSION: "Panel Session",
};

export default function events({ data }) {
    const now = new Date();

    return (
        <div className="flex flex-col bg-black absolute w-full">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar />
            <h1 className="font-serif font-extrabold text-5xl ml-8 mt-32 text-white">
                Events
            </h1>
            <h5 className="font-sans font-medium text-sm ml-8 mt-4 text-gray-text">
                We hold events regularly. Here are event reports, recordings,
                and presentation materials of the previous events.
            </h5>
            <div className="flex flex-col text-white">
                <h1 className="font-serif font-extrabold text-4xl my-16 text-white text-center">
                    Upcoming Events
                </h1>
                {data.events
                    .filter((event) => now < Date.parse(event.date))
                    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                    .map((event) => (
                        <div key={event.slug}>
                            <div className="flex flex-row justify-items-center mx-8">
                                <div className="flex flex-col h-64 w-1/2 items-center ml-12 pl-20">
                                    <img
                                        className="h-full w-auto object-cover"
                                        src={event.image.url}
                                        alt="image"
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <div className="flex flex-row justify-between w-7/12  border-t-2 border-white">
                                        <p className="my-4 font-serif text-lg text-blue-highlight">
                                            {enum_type[event.articleType]}
                                        </p>
                                        <p className="my-4 font-sans fonts-medium text-sm">
                                            {event.date}
                                        </p>
                                    </div>
                                    <a href={"/events/" + event.slug}>
                                        <h1 className="text-white font-serif text-4xl w-7/12 hover:underline">
                                            {event.title}
                                        </h1>
                                    </a>
                                    <p className="my-4 font-sans fonts-medium text-sm w-7/12 mt-8">
                                        {event.summary}
                                    </p>
                                    <div className="flex flex-row justify-between items-center w-7/12">
                                        <a href={event.registrationLink}>
                                            <div className="rounded bg-blue-highlight hover:bg-blue-homeblue text-black w-36 h-10 justify-center iteams-center flex-col flex">
                                                <p className="text-md font-sans font-extrabold text-black text-center">
                                                    REGISTER
                                                </p>
                                            </div>
                                        </a>
                                        <a
                                            href="https://www.buymeacoffee.com/cvcjp"
                                            target="_blank"
                                        >
                                            <img
                                                className="w-32 h-8"
                                                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                                                alt="Buy Me A Coffee"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                <h1 className="font-serif font-extrabold text-4xl mt-20 mb-16  text-white text-center">
                    Past Events
                </h1>
                {data.events
                    .filter((event) => now >= Date.parse(event.date))
                    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                    .map((event) => (
                        <div key={event.slug} className="mb-12">
                            <div className="flex flex-row justify-items-center mx-8">
                                <div className="flex flex-col h-64 w-1/2 items-center ml-12 pl-20">
                                    <img
                                        className="h-full w-auto object-cover"
                                        src={event.image.url}
                                        alt="image"
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <div className="flex flex-row justify-between w-7/12  border-t-2 border-white">
                                        <p className="my-4 font-serif text-blue-highlight text-lg">
                                            {enum_type[event.articleType]}
                                        </p>
                                        <p className="my-4 font-sans fonts-medium text-sm">
                                            {event.date}
                                        </p>
                                    </div>
                                    <a href={"/events/" + event.slug}>
                                        <h1 className="text-white font-serif text-4xl w-7/12 hover:underline">
                                            {event.title}
                                        </h1>
                                    </a>
                                    <p className="my-4 font-sans fonts-medium text-sm w-7/12 mt-8">
                                        {event.summary}
                                    </p>
                                    <div className="flex flex-row justify-end w-7/12 ">
                                        <a
                                            href="https://www.buymeacoffee.com/cvcjp"
                                            target="_blank"
                                        >
                                            <img
                                                className="w-32 h-8"
                                                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                                                alt="Buy Me A Coffee"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const query = gql`
        query Events {
            events {
                id
                createdAt
                updatedAt
                slug
                title
                author {
                    name
                    image {
                        url
                    }
                }
                image {
                    url
                }
                date
                report {
                    html
                }
                articleType
                summary
                registrationLink
            }
        }
    `;

    const data = await graphcms.request(query);

    return {
        props: { data: { ...data } },
        revalidate: 60 * 60,
    };
};
