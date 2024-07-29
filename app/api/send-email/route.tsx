// https://react.email/docs/integrations/resend

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY_RESEND);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "mdraihanalam40@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Raihan" />,
  });
  return NextResponse.json({});
}
