import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

// Define public routes
const isPublic = createRouteMatcher(['/api/webhook']);

// Define protected routes
const isProtectedRoute = createRouteMatcher([]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req) && !isPublic(req)) {
   auth().protect();
  }
}, { debug: true });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
