# SimpleNote - a free, open source planner app

### Created by: [A.J. Ristino](https://www.linkedin.com/in/a-j-ristino-50760a228/)

## What is SimpleNote?

Hi! My name's A.J., and I am oftentimes frustrated by the state of built-in planner apps. Why must there be so many unnecessary bells and whistles attached to a to-do list (looking at you, reminders app)? It is my firm belief that writing down a goal makes you infinitely more
likely to meet that goal! So, the idea of SimpleNote came to me; a free, open-source, and super basic to-do list to replace the massive
collection of TODO notes cluttering my phone's memory.

## Why did I make this?

A number of reasons, actually. The first is that my non-tech-savvy Grandfather needed a TODO list that had minimal distractions, was very
strightforward, and incredibly easy to use (e.g., accessible and user-friendly). I also wanted to try my hand at building an sqlite app. I'm
absolutely reinventing the wheel with this one, and that's perfectly fine by me. Every programmer makes one of these, it's my turn to follow suit.

## UPDATE LOG:

### 10/29/2024 - First version built

The base implementation of this project is a databse-driven webapp using SQLite. Essentially, it's a persistent database interface tool with three
different types of functionality: adding, removing, and displaying different "to do" items. The UI is pretty bare-bones, but that's because I built the entire thing during an hour break at work.

### 10/30/2024 - Baby steps!! - added priority categories for different tasks!

Took me a little longer this time, but I updated the database to include a third column called Priority that stores one of three strings (High, Medium, Low) and uses those labels to correctly populate fields in the webapp.

### 11/13/2024 - beginning work with electron

Alright, time to vent here. I've been trying to get electron to run for the past week so I can make a desktop-accessible version of the webapp I built. Absolute mess. Essentially, electron-builder produces large dmg files that can't be uploaded to gitHub. I ended up having to git reset the repository which wiped about a week's worth of work. There was DEFINITELY a smarter way to accomplish that, but ultimately I couldn't be asked to deal with the excess amounts of files and overhead to get them to merge properly. Back to the drawing board!

Additionally, the creation of a bunch more files for electron use has bricked my commit method. I can't upload any files to the repo anymore.
This is why I am an amateur programmer! I don't understand the workflow in the slightest.

SO! We're gonna do this from the top, and we're gonna do it right.

ROADMAP:

- get electron.js set up again (rebuild the test script)
- get the initial version of electron working with database integration

- Then, without cluttering the repo with like 80 million .dmg installers, try to get a desktop-launchable executable file produced
- DO NOT COMMIT WITHOUT CLEARING THE DIST FOLDER. THIS CAUSES A MESS.

### 11/19/2024

This looks incriminating. I HAVE been working on this project this whole time, the problem is that my amateur developer is shining through.
I have repeatedly had to restart the electron phase of this project since npm install electron creates some MASSIVE files inside of the node_modules
folder in electronapp. Additionally, dist (the folder where the script that produces the electron executable installer is placed) gets cluttered with dmg files (because I don't delete things because I'm a scrub) and then before I know it there are 3 branches with 1k changes staged. Enfuriating.

What's my solution? .gitignore. I have put pathways to both dist and node_modules in the .gitignore file in the hopes that if git doesn't track those
changes, if someone wants to run the scripts themselves, they can just perform the electron install, and read appropriate documentation
in the electronapp folder. (I haven't written that documentation yet, I'll get there though).

Making this commit, pushing, then going to see if I set up .gitignore properly or not.

UPDATE: gitignore is properly configured, we are SO back.

Stay tuned for a rebuild of the previous electronapp I had built before I realized I had irreparably trashed that repo version smh.

### 11/25/2024

Got .dmg file to install to Apps and executable to run without error today.

Thankfully, I can now use developer tools within electron to see that 80% of the backend functionality didn't get packaged properly.

It's an html page that can write to the database... and nothing else; this is a problem for tomorrow!

Functionality of SimpleNote to come.

### 12/15/2024

Okay I did that thing I said I wasn't going to do and continued working without updating the dev log or actually committing my changes.

Good news! Now the dmg is fully downloadable, and the backend is being properly packaged.

The issue that I resolved was connected to the production version of the app trying to use api routes built for the local server, which is used in the dev build. I modified server.js to handle the production build's api routes, and tweaked a few other files.

If you have proper installs, then you can access the first build of SimpleNote by navigating to the /electronapp/ folder and typing npx electron-builder --mac.

I've only really been testing with the mac production since that's the OS I'm running (sue me, the computer was a gift).

Next I want to try my hand at creating recurring reminders, so creating an 'advanced' tab that repeatedly adds entries to the database.

For now though, we've hit benchmark one... and it only took months to get here. I am SO good at computer science.