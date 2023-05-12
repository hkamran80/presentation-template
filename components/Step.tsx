import { motion } from 'framer-motion';
import { useCurrentSlide } from '@/lib/context/CurrentSlide';
import { useEffect } from 'react';

const TRANSLATE_Y_DISTANCE = "-1em";

type Props = {
    children: React.ReactNode;
    order?: number;
    duration?: number;
};
const Step = ({ children, order, duration = 0.5 }: Props) => {
    const { currentStep, steps, addStep, removeStep } = useCurrentSlide();
    useEffect(() => {
        if (order && !steps.includes(order)) {
            addStep(order);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order, addStep, removeStep]);

    const stepIndex = steps.findIndex((step) => step === order);
    const isVisible = stepIndex >= 0 && stepIndex <= currentStep;
    const opacity = isVisible ? 1 : 0;
    const translateY = isVisible ? 0 : TRANSLATE_Y_DISTANCE;
    const display = isVisible ? "block" : "none";

    return (
        <motion.div
            animate={{ opacity, translateY, display }}
            transition={{ duration }}
            initial={{
                opacity: 0,
                translateY: TRANSLATE_Y_DISTANCE,
                display: "none",
            }}
        >
            {children}
        </motion.div>
    );
};

export default Step;
