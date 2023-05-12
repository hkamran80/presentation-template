import { Children, ReactElement } from 'react';

type Props = { children: React.ReactNode; className?: string };

const Steps = ({ children, className }: Props) => {
    const renderChildren = () =>
        Children.map(children, (childElement, index) => {
            if (childElement) {
                const element = childElement as ReactElement;

                return (
                    <element.type order={index} {...element.props}>
                        {element.props.children}
                    </element.type>
                );
            }
        });
    return <div className={className}>{renderChildren()}</div>;
};

export default Steps;
