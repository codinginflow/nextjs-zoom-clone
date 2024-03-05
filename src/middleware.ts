import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/meeting/:id*"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
