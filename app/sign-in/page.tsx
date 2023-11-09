import { auth } from '@/app/api/auth/[...nextauth]/_auth-options'
import { LoginButton } from '@/components/login-button'
import OneTapComponent from '@/components/one-tap-component'
import { authProviders } from '@/lib/contants'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'



interface SignInPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function SignInPage({ searchParams }: SignInPageProps) {
  const { callbackUrl } = searchParams
  const session = await auth()
  if (session?.user) {
    redirect('/')
  }
  const length = authProviders
  return (
    <div className="relative flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <OneTapComponent />
      <div className='flex flex-col gap-8'>

        {authProviders.map((provider, index) => (
          <LoginButton
            key={provider.id}
            provider={provider}
            callbackUrl={callbackUrl as string}
          />
        ))}
      </div>
    </div>
  )
}
