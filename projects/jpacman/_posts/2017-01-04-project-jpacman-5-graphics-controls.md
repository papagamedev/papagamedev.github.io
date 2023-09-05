---
title: >
    Project JPacman #5: Graphics and Controls
image: jpacman_graphics_banner-750x350.jpg
author: jpl
lang: en
translation_url: proyecto-jpacman-5-graficos-controles.html
description: JPacman logic was working with Cocos2d-x, so it’s time to make the graphics and controls work so that the game is playable again.
---

After JPacman had given the [first signs of life]({% post_url /projects/jpacman/2016-09-04-project-jpacman-4-first-signs-life %}) using Cocos2d-x, it was time to make it finally playable again. What was missing for this? Two things: to see the graphics on screen and to use the keyboard to control menus and main character.

## Graphics on Screen

In order to display the graphics on the screen and keep the logic that I had already implemented in the original version of JPacman, I had to first check how it did it work and which were the contents of the image files that the project already contained.

I discovered that JPacman loaded only one large image per scene. At the top of each image there was the background of the scene at full screen size, which meant a resolution of 640 by 480 pixels. There were four different scenes in the game and so there were four image files: *intro, main menu, best scores screen and the game scene*.

{% include image url="jpacman_fondos.jpg" caption="The backgrounds of the four JPacman scenes: the scene to play has the maze painted in the background; the intro has a black background; the menus have a (horrible) green bricks background, and the main menu has the game logo over it." %}

Each of the four files had repeated in the bottom a series of images with all the drawings of the animations of the game characters and dynamic objects. It surprised me that almost twenty years ago I actually used what is known in the industry as a textures atlas, because it is one of the most efficient ways to handle image files in a videogame of this type.

{% include image url="jpacman_sprites.jpg" caption="The images and animations of the characters and dynamic objects of JPacman, using the technique known as texture atlas." %}

I had to convert image files to PNG, because the original version of JPacman used image files in BMP format, and Cocos2d-x does not support that format. Also, I separated the texture atlas sectipn from the backgrounds in the image files because I thought it would be better for managing the loading and unloading of the images.

Already focused on the code, making the graphics work was not difficult at all. I had to work on the the Gfx.cpp file, especially on the DrawSprite function to be able to register in the Cocos2d-x scene system the images that needed to be displayed. I also had to be careful with coordinate systems because I discovered, the hard way, that the Y coordinate was inverted between Direct X and Cocos2d-x.

Finally, I fixed an awful bug I had in the code regarding the GFXFile variable, with which I was doing what is known as a “memory corruption”. That surely explains unexpected crashes that I experienced in the original version and that I never understood why they happened. For more details, you can see the code in [Bitbucket and the change I made](https://bitbucket.org/papagamedev/jpacman/commits/9c2ad628a05cfc58d09199d0cfcd3b4a52790db7#chg-JPacman1999/Src/JPacman/gfx.cpp).

## Controls and Keyboards

The next step was to be able to control the menus and the character with the keyboard. Inspecting the code, I discovered that I had also programmed (or copied from somewhere) the functionality to be able to use gamepads with the game, but apparently it was incomplete. Challenge for a later stage, I told myself.

For the keyboard to work, I first had to modify several files because the constants I used to identify the keys conflicted with Cocos2d-x constants. To all the constants of the game I had to add the *JPACMAN_* prefix, and that fixed the issue.

Then I added the code to register a Cocos2d-x event listener and added the handling of the OnKeyPressed and OnKeyReleased events, which was a lot easier than I expected.

*JPacman was playable again!*

{% include image url="jpacman_cocos2dx.jpg" caption="Having connected the graphics and keyboard of the original code with Cocos2d-x, JPacman was playable again!" %}
