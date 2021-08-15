import React from "react";

export interface CardProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
}

export const Card = (props: CardProps): JSX.Element => {
    const { header, children } = props;

    return (
        <div className="p-4 flex-1 flex flex-col bg-gray-100 rounded-md max-w-md w-full space-y-4">
            <div className="font-bold tracking-wide text-xl uppercase text-gray-700">{header}</div>
            <div className="flex flex-1 flex-col space-y-4">{children}</div>
        </div>
    );
};
