import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/design";
import { motion } from "framer-motion";

export const SlideTitle = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                <div className="text-sm text-left flex flex-col justify-center">
                    <div>
                        <motion.div
                            className="mx-auto mt-6"
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <motion.h1
                                className="slide-title"
                                variants={FADE_DOWN_ANIMATION_VARIANTS}
                            >
                                Demo Presentation
                            </motion.h1>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SlideTitle;
