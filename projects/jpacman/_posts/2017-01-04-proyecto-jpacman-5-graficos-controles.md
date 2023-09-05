---
title: >
    Proyecto JPacman #5: Gráficos y Controles
image: jpacman_graphics_banner-750x350.jpg
author: jpl
lang: es
translation_url: project-jpacman-5-graphics-controls.html
description: La lógica de JPacman ya funciona con Cocos2d-x, y es hora de hacer funcionar los gráficos y los controles para hacerlo jugable nuevamente.
---

Después de que JPacman había dado [las primeras señales]({% post_url /projects/jpacman/2016-09-04-proyecto-jpacman-4-primeras-vida %}) de vida usando Cocos2d-x, era hora de hacer que por fin se pudiera volver a jugar. ¿Qué faltaba para esto? Dos cosas: que se vieran los gráficos en pantalla y que se pudiera usar el teclado para controlar menús y personaje.

## Gráficos en Pantalla

Para poder mostrar los gráficos en pantalla y mantener la lógica que ya tenía implementada en la versión original de JPacman, tuve que revisar primero cómo era que funcionaba y en qué consistían los archivos de imágenes que el proyecto ya contenía.

Descubrí que JPacman cargaba sólo una gran imagen por escena. En la parte superior de cada imagen estaba el fondo de la escena, del tamaño de la pantalla completa a una resolución de 640 por 480 pixeles. Había cuatro escenas diferentes en el juego y por tanto había cuatro archivos de imagen: *introducción, menú principal, pantalla de mejores puntajes y la escena del juego*.

{% include image url="jpacman_fondos.jpg" caption="Los fondos de las cuatro escenas de JPacman: la escena para jugar tiene el laberinto pintado en el fondo, la introducción tiene un fondo negro, los menús tienen un fondo (horrible) de ladrillos verdes, y el menú principal tiene el nombre del juego superpuesto." %}

Cada una de los cuatro archivos tenía repetido en la parte inferior una serie de imágenes con todos los dibujos de las animaciones de los personajes y objetos dinámicos del juego. Me llamó mucho la atención que hace casi veinte años ya hubiera usado lo que se conoce en la industria como un atlas de texturas, pues es una de las maneras más eficientes de manejar archivos de imágenes en un videojuego de este tipo.

{% include image url="jpacman_sprites.jpg" caption="Los dibujos y las animaciones de personajes y objetos dinámicos de JPacman, utilizando la técnica conocida como atlas de texturas." %}

Tuve que convertir los archivos de imagen a PNG, pues la versión original de JPacman usaba archivos de imágenes en formato BMP, y Cocos2d-x no soporta ese formato. Además, separé el atlas de los fondos de las imágenes pues me pareció que sería mejor para manejar la carga y descarga de las imágenes.

Ya enfocado en el código, hacer funcionar los gráficos no fue difícil. Debí trabajar el archivo Gfx.cpp, en especial la función DrawSprite para poder registrar en el sistema de escena de Cocos2d-x a las imágenes que debían ser mostradas. También tuve que tener precaución con los sistemas de coordenadas pues descubrí, por las malas, que la coordenada Y estaba invertida entre Direct X y Cocos2d-x.

Por último, arreglé un fallo grosero que tenía en el código respecto a la variable GFXFile, con la que estaba haciendo lo que se conoce como «pisar memoria». Eso seguramente explica caídas inesperadas que había en la versión original y que nunca entendí por qué ocurrían. Para más detalles, pueden ver el [código en Bitbucket y el cambio que hice](https://bitbucket.org/papagamedev/jpacman/commits/9c2ad628a05cfc58d09199d0cfcd3b4a52790db7#chg-JPacman1999/Src/JPacman/gfx.cpp).

## Controles y Teclado

El siguiente paso era conseguir controlar los menús y personaje con el teclado. Inspeccionando el código, descubrí que también había programado (o copiado de alguna parte) la funcionalidad para poder utilizar controles con el juego, pero al parecer estaba incompleta. Desafío para más adelante, me dije.

Para que funcionara el teclado, primero tuve que modificar varios archivos porque las constantes que usaba para identificar las teclas entraban en conflicto con constantes de Cocos2d-x. A todas las constantes del juego les tuve que agregar el prefijo *JPACMAN_*, y con eso pude conseguir usarlas correctamente.

Luego, agregué el código para registrar un receptor de eventos (event listener) de Cocos2d-x y agregué el manejo de los eventos *OnKeyPressed* y *OnKeyReleased*, lo que resultó bastante más fácil de lo que yo esperaba.

*¡JPacman ya se podía jugar nuevamente!*

{% include image url="jpacman_cocos2dx.jpg" caption="Habiendo conectado los gráficos y el teclado del código original con Cocos2d-x, ¡JPacman se podía jugar nuevamente!" %}
