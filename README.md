# React Jobs Project (YouTube)

This is the jobs listing project from the [React Crash Course 2024](https://youtu.be/LDB4uaJ87e0) originally made by [Traversy Media](https://www.youtube.com/@TraversyMedia) with a number of improvements.

Check the original repository at [bradtraversy/react-crash-2024](https://github.com/bradtraversy/react-crash-2024).

<img src="public/screen.png" />

## Improvements

- [pnpm](https://pnpm.io/) instead of npm.
- TypeScript instead of raw JavaScript.

Also, a number of design choices:

- Components used elsewhere only once are in the same file. e.g. `JobCard` inside `JobListings.tsx`.
- Reused `JobForm` component at `AddJobPage` and `EditJobPage` pages.
- Moved `jobLoader` into a separate file at `src/utils/jobLoader.ts` for better hot-reload, and includes strong typing.
- Moved HTTP API functions from `App.tsx` to `src/services/jobService.tsx` for better [SoC](https://en.wikipedia.org/wiki/Separation_of_concerns) (naming due to Angular trauma).
- Types at `src/utils/types.ts`.
- `jobs.json` at `src/assets/data` instead of `src`.

## Usage

This project uses JSON-Server for a mock backend.

### Install Dependencies

```bash
pnpm install
```

### Run JSON Server

The server will run on http://localhost:6969

```bash
pnpm run server
```

### Run Vite Frontend

React will run on http://localhost:3000

```bash
pnpm dev
```

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```
