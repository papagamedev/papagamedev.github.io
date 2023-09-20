---
title: My Cat Detector
image: learnai/ori_y_gateto.jpg
author: jpl
lang: en
translation_url: mi-detector-de-gatos.html
description: Building an AI model to recognize pictures of my two cats.
---

In the [fast.ai AI course](https://course.fast.ai/) I'm taking, there's a constant emphasis on encouraging students to undertake small personal projects. It's an excellent idea as it allows one to apply what they've learned and develop the perspective needed to tackle these types of problems.

The challenge at hand ([from chapter 2 of the course](https://github.com/fastai/fastbook/blob/master/02_production.ipynb)) involves building a small image recognition model and publishing it on the [Hugging Face](https://huggingface.co/) platform, a community that gathers various models, datasets, and experiments.

As the topic was open-ended, and since I like cats, I decided that my first personal project would be a model capable of distinguishing between my two cats: Ori and Gateto.

{% include image url="learnai/ori_y_gateto.jpg" caption="My two cats: Gateto on the left and Ori on the right." %}

## Obtaining Data

As I learned in the course, to create an AI project, you need data to "train" or "fine-tune" the model so it can perform the desired task. For instance, to have an image recognition model recognize my cats, I needed to feed it many photos of my cats so it could "learn" to recognize them.

So, my first challenge was to browse through the hundreds of photos I had saved and look for pictures of my cats. Many of them showed the cats from a distance, or sometimes both of them were in the same photo, so I had to crop many of them to make them usable.

After a few hours of work and quite a bit of patience, I ended up with two folders on my computer, which I synchronized with Google Drive: one with around 50 photos of Ori and another with over 100 photos of Gateto. Ori has been with us for about two years, while Gateto has been with us for much longer, which is why there were more photos of him.

Why did I sync the photos to my Google Drive? Because the tool I used for the next step of the process can easily connect with Drive to access the photos from there.

{% include image url="learnai/catdetector_pictures.jpg" caption="Dozens of my cats' photos uploaded to Google Drive." %}

## Training the Model

There are many tools for working with AI models. Currently, the most popular ones are Python libraries that allow you to execute simple commands for loading data, training models, and using them.

Additionally, there are web platforms that integrate a tool called "Jupyter notebooks", which enables you to write Python code and execute it in virtual environments "in the cloud". The course explains quite well how to use them, and I was genuinely surprised by how easy it is to learn the minimum to make use of them. I used [Google Colab](https://colab.research.google.com/) for this project, although I also tried [Kaggle](https://www.kaggle.com/).

In Google Colab, I created a new Notebook, connected it to my Google Drive, and wrote code based on what I had learned in the course. First, I updated the Python packages and loaded the FastAI libraries that facilitate model training and usage.

{% highlight python %}
!pip install --upgrade ipywidgets
!pip install --upgrade fastai
!pip install --upgrade fastbook

from fastai.vision.all import *
from fastai.vision.widgets import *
{% endhighlight %}

Next, I loaded the file names and cleaned up any images that the model couldn't read. This happened with some photos I had taken with my phone, which were saved in HEIC (High Efficiency Image, a kind of super-JPG) format, which the FastAI library doesn't support. So, I converted them to JPG locally and uploaded them again to make them work.

{% highlight python %}
path="drive/MyDrive/ColabNotebooks/Gatos"
fns = get_image_files(path)

failed = verify_images(fns)
failed.map(Path.unlink)
{% endhighlight %}

Then, you need to load the data so that the model can access it. I used "get_image_files" to retrieve all the files in the defined path, "RandomSplitter" to separate a validation set of 20% (leaving 80% of the images for training).

I also used "Resize" to scale all the images to 192-pixel squares, cropping any excess vertically or horizontally. Originally, I had used "RandomResizeCrop" as suggested in the course, but I got worse results than with "Resize," apparently because I had fewer images of Ori compared to Gateto.

{% highlight python %}
dls = DataBlock(
    blocks=(ImageBlock, CategoryBlock),
    get_items=get_image_files,
    splitter=RandomSplitter(valid_pct=0.2, seed=42),
    get_y=parent_label,
    item_tfms=[Resize(192, method='crop')]
).dataloaders(path, bs=32)
dls.show_batch(max_n=6)
{% endhighlight %}

{% include image url="learnai/catdetector_datablock.jpg" caption="The model loads cat images and correctly identifies them based on the folder name." %}

The next step is to run the image recognition model to train it with the data images.

{% highlight python %}
learn = vision_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(3)
{% endhighlight %}

epoch|train_loss|valid_loss|error_rate|time
---|---|---|---|---
0|0.305931|0.076086|0.025000|00:30
1|0.198210|0.126100|0.075000|00:29
2|0.145521|0.143053|0.075000|00:29

The process shows a 7.5% error rate after completing the 3 training phases. The fast.ai library also includes a way to interpret the results and understand, for example, which errors were detected but couldn't be resolved.

{% highlight python %}
interp = ClassificationInterpretation.from_learner(learn)
interp.plot_confusion_matrix()
{% endhighlight %}

{% include image url="learnai/catdetector_confussionmatrix.png" caption="The Confusion Matrix shows how many photos of each type were incorrectly classified with the trained version of the model. In this case, 3 Gateto photos were mistakenly identified as Ori." %}

I conducted multiple tests, starting with fewer images and then adding more to improve recognition accuracy. The best I could achieve was a 7.5% error rate, and from what I've learned, I believe the only way to improve this is to have more photos, especially of Ori.

{% highlight python %}
interp.plot_top_losses(5, nrows=1)
{% endhighlight %}

{% include image url="learnai/catdetector_toplosses.jpg" caption="The tool also allows you to see exactly which images were not correctly recognized." %}

Perhaps as I progress in the course, I'll learn other techniques to improve it. In any case, with the current accuracy, I felt it was sufficient for a first personal project, so I proceeded to the next phase, which is exporting the data model to use it for detecting my cats.

{% highlight python %}
learn.export('model_ori_gateto.pkl')
{% endhighlight %}

## Publishing the Cat Detector

The final challenge of the project is to publish the model so that it can be "used." At this point, and following the course's recommendations, I read [this tutorial](https://www.tanishq.ai/blog/gradio_hf_spaces_tutorial) that shows how to use the web platform [Hugging Face](https://huggingface.co/).

I created a new account, first a personal one, and then one for PapaGameDev. Next, I created a new "Space" on the platform and added the files indicated in the tutorial, using this code for the main Python file.

{% highlight python %}
import gradio as gr
from fastai.vision.all import *
import skimage
learn = load_learner('model_ori_gateto.pkl')
labels = learn.dls.vocab
def predict(img):
    img = PILImage.create(img)
    pred,pred_idx,probs = learn.predict(img)
    return {labels[i]: float(probs[i]) for i in range(len(labels))}

title = "My Cat Detector"
description = "A test model to learn, following the instructions in lesson 2 of the fast.ai course. The model detects if the picture is one of my two cats."
examples = ['ori_ejemplo.jpg', 'gateto_ejemplo.jpg']
interpretation='default'
enable_queue=True

gr.Interface(fn=predict,inputs=gr.inputs.Image(shape=(512, 512)),outputs=gr.outputs.Label(num_top_classes=3),title=title,description=description,examples=examples,interpretation=interpretation,enable_queue=enable_queue).launch()
{% endhighlight %}

The code uses a tool called Gradio to use pre-trained models in a very simple web interface that allows you to create a form with a description, examples, and deliver results.

You can see the [My Cat Detector model in action on this website](https://huggingface.co/spaces/papagamedev/mycatdetector). There are two example images, one of each of my cats, and it correctly recognizes them.

{% include image url="learnai/catdetector_huggingface.jpg" caption="My cat detector in action!" %}

I've used it by showing it to my family, taking photos of the cats, and using those new photos with the model, and it works perfectly! So, I'm satisfied with the result, and this concludes my first personal AI project.

I'm sure someone with more experience might find flaws in what I did and may be able to help me learn something new and improve it. But for now, I'll continue with the course, learning and practicing at my own pace.

*What do you think of this first project? Have you done something similar or are you daring to try it on your own?*
