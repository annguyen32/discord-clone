import { HttpRouter, httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { Webhook } from "svix";

const http = httpRouter();
http.route({
  method: "POST",
  path: "/clerk-webhook",
  handler: httpAction(async (ctx, req) => {
    const body = await validateRequest(req);
    if (!body) {
      return new Response("Unauthorized", { status: 401 });
    }
    switch (body.type) {
      case "user.created":
        break;
      case "user.updated":
        break;
      case "user.deleted":
        break;
    }
    return new Response("OK", { status: 200 });
  }),
});
const validateRequest = async (req: Request) => {
  const svix_id = req.headers.get("svix-id");
  const svix_timestamp = req.headers.get("svix-timestamp");
  const svix_signature = req.headers.get("svix-signature");

  const text = await req.text();
  try {
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
    return webhook.verify(text, {
      id: "svix-id",
      timespamp: "svix-timestamp",
      signature: "svix-signature",
    });
  } catch (error) {
    return null;
  }
};

export default http;
