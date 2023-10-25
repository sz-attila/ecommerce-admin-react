import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/categories", "/api/:path*"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
