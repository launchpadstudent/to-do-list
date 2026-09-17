# to-do-list

    A simple application for me to keep track of my to-do's.

    ## Files

    - index.html: the page
    - styles.css: the looks
    - js/data.js: the tasks array, and saving them so they survive a refresh
    - js/render.js: drawing the list on the page
    - js/app.js: wiring the buttons to the functions

    ## User stories

    - [x] As a user, I see the app's page with a heading, an input, an add button, and an empty list.
    - [x] As a user, I can type a task and add it, and it appears in the list.
    - [x] As a user, I can mark a task complete, and it shows as done.
    - [x] As a user, I can see how many tasks are left, and the number updates as I work.
    - [ ] As a user, my tasks are still there when I refresh the page.

    ### My own stories

    - [ ]
    - [ ]
    - [ ] 
    
## My build loop

    For every story:

    1. Read the story and decide what "done" looks like.
    2. Make a branch named for the story.
    3. Decide the next function: its name, what goes in, what comes out.
    4. Ask OpenCode for that one function, with the story as the boundary.
    5. Explain the proposal in my own words, and predict what will change on the page.
    6. Put it in.
    7. Test it against the story's checkpoint in the browser.
    8. Commit, with a message that says what and why.
    9. Repeat 3 through 8 until the story passes. Then open the PR, read my own diff, merge, and pull.
