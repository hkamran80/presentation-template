import Slide from "./Slide";
import Swipeable from "./Swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    fullScreenKey,
    nextSlideKeys,
    PresentationMode,
} from "@/lib/constants";
import { useCurrentSlide } from "@/lib/context/CurrentSlide";
import { useEffect } from "react";
import { useEventListener } from "usehooks-ts";
import { useMode } from "@/lib/context/PresentationMode";
import { useRouter } from "next/router";
import type { SlidePageProps } from "@/types/SlidePage";

type Props = {
    slides: JSX.Element[];
} & SlidePageProps;

const SlidePage = ({
    slides,
    showSlideCount,
    showSlideControls,
    header,
    footer,
}: Props) => {
    const {
        currentSlide,
        setSlide,
        steps,
        currentStep,
        setCurrentStep,
        clearSteps,
    } = useCurrentSlide();
    const router = useRouter();
    const { mode, setMode, fullScreen, setFullScreen } = useMode();

    let slideCount = slides.length;

    const handleKeypress = ({ key, altKey }: KeyboardEvent) => {
        if (altKey && key === "p") {
            navigate("mode");
        } else if (!altKey) {
            if (key === "ArrowLeft") {
                navigate("previous");
            } else if (nextSlideKeys.includes(key)) {
                navigate("next");
            } else if (key === fullScreenKey) {
                setFullScreen(!fullScreen);
            }
        }
    };

    const navigate = (command: "next" | "previous" | "mode") => {
        if (command === "mode") {
            setMode(
                PresentationMode.Slideshow
                    ? PresentationMode.Speaker
                    : PresentationMode.Slideshow,
            );

            router.push(
                router.pathname,
                `${router.pathname}?mode=${mode}#${currentSlide}`,
                { shallow: true },
            );
        }

        if (command === "previous" && currentSlide > 0) {
            if (steps.length > 0 && currentStep > 0) {
                // Deal with steps if they're present
                setCurrentStep!((currentStep) => currentStep - 1);
            } else {
                // Go to previous slide
                setSlide!((currentSlide) => {
                    document.documentElement.classList.remove(
                        `slide-${currentSlide}`,
                    );
                    document.documentElement.classList.add(
                        `slide-${currentSlide - 1}`,
                    );

                    return currentSlide - 1;
                });

                clearSteps();
            }
        }

        if (command === "next") {
            if (
                steps.length > 0 &&
                currentStep < steps.length - 1 &&
                setCurrentStep
            ) {
                // Deal with steps if they're present
                setCurrentStep!((currentStep) => currentStep + 1);
            } else if (currentSlide !== slideCount - 1) {
                // Go to next slide
                setSlide!((currentSlide) => {
                    document.documentElement.classList.add(
                        `slide-${currentSlide + 1}`,
                    );
                    document.documentElement.classList.remove(
                        `slide-${currentSlide}`,
                    );

                    return currentSlide + 1;
                });

                clearSteps();
            }
        }
    };

    useEffect(() => {
        router.push(router.pathname).then(() => {
            router.push(
                `${router.pathname}?mode=${mode}#${currentSlide}`,
                `${router.pathname}?mode=${mode}#${currentSlide}`,
                { shallow: true },
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide, mode, router.pathname]);

    useEventListener("keydown", handleKeypress);

    return (
        <Swipeable
            onSwipedLeft={() => navigate("previous")}
            onSwipedRight={() => navigate("next")}
        >
            {header ? (
                <header className="absolute left-10 top-10 text-sm text-neutral-500">
                    {header}
                </header>
            ) : null}

            <main id="slide" className="w-full">
                <Slide>{slides[currentSlide]}</Slide>
            </main>

            <footer>
                {footer ? (
                    <div className="absolute left-10 bottom-10 text-sm text-neutral-500">
                        {footer}
                    </div>
                ) : null}

                <div className="absolute right-10 bottom-10 text-normal text-neutral-500 space-x-4 flex">
                    {showSlideCount !== false ? (
                        <span>
                            {currentSlide + 1} / {slideCount}
                        </span>
                    ) : null}

                    {showSlideControls !== false ? (
                        <>
                            <span
                                onClick={() => navigate("previous")}
                                className="cursor-pointer"
                            >
                                <ChevronLeft />
                            </span>
                            <span
                                onClick={() => navigate("next")}
                                className="cursor-pointer"
                            >
                                <ChevronRight />
                            </span>
                        </>
                    ) : null}
                </div>
            </footer>
        </Swipeable>
    );
};

export default SlidePage;
