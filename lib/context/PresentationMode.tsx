import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PresentationMode } from "../constants";
import { FullScreen } from "@chiragrupani/fullscreen-react";
import { useIsClient } from "usehooks-ts";

export const ModeContext = createContext({
    mode: PresentationMode.Slideshow,
    setMode: (newMode: PresentationMode) => {},
    fullScreen: false,
    setFullScreen: (newState: boolean) => {},
});

type Props = { children: React.ReactNode };
export const ModeProvider = ({ children }: Props) => {
    const [mode, setMode] = useState(PresentationMode.Slideshow);
    const [fullScreen, setFullScreen] = useState(false);
    const router = useRouter();
    const newMode = router.query.mode as string;

    const isClient = useIsClient();

    useEffect(() => {
        if (newMode) {
            if (newMode.toLowerCase() === "slideshow") {
                setMode(PresentationMode.Slideshow);
            } else if (newMode.toLowerCase() === "speaker") {
                setMode(PresentationMode.Speaker);
            }
        }
    }, [newMode]);

    return (
        <ModeContext.Provider
            value={{ mode, setMode, fullScreen, setFullScreen }}
        >
            {typeof window !== "undefined" ? (
                <FullScreen
                    isFullScreen={fullScreen}
                    onChange={(isFullScreen) => {
                        setFullScreen(isFullScreen);
                    }}
                >
                    {children}
                </FullScreen>
            ) : (
                "Loading..."
            )}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
