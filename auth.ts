// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';
// const bcrypt = require("bcrypt")

// async function getUser(email: string): Promise<User | undefined> {
//     try {
//         const user = await sql<User>`
//             SELECT * FROM users 
//             WHERE email=${email}
//         `
//         return user.rows[0]
//     } catch(err) {
//         console.error("Failed to fetch user: ", err)
//         throw new Error("Failed to fetch user.")
//     }
// }

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//     providers: [
//         Credentials({
//             async authorize(credentials) {
//                 const parsedCredentials = z
//                     .object({ email: z.string().email(), password: z.string().min(6) })
//                     .safeParse(credentials)
//                 if(parsedCredentials.success) {
//                     const { email, password } = parsedCredentials.data
//                     console.log(email, password)
//                     const user = await getUser(email)
//                     console.log(user)
//                     if(!user) return null
//                     const passwordsMatch = (password === user.password)
//                     console.log(passwordsMatch)
//                     if(passwordsMatch) return user
//                 }
//                 console.log("invalid credentials")
//                 return null
//             }
//         })
//     ]
// });
import NextAuth from 'next-auth';
import google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import passage from 'next-auth/providers/passage';
 
export const { signIn, signOut, auth } = NextAuth({
    providers: [google]
})

// ...
// async function getUser(email: string): Promise<User | undefined> {
//     try {
//       const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//       return user.rows[0];
//     } catch (error) {
//       console.error('Failed to fetch user:', error);
//       throw new Error('Failed to fetch user.');
//     }
// }

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//         credentials: {
//             email: {},
//             password: {}
//         },
//         authorize: async (credentials) => {
//             const parsedCredentials = z
//             .object({ email: z.string().email(), password: z.string().min(6) })
//             .safeParse(credentials);
//             if (parsedCredentials.success) {
//             const { email, password } = parsedCredentials.data;
//             const user = await getUser(email);
//             console.log(user)
//             if (!user) return null;
//             const passwordsMatch = (password === user.password)
//                 console.log(passwordsMatch)
//             if (passwordsMatch) return user;
          
//         }
 
//         console.log('Invalid credentials');
//         return null;
//       },
//     }),
//   ],
// });
