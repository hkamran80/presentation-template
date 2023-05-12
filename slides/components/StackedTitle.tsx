type Props = { kicker: string; title: string };
const StackedTitle = ({ kicker, title }: Props) => {
    return (
        <div className="mb-7">
            <p
                className="uppercase tracking-wider text-xs"
                style={{ margin: 0 }}
            >
                {kicker}
            </p>
            <h1 className="slide-h2" style={{ margin: 0 }}>
                {title}
            </h1>
        </div>
    );
};

export default StackedTitle;
