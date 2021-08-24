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
                "focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-50 text-white text-opacity-90 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed p-2 text-sm font-medium rounded tracking-wide",
                className,
            )}
            {...rest}
        />
    );
};
