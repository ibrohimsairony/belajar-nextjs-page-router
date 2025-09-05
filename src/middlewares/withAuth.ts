import { environment } from "@/configs/environtment";
import next from "next";
import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export default function withAuth(
  middleware: NextMiddleware,
  reqirePath: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (reqirePath.includes(pathname)) {
      const token = await getToken({
        req,
        secret: environment.NEXT_AUTH_SECRET,
      });
      console.log(token);
      if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return middleware(req, next);
  };
}
