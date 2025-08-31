import { NextResponse } from "next/server";
import { auth0 } from "../../../lib/auth0";

export const GET = async function shows() {
  try {
    const session = await auth0.getSession();

    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const res = new NextResponse();

    return NextResponse.json(session, res);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 },
    );
  }
};
