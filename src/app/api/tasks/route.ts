import { getTasks } from "../../../db/queries/select";
import { updateTask } from "../../../db/queries/update";

export async function GET() {
  try {
    const tasks = await getTasks();
    return Response.json(tasks);
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}

export async function POST(request: Request) {
  // Implement the POST endpoint
  // Make sure you validate the incoming data and throw a 400 error if invalid
  // ...
  return new Response(JSON.stringify({ error: "POST not yet implemented" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(request: Request) {
  // Endpoint for updating the checkbox
  try {
    const body = await request.json();
    // test if data is valid
    if (!body.id) {
      return new Response(
        JSON.stringify({
          error: "No task id",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    // update DB
    await updateTask(body.id, body as { isDone: boolean });
    return new Response(
      JSON.stringify({
        message: "Data accepted!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
