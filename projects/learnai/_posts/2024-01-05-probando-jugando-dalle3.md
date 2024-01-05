---
title: Probando y jugando con DALL-E 3
image: images/learnai/dalle3.jpg
author: jpl
lang: es
translation_url: testing-playing-dalle3.html
description: Conectarse al API de DALL-E 3 y jugar creando imágenes con mis hijos.
featured: true
---

Hace pocos meses fue lanzado [DALL-E 3](https://openai.com/dall-e-3), la tercera versión del generador de imágenes a partir de texto desarrollado por [OpenAI](https://openai.com/). Fue promocionado como una gran mejora respecto de su antecesor *DALL-E 2*, y por supuesto tenía curiosidad de ver qué tan versátil podía ser.

Hace más de un año yo había probado la versión original de *DALL-E*, cuyos resultados eran sin duda interesantes, pero me había quedado con la impresión que estaba lejos de ser una herramienta que pudiera ser utilizada de manera productiva.

{% include image url="learnai/dalle3.jpg" caption="DALL-E 3, según el propio DALL-E 3" %}

La semana pasada, buscando imágenes para el [artículo del juego de mi hijo en Python]({ post_url 2023-12-30-papa-hice-juego-python }), pensé que tal vez podría generarlas usando *DALL-E 3* y así aprovechaba de probarlo.

Me metí al sitio web y descubrí que para usarlo tenía que, o estar suscrito al servicio Plus de OpenAI (por 20 dólares mensuales), o usar el API directamente y pagar por cada uso. Quería hacer sólo algunas pruebas, así que me decidí por la segunda opción y me embarqué en el nuevo desafío.

## Conectando al API de DALL-E

Lo primero que tuve que hacer es crear una cuenta de desarrollador de OpenAI, para tener acceso al API. Luego, cargué 10 dólares de créditos a la cuenta, para poder pagar por las solicitudes que enviaría a través del API. Ambos procesos fueron sencillos y no tuve mayor inconveniente.

Una vez hecho eso, busqué en la documentación de OpenAI cómo conectarse al API, y también busqué ejemplos en Google. Curiosamente, preguntarle a Chat-GPT no fue de mucha utilidad porque me salió información de la versión anterior del API, que fue actualizada cuando OpenAI lanzó la última versión de sus servicios.

El código en Python para invocar al API y obtener una imagen resultó ser muy simple. Se instancia el módulo de OpenAI para Python, y se llama a la función *generate* con los parámetros del texto, el modelo, tamaño, calidad y estilo. El API entrega como respuesta un URL del cuál se puede descargar la imagen por una cantidad de tiempo limitada.

{% highlight python %}
from openai import OpenAI
client = OpenAI(api_key="OPENAI_API_KEY")
response = client.images.generate(
    prompt="A cat coding in Python",
    model="dall-e-3",
    size="1024x1024",
    quality="standard",
    style="vivid"
)
print(response.data[0].url)
{% endhighlight %}

Le pedí a *DALL-E 3* un gato escribiendo código en Python, ya que mi motivo original para usar esta API era buscar imágenes para el artículo que estaba escribiendo la semana pasada. A continuación, está la imagen que me generó. Me gustó tanto que, salvo una pequeña modificación que hice a mano en *Paint.Net*, la usé tal cual para el artículo.

{% include image url="learnai/dalle3-cat-coding-python-vivid.jpg" caption="Imagen generada con DALL-E 3 al pedir un gato escribiendo código en Python" %}

Fue tan bueno el resultado que, por supuesto, quise experimentar un poco más con los distintos parámetros que existen. Por ejemplo, el estilo puede ser "vivid" o "natural", y la calidad puede ser "standard" o "hd". La primera imagen generada había sido "vivid", por lo que quise probar el otro estilo. Además, para ahorrarme un paso, busqué y escribí una función que descargue la imagen y la guarde en un archivo.

{% highlight python %}
def DownloadImage(url, filename):
  with open(filename, 'wb') as handle:
    response = requests.get(url, stream=True)
    if not response.ok:
      print(response)
    for block in response.iter_content(1024):
      if not block:
        break
      handle.write(block)
{% endhighlight %}

Efectivamente, la imagen generada fue más fotorrealista, e igual de impresionante como resultado.

{% include image url="learnai/dalle3-cat-coding-python-natural.jpg" caption="Imagen generada con DALL-E 3, ahora con estilo natural" %}

## Jugando con DALL-E 3

No pude resistirme, y llamé a mis hijos Santi (12) y Sami (9) y les dije entusiasmado:

> ¡Niños, miren esta imagen de gato en un computador! ¡La hizo una inteligencia artificial! ¿Quieren probar pedir algo ustedes?

> ¡Qué lindo el gatito!

> ¡Yo quiero probar!

> ¡Yo también!

> ¡Yo tengo una idea!

> ¿Puedo pedir cualquier cosa?

> ¡Yo quiero pedir primero!

Me costó un par de minutos que bajaran el entusiasmo y entendieran que debían decirme una frase simple que la inteligencia artificial convertiría en imagen. Para que entendieran mejor, probé yo mismo una última vez (y bueno, ¡porque yo también tenía muchas ganas de seguir experimentando!)

Pedí un pez jugando fútbol, y obtuve una imagen que nos dejó impresionados a los tres:

{% include image url="learnai/dalle3-fish-playing-soccer.jpg" caption="Un pez jugando fútbol (standard, vivid)" %}

Ahí si mis hijos entendieron, y empezaron a llover los requerimientos. Como cada imagen gasta créditos, tampoco podía dejarlos probar sin límite, pero estuvimos un buen rato divirtiéndonos con *DALL-E 3* y sólo gastamos un par de dólares en total.

{% include image url="learnai/dalle3-cat-playing-soccer.jpg" caption="Un gato jugando fútbol (standard, vivid)" %}

{% include image url="learnai/dalle3-fish-eating-sushi-natural.jpg" caption="Un pez comiendo sushi (standard, natural)" %}

{% include image url="learnai/dalle3-fish-eating-sushi-vivid.jpg" caption="Un pez comiendo sushi (standard, vivid)" %}

{% include image url="learnai/dalle3-cat-in-cat-house.jpg" caption="Un gato en una casa de gatos (standard, vivid)" %}

{% include image url="learnai/dalle3-cat-vaporeon-costume.jpg" caption="Un gato disfrazado de Pokemon Vaporeon (standard, natural)" %}

También quisimos probar la calidad "hd" que, aunque gasta más créditos, genera imágenes mucho más detalladas. Repetimos entonces algunos de los textos para ver el resultado en "hd":

{% include image url="learnai/dalle3-cat-playing-soccer-hd.jpg" caption="Un gato jugando fútbol (hd, vivid)" %}

{% include image url="learnai/dalle3-cat-vaporeon-costume-hd.jpg" caption="Un gato disfrazado de Vaporeon (hd, natural)" %}

Algo que yo había leído es que se podían usar textos más complejos para obtener imágenes más detalladas. Lo probé pidiendo "un pez gigante comiéndose un gato, mientras el gato sonríe, con una montaña detrás del pez y un océano". El resultado, sin embargo, no fue el que esperábamos. Después probamos una idea similar, pero más simple, y el resultado tuvo más sentido a nuestro parecer:

{% include image url="learnai/dalle3-fish-eating-cat-complex-prompt.jpg" caption="Un texto más largo, con un resultado que no resultó ser tan bueno" %}

{% include image url="learnai/dalle3-fish-eating-cat-simple-prompt.jpg" caption="Un texto más simple, con un mejor resultado" %}

Habiendo resuelto mi necesidad inmediata (la imagen para el artículo) y después de jugar generando imágenes con mis hijos, me quedé pensando en lo poco que entiendo de cómo funciona esta tecnología internamente.

En el [curso de AI que estoy siguiendo](https://course.fast.ai/), los últimos capítulos hablan de una técnica llamada "stable diffusion" que está relacionada a la generación de imágenes. No he llegado a ese punto aún, por lo que no conozco cómo funciona, ni estoy seguro si DALL-E usa esa técnica o hay otras más avanzadas, pero creo que vale la pena averiguarlo.

*¿Qué experiencia tienen con DALL-E 3? ¿Han probado otras herramientas similares como Midjourney?*
