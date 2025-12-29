---
title: >
    Proyecto JPacman #4: Primeras señales de vida
date: 2016-09-04
image: /images/jpacman_alive_banner-750x350.jpg
author: jpl
lang: es
categories: ["jpacman"]
translationKey: proyecto-jpacman-4-primeras-vida
description: Empieza la producción de JPacman. Análisis de los módulos del código fuente original. Conseguir que el juego compile con Cocos2d-x.
---

Durante la segunda mitad de Febrero, con la [elección de Cocos2d-x]({{< relref "projects/jpacman/2016-07-29-proyecto-jpacman-3-nuevas-herramientas.md" >}}) como el motor de videojuegos a utilizar, había completado toda la fase de **pre-producción** de mi Proyecto JPacman. Como resultado, ya tenía un **objetivo**, **herramientas**, y un **plan**.

El objetivo estaba claro: resucitar **JPacman**, un clon de Pac-Man que había desarrollado originalmente en 1999 y cuya versión apenas funcionaba en los computadores modernos por las herramientas obsoletas con que había sido desarrollado.

Las nuevas herramientas serían el motor **Cocos2d-x** con **Visual Studio 2015 Community Edition**, lo que me permitiría tener una versión de PC equivalente a la de 1999, y aspirar tal vez a versiones en otras plataformas que tal motor soportara.

En cuanto al plan, la verdad era bastante simple: tomar cada módulo del código original del juego y hacerlo funcionar con **Cocos2d-x**, en reemplazo de los antiguos componentes de DirectX de la versión original (DirectDraw, DirectInput y DirectMusic, actualmente obsoletos).

Pasaron varias semanas en las que no tuve tiempo de mirar el proyecto, hasta que a fines de Marzo, por fin pude poner manos a la obra. La **fase de producción** del proyecto había comenzado.

## Inspección del código fuente de JPacman

Para seguir adelante, tuve que hacer una inspección más profunda del código fuente original de JPacman (código disponible en el [repositorio en Bitbucket]({{< relref "projects/jpacman/2016-07-09-proyecto-jpacman-control-de-versiones.md" >}}))). Pude entonces clasificar los archivos en cuatro grupos:

1. **Módulo de Juego**: contiene la lógica de jugabilidad y las interfaces, y en su versión original no usaban directamente (casi) nada de las librerías obsoletas. (Archivos: *Game.cpp, Intro.cpp, Menu.cpp, Puntajes.cpp*)
1. **Módulo de Recursos**: contiene una abstracción para administrar los controles, gráficos y sonidos, y permitir al resto del juego usarlos sin llamar directamente a las librerías de DirectX, ahora obsoletas. (Archivos: *Input.cpp, Input.h, Gfx.cpp, Sfx.cpp, Music.cpp*)
1. **Módulo de Soporte**: implementa la inicialización y ciclo principal de la aplicación, de la manera como se programa con DirectX y Windows, además de algunas funciones para ayudar a la depuración. (Archivos: *JPacman.cpp, JPacman.h, Debug.cpp, Debug.h, Resource.h*)
1. **Módulo utilitarios de DirectX**: archivos adicionales para manejar la (complicada) interfaz de DirectX, sólo utilizados por el módulo de recursos. (Archivos: *DDutil.cpp, DDutil.h, DSutil.cpp, DSutil.h*)

El siguiente diagrama muestra la relación entre los módulos, DirectX y el sistema operativo:

{{< image url="modulos_jpacman.png" caption="Los módulos de la versión original de JPacman y su relación con Direct X y el Sistema Operativo." >}}

**Cocos2d-x**, como la mayoría de los motores de videojuegos de su tipo, provee una implementación que permite **abstraer todo el sistema de recursos gráficos y de sonido**, además del manejo de **controles**. También **implementa el ciclo principal del juego** y provee de numerosas funciones de depuración, entre otras muchas funcionalidades de soporte.

En términos prácticos, esto significaba que había que hacer dos grandes cambios al código de JPacman original para que funcionara con Cocos2d-x:

1. **Re-implementar el módulo de Recursos** para que utilizara las interfaces de Cocos2d-x en lugar de las obsoletas de DirectX.
1. **Reemplazar el módulo de Soporte** para que funcionara de la manera como se trabaja con Cocos2d-x

El reemplazo del módulo de soporte podía decirse que ya se había cumplido con el proyecto base «Jpacman_Cocos2dx» que había creado al integrar las librerías unas semanas antes.

La re-implementación del módulo de Recursos, sin embargo, tomaría un poco más de tiempo.

## Compilar JPacman con Cocos2d-x

Para comenzar con la re-implementación del módulo de Recursos, agregué todos los archivos de este módulo y también los del módulo de Juego al proyecto, y me dediqué a resolver los problemas de compilación que aparecieron.

Lo primero y más obvio era desactivar todo lo que tuviera que ver con DirectX. Para esto, agregué una definición de pre-procesador llamada **JPACMAN_COCOS2DX** que estaría definida sólo en la versión Cocos2d-x del juego, y la utilicé para quitar de la compilación grandes porciones de código en el módulo de Recursos, y algunas pequeñas referencias en el módulo de Juego.

{{< image url="jpacman_prepdef.png" caption="La definición de pre-procesador JPACMAN_COCOS2DX se utilizó para desactivar grandes secciones de código que llamaban a DirectX. En algunos casos, se reemplazó ese código por funciones vacías que, más adelante, serían rellenadas con llamados a Cocos2d-x" >}}

Tuve que hacer también algunos cambios por definiciones que pertenecían a versiones del SDK de Windows más viejas y que ya no estaban disponibles. Lo mismo me ocurrió con algunos archivos de librerías de sistema que tuve que agregar que antes no eran necesarias.

Una vez que el código compilaba, necesitaba conectarlo con Cocos2d-x para que cuando la aplicación se iniciara, el código de JPacman también fuera inicializado y luego se llamara su ciclo principal en todos los cuadros. Para esto, utilicé la instancia de la clase Scene (Escena) de Cocos2d-x que ya tenía en el proyecto de ejemplo, pues ésta se inicializa al comenzar la aplicación y permite ejecutar código en todos los cuadros.

Finalmente, agregué algunos mensajes a la consola en la inicialización de los módulos Intro y Menu de JPacman, para ver si al menos la ejecución llegaba hasta ahí.

Ejecuté el proyecto y ¡Eureka! Al iniciar la aplicación, apareció el mensaje de consola del módulo Intro, y luego de unos segundos (lo que dura la introducción del juego), apareció el mensaje de consola que indicaba que se había inicializado el módulo Menu.

La ventana del juego estaba completamente negra y no se veía nada. Pero en la consola, había dos claros y auspiciosos mensajes.

**JPacman había vuelto a dar señales de vida.**

{{< image url="jpacman_alive.png" caption="Aunque la ventana del juego se veía completamente negra, se podía leer «Menu setup» en la consola, lo que indicaba que el módulo de Menu se había inicializado después de terminar la Intro del juego." >}}

*¿Han pasado por una experiencia similar de portar código que funcionaba con DirectX a otro motor como Cocos2d-x? ¿Tuvieron problemas similares?*

