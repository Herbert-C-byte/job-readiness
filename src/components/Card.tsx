import type { CardProps } from "../types";
import type { PropsWithChildren } from "react";

export default function Card({ children, className = "" }: PropsWithChildren<CardProps>) {
    return(
        <div className={`bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 ${className}`}>
            {children}
        </div>
    )
}

// optional border, more visible, ring-2 ring-gray-200