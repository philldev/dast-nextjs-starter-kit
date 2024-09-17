"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActionState } from "react";
import { login } from "./action";

export default function Login() {
  const [_, action, pending] = useActionState(login, null);

  return (
    <div className="min-h-dvh p-10 grid place-items-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <Button disabled={pending} className="w-full">
              Login with Github
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
