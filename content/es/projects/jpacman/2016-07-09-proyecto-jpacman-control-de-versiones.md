---
title: >
    Proyecto JPacman #2: Control de Versiones
date: 2016-07-09
image: /images/jpacman_scm_banner-750x350.jpg
author: jpl
lang: es
categories: ["projects", "jpacman"]
translationKey: proyecto-jpacman-control-de-versiones
description: Retomo el Proyecto JPacman después de varios meses sin avances. Creación del repositorio de control de versiones, primera versión pública del código fuente.
---

Hace ya varios meses, empecé con la sección de Proyectos de Papá Game Dev y luego con este Proyecto JPacman. Aunque tenía toda la motivación del mundo de poder hacer grandes cosas, no sabía cuánto tiempo podría dedicarle realmente.

Durante Febrero y Abril me las arreglé para hacer varios avances concretos, robándole a mi tiempo libre algunas horas a la semana. Sin embargo, no tuve ni un minuto para poder contar en Papa Game Dev acerca de lo que había logrado.

Hasta ahora.

**Ojo que algunos de estos artículos se volverán un poco más técnicos** que el resto de lo que escribo en Papá Game Dev. Dado que mi intención es que la sección de Proyectos pueda servir como guía a desarrolladores, me parece lógico entonces que aborde problemas técnicos de manera concreta.

## Sistema de Control de Versiones

Lo primero es lo primero. **No importa si es un proyecto pequeño o un proyecto grande, si se trabaja solo o con un equipo de cien personas. Siempre hay que usar un Sistema de Control de Versiones** para llevar un control ordenado de los cambios y tener un respaldo ante cualquier imprevisto.

{{< image url="scm_diagrama.jpg" caption="En un sistema de control de versiones tradicional, los desarrolladores trabajan en sus computadores y envían sus modificaciones (y reciben las del resto) a través de un repositorio central, que puede estar en otro computador o en la nube." >}}

Existen muchos sistemas de control de versiones, unos más populares que otros. Además, muchos de ellos se pueden instalar directamente como un servicio o aplicación en el computador, o también se puede usar un servicio en la nube que lo tenga integrado.

En mi caso, decidí **usar el sistema de control de versiones [GIT](https://git-scm.com/)**, por dos razones:

1. Es uno de los más populares y flexibles
1. A pesar de ser muy popular, nunca antes lo había usado y quería conocerlo y probarlo.

En cuanto a la forma, elegí **utilizar el servicio en la nube [Bitbucket](https://bitbucket.org/)**, porque para el uso que quería darle es gratuito y ya estaba familiarizado con él.

## El Repositorio de JPacman

Para trabajar con GIT, hay que crear un **Repositorio de trabajo**, y luego **Clonarlo** en los computadores donde se quiera trabajar. Ambas funciones son muy fáciles de realizar en Bitbucket, donde además se puede crear un Team (equipo) para agrupar un conjunto de proyectos. Recomiendo encarecidamente hacer eso en vez de crear los repositorios asociados directamente a la cuenta personal de Bitbucket.

No es mi intención explicar cómo usar GIT en este artículo, pero hay cientos de tutoriales y páginas con documentación en línea. GIT tiene un millón de funciones avanzadas que se pueden acceder usando su interfaz de línea de comandos, pero si se utiliza **una aplicación con interfaz gráfica como [SourceTree](http://sourcetreeapp.com/)** (mi preferida), el tema se simplifica muchísimo.

{{< image url="jpacman_sourcetree.jpg" caption="SourceTree, una excelente aplicación con interfaz gráfica para trabajar con repositorios en GIT." >}}

Habiendo creado y clonado el repositorio, el siguiente paso fue versionar (es decir, agregar al sistema de versiones) todo lo que había recuperado del respaldo de JPacman, con la siguiente estructura de carpetas:

- **JPacman1999/BinOriginal**: Los **binarios del juego** funcionando que publiqué en el artículo anterior, que también se pueden obtener de la [página de descargas]({{< relref "projects/downloads/2016-02-14-descarga-jpacman-01999.md" >}}).
- **JPacman1999/Music**: Los archivos originales de la música del juego, que corresponden a un **proyecto de DirectMusic**, una herramienta para componer música que ya está obsoleta.
- **JPacman1999/Src**: El **código fuente original** del juego, incluyendo un **Editor de mapas** que nunca fue terminado.

{{< image url="jpacman_bitbucket.jpg" caption="El repositorio de JPacman en Bitbucket, un servicio de control de versiones GIT en la nube" >}}

Los invito a navegar por el [repositorio de JPacman en Bitbucket](https://bitbucket.org/papagamedev/jpacman) y a clonarlo si lo quieren ver en más detalle. No sólo incluye el código original, sino que también lo que avancé durante Febrero y Abril, y que revisaré en los próximos artículos de esta sección.

Nota: por un tema de orden y costumbre profesional, **toda la documentación, notas y comentarios en el repositorio están en inglés**.

*¿Qué sistema de control de versiones usan ustedes en sus proyectos? ¿Han ocupado GIT + Bitbucket + SourceTree? ¿Cuál ha sido su experiencia?*

