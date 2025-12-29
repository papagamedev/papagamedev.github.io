---
title: >
    Project JPacman #2: Version Control System
date: 2016-07-09
image: /images/jpacman_scm_banner-750x350.jpg
author: jpl
lang: en
categories: ["projects", "jpacman"]
translationKey: proyecto-jpacman-control-de-versiones
description: Resuming Project JPacman after several months without working on it. Creating the Version Control System repository. The source code first public version.
---

Several months ago, I started the Papa Game Dev Projects section and, a couple of weeks later, I was already working on JPacman. Although I had all the motivation in the world to do great things, I did not know if I was actually going to have time for it.

During February and April, I managed to do some concrete progress, stealing a few hours a week from my spare time. However, I could not find the minute to write about my accomplishments at Papa Game Dev.

Until now.

**Please keep in mind that some of these articles will get a bit more technical** than the rest of what I write in Papa Game Dev. Given that my intention is that the Projects section can serve as a guide to developers, it seems logical to include details of some of the technical problems I work on.

## Version Control System

First things first. **No matter if the project is small or large, if you work alone or in a team of a hundred people. You must use a Version Control System** to keep changes under control and to have a backup in case anything unforeseen happens.

{{< image url="scm_diagrama.jpg" caption="In a traditional version control system, developers work on their computers and send their modifications (and receive changes from the rest of the team) through a central repository, which can be on another computer or in the cloud." >}}

There are many version control systems, some more popular than others. Some of them can be installed directly as a service or application on the computer, while others are offered as a cloud service.

In my case, I decided **to use the [GIT](https://git-scm.com/) version control system**, for two reasons:

1. It is one of the most popular and flexible systems.
1. Despite being very popular, I had never used it before, so I wanted to give it a try.

I chose to **use GIT in the [Bitbucket](https://bitbucket.org/) cloud service**, because it’s free for the kind of projects I’ll be working on and I was already familiar with it.

## The JPacman Repository

To work with GIT, you need to create a **working repository**, and then **clone it** on the computers where you want to work. Both functions are very easy to perform in Bitbucket, and you can also create a Team to group a set of projects. I highly recommend doing so instead of creating repositories associated directly to your Bitbucket personal account.

It is not my intention to explain how to use GIT in this article, but there are hundreds of tutorials and very detailed documentation online. GIT has plenty of advanced features that can be accessed using its command line interface, but if you **use a graphical user interface (GUI) application like [SourceTree](http://sourcetreeapp.com/)** (my favorite), its usage gets really simplified.

{{< image url="jpacman_sourcetree.jpg" caption="SourceTree, an excellent UI app to work with GIT repositories." >}}

Having created and cloned the repository, the next step was to version (i.e. added to the version control system) everything that I recovered from the JPacman backup disk. I chose to use the following folder structure:

- **JPacman1999/BinOriginal**: The working **game binaries** that I published in the previous article. You can also get them from the [downloads page]({{< relref "projects/downloads/2016-02-14-download-jpacman-01999.md" >}}).
- **JPacman1999/Music**: The game music source files, that correspond to a **DirectMusic project**, a (now obsolete) tool used to compose music.
- **JPacman1999/Src**: The **original game source code**, including a **map editor** that I never completed.

{{< image url="jpacman_bitbucket.jpg" caption="The JPacman repository in Bitbucket, a cloud service for GIT version control repositories." >}}

I invite you to browse the [JPacman repository in Bitbucket](https://bitbucket.org/papagamedev/jpacman) and clone it if you want to check it in more detail. It does not only include the original code, but also everything I did during February and April. I’ll write about those in the next articles of Papa Game Dev Projects section.

*What version control system have you used in your projects? Have you used GIT + Bitbucket + SourceTree? How was your experience with such tools?*

