'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconSpinner } from '@/components/ui/icons'
import { AuthProvider } from '@/lib/models/auth-provider'

interface LoginButtonProps extends ButtonProps {
  callbackUrl?: string
  provider: AuthProvider
}

export function LoginButton({
  callbackUrl = '/',
  provider,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  async function handleLogin() {
    setIsLoading(true)
    await signIn(provider.id, { callbackUrl })
    setIsLoading(false)
  }
  return (
    <Button
      variant="outline"
      onClick={handleLogin}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) :
        React.createElement(provider.icon, { className: 'mr-2' })
      }
      {provider.text}
    </Button>
  )
}
