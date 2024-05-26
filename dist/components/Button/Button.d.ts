import { default as React } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick(): void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export default Button;
