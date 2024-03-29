// import { useState, useEffect } from "react";
import { gql } from "graphql-request";
import Navbar from "../../components/Navbar";
import { graphcms } from "../../lib/_graphcms";
import Head from "next/head";

const socialIcons = [
    {
        name: "linkedIn",
        url: "/linkedIn.svg",
    },
    {
        name: "twitter",
        url: "/twitter.svg",
    },
    {
        name: "github",
        url: "/github.svg",
    },
];

export default function members({ member }) {
    return (
        <div className="lg:absolute h-full bg-black">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:url" content={"https://www.cvcjp.com/members/" + member.slug} />
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
            <div className="flex flex-col">
                <div className="text-white font-sans font-extrabold mx-8 my-6 mt-32">
                    <a className="m-4" href="/members">
                        {"<"} Back to members
                    </a>
                </div>
                <div className="flex flex-col lg:flex-row h-full mx-8">
                    <img
                        className="m-4 lg:w-1/5 object-cover"
                        src={member.image.url}
                        alt="img"
                    />
                    <div className="flex flex-col m-4">
                        <h1 className="text-white text-5xl font-sans font-extrabold">
                            {member.name}
                        </h1>
                        <div className="flex flex-row mt-2">
                            <p className="text-gray-text font-medium">
                                {member.title} @
                            </p>
                            <p className="text-white font-medium">
                                {member.company}
                            </p>
                        </div>
                        <div className="flex flex-col my-4">
                            <h3 className="text-white text-3xl font-extrabold">
                                Bio
                            </h3>
                            <p className="text-white font-medium mt-2">
                                {member.bio}
                            </p>
                        </div>
                        {(member.linkedIn ||
                            member.twitter ||
                            member.instagram) && (
                            <div className="flex flex-col my-4">
                                <h3 className="text-white text-3xl font-extrabold">
                                    Social Media
                                </h3>
                                <div className="flex flex-row items-center justify-around lg:w-40 mt-2">
                                    {member.linkedIn && (
                                        <a href={member.linkedIn}>
                                            <img
                                                className="w-12 h-auto"
                                                src="/linkedIn.svg"
                                                alt="linkedIn"
                                            />
                                        </a>
                                    )}
                                    {member.twitter && (
                                        <a href={member.twitter}>
                                            <img
                                                className="w-12 h-auto"
                                                src="/twitter.svg"
                                                alt="twitter"
                                            />
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a href={member.instagram}>
                                            <img
                                                className="w-10 h-auto"
                                                src="/instagram.svg"
                                                alt="instagram"
                                            />
                                        </a>
                                    )}
                                    {/* {socialIcons.map(({ url, n }) => {
                                <img
                                    key={n}
                                    className="w-24 h-auto"
                                    src={"/" + url}
                                    alt={n}
                                />;
                            })} */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const slug = params.slug;

    const query = gql`
        query Member($slug: String!) {
            member(where: { slug: $slug }) {
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
            }
        }
    `;

    const data = await graphcms.request(query, { slug });

    return {
        props: { member: { ...data.member } },
        revalidate: 60 * 60,
    };
};

export const getStaticPaths = async () => {
    const query = gql`
        query Members {
            members {
                slug
            }
        }
    `;
    const data = await graphcms.request(query);

    return {
        paths: data.members.map((member) => ({
            params: { slug: member.slug },
        })),
        fallback: false,
    };
};
