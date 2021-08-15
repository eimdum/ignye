import classNames from "classnames";
import React from "react";

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
    type?: "button" | "submit" | "reset";
}

export const Button = (props: ButtonProps): JSX.Element => {
    const { className, ...rest } = props;

    return (
        <button
            className={classNames(
                "bg-blue-600 text-white text-opacity-90 hover:bg-opacity-90 bg-disabled:bg-gray-200 disabled:text-gray-400 p-2 text-sm font-semibold rounded-md",
                className,
            )}
            {...rest}
        />
    );
};
