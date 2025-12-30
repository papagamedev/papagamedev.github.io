---
title: Mi detector de gatos
date: 2023-09-15
image: /images/learnai/ori_y_gateto.jpg
author: jpl
lang: es
categories: ["learnai"]
translationKey: mi-detector-de-gatos
description: Construyendo un modelo de IA para reconocer fotos de mis dos gatos.
featured: true
---

En el [curso de IA de fast.ai](https://course.fast.ai/) que estoy haciendo, se insiste constantemente en la idea de que los estudiantes hagan pequeños proyectos personales. Es una excelente idea, ya que eso permite poner en práctica lo aprendido y ayuda a desarrollar la perspectiva que se necesita para abordar este tipo de problemas.

El desafío en esta ocasión ([del capítulo 2 del curso](https://github.com/fastai/fastbook/blob/master/02_production.ipynb)) consiste en construir un pequeño modelo de reconocimiento de imágenes y publicarlo en la plataforma [Hugging Face](https://huggingface.co/), una comunidad que reúne modelos, sets de datos, y muchos experimentos de la más variada índole.

Como el tema era libre, y a mi me gustan los gatos, decidí que mi primer proyecto personal sería un modelo que pudiera distinguir entre mis dos gatos: Ori y Gateto.

{{< image url="learnai/ori_y_gateto.jpg" caption="Mis dos gatos: Gateto a la izquierda y Ori a la derecha." >}}

## Obteniendo data

Como aprendí en el curso, para hacer un proyecto de AI se necesita tener datos con los que "entrenar" o "ajustar" (fine tune, en inglés) al modelo para que haga lo que uno espera que haga. Por ejemplo, para que un modelo de reconocimiento de imágenes pueda reconocer a mis gatos, necesito alimentarlo con muchas fotos de mis gatos para que "aprenda" a reconocerlos.

Entonces, mi primer desafío consistió en navegar los cientos de fotos que tengo guardadas y buscar en ellas fotos de mis gatos. Muchas de ellas mostraban a los gatos de lejos, o a veces ambos en la misma foto, por lo que tuve que recortar muchas de ellas para que me sirvieran.

Después de algunas horas de trabajo y bastante paciencia, pude tener dos carpetas en mi computador, que tengo sincronizadas con Google Drive: una con alrededor de 50 fotos de Ori y otra con más de 100 fotos de Gateto. Ori está con nosotros hace unos dos años, mientras que Gateto lleva bastante más tiempo con nosotros, y por eso había más fotos.

¿Por qué sincronicé las fotos a mi Google Drive? Porque la herramienta que usé para el siguiente paso del proceso se puede conectar fácilmente con Drive para tomar desde ahí las fotos.

{{< image url="learnai/catdetector_pictures.jpg" caption="Decenas de fotos de mis gatos, subidas en Google Drive" >}}

## Entrenando al modelo

Hay muchas herramientas para trabjar con modelos de AI. Las más populares actualmente son librerías del lenguaje Python, con las que uno puede ejecutar comandos simples que permiten cargar datos, entrenar modelos y usarlos.

Además, hay plataformas web que integran una herramienta llamada "Jupyter notebooks", que permiten escribir código Python y ejecutarlo en ambientes virtuales "en la nube". En el curso explican bastante bien cómo usarlas, y la verdad me sorprendió lo simple que es aprender lo mínimo como para poder aprovecharlos. La que usé para este proyecto es [Google Colab](https://colab.research.google.com/), aunque también probé [Kaggle](https://www.kaggle.com/).

En Google Colab, creé un nuevo Notebook, lo conecté con mi Google Drive, y fui escribiendo código según lo aprendido en el curso. Primero, actualizar los paquetes de Python y cargar las librerías de FastAI que permiten hacer el entrenamiento y uso del modelo de AI.

```python
!pip install --upgrade ipywidgets
!pip install --upgrade fastai
!pip install --upgrade fastbook

from fastai.vision.all import *
from fastai.vision.widgets import *
```

Luego, cargar los nombres de los archivos y limpiar cualquier imagen que el modelo no pueda cargar. Esto me ocurrió, por ejemplo, con fotos que había tomado con mi celular y habían sido grabadas en formato HEIC (High Eficiency Image, una especie de super-JPG), que la librería de Fast.Ai no lee. Luego las convertí localmente a JPG y las volví a subir para que funcionaran bien.

```python
path="drive/MyDrive/ColabNotebooks/Gatos"
fns = get_image_files(path)

failed = verify_images(fns)
failed.map(Path.unlink)
```

A continuación hay que cargar la data para que el modelo la tenga disponible. Se usa "get_image_files" para obtener todos los archivos en la ruta definida, "RandomSplitter" para separar un set de validación de 20% (y dejar el 80% de las imágenes para el entrenamiento).

También se usa "Resize" para escalar todas las imagenes a cuadrados de 192 pixeles cortando lo que sobre vertical u horizontalmente. Originalmente había usado "RandomResizeCrop" como se sugiere en el curso, pero tuve peores resultados que con "Resize", aparentemente porque tengo pocas imágenes de Ori comparado con lo que tengo de Gateto.

```python
dls = DataBlock(
    blocks=(ImageBlock, CategoryBlock),
    get_items=get_image_files,
    splitter=RandomSplitter(valid_pct=0.2, seed=42),
    get_y=parent_label,
    item_tfms=[Resize(192, method='crop')]
).dataloaders(path, bs=32)
dls.show_batch(max_n=6)
```

{{< image url="learnai/catdetector_datablock.jpg" caption="El modelo carga las imágenes de los gatos y las identifica correctamente según el nombre de la carpeta." >}}

El siguiente paso es ejecutar el modelo de reconocimiento de imágenes para entrenarlo con las imágenes de la data.

```python
learn = vision_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(3)
```

epoch|train_loss|valid_loss|error_rate|time
---|---|---|---|---
0|0.305931|0.076086|0.025000|00:30
1|0.198210|0.126100|0.075000|00:29
2|0.145521|0.143053|0.075000|00:29

El proceso muestra un error de 7.5% después de terminar las 3 fases de entrenamiento. La librería de fast.ai también incluye una manera de interpretar los resultados y poder entender, por ejemplo, cuáles son los errores detectados que no pudieron ser resueltos.

```python
interp = ClassificationInterpretation.from_learner(learn)
interp.plot_confusion_matrix()
```

{{< image url="learnai/catdetector_confussionmatrix.png" caption="La Matriz de Confusión muestra cuántas fotos de cada tipo fueron incorrectamente clasificas con la versión entrenada del modelo. En este caso, 3 fotos de Gateto fueron detectadas como Ori incorrectamente." >}}

Hice múltiples pruebas, las primeras con menos imágenes, y luego fui agregando más para mejorar la precisión del reconocimiento. Lo mejor que pude conseguir fue un 7.5% de eror, y según lo que he aprendido, creo que la única manera de mejorar esto es tener más fotos, especialmente de Ori. 

```python
interp.plot_top_losses(5, nrows=1)
```

{{< image url="learnai/catdetector_toplosses.jpg" caption="La herramienta tambien permite ver exactamente cuáles son las imágenes que no son correctamente reconocidas." >}}

Tal vez al ir avanzando en el curso aprenda otras técnicas que me permitan mejorarlo. De todas maneras, con la precisión actual sentí que era suficiente para un primer proyecto personal, por lo que seguí con la siguiente fase que es exportar el modelo de datos para luego poder usarlo para detectar a mis gatos:

`python
learn.export('model_ori_gateto.pkl')
```

## Publicando el detector de gatos

El último desafío del proyecto es publicar el modelo para poder "usarlo". En este punto, y siguiendo las recomendaciones del curso, leí [este tutorial](https://www.tanishq.ai/blog/gradio_hf_spaces_tutorial) (en inglés) que muestra como usar la plataforma web [Hugging Face](https://huggingface.co/).

Creé una cuenta nueva, primero una personal y luego una para PapaGameDev. A continuación creé un nuevo "Space" en la plataforma y agregué los archivos que el tutorial indicaba, usando este código para el archivo principal en Python.

```python
import gradio as gr
from fastai.vision.all import *
import skimage
learn = load_learner('model_ori_gateto.pkl')
labels = learn.dls.vocab
def predict(img):
    img = PILImage.create(img)
    pred,pred_idx,probs = learn.predict(img)
    return {labels[i]: float(probs[i]) for i in range(len(labels))}

title = "Mi detector de gatos"
description = "Un modelo de prueba para aprender, siguiendo las instrucciones de la lección 2 del curso de fast.ai. El modelo detecta si la foto es de uno de mis dos gatos."
examples = ['ori_ejemplo.jpg', 'gateto_ejemplo.jpg']
interpretation='default'
enable_queue=True

gr.Interface(fn=predict,inputs=gr.inputs.Image(shape=(512, 512)),outputs=gr.outputs.Label(num_top_classes=3),title=title,description=description,examples=examples,interpretation=interpretation,enable_queue=enable_queue).launch()
```

El código usa una herramienta llamada Gradio para usar modelos ya entrenados en una interfaz web muy simple que permite generar un formulario, con descripción, ejemplos y entregar resultados.

En este sitio web se puede ver funcionando el modelo de [Mi Detector de Gatos](https://huggingface.co/spaces/papagamedev/mycatdetector). Hay dos imágenes de ejemplo, una de cada uno de mis gatos, y las reconoce correctamente. 

{{< image url="learnai/catdetector_huggingface.jpg" caption="¡Mi detector de gatos en acción!" >}}

Lo he usado mostrándoselo a mi familia, sacándole fotos a los gatos y usando esas nuevas fotos con el modelo, ¡y funciona perfecto! Así que me doy por satisfecho con el resultado, y cierro con esto mi primer proyecto personal de AI. 

Seguro que alguien con más experiencia encuentra fallos en lo que hice y a lo mejor me puede ayudar a aprender algo nuevo y mejorarlo. Pero por lo pronto, seguiré con el curso aprendiendo y practicando a mi ritmo.

*¿Qué opinan de este primer proyecto? ¿Han hecho algo similar o se atreven a probar por su cuenta?*

