import { gql } from "graphql-request";
import { graphcms } from "../lib/_graphcms";
import Navbar from "../components/Navbar";
import Head from "next/head";

const enum_type = {
    GUEST_SPEAKER: "Guest Speaker",
    CAREER: "Career",
    PANNEL_SESSION: "Panel Session",
};

export default function Jobs({ data }) {
    return (
        <div className="flex flex-col bg-black min-h-screen w-full">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar />
            <h1 className="font-serif font-extrabold text-5xl ml-8 mt-32 text-white">
                Jobs
            </h1>
            <h5 className="font-sans font-medium text-sm mt-4 ml-8 text-gray-text">
                Jobs available from companies.
            </h5>
            <div className="flex flex-col text-white mt-8">
                {data.companies.map((company) => (
                    <div key={company.id}>
                        <div className="flex flex-row items-center mx-8">
                            <div className="flex flex-col h-64 w-1/2 justify-center items-center ml-12 pl-20">
                                <img
                                    className="h-48 w-auto object-cover"
                                    src={company.logo.url}
                                    alt="image"
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-col justify-between w-7/12 pt-4 border-t-2 border-white">
                                    <a href={company.link}>
                                        <h1 className="text-white font-serif text-4xl w-full hover:underline">
                                            {company.name}
                                        </h1>
                                    </a>
                                    <p className="my-4 font-sans fonts-medium text-sm w-full mt-8">
                                        {company.description}
                                    </p>
                                    <a href={company.link}>
                                        <div className="text-black font-sans font-extrabold w-40 text-center text-sm pt-3 pb-3 rounded-md mb-8 bg-blue-highlight h-10">
                                            Available Positions
                                        </div>
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
        query Companies {
            companies {
                id
                name
                createdAt
                logo {
                    url
                }
                description
                link
            }
        }
    `;

    const data = await graphcms.request(query);

    return {
        props: { data: { ...data } },
        revalidate: 60 * 60,
    };
};
