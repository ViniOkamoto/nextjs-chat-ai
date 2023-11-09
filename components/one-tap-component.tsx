"use client";

import useOneTapSignin from '@/lib/hooks/use-one-tap-signin';


interface OneTapComponentProps {
    callbackUrl?: string
}
const OneTapComponent = ({ callbackUrl = '/' }: OneTapComponentProps) => {
    useOneTapSignin({
        parentContainerId: "oneTap",
        callbackUrl,
    });

    return <div id="oneTap" className="fixed right-0 top-0 z-[100]">

    </div>
};

export default OneTapComponent; 