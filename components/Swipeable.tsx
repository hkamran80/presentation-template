import {
    useSwipeable,
    type SwipeableDirectionCallbacks,
} from "react-swipeable";

type Props = {
    children: React.ReactNode;
};

export const Swipeable = ({
    children,
    ...props
}: Props & Partial<SwipeableDirectionCallbacks>) => {
    const handlers = useSwipeable(props);
    return <div {...handlers}>{children}</div>;
};

export default Swipeable;
