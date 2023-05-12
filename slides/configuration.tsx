import SlideListExample from "./ListExample";
import SlideDemo from "./Albums";
import SlideTitle from "./Title";
import type { SlidePageProps } from "@/types/SlidePage";
import type { PresentationConfig } from "@/types/PresentationConfig";

/* eslint-disable react/jsx-key */
export const slides = [<SlideTitle />, <SlideListExample />, <SlideDemo />];

export const slideConfiguration: SlidePageProps = {
    header: <span className="uppercase tracking-wider">Demo Presentation</span>,
    footer: (
        <span className="uppercase tracking-wider">
            Open-source by H. Kamran
        </span>
    ),
};

export const presentationConfiguration: PresentationConfig = {
    title: "Demo Presentation",
    author: { name: "H. Kamran", twitter: "@hkamran80" },
    description: "This is a demo presentation",
    canonicalLink: "https://presentation-demo.hkamran.com",
};
