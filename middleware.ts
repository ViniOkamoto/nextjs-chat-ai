import { auth } from './app/api/auth/[...nextauth]/_auth-options';


export const middleware = auth
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

