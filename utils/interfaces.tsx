import { ReactElement } from "react";

export interface NavigationsInterface {
    id: number;
    icon: ReactElement;
    name: any;
    href: string;
    isLink?: boolean;
    action?: () => void;
}

export interface featureInterface {
    id: number;
    icon: ReactElement;
    name: any;
}

export interface IconInterface {
    size: number | string;
    color: string;
}

export interface ServiceInterface {
    id: number;
    name: any;
    img: string;
}