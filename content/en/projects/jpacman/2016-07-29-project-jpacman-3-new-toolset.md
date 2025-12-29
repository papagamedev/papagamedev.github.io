---
title: >
    Project JPacman #3: New toolset
date: 2016-07-29
image: /images/jpacman_cocos2dx_banner-750x350.jpg
author: jpl
lang: en
categories: ["projects", "jpacman"]
translationKey: proyecto-jpacman-3-nuevas-herramientas
description: >
    New challenge: find a new toolset for JPacman. Source code inspection, game engine alternatives and the integration of Cocos2d-x.
---

In late February, I was very motivated to move forward in the [project JPacman]({{< relref "projects/jpacman/_index.md" >}}). In a couple of weeks, I had already managed to run the original game binaries and I had the BitBucket repository ready to go. There I had uploaded all the source code and assets that had been used to create the first version of the game more than 15 years ago.

However, there was a small issue. When I worked on the project in 1999, I used a set of tools that are currently obsolete. To move forward, then, the next challenge to solve was to **define and integrate new tools which would allow me to build new versions of the game again**.

{{< image url="jpacman.jpg" caption="JPacman, a clone of the classic Pac-Man that I developed almost twenty years ago." >}}

## Choosing a new toolset

Of course, the first thing to consider was the source code and the general project structure. After a quick inspection of the files, I was able to note the following:

- The code was **incredibly disorganized** and there was no documentation at all.
- In theory, the project was written in **C++ language**, but there was **no usage of object oriented patterns**, polymorphism, templates, or any other advanced technique of the language.
- All the **gameplay parameters were hardcoded along the source code**, so no configuration files to tweak the gameplay.
- The **access to DirectX libraries** that provided the controls, rendering, music and audio effects features were **isolated in four source code files**. The rest of the game modules referenced these four files to use those features.

{{< image url="jpacman_dirty_code.png" caption="The first few lines of the Game.cpp file were a clear example of how messy the code was: undocumented variables that did not have the right type; a lot of hardcoded values that were not configurable or at least defined in constants." >}}

In addition to the shame that I felt for the messy code, I realized that porting the game to an engine like **Unity** (with which I am now very familiarized), **I would need to rewrite it completely**, which would probably take me several weeks or even months.

Therefore, I started to look for other alternatives that would allow me to have results in a more reasonable time. I searched for game engines that could be integrated with C++ code and I found several alternatives, such as Cocos 2d-x, Torque, Oxygen or Godot.

## The chosen one: Cocos 2d-x

Finally, after downloading some examples and reviewing the documentation of each engine, I decided to try **Cocos 2d-x**, for the following reasons:

- It is a game engine that is mainly designed to create 2D games
- It integrates easily with C++ code
- It seemed simple enough for making a fast integration
- The entities and classes structure seemed to match pretty closely with the JPacman requirements
- The Cocos2d-x source code is available and can be downloaded from Git

{{< image url="cocos2dx_logo.jpg" caption="Cocos 2d-x was the engine I chose to try to continue JPacman development" >}}

After reviewing the Cocos2d-x repository, I learned that I could use **Visual Studio 2015 Community Edition** to build the project binaries. It took me a few hours to get JPacman to also compile with that version. I had to **remove some libraries like DirectMusic**, that are fully **obsolete**, and deactivate the code that referencing them by using preprocessor definitions.

The next step was to integrate the Cocos2d-x code and libraries to the project. To do so, the most natural way was to **add Cocos2d-x repository as a Git sub-module** of the JPacman repository. In this way, the engine was integrated without the files actually being in the game repository.

Then I decided that it was best to **create a separate Visual Studio project for the version of Cocos2d-x**. The plan would be to take one of the engine samples as a base and then connect it with the JPacman code. So, I created the **JPacman_Cocos2dx** project and added it to the same JPacman “Solution File”, using the **cpp-empty-test** sample files as a starting base.

{{< image url="cocos2dx_empty_sample.jpg" caption="The Cpp-empty-test sample had all that was required to begin the JPacman integration with Cocos 2d-x." >}}

Finally, with the new integrated engine, I was ready to start reviving the game code. The fun part was about to start: make each game module to work with the Cocos2d-x engine.

**JPacman was about to return to life in glory and majesty.**

*Have you ever used Cocos2d-x? Do you have experience with other similar engines? Do you believe that Cocos2d-x choice was appropriate or would you have chosen another alternative?*

