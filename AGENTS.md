## Project Overview

KCDWEB-TEST is a test environment for a commercial website on url www.kidzcandurban.com. The url for the test environment is https://pstuiver.github.io/kcdweb-test/.The test environment is intended to test code changes, dependency updates, etc. before these are implemented on the production website at www.kidzcandurban.com. 

The production website at www.kidzcandueban.com is the website of a privately owned Occupational Therapy (OT) practice located in Durban, South Africa. The aim of the production website is to provide the OT practice's clients and prospective clients with information about the contact details, location, services, staff, procedures, etc. at the OT practice. 

The aim of the production website is to provide fast and easy acces to a wide range of clients with various cultural, educational and economic backgrounds. Many clients and propective clients are expected to be persons for whom English is not their first language, who will access the website on an old, low-power cellular phone with limited (e.g. 3G) internet data and connectivity.

### Note to developer

Various methods were tested to restore scroll position on the home page when returning from navigating to one or more routes.
This worked perfectly in previous versions of the website when built with html/css, Jekyll and using the browser's history.go(-1) functionality.

Did not work with the initial SvelteKit iterations. Methods tried to fix included Svelte's built-in "snapshot" functionality to reset scrollY positions ... but this worked intermittently on mobile Safari devices (iPhones).

Eventually, after many tries and tests, the problem was identified as the target="\_self" attribute in the <a> tags.
When the target="\_self" was removed (and replaced with nothing) all the <a> tags started behaving as expected and would return to their previous scroll position when a back-button with history.go(-1) or history.back() was clicked.

**Tech Stack**: SvelteKit v3, Svelte v5, TailwindCSS v4, deployed as a static site on Github pages (Svelte static adapter) with Node.js 24 runtime.

Read the files codebase.md and copilot-instructions.md in the .github directory in this codebase for more context about this App

## Project Configuration

- **Language**: None
- **Package Manager**: npm
- **Add-ons**: prettier, eslint, tailwindcss, sveltekit-adapter, mcp

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
