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
                "bg-gray-600 text-white text-opacity-90 hover:bg-opacity-90 disabled:bg-gray-200 disabled:text-gray-400 p-2 text-sm font-medium rounded tracking-wide",
                className,
            )}
            {...rest}
        />
    );
};
