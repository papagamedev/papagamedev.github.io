---
categories:
  - blog
date: 2015-10-04
title: «Papá, ¡yo quiero aprender a programar!»
image: /images/programar-banner-750x350.jpg
author: jpl
translationKey: hora-del-codigo-programar
description: Aprender a programar es muy importante, pues es el lenguaje del futuro. La Hora del Código, una iniciativa para que niños empiecen a programar.
---

Hace casi treinta años, mi padre me mostró dos líneas escritas en la pantalla de la televisión que estaba conectada a nuestro Atari 800 XL.

{% highlight vb %}
10 PRINT "HOLA"
20 GOTO 10
{% endhighlight %}

Me contó que eso era un programa y me invitó a ver lo que ocurría cuando le indicaba al computador que lo «ejecutara». Maravillado, observé como la palabra «HOLA» se repetía incesantemente por la pantalla.

{% highlight text %}
HOLA
HOLA
HOLA
HOLA
HOLA
HOLA
HOLA
{% endhighlight %}

Boquiabierto, le pregunté que cómo había hecho eso, y me explicó que los programas estaban hechos con instrucciones, y que el computador las entendía y hacía lo que se le pedía. En ese momento, mi padre parecía más poderoso que «HeMan», «León-O» y «El Vengador» juntos (para quien no sepa, son todos héroes de dibujos animados de los 80).

{{< image url="thundercats.jpg" caption="Ni La Espada del Augurio (Thundercats) podía superar el poder que mi padre parecía tener en ese momento." >}}

Quise saber cómo mi padre había aprendido a decirle cosas al computador, y entonces me explicó que él sabía **programar**, y que por eso podía indicarle al computador qué hacer en un lenguaje que la máquina entendiera.

En ese entonces, una idea fantástica cruzó mi mente. Yo ya conocía los videojuegos y estaba maravillado con ellos. Por tanto, me atreví a preguntar:

> «Si aprendo a programar, ¿también voy a poder hacer juegos?»

> «Sí, hijo, los juegos también son programas.»

> «Entonces papá, ¡Yo quiero aprender a programar!».

Desde ese día, la gran admiración que sentía por los pocos videojuegos que conocía fue mi principal motivación para aprender a programar. Primero fue el lenguaje «Basic», ya fuera con la guía de mi padre o copiando ejemplos de revistas que me traía.

Al cabo de algunos meses me di cuenta que habían muchos juegos del Atari que parecían hacer cosas que no se podían hacer con Basic. Entonces, mi padre me explicó que habían muchos otros lenguajes de programación. Algunos eran más fáciles y otros más complicados. Algunos estaban pensados para hacer ciertas cosas más simples, y otros estaban diseñados para hacer cosas más poderosas, aunque en general eran más complicados.

Motivado por el desafío, aprendí «Assembler» (Ensamblador en inglés), «Pascal» y «C», estos últimos ya en un poderoso (para la época) PC 386 de 40MHz. La libertad que sentía escribiendo cientos de líneas de código y la satisfacción que tenía disfrutando al ver los resultados era casi enviciante.

{{< image url="prog_assembler.png" caption="En retrospectiva, tengo que haber estado MUY motivado para haber aprendido Assembler de Atari, lo que se ve en la imágen." >}}

Al salir del colegio ya había escrito varias decenas de miles de líneas de código en unos cinco lenguajes de programación, y había producido unos diez pequeños videojuegos, además de diversas pequeñas aplicaciones que usaba para aprender.

Y todo había comenzado con un momento inspirador: esas dos líneas de programación y la magia de verlas funcionar.

## ¿Qué es programar?

Para muchos, la programación es una especie de ciencia oculta, algo así como la matriz de la película «The Matrix», algo que sólo los elegidos como Neo (el protagonista) pueden entender y dominar.

{{< image url="prog_matrix2.png" caption="Muchos piensan que programar es tan difícil como dominar la matriz de la película «The Matrix»" >}}

Afortunadamente, la programación es más fácil que eso.

En palabras simples, **programar es darle instrucciones a un computador en un lenguaje que la máquina entienda**.

Todo lo que funciona en los computadores, desde lo más básico a lo más complejo, es un programa. Y todos los programas fueron programados por alguien, usando algún lenguaje de programación.

Hay muchos (cientos) de lenguajes de programación, y varias maneras de clasificarlos. Lenguajes de alto o bajo nivel, lenguajes funcionales, lenguajes estructurados o lenguajes orientados a objetos, son algunos de los grupos que se usan para clasificar los lenguaje.

Algnos lenguajes de programación son muy simples, pues fueron creados para solucionar tareas muy básicas, y cualquiera puede aprenderlos en algunos minutos. Otros, por el contrario, son bastante más complejos y requieren que una persona se entrene y especialice durante un período más largo de tiempo para conseguir dominarlos.

{{< image url="prog_blockly.jpg" caption="Blockly es un lenguaje de programación muy visual y fácil de aprender, Su nombre viene del hecho que funciona ensamblando bloques (blocks en inglés)." >}}

La mayoría de los lenguajes fue creado con un propósito en particular, por ejemplo, resolver problemas matemáticos, programar sistemas muy complejos, o enseñar progamación a niños.

También hay lenguajes que surgen de la necesidad de solucionar una carencia o un problema específico de algún otro lenguaje de programación, en cuyo caso el nuevo lenguaje es una evolución del anterior. Por ejemplo, el lenguaje C++, uno de los más poderosos y populares, es una evolución del lenguaje C, también muy popular. Del mismo modo, C++ también tuvo «descendientes», como el lenguaje C#, que es muy usado hoy en día.

Y Ojo, no estamos hablando sólo de programas en computadores como el «PC» o el «Mac».

La programación está presente en cualquier dispositivo electrónico «inteligente», pues todo lo que funciona en ellos también es un programa. Desde una lavadora programable hasta un refrigerador de última generación, desde una calculadora científica hasta un telescopio moderno de un observatorio espacial. Desde un teléfono móvil hasta una consola de videojuegos.

Todos fueron programados usando algún lenguaje de programación.

## Aprendiendo a programar con una tortuga

Uno de los lenguajes de programación más didácticos que existe es **Logo**. Creado hace al rededor de medio siglo y actualmente mantenido por Logo Foundation ([sitio web](http://el.media.mit.edu/logo-foundation/)), una fundación sin fines de lucro, hoy en día aún es usado para mostrarle el mundo de la programación a niños en todo el mundo.

En Logo, el programador le da instrucciones a una tortuga que va dejando un rastro (una línea) a medida que avanza. En su versión más básica, las instrucciones son pocas y muy básicas, y permiten indicarle que avance o retroceda cierta distancia, y también que gire a la derecha o a la izquierda una cierta cantidad de grados.

Por ejemplo, el siguiente programa en Logo dibuja un cuadrado en la pantalla del computador, en que cada lado tiene 100 unidades de largo:

{{< image-r url="proglogo_square.png" caption="" >}}

{% highlight lisp %}
forward 100
right 90
forward 100
right 90
forward 100
right 90
forward 100
{% endhighlight %}

Como se puede ver, el programa consiste exclusivamente en darle las instrucciones «forward» (avanzar en inglés) y «right» (derecha en inglés). Primero se le dice a la tortuga que debe avanzar 100 unidades, luego girar a la derecha 90 grados, después avanzar otras 100 unidades, etc., hasta completar cuatro trazos que forman un cuadrado.

El intérprete de logo (un programa que entiende Logo y ejecuta las instrucciones) obedece todos los pasos uno tras otro, desde el primero al último. Como muchos otros lenguajes de programación, Logo también tiene instrucciones especiales que permiten repetir un grupo de pasos. Por ejemplo, el programa para dibujar un cuadrado tambien se puede escribir de esta manera más simple:


{% highlight lisp %}
repeat 4 [
  forward 100
  right 90 
]
{% endhighlight %}

Cualquiera podría decir que Logo es un «lenguaje de juguete», y que sólo sirve para dibujar cosas simples. Sin embargo, con algo de imaginación, y combinando las simples instrucciones de la manera adecuada, se pueden dibujar verdaderas maravillas. Por ejemplo, el siguiente programa dibuja una estrella y tiene tan sólo dos instrucciones más que el que traza un cuadrado, además de una instrucción adicional al principio para borrar el dibujo anterior («clearscreen» que significa limpiar pantalla en inglés).

{{< image-r url="proglogo_star.png" caption="" >}}

{% highlight lisp %}
clearscreen  
repeat 5 [  
  forward 50
  left 72  
  forward 50  
  right 144  
]
{% endhighlight %}

Escribiendo programas más largos, con Logo se pueden hacer cosas bastante impresionantes, como se puede ver en las siguientes imágenes:

{{< image url="proglogo_complex.png" caption="Programar en Logo también nos permite realizar dibujos más complejos" >}}

Los invito a animarse y probar los pequeños programas mostrados más arriba o a probar los que ustedes quieran. Hay muchos intérpretes de Logo que se pueden usar directamente en los sitios web, como el de Calormen ([sitio web](http://www.calormen.com/jslogo/)) o el de Transum ([sitio web](http://www.transum.org/software/Logo/)). En ellos cualquiera puede entrar y empezar a programar en Logo inmediatamente, ¡Inténtenlo y ya estarán empezando a programar!

## El Lenguaje del Futuro

Hace cientos de años, leer y escribir estaba reservado para una élite culta, pues la gran mayoría de la población no necesitaba ser letrada para poder desempeñar sus ocupaciones. Hoy en día, sin embargo, leer y escribir es muy importante para desempeñarse en muchas profesiones, y aprender un lenguaje escrito es parte fundamental de los programas de estudios públicos en todos los países.

Del mismo modo, somos muchos los que creemos que **programar será clave para las futuras generaciones, ya que la programación computacional será «el lenguaje del futuro»**. En diez, veinte, treinta o cincuenta años más, nuestros hijos y nietos se verán enfrentados a desafíos que tal vez ahora no podemos imaginar, pero que es muy probable que necesiten de la tecnología para poder abordarlos.

{{< image url="ironman_screenshot.jpg" caption="Muchas películas, como la popular Ironman, muestran una profunda relación entre hombre y computadora. Aunque no exactamente como en las películas, muchos creemos que así será el futuro de nuestros hijos o nietos." >}}

Entonces, saber programar, entender cómo darle instrucciones a una máquina, y cómo aprovechar ese potencial para su vida profesional e incluso personal, será fundamental para esas futuras generaciones.

**Hoy es el momento para empezar a darle esas herramientas a nuestros niños.**

Por eso han surgido en muchos países voces que abogan para que la programación se vuelva parte de los programas educacionales de las escuelas y colegios. Organizaciones sin fines de lucro, Universidades, personas naturales, fundaciones, incluso algunos gobiernos, están levantando la voz al respecto.

## La Hora del Código

En este contexto, se formó una iniciativa llamada **«Hour of Code»** (Hora del Código en inglés), liderada por Code.org ([sitio web](http://code.org/)). El objetivo de la iniciativa es generar un movimiento a nivel global para que, durante una misma semana, **la mayor cantidad de niños aprendan a programar durante al menos una hora**.

Así, inspirados por esa experiencia, muchos pequeños se motivarán y comenzarán a desarrollar su gusto por la tecnología y a buscar nuevas maneras de aprender y desarrollarse.

{{< image url="prog_hourofcode.jpg" caption="El alcance de Hour of Code ha sido impresionante, y ha conseguido el apoyo mediático de importantes figuras internacionales, incluyendo artistas, políticos, deportistas y exitosos emprendedores." >}}

El año pasado, Hour of Code ([sitio web](https://hourofcode.com/)) consiguió que más de diez millones de niños participaran en la iniciativa, y a lo largo del año más de cien millones de niños ya han probado las lecciones y tutoriales que se encuentran en su sitio web. Por supuesto, este año la iniciativa se repetirá, con una meta aún más ambiciosa y con un alcance mediático mucho mayor.

En Chile, otra organización sin fines de lucro, Kodea.org (sitio web), tomó el liderazgo hace unos meses y comenzó a convocar a diversas instituciones académicas, privadas y públicas para poder organizar **«La Hora del Código Chile»** ([sitio web](http://horadelcodigo.cl/)), coordinando con el resto de los países de latinoamérica y bajo el alero y apoyo del evento global.

Así, durante la próxima semana (del 5 al 11 de Octubre), una gran cantidad de colegios y escuelas de todo el país se sumarán a la actividad y sus alumnos se sentarán a programar durante una hora. Al momento de escribir este artículo, ya hay 150 instituciones inscritas ([ver listado](http://horadelcodigo.cl/participantes/)), y seguramente durante el próximo par de días la cifra llegará más allá de las doscientas.

{{< image url="prog_horadelcodigocl.jpg" caption="Chile tendrá su propia Hora del Código del 5 al 11 de Octubre, para que los niños chilenos aprendan a programar." >}}

Obviamente, ninguno de los niños o adultos que por primera vez se acerque a la programación durante La Hora del Código obtendrá, durante esa hora, los conocimientos suficientes para ser un programador profesional, crear aplicaciones o videojuegos. Pero tampoco es el objetivo.

**El objetivo es darles la oportunidad de que tengan un momento de inspiración**, como el que yo tuve hace unos treinta años gracias a mi padre.

El objetivo es que conozcan lo que es programar, que descubran que los computadores entienden órdenes si se usan las instrucciones apropiadas. Muchos sentirán que es interesante, tal vez entretenido, pero no llegará mucho más allá. Otros muchos, serán inspirados por esa experiencia, y despertará en ellos un hambre por aprender más y hacer cosas más complejas.

Pero independiente de cuánto profundicen, al menos todos los que participen sabrán «¿Qué es programar?», y aunque haya sido sólo una pequeña actividad lúdica, esa pequeña semilla hará la diferencia en unos años más.

Los invito a todos a que participen en La Hora del Código. Si tienen hijos, compartan con ellos el sitio web e incentívenlos a participar. Si son profesores, ojalá puedan realizar una hora de código con sus alumnos. Y de todas maneras, pueden apoyar la campaña contándoles a amigos y conocidos y difundiendo en sus redes sociales.

Todos podemos ser parte. Todo podemos poner un granito de arena para darle a nuestros niños las herramientas que necesitarán en el futuro.

**Porque su futuro es nuestra responsabilidad.**

*Más información de como participar en La Hora del Código Chile en su [sitio web](http://horadelcodigo.cl/).*

