



Llevo ya varios meses avanzando en diferentes cursos de IA, pero se me ha hecho difícil mantener un ritmo constante. Por una parte, el material de estudio es a veces denso y me cuesta concentrarme y mantener el foco. También ocurre que estoy siempre rodeado de distracciones cuando intento ponerme a estudiar en casa, desde los niños, las responsabilidades del hogar, etc.

Pero lo que más me cuesta es, sin duda, el estar tratando de aprender conocimientos sin usarlos en algo concreto. Es sabido que el aprendizaje es más efectivo cuando va acompañado de trabajo práctico. Y me ha costado encontrar aplicaciones sencillas que se adapten al bajo nivel de conocimiento y experiencia en el área que aún tengo, y que me motiven lo suficiente como para seguir aprendiendo a buen ritmo.

Al principio probé con [Mi Detector de Gatos]({ post_url 2023-09-15-mi-detector-de-gatos }), pero eso fue más una prueba entretenida y no tanto algo práctico e útil. He pensado en desafíos más complejos, pero no se me ocurre cómo abordarlos, especialmente porque no he aprendido suficiente como para entender realmente cómo proceder.

{% include image url="learnai/catdetector_huggingface.jpg" caption="Mi Detector de Gatos, mi primer proyecto de IA" %}

Esta semana, sin embargo, se me ocurrió una aplicación práctica y que me motiva bastante: escribir este blog. Pensé que escribir estos artículos muchas veces se me hace pesado porque no sólo es tener las ideas y escribir el texto, si no que también me gusta traducirlos a inglés y buscar imágenes que acompañen.

¿Por qué no usar IA y automatizar esas etapas más tediosas del proceso? 

Llego tarde a la fiesta, lo sé. Conozco varios compañeros de trabajo que empezaron a probar ChatGPT y otras IA tan pronto aparecieron. Yo, por el contrario, fui escéptico. Probé un poco la versión web de ChatGPT y de Bard, pero nunca los usé de manera cotidiana. Los veía más como un juguete o un buscador con superpoderes, y no tanto como una pieza que pudiera usar en la construcción de mis propias ideas.

Pero más vale tarde que nunca. Entusiasmado con el nuevo desafío, decidí intentarlo y ver qué se podía hacer.

## Usando un LLM para traducir artículos

[Bard](https://bard.google.com/chat) y [ChatGPT](https://chat.openai.com/) son dos servicios desarrollados por Google y OpenAI, respectivamente. Ambos usan un tipo de modelo de inteligencia artificial conocido como LLM (gran modelo de lenguaje). En esencia, son modelos de IA increíblemente grandes, con miles de millones de parámetros, que reciben una entrada de texto y son capaces de generar texto como respuesta.

Lo primero que hice fue buscar cuáles otros servicios y modelos había, ya que sé que Bard y ChatGPT no son los únicos sino sólo los que yo más conocía. Miré algunos videos y tutoriales que hablaban de las diferencias entre los diferentes modelos que usa cada uno, y las versiones con las que se han ido actualizando. 

Por ejemplo, cuando ChatGPT se hizo popular el año pasado, usaba el modelo *gpt-3.5* y se podía pagar por tener acceso al modelo *gpt-4.0*, que daba mejores respuestas. Hace unas semanas OpenAI lanzó el nuevo modelo *gpt-4.0-turbo* que aparentemente es aún más poderoso. Por otro lado, Google anunció recientemente sus nuevos modelos *Gemini*, habilitando desde ya el acceso a su modelo *gemini-pro* que, según ellos, tenía un desempeño comparable a *gpt-4.0*.

<<< imagen de bard vs chatgpt >>>

Usando la página web de cada uno, probé traducir textos de artículos pasados que ya había traducido yo manualmente, para comparar cómo era el resultado. Mi objetivo era no solo traducir el texto, sino que además poder pasar el texto original de cada artículo, escrito usando el lenguaje Markdown para definir el formato, las imágenes, los enlaces, etc., y que el proceso me arrojara como resultado el texto traducido pero manteniendo el formato, enlaces, etc.

En general, pude comprobar que ChatGPT me arrojaba mejores resultados que Bard (¡lo siento Google!), pero de todas maneras no conseguía algo que funcionara como yo esperaba.





## Jugando con Dall-E







