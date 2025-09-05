import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";
import { ComponentType } from "react";

export async function withAuth<P extends object>(
  Component: ComponentType<P>,
  props: P,
) {
  const session = await auth0.getSession();
  // console.log('token', await auth0.getAccessToken());
  if (!session?.user) {
    redirect("/auth/login");
  }

  return <Component {...props} />;
}
