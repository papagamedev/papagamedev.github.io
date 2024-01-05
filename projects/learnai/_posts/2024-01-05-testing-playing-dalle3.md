---
author: jpl
description: Connect to the DALL-E 3 API and play creating images with my children.
featured: true
image: images/learnai/dalle3.jpg
lang: en
title: Testing and playing with DALL-E 3
translation_url: probando-jugando-dalle3.html
---

Just a few months ago, [DALL-E 3](https://openai.com/dall-e-3), the third version of the text-to-image generation system developed by [OpenAI](https://openai.com/), was launched. It was touted as a significant improvement over its predecessor, *DALL-E 2*, and of course, I was eager to see just how versatile it could be.

Over a year ago, I had tried the original version of *DALL-E*, which yielded undoubtedly interesting results, but I was left with the impression that it was far from being a tool that could be used productively.

{% include image url="learnai/dalle3.jpg" caption="DALL-E 3, as depicted by DALL-E 3 itself" %}

Last week, while searching for images for the [article about my son’s Python game]({ post_url 2023-12-30-dad-made-game-python }), I thought I might generate them using *DALL-E 3* and thus take the opportunity to test it out.

I headed to the website and found out that to use it one had to either subscribe to OpenAI’s Plus service (for $20 a month) or use the API directly and pay per usage. I wanted to run just a few tests, so I opted for the second option and embarked on the new challenge.

## Connecting to DALL-E's API

The first thing I had to do was create an OpenAI developer account to get access to the API. Then, I added $10 of credits to the account to pay for the requests I would make through the API. Both processes were straightforward, and I encountered no problems.

Once that was done, I looked up in the OpenAI documentation how to connect to the API and also searched for examples on Google. Interestingly, asking Chat-GPT was not very helpful because the information it provided was from the previous version of the API, which had been updated when OpenAI launched the latest version of its services.

The Python code to call the API and obtain an image turned out to be very simple. You instantiate the OpenAI module for Python and call the *generate* function with parameters for the text, model, size, quality, and style. The API returns a URL where the image can be downloaded for a limited amount of time.

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

I requested from *DALL-E 3* an image of a cat coding in Python since my original reason for using this API was to find images for the article I was writing last week. Below is the image it generated. I liked it so much that, with a minor hand-made modification in *Paint.Net*, I used it as is for the article.

{% include image url="learnai/dalle3-cat-coding-python-vivid.jpg" caption="Image generated with DALL-E 3 of a cat coding in Python" %}

The result was so good that, naturally, I wanted to experiment a little more with the various parameters available. For instance, the style could be "vivid" or "natural," and the quality could be "standard" or "hd". The first image generated had been "vivid", so I wanted to try the other style. Also, to save a step, I looked up and wrote a function to download the image and save it to a file.

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

Indeed, the image generated was more photo-realistic and just as impressive in terms of outcome.

{% include image url="learnai/dalle3-cat-coding-python-natural.jpg" caption="Image generated with DALL-E 3, now with a natural style" %}

## Playing with DALL-E 3

I couldn't resist, so I called over my children Santi (12) and Sami (9) and told them excitedly:

> Kids, check out this picture of a cat on a computer! It was made by artificial intelligence! Do you want to try asking for something yourselves?

> How cute is the kitty!

> I want to try!

> Me too!

> I've got an idea!

> Can I ask for anything?

> I want to go first!

It took me a couple of minutes to calm their enthusiasm and make them understand they had to give me a simple phrase that the artificial intelligence would turn into an image. For them to get a better understanding, I tried one last time myself (well, because I also wanted to keep experimenting!)

I requested an image of a fish playing soccer, and we were all three stunned by the result:

{% include image url="learnai/dalle3-fish-playing-soccer.jpg" caption="A fish playing soccer (standard, vivid)" %}

That’s when my kids got it, and the requests started pouring in. As each image consumed credits, I couldn’t let them have limitless trials, but we had quite a fun while using *DALL-E 3* and spent just a couple of dollars in total.

{% include image url="learnai/dalle3-cat-playing-soccer.jpg" caption="A cat playing soccer (standard, vivid)" %}

{% include image url="learnai/dalle3-fish-eating-sushi-natural.jpg" caption="A fish eating sushi (standard, natural)" %}

{% include image url="learnai/dalle3-fish-eating-sushi-vivid.jpg" caption="A fish eating sushi (standard, vivid)" %}

{% include image url="learnai/dalle3-cat-in-cat-house.jpg" caption="A cat in a cat house (standard, vivid)" %}

{% include image url="learnai/dalle3-cat-vaporeon-costume.jpg" caption="A cat dressed up as the Pokémon Vaporeon (standard, natural)" %}

We also wanted to test the "hd" quality which, though consuming more credits, generates much more detailed images. So we repeated some of the prompts to see the result in "hd":

{% include image url="learnai/dalle3-cat-playing-soccer-hd.jpg" caption="A cat playing soccer (hd, vivid)" %}

{% include image url="learnai/dalle3-cat-vaporeon-costume-hd.jpg" caption="A cat dressed up as Vaporeon (hd, natural)" %}

Something I had read was that more complex prompts could be used to get more detailed images. I tried it by requesting "a giant fish eating a cat, while the cat smiles, with a mountain behind the fish and an ocean". However, the result was not what we expected. Later we tried a similar but simpler idea, and the outcome made more sense to us:

{% include image url="learnai/dalle3-fish-eating-cat-complex-prompt.jpg" caption="A longer text, resulting in a not so good outcome" %}

{% include image url="learnai/dalle3-fish-eating-cat-simple-prompt.jpg" caption="A simpler text, with a better outcome" %}

Having met my immediate need (the image for the article) and after playing around with generating images with my kids, I was left pondering how little I understand about how this technology works internally.

In the [AI course I'm taking](https://course.fast.ai/), the last chapters talk about a technique called "stable diffusion" that's related to image generation. I haven't reached that point yet, so I do not know how it works or if DALL-E employs that technique or there are more advanced ones, but I think it's worth finding out.

*What experience do you have with DALL-E 3? Have you tried other similar tools like Midjourney?*