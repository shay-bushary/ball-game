# TwoSteps React + Python Flask task

## (v.1.0.1)

Welcome!

Included with this file is a very simple client-side app.
Your mission, is to improve it a bit by implementing some additional features.
Please focus on good coding practices.
You are not expected to need additional dependencies.

Once done, please send back the new and improved version.

What to do:

### Client Tasks

1. Make sure that the piece _never_ gets off the screen when moved
2. Add a 'Reset' button that returns the piece back to its initial location
3. Add a 'Randomize' button that places the piece at a random location on the screen
4. When the page loads, get today's temperature from an API and set the piece's color according to the following ranges:

   - Less than 10 degrees: Blue
   - Between 10 and 20 degrees: Green
   - Between 20 and 30 degrees: Yellow
   - More than 30 degrees: Red

   You can use this URL to retrieve the weather data for Tel-Aviv:  
    https://weatherstack.glitch.me/current?access_key=5f58d7a0eecd822f4bd469586df5585c&query=tel%20aviv

5. Make the piece "hollow" when the mouse hovers over it (hollow means only the border should be drawn with the color of the piece)

6. Make the motion of the piece smooth instead of jumpy

Thanks and good luck!

### Server Tasks

1. Persist piece state and implement undo/redo (Medium)

   - Add a lightweight server endpoint that stores the piece state (position, color, timestamp) in Redis or in any DB you would like to have.
   - On every move, POST the new state to the server. When the page loads, GET the last saved state and restore the piece.
   - Implement undo/redo on the client for at least 10 steps.
   - Acceptance criteria: state survives page reload, undo/redo works across navigation within the session, API uses JSON and proper status codes.

2. Bonus: Add user authentication and per-user state (Hard)

   - Implement a minimal username-only sign-in flow (no password required for the exercise). Associate piece state with the username on the server.
   - Protect the state endpoints so they're scoped by user. Add a simple client-side sign-in UI.
   - Acceptance criteria: two different users can sign in (in separate browser sessions) and have independent piece positions. No production-level security needed but design the API to be extendable.
   - Hints: store users and states in a small JSON file or an in-memory dict. Use cookies or localStorage for the client-side session token.

3. Bonus: Real-time multiplayer mode (Hard)

   - Add a real-time mode where multiple clients can see a single shared piece move in realtime.
   - Implement either WebSocket (preferred) or a server-sent events (SSE) fallback.
   - Acceptance criteria: two browser windows show the same piece and moves from one are reflected on the others with low latency (~100–300ms).
   - Hints: keep the server implementation minimal — only broadcast position updates.
