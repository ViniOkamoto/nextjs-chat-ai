/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { useSession, signIn, SignInOptions } from "next-auth/react";

interface OneTapSigninOptions {
    parentContainerId?: string;
}

const useOneTapSignin = (
    options?: OneTapSigninOptions &
        Pick<SignInOptions, "redirect" | "callbackUrl">
) => {
    const { parentContainerId } = options || {};
    const [isLoading, setIsLoading] = useState(false);

    useSession({
        required: true,
        onUnauthenticated() {
            if (!isLoading) {
                const { google } = window as unknown as any;
                if (google) {
                    google.accounts.id.initialize({
                        auto_select: true,
                        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
                        callback: async (response: any) => {
                            setIsLoading(true);
                            await signIn("googleonetap", {
                                credential: response.credential,
                                redirect: true,
                                callbackUrl: options?.callbackUrl,
                                ...options,
                            },);
                            setIsLoading(false);
                        },
                        prompt_parent_id: parentContainerId,
                    });

                    google.accounts.id.prompt((notification: any) => {
                        if (notification.isNotDisplayed()) {
                            console.log(
                                "getNotDisplayedReason ::",
                                notification.getNotDisplayedReason()
                            );
                        } else if (notification.isSkippedMoment()) {
                            console.log(
                                "getSkippedReason  ::",
                                notification.getSkippedReason()
                            );
                        } else if (notification.isDismissedMoment()) {
                            console.log(
                                "getDismissedReason ::",
                                notification.getDismissedReason()
                            );
                        }
                    });
                }
            }
        },

    });

    return { isLoading };
};

export default useOneTapSignin;