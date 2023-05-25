import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { PresentationMode } from "../constants";
// import { FullScreen } from "@chiragrupani/fullscreen-react";
import { useIsClient } from "usehooks-ts";
import dynamic from "next/dynamic";

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

    const FullScreen = useMemo(
        () =>
            dynamic<{
                onChange: (isFullScreenEnabled: boolean) => void;
                isFullScreen: boolean;
                children?: React.ReactNode;
            }>(
                () =>
                    import("@/components/FullScreen").then(
                        (fs) => fs.FullScreen,
                    ),
                {
                    ssr: false,
                },
            ),
        [],
    );

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
            {isClient ? (
                <FullScreen
                    isFullScreen={fullScreen}
                    onChange={(isFullScreen) => {
                        setFullScreen(isFullScreen);
                    }}
                >
                    {children}
                </FullScreen>
            ) : (
                children
            )}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
