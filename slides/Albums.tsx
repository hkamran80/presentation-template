import Step from "@/components/Step";
import Steps from "@/components/Steps";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/design";
import { motion } from "framer-motion";
import StackedTitle from "./components/StackedTitle";

export const SlideDemo = () => {
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
                            <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                                <StackedTitle
                                    kicker="Taylor Swift"
                                    title="Released Albums"
                                />
                            </motion.div>

                            <div className="grid grid-cols-2 gap-8">
                                <Steps>
                                    <Step>
                                        <></>
                                    </Step>
                                    <Step>Taylor Swift</Step>
                                    <Step>Fearless</Step>
                                    <Step>Speak Now</Step>
                                    <Step>Red</Step>
                                    <Step>1989</Step>
                                    <Step>reputation</Step>
                                    <Step>Lover</Step>
                                </Steps>
                                <Steps>
                                    <Step order={8}>folklore</Step>
                                    <Step order={9}>evermore</Step>
                                    <Step order={10}>
                                        Fearless (Taylor&apos;s Version)
                                    </Step>
                                    <Step order={11}>
                                        Red (Taylor&apos;s Version)
                                    </Step>
                                    <Step order={12}>Midnights</Step>
                                    <Step order={13}>
                                        Speak Now (Taylor&apos;s Version)
                                    </Step>
                                </Steps>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SlideDemo;
