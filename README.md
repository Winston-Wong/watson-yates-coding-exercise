# Watson & Yates Coding Exercise

This repository contains the framework for a simple, full-stack web application to display an editable to-do list. This coding exercise will require you to complete certain aspects of the application to make it functional. Don't hesitate to email with any clarifying questions or issues with set-up.

### Requirements

Make sure you have `Node.js` and `npm` downloaded on your computer (see [these download instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

You will also need [git](https://git-scm.com/install/).

## Instructions

### Step 1. Set-up

1. Create a fork of this repository.
1. Create a new feature branch on your forked repo.
1. Clone the repo to your local computer and open in your favorite IDE.
1. Download the dependencies by running
   `npm install` in your terminal.
1. Test that your set-up works by running
   `npm run dev`
   And then open `http://localhost:3000/` in a browser.

### Step 2. Create a free back end

1. Go to Vercel.com and create a free account linked to your github.
1. Create a new project from your fork of this repo and deploy it.
1. Once deployed on Vercel, go to the Dashboard, click on the Storage tab, then create a Neon database and (free) account.
1. You'll be automatically taken to a page showing the "secrets". Copy these into a `.env` file at the root of this project.

### Step 3. Seed the database

1. This project uses [Drizzle ORM](https://orm.drizzle.team/docs/overview).
1. Run `npx drizzle-kit push` in your terminal to push the database table schema (in `src/db/schema.ts`) to your newly created Neon database.
1. If you'd like, edit the seed data in `src/db/seed.ts`, then seed your database by running `npx tsx src/db/seed.ts`
1. If you look in your Neon database online, there should be several initial "todo" entries.

### Step 4. Implement the select query

1. Complete `src/db/queries/select.ts`.
1. Your app should now show the full to-do list on your local server.

### Step 5. Update task status when you click the checkbox

1. Implement `src/services/updateTaskStatus.ts`.
1. Update `src/components/Checkbox.tsx` to save the effect of clicking to the database using your newly implemented service function.

### Step 6. Implement API endpoint

1. Implement a POST method in `src/app/api/tasks/route.ts` with informative errors for invalid responses. In your PR, explain why you choose to implement POST in this way.
1. Now, you should be able be add new todos.

### Step 7. Style the tasks components

1. Use [tailwind](https://tailwindcss.com/) to add some styling to the tasks (`src/components/Task.tsx`), including conditional logic to have the items cross out or gray out when the checkbox is clicked.

### Step 8. Optional

1. Optionally, filter the visible list to just completed tasks. If you complete this, explain why you implemented the filter in the way that you did (ex. back-end vs. front-end).

### Step 9. Complete the Exercise

1. Push all your commits and open a pull request against the `main` branch.
1. Write an informative pull request, including a brief description of changes and any design decisions you made.
1. Make sure your repo is public, and send us a link to the PR.
