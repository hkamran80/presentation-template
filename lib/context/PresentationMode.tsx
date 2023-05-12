import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PresentationMode } from "../constants";

export const ModeContext = createContext({
    mode: PresentationMode.Slideshow,
    setMode: (newMode: PresentationMode) => {},
});

type Props = { children: React.ReactNode };
export const ModeProvider = ({ children }: Props) => {
    const [mode, setMode] = useState(PresentationMode.Slideshow);
    const router = useRouter();
    const newMode = router.query.mode as string;

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
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
