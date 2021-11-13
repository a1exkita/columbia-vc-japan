import { gql } from "graphql-request";
import { useState } from "react";
import { graphcms } from "../lib/_graphcms";
import Navbar from "../components/Navbar";
import Head from "next/head";

const enum_type = {
    GUEST_SPEAKER: "Guest Speaker",
    CAREER: "Career",
    PANNEL_SESSION: "Panel Session",
};

export default function Partners({ data }) {
    const [state, setstate] = useState([]);
    return (
        <div className="flex flex-col bg-black min-h-screen w-full">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar />
            <h1 className="font-serif font-extrabold text-5xl ml-8 mt-32 text-white">
                Partners
            </h1>
            <h5 className="font-sans font-medium text-sm mt-4 ml-8 w-7/12 text-gray-text">
                Together with the following organizations, we work to foster a
                community-oriented approach to entrepreneurship and innovation
                for the betterment of the Columbia and entrepreneurial community
                in Japan.
            </h5>
            <div className="grid grid-cols-3 gap-4 px-32 text-white mt-16">
                {data.companies.map(function (company) {
                    return (
                        <div key={company.id}>
                            <a href={company.link}>
                                <div className="flex flex-col items-center mx-8">
                                    <div className="flex flex-col justify-center h-48">
                                        <img
                                            className="h-auto w-full object-fit"
                                            src={company.logo.url}
                                            alt="image"
                                        />
                                    </div>
                                    <p className="font-serif text-xl text-white mt-8 hover:underline">
                                        {company.name}
                                    </p>
                                    <p className="my-4 font-sans fonts-medium text-xs w-full mt-8 text-center">
                                        {company.description}
                                    </p>
                                    {/* <div className="flex flex-col w-1/2">
                                <div className="flex flex-col justify-between w-7/12 pt-4 border-t-2 border-white">
                                    <a href={company.link}>
                                        <h1 className="text-white font-serif text-4xl w-full hover:underline">
                                            {company.name}
                                        </h1>
                                    </a>
                                    <p className="my-4 font-sans fonts-medium text-sm w-full mt-8">
                                        {company.description}
                                    </p>
                                </div>
                            </div> */}
                                </div>
                            </a>
                        </div>
                    );
                })}
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
