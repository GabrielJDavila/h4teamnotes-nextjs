import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      alert("hello")
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

// import type { NextAuthConfig } from "next-auth"

// export const authConfig = {
//     pages: {
//         signIn: "/login",
//     },
//     callbacks: {
//         authorized({auth, request: {nextUrl} }) {
//             const isLoggedIn = !!auth?.user
//             console.log(`user is logged in? ${isLoggedIn}`)
//             const isOnDashnoard = nextUrl.pathname.startsWith("/dashboard")
//             console.log(isOnDashnoard)
//             if(isOnDashnoard) {
//                 if(isLoggedIn) return true
//                 return false
//             } else if(isLoggedIn) {
//                 return Response.redirect(new URL("/dashboard", nextUrl))
//             }
//             return true
//         }
//     },
//     providers: [],
// } satisfies NextAuthConfig