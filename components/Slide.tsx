import { classNames } from '@hkamran/utility-web';

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Slide = ({ children, className }: Props) => {
    return (
        <div
            className={classNames(
                "w-full overflow-hidden",
                className ? className : "",
            )}
        >
            {children}
        </div>
    );
};

export default Slide;
