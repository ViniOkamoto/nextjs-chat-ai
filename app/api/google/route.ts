import { OAuth2Client } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, res: NextResponse) {
    const {searchParams} = new URL(request.url);
    const clientId = (searchParams.get('clientId') || '') as string ;
    const code = (searchParams.get('code') || '') as string;
    const googleAuthClient = new OAuth2Client(clientId);
    
    const token = await googleAuthClient.verifyIdToken({
        idToken: code,
        audience: clientId
    })
    const payload = token.getPayload();
    return new NextResponse(
        JSON.stringify({ data: payload }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}