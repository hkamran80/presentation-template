import { AnimatePresence } from "framer-motion";
import { CurrentSlideProvider } from "@/lib/context/CurrentSlide";
import { ModeProvider } from "@/lib/context/PresentationMode";
import { useIsClient } from "usehooks-ts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { presentationConfiguration } from "@/slides/configuration";
import { NextSeo } from "next-seo";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
    const isClient = useIsClient();

    if (isClient) {
        return (
            <>
                <ModeProvider>
                    <CurrentSlideProvider>
                        <AnimatePresence mode="wait">
                            <Head>
                                <title>{presentationConfiguration.title}</title>

                                {presentationConfiguration.author ? (
                                    <>
                                        <meta
                                            name="author"
                                            content={
                                                presentationConfiguration.author
                                                    .name
                                            }
                                        />
                                        <meta
                                            name="copyright"
                                            content={
                                                presentationConfiguration.author
                                                    .name
                                            }
                                        />
                                    </>
                                ) : null}
                            </Head>

                            <NextSeo
                                title={presentationConfiguration.title}
                                description={
                                    presentationConfiguration.description
                                }
                                canonical={
                                    presentationConfiguration.canonicalLink
                                }
                                openGraph={{
                                    url: presentationConfiguration.canonicalLink,
                                    title: presentationConfiguration.title,
                                    description:
                                        presentationConfiguration.description,
                                    siteName: presentationConfiguration.title,
                                }}
                                twitter={{
                                    handle: presentationConfiguration.author
                                        ?.twitter,
                                    cardType: "summary",
                                }}
                            />

                            <Component {...pageProps} />
                        </AnimatePresence>
                    </CurrentSlideProvider>
                </ModeProvider>

                {process.env.NODE_ENV === "development" ||
                typeof window === "undefined" ? (
                    ""
                ) : (
                    <Script
                        async
                        defer
                        data-website-id="bcc044a5-d319-4e4d-8578-290eb68f9bde"
                        src="https://umami.unisontech.org/script.js"
                    />
                )}
            </>
        );
    } else {
        return "Loading...";
    }
}
