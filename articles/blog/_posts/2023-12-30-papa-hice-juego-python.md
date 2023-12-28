---
title: “Papá, ¡mira el juego que hice en Python!”
image: images/made-python-game.jpg
author: jpl
lang: es
translation_url: dad-made-game-python.html
description: Crear y diseñar videojuegos. Aprender programación con C#, PSeInt y Python. Nuevos desafíos con Godot.
featured: true
---

Hace unas semanas, mi hijo mayor Diego (19) me dijo orgulloso:

> “Papá, ¡mira el juego que hice en Python!”

Me contó que era una tarea que les habían dado del curso de Introducción a la Programación en la Universidad. Y con una sonrisa confesó que, en realidad, la tarea era mucho más simple: hacer un código que tuviera más de una clase, y que una de las clases llamara a funciones de la otra clase.

> “¡Pero eso era muy simple, no tenía ninguna gracia! Así que quise hacer algo más entretenido: ¡te presento mi juego del laberinto!”

Así que, lleno de curiosidad, me senté frente a su computador. Diego inició el programa y me enfrenté a la primera pantalla:

{% include image url="labyrinth_intro.jpg" caption="El inicio de Labyrinth Quest XII, el juego en Python de Diego" %}

Era evidente que Diego estaba muy motivado, no sólo por las ganas que tenía que yo viera su proyecto, sino que también por los detalles que pude ver en los primeros minutos del juego. Desde el nombre que le puso, hasta el tutorial que le enseña al jugador las reglas del juego, se notaba que se había esforzado mucho en el resultado:

{% include image url="labyrinth_tutorial.jpg" caption="El tutorial de Labyrinth Quest XII le explica al jugador cómo jugar" %}

Después de pasar por la fase de instrucciones, ya comencé a recorrer el laberinto y buscar la salida. Me sorprendió que el juego tenía implementado varios sistemas y no se trataba simplemente de llegar a la meta.

Por ejemplo, el jugador tiene cierta cantidad de energía y debe recargarse encontrando alimentos en el laberinto antes de quedarse sin reservas. Además, hay un sistema de "niebla de guerra", que no es tan trivial de implementar. Esta mecánica, muy usada en videojuegos, consiste en ocultar áreas no exploradas del mapa hasta que el jugador las recorra.

{% include image url="labyrinth_fogofwar.jpg" caption="El laberinto, inicialmente oculto, va apareciendo a medida el jugador lo va recorriendo." %}

Hice varias pasadas, perdí la mayoría por quedarme sin energía y llegué solo una vez a la salida. Me entretuve mucho, pero más que por el juego en sí (¡que creo que está demasiado difícil!), porque disfruté el estar jugando a una creación completamente programada por Diego. 

{% include image url="labyrinth_gameover.jpg" caption="Final del juego en Labyrinth Quest XII." %}

## Sueños, motivaciones e intereses

Hace muchos años, cuando comencé este blog, mi primer artículo se trataba justamente de que Diego había dicho en el colegio que [«Cuando sea grande quiero ser Creador de Videojuegos»]({% post_url /articles/blog/2015-03-22-cuando-sea-grande-quiero-ser-creador-de-videojuegos %}).

Durante los próximos meses y años, mantuvo esa idea e incluso incursionó en el Diseño de Niveles, una disciplina del desarrollo de videojuegos, [creando niveles para juegos como Geometry Dash]({% post_url /articles/blog/2015-09-05-papa-mira-los-niveles-que-hice %}).

{% include image url="geometrydash-editor2.jpg" caption="Diseño de niveles en el Editor de Geometry Dash, donde Diego creaba niveles hace varios años." %}

Muchas veces, durante ese tiempo, tuve ganas de motivarlo y acercarlo más al desarrollo de videojuegos. Pero también tenía dudas si no me convertiría en ese tipo de padre que se obsesiona con que su hijo siga sus pasos, no dejándolo explorar y encontrar su propio camino. Por su parte, Diego empezó a aburrirse del diseño de niveles y empezó a interesarse en otras cosas.

En esa misma época, conocí la iniciativa de la [Hora del Código](https://hourofcode.com/) y con esas actividades traté de incentivarlo aprender programación. También compré unos mini robots de [Wonder Workshop](https://www.makewonder.com/) que están diseñados para estimular el aprendizaje de la programación en niños. Le llamaban la atención, pero no interactuaba con ellos más allá de unos minutos.

{% include image url="wonderworkshop-robots.jpg" caption="Los robots de Wonder Workshop vienen con un app que enseña programación de manera muy simple para niños." %}

Cuando fue un poco más grande, volvió a mencionar que quería aprender a programar y yo le ofrecí enseñarle. Le hice algunas lecciones de C#, pues pensé que era suficientemente claro (comparado con otros lenguajes como C++) para aprender los conceptos básicos, y además era con el que yo estaba más familiarizado en los últimos años. Hicimos algunas cosas pequeñas, le di algunas tareas que resolvió con esfuerzo, pero nunca se le encendió la chispa de aprender más por su cuenta.

Pasaron los años y sus intereses siguieron evolucionando. Empezó a gustarle la ciencia, especialmente la física. Se fue metiendo más en ese mundo, veía videos de científicos, leía artículos y libros, y comentaba temas de ciencia en las comidas familiares.

Cuando ya estaba en los últimos años del colegio, me atreví a preguntarle si tenía alguna idea de qué quería estudiar en la universidad. Me dijo que no estaba seguro aún, pero que creía que sería algo relacionado con Física. El sueño de niño de ser creador de videojuegos había quedado atrás.

Yo decidí no insistirle más con la programación ni con los videojuegos. Tal vez en el futuro encontraría su propia motivación.

## Una nueva motivación

En el último año de colegio, esa motivación llegó. Diego tenía que elegir algunos ramos electivos, y tomó uno de Programación. Ahí le empezaron a enseñar desde lo básico, igual como había hecho yo años antes. Pero en vez de usar C#, utilizaron [PSeInt](https://pseint.sourceforge.net/), un lenguaje que yo ni siquiera conocía. Es un lenguaje muy simple y didáctico, y que fue diseñado específicamente para enseñar programación. 

{% include image url="pseint-code.jpg" caption="PSeInt, un lenguaje creado para enseñar Programación." %}

Diego tomó el curso con un amigo, y juntos se fueron motivando a aprender más allá de lo que el profesor les enseñaba. Más adelante, les enseñaron lo básico de Python y ahí, con una herramienta más poderosa en sus manos (comparada con PSeInt), la motivación aumentó.

Aprendió primero lo básico y luego, junto con el amigo, armaron un par de juegos muy simples, desde un "Tres en Raya" (o "Gato", como lo conocemos en Chile) hasta una especie de "Pokemon" muy simple usando la librería PyWin. También aprendieron a usar PyCharm, uno de los editores de Python más populares del mercado. 

{% include image url="python-ide.jpg" caption="PyCharm, el editor de Python que Diego aprendió a usar en el colegio." %}

Este año, ya en su primer año de universidad, le volvieron a enseñar Python en su curso de Introducción a la Programación. Con toda la experiencia y motivación que traía del año anterior, se atrevió a desafíos más interesantes, y se lanzó con el juego que me mostró orgulloso. 

Pero no se detuvo ahí. En las últimas semanas, junto con un amigo que también está muy motivado con el tema, están rehaciendo el juego de Diego usando el motor de videojuegos [Godot](https://godotengine.org/). Tiene incorporado un lenguaje de programación propio llamado GDScript que es, al menos en apariencia, muy parecido a Python.

{% include image url="labyrinth-godot.jpg" caption="Labyrinth, una versión en construcción en el motor de videojuegos Godot." %}

Diego no ha abandonado su idea de querer trabajar en Física. Para él, la programación y su videojuego en construcción es un entretenido y desafiante pasatiempo. 

Por mi parte, me siento feliz que haya aprendido a programar, ya que es una herramienta que le servirá en cualquier profesión. Y claro, también disfruto ver que la creación de videojuegos le gusta, aunque sea como pasatiempo. ¡A esperar que esté lista la versión de Labyrinth en Godot, y ver con qué se motiva después!

{% include image url="made-python-game.jpg" caption="¡A esperar como resulta la próxima versión de Labyrinth Quest XII!" %}

*¿Alguien más conocía PSeInt? ¿Algún experto en Godot que pueda recomendar material para compartirle a Diego?*
