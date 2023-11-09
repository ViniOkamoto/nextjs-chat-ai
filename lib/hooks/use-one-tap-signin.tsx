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
                        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
                        callback: async (response: any) => {
                            setIsLoading(true);
                            await signIn("googleonetap", {
                                credential: response.credential,
                                redirect: true,
                                ...options,
                            },);
                            setIsLoading(false);
                        },
                        prompt_parent_id: parentContainerId,
                        theme: "DARK"
                    });
                }
            }
        },

    });

    return { isLoading };
};

export default useOneTapSignin;