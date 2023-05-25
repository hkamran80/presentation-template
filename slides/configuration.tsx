import SlideListExample from "./ListExample";
import SlideDemo from "./Albums";
import SlideTitle from "./Title";
import type { SlidePageProps } from "@/types/SlidePage";
import type { PresentationConfig } from "@/types/PresentationConfig";

export const slides = [
    <SlideTitle key={0} />,
    <SlideListExample key={1} />,
    <SlideDemo key={2} />,
];

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
