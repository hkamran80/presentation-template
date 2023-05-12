import { AnimatePresence } from "framer-motion";
import { CurrentSlideProvider } from "@/lib/context/CurrentSlide";
import { ModeProvider } from "@/lib/context/PresentationMode";
import { useIsClient } from "usehooks-ts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { presentationConfiguration } from "@/slides/configuration";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
    const isClient = useIsClient();

    if (isClient) {
        return (
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
                            description={presentationConfiguration.description}
                            canonical={presentationConfiguration.canonicalLink}
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
        );
    } else {
        return <Component {...pageProps} />;
    }
}
