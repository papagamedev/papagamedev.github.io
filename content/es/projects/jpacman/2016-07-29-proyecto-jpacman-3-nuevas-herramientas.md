---
title: >
    Proyecto JPacman #3: Nuevas Herramientas
date: 2016-07-29
image: /images/jpacman_cocos2dx_banner-750x350.jpg
author: jpl
lang: es
categories: ["projects", "jpacman"]
translationKey: proyecto-jpacman-3-nuevas-herramientas
description: >
    Nuevo desafío: encontrar nuevas herramientas para JPacman. Inspección del código fuente, alternativas de motores de videojuegos e integración de Cocos2d-x.
---

A fines de Febrero, estaba muy motivado con seguir avanzando en el [proyecto JPacman](/category/jpacman/). En un par de semanas, ya había conseguido hacer funcionar los binarios originales del juego y tenía listo el repositorio en BitBucket. Ahí había respaldado todo el código fuente y los recursos con los que había creado la primera versión hace más de 15 años.

Sin embargo, había un pequeño inconveniente. Cuando trabajé en el proyecto en 1999, usé un conjunto de herramientas que hoy en día están completamente obsoletas. Para poder avanzar, entonces, el siguiente obstáculo a resolver era **definir e integrar herramientas nuevas para poder reconstruir el juego**.

{{< image url="jpacman.jpg" caption="JPacman, un clon del clásico Pac-Man en el que trabajé hace casi veinte años." >}}

## Escogiendo nuevas herramientas

Lo primero a considerar fue, por supuesto, el código fuente y la estructura general del proyecto. Después de una rápida inspección a los archivos, pude constatar lo siguiente:

- El código estaba **increíblemente desordenado** y no había nada de documentación.
- En el papel, el proyecto estaba en **lenguaje C++**, pero **no había uso de orientación a objetos**, polimorfismo, templates, ni ninguna otra característica avanzada del lenguaje.
- Todos los **parámetros de la jugabilidad estaban incrustados a lo largo del código** del juego, es decir, no había archivos de configuración con los que pudiera ser fácil modificarlos.
- El **acceso a las librerías de DirectX** para proveer al juego de música, efectos de sonido, sistema de controles y dibujo en pantalla estaba relativamente **aislado en cuatro archivos**. El resto de los módulos del juego se referían a éstos para acceder a tales características.

{{< image url="jpacman_dirty_code.png" caption="Las primeras líneas del archivo Game.cpp eran un gran ejemplo del terrible estado del código: variables sin documentación y que no respetaban los tipos correctos; muchos números incrustados sin ser configurables o definidos en constantes." >}}

Además de la vergüenza que sentí por el desorden, me di cuenta que para llevar el juego a otra herramienta como **Unity** (con la que estoy actualmente muy familiarizado), **habría tenido que reescribirlo completamente** y demorarme varias semanas o incluso meses.

Por tanto, empecé a buscar otras alternativas que me permitieran tener resultados en un plazo más razonable. Busqué motores de videojuegos que pudieran integrarse con código en C++, y encontré muchas alternativas, como por ejemplo Cocos 2d-x, Torque, Oxygen o Godot.

## El elegido: Cocos 2d-x

Finalmente, después de descargar algunos ejemplos y revisar la documentación general de cada uno, me decidí a probar con **Cocos 2d-x**, por las siguientes razones:

- Es un motor de videojuegos orientado a hacer juegos 2D
- Se integra muy fácilmente con código en C++
- Me pareció suficientemente simple como para poder integrarlo rápido
- La estructura de clases y entidades parecía amoldarse bastante bien a lo que necesitaba para JPacman
- El código de Cocos2d-x está disponible y descargable en Git

{{< image url="cocos2dx_logo.jpg" caption="Cocos 2d-x fue el motor escogido para intentar resucitar JPacman" >}}

Después de revisar el repositorio de Cocos2d-x, comprobé que para construir los binarios del proyecto podía utilizar **Visual Studio 2015 Community Edition**. Me tomó unas cuantas horas conseguir que JPacman también compilara con esa versión. Tuve que **quitar librerías como DirectMusic**, que están completamente **obsoletas**, y desactivar el código que dependía de ellas usando definiciones de preprocesador.

El siguiente paso fue integrar el código y librerías de Cocos2d-x al proyecto. Para hacerlo, lo más natural fue **agregar el repositorio de Git de Cocos2d-x como sub-módulo** del repositorio de JPacman. De esta manera, el motor quedaba integrado sin necesidad de que sus archivos estuvieran realmente en el repositorio del juego.

A continuación, decidí que era mejor **crear un proyecto de Visual Studio separado para la versión de Cocos2d-x**. El plan sería tomar como base uno de los ejemplos del motor. y luego ir conectándolo con el código de JPacman. Así, creé el proyecto **JPacman_Cocos2dx** y lo integré al mismo «Solution File» de JPacman, usando como base los archivos del ejemplo **cpp-empty-test** de Cocos2d-x.

{{< image url="cocos2dx_empty_sample.jpg" caption="El ejemplo Cpp-empty-test tenía todo lo que necesitaba para empezar la integración de JPacman con el Cocos 2d-x." >}}

Por fin, con el nuevo motor integrado, podría empezar a resucitar el código del juego. Ahora me tocaba la parte más entretenida, hacer funcionar cada módulo del juego con Cocos2d-x.

**JPacman volvería a la vida en gloria y majestad.**

*¿Han utilizado Cocos2d-x? ¿Tienen experiencia con otro motor de similares características? ¿Creen que fue apropiada la elección de Cocos2d-x o hubieran escogido otra alternativa?*

