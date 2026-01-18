import { postUser } from "@/actions/server";

export async function POST(req:Request) {
  const payload = await req.json();

  const result = await postUser(payload);

  return Response.json(result);
}