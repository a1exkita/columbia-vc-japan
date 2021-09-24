import { gql } from "graphql-request";
import { graphcms } from "../lib/_graphcms";
import Navbar from "../components/Navbar";
import Head from "next/head";

const enum_type = {
    GUEST_SPEAKER: "Guest Speaker",
    CAREER: "Career",
    PANNEL_SESSION: "Panel Session",
};

export default function Partners({ data }) {
    return (
        <div className="flex flex-col bg-black min-h-screen w-full">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar />
            <div className="flex flex-col items-center">
                <h1 className="font-serif font-extrabold text-5xl ml-8 mt-32 text-white">
                    Partners
                </h1>
                <h1 className="font-serif font-medium text-3xl text-center w-7/12 text-gray-text">
                    Together with the following organizations, we work to foster
                    a community-oriented approach to entrepreneurship and
                    innovation for the betterment of the entire Columbia
                    community.
                </h1>
            </div>
            <div className="flex flex-col text-white">
                {data.companies.map((company) => (
                    <div key={company.id}>
                        <div className="flex flex-row justify-center items-center mx-8">
                            <div className="flex flex-col h-64 w-1/2 items-center ml-12 pl-20">
                                <img
                                    className="h-60 w-auto object-cover"
                                    src={company.logo.url}
                                    alt="image"
                                />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-row justify-between items-center w-7/12  border-t-2 border-white">
                                    <a href={company.link}>
                                        <h1 className="text-white font-serif text-4xl w-7/12 hover:underline">
                                            {company.name}
                                        </h1>
                                    </a>
                                    <p className="my-4 font-sans fonts-medium text-sm w-7/12 mt-8">
                                        {company.description}
                                    </p>
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
