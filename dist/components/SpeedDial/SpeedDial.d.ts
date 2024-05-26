import { default as React } from 'react';

export interface SpeedDialProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Which way is the icon facing
     */
    direction?: "down" | "left" | "right" | "up";
    /**
     * Arialabel for the component
     */
    ariaLabel: string;
}
export declare const SpeedDial: React.ForwardRefExoticComponent<SpeedDialProps & React.RefAttributes<unknown>>;
export default SpeedDial;
