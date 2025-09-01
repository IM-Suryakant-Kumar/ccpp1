import { db } from "~/server/db";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console

    if (evt.type === "user.created") {
      await db.user.create({
        data: {
          id: evt.data.id,
          name: evt.data.first_name,
          surname: evt.data.last_name,
          email: evt.data.external_accounts[0]!.email_address,
          username: evt.data.username!,
        },
      });
      return new Response("User created", { status: 201 });
    }

    if (evt.type === "user.updated") {
      await db.user.update({
        where: { id: evt.data.id },
        data: {
          name: evt.data.first_name,
          surname: evt.data.last_name,
          email: evt.data.external_accounts[0]!.email_address,
          username: evt.data.username!,
        },
      });
      return new Response("User updated", { status: 200 });
    }

    if (evt.type === "user.deleted") {
      await db.user.delete({
        where: { id: evt.data.id },
      });
      return new Response("User deleted", { status: 200 });
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
