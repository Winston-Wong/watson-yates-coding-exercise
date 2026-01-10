import { getTasks } from "../../../db/queries/select";
import { updateTask } from "../../../db/queries/update";
import { createTask } from "../../../db/queries/insert";

export async function GET() {
  try {
    const tasks = await getTasks();
    return Response.json(tasks);
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch tasks" }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }, 
    });
  }
}

export async function POST(request: Request) {
  
  try {
    const body = await request.json();

    // Validate input
    if (!body?.name || typeof body.name !== "string") {
      return new Response(
        JSON.stringify({
          error: "Invalid request: 'name' is required and must be a string",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("POST /api/tasks body:", body);


    const name = body.name.trim();

    if(name.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Invalid request: 'name' cannot be empty",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Insert into database
    const task = await createTask({ name });

    return new Response(JSON.stringify(task), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST /api/tasks error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to create task",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
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
