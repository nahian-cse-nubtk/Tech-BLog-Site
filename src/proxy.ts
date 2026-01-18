import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authOptions } from './lib/authOptions'

// This function can be marked `async` if using `await` inside
export async function  proxy(request: NextRequest) {
    const session = await getServerSession(authOptions)
    if(session?.user){
        return NextResponse.next()
    }
    else{
         return NextResponse.redirect(new URL('/login', request.url))

    }


}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: '/createBlog/:path*',
}