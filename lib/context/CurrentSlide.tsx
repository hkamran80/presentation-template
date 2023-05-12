import {
    type SetStateAction,
    createContext,
    useContext,
    useState,
    Dispatch,
} from "react";

type ContextValue = {
    currentSlide: number;
    setSlide: Dispatch<SetStateAction<number>> | null;
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>> | null;
    steps: number[];
    setSteps: Dispatch<SetStateAction<number[]>> | null;
    addStep: (id: number) => void;
    removeStep: (id: number) => void;
    clearSteps: () => void;
};
export const CurrentSlideContext = createContext<ContextValue>({
    currentSlide: 0,
    setSlide: null,
    currentStep: 0,
    setCurrentStep: null,
    steps: [],
    setSteps: null,
    addStep: () => {},
    removeStep: () => {},
    clearSteps: () => {},
});

type Props = { children: React.ReactNode };
export const CurrentSlideProvider = ({ children }: Props) => {
    const initialSlide =
        typeof window !== "undefined" && window.location.hash
            ? parseInt(window.location.hash.replace("#", ""))
            : 0;

    const [currentSlide, setSlide] = useState(initialSlide);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps, setSteps] = useState<number[]>([]);

    const addStep = (id: number) => {
        setSteps((prevSteps) => [...new Set([...prevSteps, id])]);
    };
    const removeStep = (id: number) => {
        setSteps((prevSteps) => [
            ...prevSteps.filter((prevStep) => prevStep !== id),
        ]);
    };
    const clearSteps = () => {
        setSteps([]);
        setCurrentStep(0);
    };

    // console.debug(`Rendering context: ${currentStep}`, steps);
    return (
        <CurrentSlideContext.Provider
            value={{
                currentSlide,
                setSlide,
                currentStep,
                setCurrentStep,
                steps,
                setSteps,
                addStep,
                removeStep,
                clearSteps,
            }}
        >
            {children}
        </CurrentSlideContext.Provider>
    );
};

export const useCurrentSlide = () => useContext(CurrentSlideContext);
