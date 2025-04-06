import { ConnectToDB } from "@/lib/mongo";
import Project from "@/lib/models/Project";

export async function GET() {
  await ConnectToDB();
  const projects = await Project.find();
  return Response.json(projects);
}
