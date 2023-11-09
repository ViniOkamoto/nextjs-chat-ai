import { IconGitHub, IconGoogle } from '@/components/ui/icons'
import { AuthProvider} from './models/auth-provider'

export const externalUrls = {
    linkedin: "https://www.linkedin.com/in/viniciusokamoto/",
    repository:  "https://github.com/ViniOkamoto/nextjs-chat-ai"
}

export const authProviders: AuthProvider[] = [
    {
        id: 'github',
        text: 'Sign in with GitHub',
        icon: IconGitHub
    },
    {
        id: 'google',
        text: 'Sign in with Google',
        icon: IconGoogle
    }
]