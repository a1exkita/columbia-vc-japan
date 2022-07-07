import { gql } from "graphql-request";
import { graphcms } from "../../lib/_graphcms";
import parse from "html-react-parser";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

const enum_type = {
    GUEST_SPEAKER: "Guest Speaker",
    CAREER: "Career",
    PANNEL_SESSION: "Panel Session",
    SOCIAL_EVENT: "Social Event",
};

function createYouTubeEmbedLink(link) {
    return link.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
    );
}

export default function events({ event }) {
    const report_date = new Date(event.updatedAt).toLocaleDateString("en-US", {
        timeZone: "EST",
    });
    var link = "";
    if (event.videoLink) {
        link = createYouTubeEmbedLink(event.videoLink);
    }
    // const source = event.report.markdown.replace(/\n/gi, "\n &nbsp;");
    // console.log(source);

    // const ht = event.report.html;
    // console.log(ht);

    return (
        <div className="h-full w-full bg-black pb-8">
            <Head>
                <title>CVC Japan</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar />
            <div className="text-white font-sans font-extrabold mx-2 lg:mx-8 pt-32">
                <a className="m-4" href="/events">
                    {"<"} Back to events
                </a>
            </div>

            <div className="flex flex-col items-center text-white">
                <div className="flex flex-col items-center lg:w-4/6">
                    <div className="flex flex-col items-center lg:w-6/12">
                        <p className="font-serif text-2xl my-4 text-blue-highlight">
                            {enum_type[event.articleType]}
                        </p>
                        <p className="font-serif text-5xl text-center">
                            {event.title}
                        </p>
                        {event.author && (
                            <>
                                <img
                                    className="object-cover h-20 w-20 rounded-full my-4"
                                    src={event.author.image.url}
                                    alt="author_img"
                                ></img>
                                <p>
                                    {event.author.name} on {report_date}
                                </p>
                            </>
                        )}
                    </div>
                    {event.videoLink && (
                        <div className="my-8">
                            <iframe
                                className="w-64 h-44 lg:w-96 lg:h-64"
                                // width="560"
                                // height="315"
                                src={link}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                allowfullscreen
                            ></iframe>
                        </div>
                    )}
                    <div
                        id="report"
                        className="h-auto w-9/12 mt-4 font-sans font-medium a:text-orange-coral"
                    >
                        {parse(event.report.html)}
                        {/* <ReactMarkdown>{source}</ReactMarkdown> */}
                    </div>

                    {/* <p
                        id="report"
                        className="h-auto w-9/12 mt-4 flex flex-col space-between font-sans font-medium"
                    >
                        {parse(event.report.html)}
                        
                    </p>  */}
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async ({ params }) => {
    const slug = params.slug;

    const query = gql`
        query Event($slug: String!) {
            event(where: { slug: $slug }) {
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
                videoLink
            }
        }
    `;

    const data = await graphcms.request(query, { slug });

    return {
        props: { event: { ...data.event } },
        revalidate: 60 * 60,
    };
};

export const getStaticPaths = async () => {
    const query = gql`
        query Events {
            events {
                slug
            }
        }
    `;
    const data = await graphcms.request(query);

    return {
        paths: data.events.map((event) => ({
            params: { slug: event.slug },
        })),
        fallback: false,
    };
};
