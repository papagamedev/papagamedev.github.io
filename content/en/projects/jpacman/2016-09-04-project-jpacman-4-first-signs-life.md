---
title: >
    Project JPacman #4: First Signs of Life
date: 2016-09-04
image: /images/jpacman_alive_banner-750x350.jpg
author: jpl
lang: en
categories: ["projects", "jpacman"]
translationKey: proyecto-jpacman-4-primeras-vida
description: The JPacman production has been started. Analysis of the source code modules. Making the game code compile with Cocos2d-x.
---

During the second half of February, after [choosing Cocos2d-x]({{< relref "projects/jpacman/2016-07-29-project-jpacman-3-new-toolset.md" >}}) as the game engine to use, I had completed all the **pre-production** phase of my JPacman Project. As a result, I had a goal, tools, and a plan.

The goal was clear: to resurrect **JPacman**, a clone of the classic Pac-Man game that I originally developed in 1999 and whose latest version barely worked in modern computers given the obsolete tools with which it was developed.

The new toolset would be the **Cocos2d-x** engine with **Visual Studio 2015 Community Edition**, which would allow me to have a PC version equivalent to that of 1999, and perhaps to think about versions for other platforms that such engine supports.

As for the plan, it was quite simple: take each module of the original game code and make it run with **Cocos2d-x**, replacing the old DirectX components from the original version (DirectDraw, DirectInput and DirectMusic, now obsolete).

I did not have time to look at the project until the end of March, when I could finally get back to work on it. The **production phase** of the project had begun.

## JPacman source code inspection

To move forward, I had to do a further inspection of the original JPacman source code (available in the [Bitbucket repository]({{< relref "projects/jpacman/2016-07-09-project-jpacman-version-control.md" >}}))). I could then classify the files into four groups:

1. **Game Module**: contains the gameplay and interfaces logic, and it did not directly use anything related to the obsolete libraries. (Files: *Game.cpp, Intro.cpp, Menu.cpp, Puntajes.cpp*)
1. **Resources Module**: contains an abstraction for managing the game controls, graphics and sounds, allowing the rest of the game to use such resources without calling directly to the now obsolete DirectX libraries. (Files: *Input.cpp, Input.h, Gfx.cpp, Sfx.cpp, Music.cpp*)
1. **Support Module**: implements the application initialization and main loop, using the APIs that were required to code games using DirectX and Windows, plus some features for easier debugging. (Files: *JPacman.cpp, JPacman.h, Debug.cpp, Debug.h, Resource.h*)
1. **DirectX utility module**: additional files to manage the (complicated) DirectX API, only used by the resource module. (Files: *DDutil.cpp, DDutil.h, DSutil.cpp, DSutil.h*)

The following diagram shows the relationship between the modules, DirectX and the operating system:

{{< image url="modulos_jpacman.png" caption="The modules of the JPacman original version and their relationship with DirectX and the Operating System." >}}

**Cocos2d-x**, as most videogame engines, provides an implementation that facilitates **an abstraction of the whole graphics and sound systems**, as well as **controls** management. It also **implements the main game loop** and provides numerous debugging helpers, among many other support features.

In practical terms, this meant that I had to make two major changes to the original JPacman code to make it work with Cocos2d-x:

1. **Re-implement the Resources module** so that it used Cocos2d-x API instead of the outdated DirectX ones.
1. **Replace the Support Module** to work with the Cocos2d-x initialization and main loop.

The support module replacement was already done with the basic “Jpacman_Cocos2dx” project that was created when I integrated Cocos2d-x to the project a few weeks earlier.

Re-implementing the Resources module, however, would take a little longer.

## Compiling JPacman with Cocos2d-x

To begin with the Resources module re-implementation, I added all files in the Resources and Game modules to the project, and then I started to solve the compilation issues that appeared.

The first and most obvious thing to do was to disable all the DirectX related code. For this purpose, I added a pre-processor definition called **JPACMAN_COCOS2DX** that would be defined only in the Cocos2d-x version of the game. I then used it to remove large portions of the Resources module code from the build, and also some small references in the Game module.

{{< image url="jpacman_prepdef.png" caption="The JPACMAN_COCOS2DX preprocessor definition was used to disable large sections of code that were using DirectX libraries. In some cases, this code was replaced by empty functions that would later be filled with calls to Cocos2d-x API." >}}

I also had to make some changes to definitions belonging to older versions of the Windows SDK that were no longer available. The same thing happened with some system library files that I had to add that were not previously required.

Once the code was compiling, I still needed to connect it with Cocos2d-x so that when the application was initialized, the JPacman code could also get started and then the main cycle code could get called in every frame. To accomplish this, I used the Cocos2d-x Scene class instance that I already had in the sample project, as it was initialized at the application startup and allowed me to run code in every frame.

Finally, I added some console messages to the setup code of the JPacman Intro and Menu modules, just to check if the code was running up to that point.

I ran the project and Eureka! When the application started, the Intro setup message appeared and, after a few seconds (the game intro duration, actually), another message appeared in the output console, stating that the Menu module had been initialized.

The game window was completely black. But the output console had two clear and auspicious messages.

**JPacman was showing some signs of life again.**

{{< image url="jpacman_alive.png" caption="Although the game window looked completely black, you could read “Menu setup” on the console, indicating that the Menu module was initialized after finishing the game Intro." >}}

*Have you been through a similar experience? Have you ported code that worked with DirectX to a more modern engine such as Cocos2d -x? Did you have similar issues?*

