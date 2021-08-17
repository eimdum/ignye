import React from "react";

export interface CardProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export const Card = (props: CardProps): JSX.Element => {
    const { header, children } = props;

    return (
        <div className="p-4 flex-grow-0 flex flex-col bg-gray-100 rounded-md max-w-md w-full space-y-4 h-56">
            <div className="font-semibold tracking-wide text-xl uppercase text-gray-800">{header}</div>
            <div className="flex flex-1 flex-col space-y-4">{children}</div>
        </div>
    );
};
