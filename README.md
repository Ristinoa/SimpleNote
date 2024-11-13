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