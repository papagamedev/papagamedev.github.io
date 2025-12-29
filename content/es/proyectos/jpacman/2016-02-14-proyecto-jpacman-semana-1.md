---
title: >
    Proyecto JPacman: Semana #1
date: 2016-02-14
image: /images/jpacman-semana1-banner-750x350.jpg
author: jpl
lang: es
categories: ["projects", "jpacman"]
translationKey: proyecto-jpacman-semana-1
description: >
    Empieza el proyecto JPacman: retomar un juego que desarrollé con fines no comerciales hace mucho tiempo. ¡Descarga la versión original construida en 1999!
---

Hace algunos meses, casi por casualidad, encontré el código fuente de un proyecto en el que trabajé hace casi veinte años: un clon de Pacman que bauticé, en un inmenso ataque de inspiración creativa, con el original nombre de **JPacman** (JP + Pacman).

El código fuente, tal cual, no me permitía hacer mucho. Como esto ocurrió en 1999, el juego está desarrollado con herramientas de esa época, muchas de las cuales están ya obsoletas.

Sin embargo, en el viejo disco de respaldo no sólo estaba el código fuente. ¡También había una versión ejecutable del juego! Lleno de emoción quise probarla de inmediato.

Incrédulo, observé cómo empezaba la melodía y se animaba la introducción que había programado tanto tiempo atrás.

{{< image url="jpacman-intro.png" caption="Hace diecisiete años, estaba decidido a tener mi propia empresa de videojuegos. Su nombre sería JPL Soft, otro chispazo notable de creatividad." >}}

A principios de este año, medité bastante acerca de mis experiencias del año anterior e incluso escribí un artículo al respecto ([«¡Adios 2015! Dos breves historias y nuevos desafíos»]({{< relref "blog/2016-01-24-adios-2015-dos-breves-historias.md" >}})). Sentí que era hora de poner manos a la obra y me propuse retomar, durante el 2016, algunos de estos proyectos.

*Ha llegado el momento de revivir JPacman.*

## Objetivos del Proyecto JPacman

Al empezar un proyecto (o retomarlo después de veinte años), es bueno plantearse algunos objetivos. ¿Qué significa retomar un proyecto como éste? ¿Qué es exactamente lo que quiero hacer con el juego?

Hay que ser realistas. No puedo olvidar que **JPacman es un clon de Pacman, un muy conocido juego cuya licencia aún sigue vigente y muy activa**. En efecto, Namco Bandai, dueños de la licencia, ha seguido publicado numerosas versiones oficiales de Pacman.

La última que publicaron se llama Pacman 256 y está disponible para Android ([enlace a Google Play](https://play.google.com/store/apps/details?id=eu.bandainamcoent.pacman256&hl=es_419)) y para iOS ([enlace a Apple Store](https://itunes.apple.com/us/app/pac-man-256-endless-arcade/id1002340615?mt=8)), y tal vez para otras plataformas. Es un juego entretenido y al parecer le ha ido muy bien, tanto comercialmente como a nivel de la recepción de la crítica especializada.

{{< image url="pacman256-screenshot.jpg" caption="Pacman 256, publicado por Namco Bandai. Aunque es un juego exitoso, en mi humilde opinión mataron el espíritu de Pacman con la modernización que hicieron." >}}

Quiero dejar claro (y por escrito) que **mi intención no es infringir los derechos de autor de Namco Bandai**, por lo que sé que no puedo publicar JPacman en alguna tienda tal cual está.

¿Entonces, por qué quiero retomar el proyecto? Creo que es una mezcla de nostalgia y amor por los desafíos técnicos.

Nostalgia, porque JPacman es uno de los proyectos a los que más trabajo y pasión le dediqué en mis años de desarrollador no profesional de videojuegos. También siento que será un entretenido desafío técnico, pues no es trivial resucitar un proyecto en que las herramientas con las que se hizo originalmente ya no están disponibles, o al menos no completamente.

El primer objetivo, entonces, es **lograr tener una versión que pueda construir con herramientas actuales**. Después de eso veré cuál será el próximo objetivo.

## El primer desafío sorpresa

Esta semana, al empezar a trabajar en el proyecto, me encontré rápidamente con el primer obstáculo que tenía que resolver.

Cuando probé el juego hace varios meses, lo hice en el computador que tenemos en casa, con Windows 7 instalado. Hace algunas semanas, sin embargo, me decidí a aceptar el insistente ofrecimiento que Microsoft me hacía de actualizar a Windows 10 y, para sorpresa mía, ¡en esta nueva versión el juego ya no funciona!

{{< image url="jpacman-intro-broken.png" caption="En Windows 8 y Windows 10, el juego aparece en una ventana y funciona muy muy muy lento, algo así como a 2 cuadros por segundo. ¡No se puede jugar!" >}}

El primer desafío técnico había aparecido: **descubrir por qué el juego ya no funcionaba en el último Windows e, idealmente, encontrar una solución**.

No me tomó mucho tiempo descubrir el motivo. Después de buscar en foros y en Google la frase «juego viejo ya no funciona en Windows 10», encontré que el problema ocurre desde Windows 8 y se debe a que Microsoft dejó obsoleto (o removíó, no estoy seguro) el soporte para la aceleración por hardware de la librería Direct Draw de Direct X.

Esa librería es justamente la que mi juego usa para dibujar gráficos 2D en la pantalla de manera eficiente. Y no sólo el mío, por supuesto. Famosos juegos como Civilization y Age of Empires, entre muchos otros, padecen el mismo problema.

En muchos casos, las propias empresas desarrolladoras o grupos de fans oficiales publicaron parches o instrucciones para que los juegos volvieran a funcionar como antes. Y en los casos en que esto no ocurrió, hubo programadores que desarrollaron pequeñas herramientas o aplicaciones genéricas que arreglaran la situación.

Probé muchas de esas herramientas hasta que por fin di con una que funcionó con JPacman: **Aqrit’s ddwrapper**, desarrollada por Aqrit. No conozco más que su seudónimo y su sitio web ([link al sitio](http://bitpatch.com/ddwrapper.html)), por lo que no he podido agradecerle. Pero gracias a su herramienta, JPacman funciona en todas las versiones de Windows que he probado hasta ahora.

¡Primer desafío solucionado!

## Descargar JPacman 0.1999

He decidido llamar **JPacman 0.1999** a esta versión original del juego, por el año en que fue construido este ejecutable.

Sé que no puedo publicar el juego por el tema de los derechos de autor, pero espero no tener problemas por compartir en Papá Game Dev esta versión, desarrollada sin ningún fin comercial, hace más de quince años.

{{< image url="jpacman.jpg" caption="¡Descarga JPacman 0.1999 ahora!" >}}

Puedes obtenerlo desde la página de [descarga de JPacman 0.1999]({{< relref "proyectos/downloads/2016-02-14-descarga-jpacman-01999.md" >}})

También puedes revisar en esta sección todas las actualizaciones al [Proyecto JPacman]({{< relref "proyectos/jpacman/_index.md" >}})

