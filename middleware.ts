import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard']);

const middleware = clerkMiddleware((auth, req) => {
  // Exclude /api/webhook from protection
  if (req.nextUrl.pathname !== '/api/webhook' && isProtectedRoute(req)) {
    auth();
  }
});

export default middleware;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes except /api/webhook
    '/api((?!/webhook).*)',
    '/trpc(.*)',
  ],
};
