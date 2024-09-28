# JCHS FBLA Website - Frontend

# Description
Frontend for the JCHS FBLA Website from August of 2024. Experimental: Use at your own risk.

# Status
The website's content is outdated, so use the forms/index.astro page and move that to the current implementation. Due to the static nature of the website, it can be moved to github pages like the old website. <br/> 
Completed Forms: <br/>
- [x] Membership Form

In Progress Forms: <br/>
- [ ] Meeting Form
- [ ] RLC Form

Future Forms: <br/>
- [ ] SLC Form
- [ ] NLC Form
- [ ] Officer Application Form

# Setup
1. npm init
2. Install dependencies (see below)
3. npm run dev (localhost:4321 by default)

# Dependencies
Dependencies:
<li>"@astrojs/node": "^8.3.2"</li>
<li>"@astrojs/react": "^3.3.0"</li>
<li>"@astrojs/vercel": "^7.7.2"</li>
<li>"@types/react": "^18.2.79"</li>
<li>"@types/react-dom": "^18.2.25"</li>
<li>"astro": "^4.13.0"</li>
<li>"bootstrap": "^5.3.3"</li>
<li>"cors": "^2.8.5"</li>
<li>"express": "^4.19.2"</li>
<li>"react": "^18.2.0"</li>
<li>"react-bootstrap": "^2.10.2"</li>
<li>"react-dom": "^18.2.0"</li>
<li>"react-icons": "^5.2.0"</li>
<li>"typescript": "^5.5.4"</li>

## Global Installation
1. npm install @astrojs/node @astrojs/react @astrojs/vercel @types/react @types/react-dom astro bootstrap cors express react react-bootstrap react-dom react-icons typescript -g
2. npm link @astrojs/node @astrojs/react @astrojs/vercel @types/react @types/react-dom astro bootstrap cors express react react-bootstrap react-dom react-icons typescript

## Local Installation (Recommended)
1. npm install @astrojs/node @astrojs/react @astrojs/vercel @types/react @types/react-dom astro bootstrap cors express react react-bootstrap react-dom react-icons typescript

# Testing
1. npm run dev - to start the server on localhost:4321
2. npm run build - to build the project
3. Deploy to vercel - go to jchsfbla vercel and link the github repository, commits will automatically deploy

# Debugging
1. If you are having trouble with vercel, using node 18.x instead of node 20.x (on vercel UI configuration and host computer)

# Astro Basics
## 🚀 Project Structure
Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
