---
title: >
    Project JPacman: Week #1
date: 2016-02-14
image: /images/jpacman-semana1-banner-750x350.jpg
author: jpl
lang: en
categories: ["jpacman"]
translationKey: proyecto-jpacman-semana-1
description: >
    Project JPacman begins: to resume the work on a game developed for non-commercial purposes a long time ago. Download the original version built in 1999!
---

Some months ago, I found the source code of a project on which I worked about twenty years ago. It was a Pac-man clone and, in a massive attack of creativity, I decided to name it **JPacman**: my name JP + Pacman.

The source code on its own did not allow me to do that much. I worked on this in 1998 and 1999, so the game was developed using tools from those years, many of which are currently obsolete.

However, the old backup disc did not only contain the source code. There was also an executable version of the game! Full of emotion, I wanted to try the game immediately, and I watched incredulous how the intro sequence that I had coded a long time ago started to play.

{{< image url="jpacman-intro.png" caption="Seventeen years ago, I was determined to have my own videogame company. I was going to name it JPL Soft, another remarkable spark of creativity." >}}

Earlier this year, I meditated a lot about my last year’s experiences and I even wrote an article about it ([“Farewell 2015! Two short stories and new challenges”]({{< relref "articles/blog/2016-01-28-farewell-2015-two-short-stories.md" >}})). I felt it was time to get down to work, so I decided to revive some of these projects during 2016.

*The time has come to revive JPacman.*

## Project JPacman objectives

When starting a new project (or resuming a twenty years old one), it is good to consider some goals. What does it mean to resume a project like this one? What is exactly what I would like to do with the game?

I must be realistic. I can’t forget that **JPacman is a Pac-man clone, a well-known game whose license is still alive and pretty active**. Indeed, Namco Bandai, the franchise owners have continued to publish several official Pac-man games.

The last one they published is called Pacman 256 and it’s available on Android ([link to Google Play](https://play.google.com/store/apps/details?id=eu.bandainamcoent.pacman256&hl=es_419)) and on iOS ([link to Apple Store](https://itunes.apple.com/us/app/pac-man-256-endless-arcade/id1002340615?mt=8)), and maybe on other platforms. Not only it’s a fun game, but it has also been pretty successful, both commercially and review-wise.

{{< image url="pacman256-screenshot.jpg" caption="Pacman 256, published by Namco Bandai. Although a successful game , IMHO they killed the spirit of Pac-man with the game mechanic changes they made." >}}

I’d like to be very clear (and put it in written) that **my intention is not to infringe the Namco Bandai copyrights**, so I know I can’t publish  JPacman on any online store as it is now.

So why do I want to continue the project? I think it’s a mixture of nostalgia and love for technical challenges.

Nostalgia, because JPacman is one of the projects that I devoted more work and passion in my early videogame developer years. I also feel it will be a fun technical challenge: it is not trivial to resurrect a project that was developed with tools that are no longer available, or at least most of them are obsolete.

Hence, the first goal is **to have a version that can be built with existing tools**. After that I will see where the project will go.

## The first challenge: surprise!

This week, when I started working on the project, I quickly found the first unexpected issue to be resolved.

When I tried the executable version of the game several months ago, it was on my computer at home, that had Windows 7 installed. However, A few weeks ago I decided to accept the insistent offer that Microsoft made me upgrade to Windows 10, and to my surprise, in this new operating system version the game no longer works!

{{< image url="jpacman-intro-broken.png" caption="In Windows 8 and Windows 10, the game appears in a window and it works very very very slow, at around 2 frames per second. You can’t play at all!" >}}

The first technical challenge had appeared: **to find out why the game was no longer working on the latest Windows and ideally find a solution**.

It did not take too long to discover why. After searching through forums and Google the phrase “old game no longer works on Windows 10”, I found that the problem occurs since Windows 8: Microsoft made obsolete (or removed, I’m not sure) the hardware acceleration support on the Direct X DirectDraw library.

That library is precisely what my game used to efficiently draw 2D graphics on the screen. And not only my game, of course. Famous games such as Civilization and Age of Empires, among many others, suffered the same issue.

In many cases, the development companies, or some official fan groups, published patches or workaround instructions so that their games worked again. There were also several programmers who developed small tools or generic applications that would try to fix games that did not get official fixes or support.

I tried many of these tools until I finally found one that worked with JPacman: **Aqrit’s ddwrapper**, developed by Aqrit. I only know his username and his website ([link to site](http://bitpatch.com/ddwrapper.html)), so I’ve not had the chance to thank him personally. But thanks to his tool, JPacman now works on all versions of Windows I’ve tried so far.

First challenge solved!

## Download JPacman 0.1999

I decided that this original version of the game will be called **JPacman 0.1999**, for the year this executable was built.

I know that I can’t publish the game, because of the copyright issue, but I hope I will have trouble for sharing the version I developed more than fifteen years ago in Papa Game Dev.

{{< image url="jpacman.jpg" caption="Download JPacman 0.1999 now!" >}}

You can get it from the [JPacman 0.1999 download]({{< relref "projects/downloads/2016-02-14-download-jpacman-01999.md" >}}) page

You can also check all updates to the [Project JPacman](/en/category/jpacman/)

