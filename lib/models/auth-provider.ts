import { ForwardRefExoticComponent, FunctionComponent, RefAttributes, SVGAttributes } from 'react';

export interface Providers {
    [key: string]: AuthProvider
}
export interface AuthProvider {
    id: string
    text: string
    icon: FunctionComponent<SVGAttributes<SVGElement>>;
}

