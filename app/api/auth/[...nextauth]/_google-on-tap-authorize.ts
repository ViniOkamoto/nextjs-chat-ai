// app/api/auth/[...nextauth]/authorize.ts

import { OAuth2Client } from 'google-auth-library';
import { User } from "next-auth";



export const googleOnTapAuthorize = async (credentials:Partial<Record<"credential", unknown>>): Promise<User | null> => {

  const token = credentials!.credential as string;
 

  const payload = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/google?clientId=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&code=${token}`)
  .then(res => res.json())
  .then(data => data.data)


  const { email, sub, given_name, family_name, email_verified, picture: image } = payload;
  if (!email) {
    throw new Error("Email not available");
  }

  const user = {
    id: sub,
    email,
    image,
    name: `${given_name} ${family_name}`,
  };
  
  return user;
};