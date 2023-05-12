import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/design";
import { motion } from "framer-motion";

export const SlideListExample = () => {
    return (
        <div className="max-w-5xl mx-auto">
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
                <div className="text-sm text-left flex flex-col justify-center ">
                    <div>
                        <motion.div
                            className="mx-auto mt-6 "
                            variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <motion.h1
                                className="slide-h2"
                                variants={FADE_DOWN_ANIMATION_VARIANTS}
                            >
                                Taylor Swift
                            </motion.h1>

                            <div className="prose prose-invert max-w-none">
                                <ul>
                                    <li>She is the music industry</li>
                                    <li>She is an icon</li>
                                    <li>She regularly breaks records</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SlideListExample;
