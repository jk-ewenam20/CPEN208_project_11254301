// export { auth as middleware } from "@/app/auth"
export { default } from 'next-auth/middleware';

export const config = {matcher: ['/dashboard']};