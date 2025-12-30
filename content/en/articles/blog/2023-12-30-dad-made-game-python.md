---
categories:
  - blog
date: 2023-12-30
title: “Dad, check out this game I made in Python!”
image: /images/made-python-game.jpg
author: jpl
translationKey: papa-hice-juego-python
description: Create and design video games. Learn programming with C#, PSeInt, and Python. New challenges with Godot.
featured: true
tags:
  - python
  - programming
  - education
  - game-development
  - learning
---

A few weeks ago, my eldest son Diego (19) told me with pride:

> "Dad, check out the game I made in Python!"

He explained that it was an assignment from his Introduction to Programming course at university. And with a smile, he confessed that actually, the task was much simpler: to write code that included more than one class, and for one of the classes to call functions from the other class.

> "But that was too easy, it was no challenge! So, I wanted to do something more fun: let me introduce you to my maze game!"

Curious, I sat down in front of his computer. Diego started the program and I faced the first screen:

{{< image url="labyrinth_intro.jpg" caption="The beginning of Labyrinth Quest XII, Diego's Python game" >}}

It was clear that Diego was very motivated, not only by his eagerness for me to see his project but also by the details I could see in the first few minutes of the game. From the name he chose to the tutorial teaching the player the rules of the game, it was evident he put a lot of effort into the result:

{{< image url="labyrinth_tutorial.jpg" caption="The tutorial for Labyrinth Quest XII explains to the player how to play" >}}

After going through the instruction phase, I began to navigate the maze in search of the exit. I was surprised to find that the game implemented several systems; it wasn't just a matter of reaching the goal.

For example, the player has a certain amount of energy and needs to recharge by finding food in the maze before running out. Plus, there's a "fog of war" system, which isn't trivial to implement. This mechanic, widely used in video games, involves hiding unexplored areas of the map until the player traverses them.

{{< image url="labyrinth_fogofwar.jpg" caption="The maze, initially hidden, reveals itself as the player progresses through it." >}}

I made several attempts, losing most of them by running out of energy and only reached the exit once. I had a lot of fun, not only because of the game itself (I think it's quite challenging!), but because I enjoyed playing a creation fully programmed by Diego.

{{< image url="labyrinth_gameover.jpg" caption="The end of the game in Labyrinth Quest XII." >}}

## Dreams, motivations, and interests

Many years ago, when I started this blog, my very first article was about how Diego had said in school that ["When I grow up, I want to be a Videogame Creator"]({% post_url /articles/blog/2015-11-15-when-i-grow-up-videogame-creator %}).

Over the following months and years, he held on to that idea and even dabbled in Level Design, a discipline of video game development, [creating levels for games like Geometry Dash]({% post_url /articles/blog/2015-09-05-papa-mira-los-niveles-que-hice %}).

{{< image url="geometrydash-editor2.jpg" caption="Level design in the Geometry Dash Editor, where Diego was creating levels several years ago." >}}

Often, during that time, I wanted to encourage him and bring him closer to video game development. But I also wondered if I might become one of those parents obsessed with their child following in their footsteps, not letting them explore and find their own path. Meanwhile, Diego started to get bored with level design and became interested in other things.

Around the same time, I discovered the [Hour of Code](https://hourofcode.com/) initiative and tried to encourage him to learn programming through its activities. I also bought some mini robots from [Wonder Workshop](https://www.makewonder.com/) which are designed to stimulate programming learning in kids. They caught his attention, but he wouldn't engage with them for more than a few minutes.

{{< image url="wonderworkshop-robots.jpg" caption="Wonder Workshop robots come with an app that teaches programming in a very simple way for kids." >}}

When he got a little older, he mentioned again that he wanted to learn to program and I offered to teach him. I gave him a few lessons in C#, thinking it was clear enough (compared to other languages like C++) to learn the basics, and it was the one I was most familiar with in recent years. We did a few small things, I assigned him some tasks which he tackled diligently, but the spark to learn more on his own never really ignited.

Years passed, and his interests continued to evolve. He started to like science, especially physics. He dove deeper into that world, watching videos of scientists, reading articles and books, and discussing scientific topics at family meals.

As he approached the last years of school, I dared to ask if he had any idea what he wanted to study at university. He said he wasn't sure yet, but he thought it would probably be something related to Physics. The childhood dream of becoming a video game creator had been left behind.

I decided not to push him anymore with programming or video games. Perhaps he would find his own motivation in the future.

## A new motivation

In his final year of high school, that motivation arrived. Diego had to choose some elective courses, and he opted for one in Programming. There they started teaching him the basics, just as I had years before. But instead of using C#, they used [PSeInt](https://pseint.sourceforge.net/), a language I didn't even know. It's a very simple and didactic language, designed specifically for teaching programming.

{{< image url="pseint-code.jpg" caption="PSeInt, a language created to teach Programming." >}}

Diego took the course with a friend, and together they motivated each other to learn more than what the teacher instructed. Later, they were taught the basics of Python and there, with a more powerful tool at their disposal (compared to PSeInt), their motivation increased.

He first learned the basics and then, with his friend, they put together a couple of very simple games, ranging from "Tic Tac Toe" (or "Cat's Game," as we know it in Chile) to a very basic type of "Pokemon" using the PyWin library. They also learned to use PyCharm, one of the most popular Python editors on the market.

{{< image url="python-ide.jpg" caption="PyCharm, the Python editor Diego learned to use in high school." >}}

This year, now in his first year of university, he was taught Python again in his Introduction to Programming course. With all the experience and motivation from the previous year, he dared to take on more interesting challenges, which led him to the game he proudly showed me.

But he didn't stop there. In recent weeks, along with a friend who is also very motivated by the subject, they are remaking Diego's game using the [Godot](https://godotengine.org/) game engine. It includes its own programming language called GDScript which is, at least in appearance, very similar to Python.

{{< image url="labyrinth-godot.jpg" caption="Labyrinth, a work-in-progress version in the Godot game engine." >}}

Diego hasn't abandoned his idea of wanting to work in Physics. For him, programming and his video game under construction are entertaining and challenging hobbies.

For my part, I'm happy that he learned to program, as it's a tool that will serve him in any profession. And of course, I also enjoy seeing that he likes creating video games, even if just as a hobby. I am looking forward to the Godot version of Labyrinth being ready, and to seeing what inspires him next!

{{< image url="made-python-game.jpg" caption="Looking forward to seeing how the next version of Labyrinth Quest XII turns out!" >}}

*Does anyone else know about PSeInt? Any Godot experts out there who can recommend resources for Diego?*

