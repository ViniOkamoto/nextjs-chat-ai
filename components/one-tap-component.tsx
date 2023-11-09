"use client";

import useOneTapSignin from '@/lib/hooks/use-one-tap-signin';
import { useEffect } from 'react';
import { auth } from '@/app/api/auth/[...nextauth]/_auth-options';


interface OneTapComponentProps {
    callbackUrl?: string
}
const OneTapComponent = ({ callbackUrl = '/' }: OneTapComponentProps) => {
    const { isLoading: oneTapIsLoading } = useOneTapSignin({
        parentContainerId: "oneTap",
        callbackUrl,
    });

    return <div id="oneTap" className="fixed right-0 top-0 z-[100]">

    </div>
};

export default OneTapComponent; 