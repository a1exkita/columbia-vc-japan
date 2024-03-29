import { gql } from "graphql-request";
import { graphcms } from "../../lib/_graphcms";
import Navbar from "../../components/Navbar";
import Head from "next/head";

export default function members({ data }) {
    return (
        <div className="flex flex-col bg-black absolute">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:url" content="https://www.cvcjp.com/members" />
                <meta property="og:type" content="website" />
                <meta
                    property="fb:app_id"
                    content={process.env.FACEBOOK_APP_ID}
                />
                <meta
                    property="og:title"
                    content="Columbia Venture Community Japan Chapter"
                />

                <meta
                    property="og:description"
                    content="Connect. Build. Empower."
                />
                <meta property="og:image" content="https://cvcjp.s3.us-west-2.amazonaws.com/preview.jpg" />
            </Head>
            <Navbar />
            <h1 className="font-serif font-extrabold text-5xl ml-8 mt-32 text-white">
                Members
            </h1>
            <h5 className="font-sans font-medium text-sm ml-8 mt-4 text-gray-text">
                We are delighted to have those individuals in our community
                including founders, CEOs of startups and companies that recently
                exited, investors, accelerators, and more.
            </h5>
            <h1 className="font-serif font-extrabold text-3xl ml-8 mt-8 text-white">
                CVC Japan Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 p-8">
                {data.members
                    .filter((member) => member.type == "team")
                    .sort((a, b) => b.priority - a.priority)
                    .map((member) => (
                        <div key={member.slug}>
                            <a href={"/members/" + member.slug}>
                                <div className="max-w-sm m-4 h-full lg:m-0 rounded overflow-hidden shadow-lg bg-gray-dark border border-gray-border hover:border-blue-highlight">
                                    <img
                                        className="h-60 w-full object-cover"
                                        src={member.image.url}
                                        alt="img"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="text-xl text-white mb-2 font-extrabold">
                                            {member.name}
                                        </div>
                                        <p className="text-white text-base">
                                            {member.title} @ {member.company}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
            </div>

            <h1 className="font-serif font-extrabold text-3xl ml-8 mt-4 text-white">
                Advisors
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 p-8">
                {data.members
                    .filter((member) => member.type == "advisors")
                    .sort((a, b) => b.priority - a.priority)
                    .map((member) => (
                        <div key={member.slug}>
                            <a href={"/members/" + member.slug}>
                                <div className="max-w-sm m-4 h-full lg:m-0 rounded overflow-hidden shadow-lg bg-gray-dark border border-gray-border hover:border-blue-highlight">
                                    <img
                                        className="h-60 w-full object-cover"
                                        src={member.image.url}
                                        alt="img"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="text-xl text-white mb-2 font-extrabold">
                                            {member.name}
                                        </div>
                                        <p className="text-white text-base">
                                            {member.title} @ {member.company}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
            </div>

            <h1 className="font-serif font-extrabold text-3xl ml-8 mt-4 text-white">
                Columbia Affiliated Members
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 p-8">
                {data.members
                    .filter((member) => member.type == "members")
                    .sort((a, b) => b.priority - a.priority)
                    .map((member) => (
                        <div key={member.slug}>
                            <a href={"/members/" + member.slug}>
                                <div className="max-w-sm m-4 h-full lg:m-0 rounded overflow-hidden shadow-lg bg-gray-dark border border-gray-border hover:border-blue-highlight">
                                    <img
                                        className="h-60 w-full object-cover"
                                        src={member.image.url}
                                        alt="img"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="text-xl text-white mb-2 font-extrabold">
                                            {member.name}
                                        </div>
                                        <p className="text-white text-base">
                                            {member.title} @ {member.company}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
            </div>

            {data.members.filter((m) => m.type == "speakers").length > 0 && (
                <h1 className="font-serif font-extrabold text-3xl ml-8 mt-4 text-white">
                    Speakers
                </h1>
            )}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 p-8">
                {data.members
                    .filter((member) => member.type == "speakers")
                    .sort((a, b) => b.priority - a.priority)
                    .map((member) => (
                        <div key={member.slug}>
                            <a href={"/members/" + member.slug}>
                                <div className="max-w-sm m-4 h-full lg:m-0 rounded overflow-hidden shadow-lg bg-gray-dark border border-gray-border hover:border-blue-highlight">
                                    <img
                                        className="h-60 w-full object-cover"
                                        src={member.image.url}
                                        alt="img"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="text-xl text-white mb-2 font-extrabold">
                                            {member.name}
                                        </div>
                                        <p className="text-white text-base">
                                            {member.title} @ {member.company}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const query = gql`
        query Members {
            members {
                id
                name
                bio
                slug
                title
                linkedIn
                twitter
                instagram
                company
                image {
                    url
                }
                priority
                type
            }
        }
    `;

    const data = await graphcms.request(query);

    return {
        props: { data: { ...data } },
        revalidate: 60 * 60,
    };
};
