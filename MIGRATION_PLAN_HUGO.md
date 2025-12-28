# Jekyll to Hugo Migration Plan

## Overview

**Source**: Jekyll static site with minima theme  
**Target**: Hugo  
**Hosting**: GitHub Pages (via GitHub Actions)  
**Estimated Effort**: 3-5 days  
**Branch**: `migrate-to-hugo`

---

## Pre-Migration Checklist

- [ ] Create migration branch: `git checkout -b migrate-to-hugo`
- [ ] Install Hugo: `winget install Hugo.Hugo.Extended` or download from https://gohugo.io/installation/
- [ ] Verify installation: `hugo version`
- [ ] Read Hugo quick start: https://gohugo.io/getting-started/quick-start/

---

## Phase 1: Hugo Project Setup (Day 1 - Morning)

### 1.1 Initialize Hugo Structure

Create Hugo directories alongside existing Jekyll structure:

```powershell
# Create Hugo directories (won't conflict with Jekyll)
mkdir -p hugo.toml, content, layouts, static, data, assets
```

**Files to create**:
```
hugo.toml                 # Main configuration
content/                  # Markdown posts (organized by language)
layouts/                  # Templates
  _default/
    baseof.html
    single.html
    list.html
  partials/
    header.html
    footer.html
    post-card.html
    ...
static/                   # Static assets (copied as-is)
data/                     # YAML/JSON data files
assets/                   # CSS/JS (processed by Hugo pipes)
```

### 1.2 Create Hugo Configuration

**hugo.toml**:
```toml
baseURL = "https://papagamedev.github.io/"
languageCode = "es"
defaultContentLanguage = "es"
title = "Papa Game Dev"

# Multilingual
[languages]
  [languages.es]
    languageName = "Español"
    weight = 1
    contentDir = "content/es"
  [languages.en]
    languageName = "English"
    weight = 2
    contentDir = "content/en"

# URL structure matching Jekyll
[permalinks]
  posts = "/:year/:month/:slug/"

# Taxonomies
[taxonomies]
  category = "categories"

# Menu (replaces header_pages)
[[menus.main]]
  name = "Blog"
  pageRef = "/categories/blog"
  weight = 10

[[menus.main]]
  name = "Proyectos"
  pageRef = "/categories/projects"
  weight = 20

# Params (replaces _config.yml custom vars)
[params]
  author = "Juan Pablo Lastra"
  description = "Un blog sobre desarrollo de videojuegos y paternidad"
  
  [params.reCaptcha]
    siteKey = "6LeaCwsTAAAAAC1B4rTP9IbD9O4WACfBXbbpWsdv"
  
  [params.backend]
    commentApi = "https://papagamedevsite.azurewebsites.net/api/comment"
    contactApi = "https://papagamedevsite.azurewebsites.net/api/contact"

  [params.social]
    twitter = "papagamedev"
    github = "papagamedev"

# Google Analytics
[services]
  [services.googleAnalytics]
    id = "G-DTFYGQX4WT"

# Markdown
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true  # Allow raw HTML in Markdown
```

### 1.3 Test Hugo Runs

```powershell
hugo server -D
# Should start at http://localhost:1313
```

**Success criteria**: Hugo starts without errors (empty site is fine)

---

## Phase 2: Migrate Static Assets (Day 1 - Afternoon)

### 2.1 Move Assets to Static

```powershell
# Copy static assets (Hugo serves these as-is)
Copy-Item -Recurse images static/
Copy-Item -Recurse audio static/
Copy-Item -Recurse downloads static/
Copy-Item favicon.png static/
Copy-Item CNAME static/
```

### 2.2 Move CSS to Assets

```powershell
# CSS goes to assets for processing (optional) or static for as-is
Copy-Item -Recurse css assets/
# Or for no processing:
Copy-Item -Recurse css static/
```

### 2.3 Move JavaScript

```powershell
Copy-Item -Recurse js static/
```

**Result structure**:
```
static/
├── images/
├── audio/
├── downloads/
├── js/
├── favicon.png
└── CNAME
assets/
└── css/
    └── papagamedev.css
```

---

## Phase 3: Migrate Data Files (Day 1 - Evening)

### 3.1 Copy Data Files

```powershell
# Hugo uses data/ instead of _data/
Copy-Item _data/authors.yml data/
Copy-Item _data/categories.yml data/
Copy-Item _data/localization.yml data/
Copy-Item -Recurse _data/comments data/
```

### 3.2 Verify Data Access

In Hugo templates, access data via:
- `{{ site.Data.authors.jpl.name }}`
- `{{ site.Data.categories.blog.es }}`
- `{{ site.Data.localization.es.comments }}`

---

## Phase 4: Create Base Templates (Day 2)

### 4.1 Base Layout

**layouts/_default/baseof.html**:
```html
<!DOCTYPE html>
<html lang="{{ .Lang }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ .Title }} | {{ site.Title }}</title>
  <meta name="description" content="{{ .Description | default site.Params.description }}">
  
  <!-- CSS -->
  <link rel="stylesheet" href="/css/papagamedev.css">
  <link rel="shortcut icon" type="image/png" href="/favicon.png">
  
  <!-- Hugo SEO -->
  {{ template "_internal/opengraph.html" . }}
  {{ template "_internal/twitter_cards.html" . }}
  
  {{ block "head" . }}{{ end }}
</head>
<body>
  {{ partial "header.html" . }}
  
  <main>
    {{ block "main" . }}{{ end }}
  </main>
  
  {{ partial "footer.html" . }}
  
  <!-- Scripts -->
  <script src="/js/jquery-3.7.1.min.js"></script>
  {{ block "scripts" . }}{{ end }}
</body>
</html>
```

### 4.2 Header Partial

**layouts/partials/header.html**:
```html
<header>
  <nav>
    <a href="{{ "/" | relLangURL }}" class="site-title">{{ site.Title }}</a>
    
    <ul class="nav-links">
      {{ range site.Menus.main }}
        <li><a href="{{ .URL | relLangURL }}">{{ .Name }}</a></li>
      {{ end }}
    </ul>
    
    <!-- Language toggle -->
    {{ if .IsTranslated }}
      {{ range .Translations }}
        <a href="{{ .Permalink }}" class="lang-toggle">
          {{ if eq .Lang "en" }}🇺🇸{{ else }}🇪🇸{{ end }}
        </a>
      {{ end }}
    {{ end }}
  </nav>
</header>
```

### 4.3 Post List Partial

**layouts/partials/post-list.html**:
```html
{{/* Usage: {{ partial "post-list" (dict "posts" .Pages "limit" 5 "title" "Recent") }} */}}
{{ $posts := .posts }}
{{ $limit := .limit | default 10 }}
{{ $title := .title }}
{{ $featured := .featured | default false }}

{{ if $featured }}
  {{ $posts = where $posts ".Params.featured" true }}
{{ end }}

{{ if $title }}
  <h2>{{ $title }}</h2>
{{ end }}

<div class="post-grid">
  {{ range first $limit $posts }}
    {{ partial "post-card.html" . }}
  {{ end }}
</div>
```

### 4.4 Post Card Partial

**layouts/partials/post-card.html**:
```html
<article class="post-card">
  <a href="{{ .Permalink }}">
    {{ with .Params.image }}
      <img src="{{ . }}" alt="{{ $.Title }}">
    {{ end }}
    <h3>{{ .Title }}</h3>
    <time>{{ .Date.Format "January 2, 2006" }}</time>
    <p>{{ .Description | truncate 150 }}</p>
  </a>
</article>
```

### 4.5 Single Post Layout

**layouts/_default/single.html**:
```html
{{ define "main" }}
<article class="post">
  <header>
    <h1>{{ .Title }}</h1>
    <time>{{ .Date.Format "January 2, 2006" }}</time>
    
    <!-- Categories -->
    {{ with .Params.categories }}
      <div class="categories">
        {{ range . }}
          <a href="{{ "/categories/" | relLangURL }}{{ . | urlize }}/">{{ . }}</a>
        {{ end }}
      </div>
    {{ end }}
    
    <!-- Translation link -->
    {{ if .IsTranslated }}
      {{ range .Translations }}
        <a href="{{ .Permalink }}" class="translation-link">
          {{ if eq .Lang "en" }}Read in English{{ else }}Leer en Español{{ end }}
        </a>
      {{ end }}
    {{ end }}
  </header>
  
  <div class="post-content">
    {{ .Content }}
  </div>
  
  <!-- Author bio -->
  {{ partial "author-bio.html" . }}
  
  <!-- Comments -->
  {{ partial "comments.html" . }}
  
  <!-- Related posts -->
  {{ partial "related-posts.html" . }}
</article>
{{ end }}
```

### 4.6 Home Page Layout

**layouts/index.html**:
```html
{{ define "main" }}
<section class="featured">
  {{ partial "post-list" (dict 
    "posts" (where site.RegularPages ".Lang" .Lang)
    "limit" 3
    "featured" true
    "title" (T "featuredPosts")
  ) }}
</section>

<section class="recent">
  {{ partial "post-list" (dict
    "posts" (where site.RegularPages ".Lang" .Lang)
    "limit" 6
    "title" (T "recentPosts")
  ) }}
</section>
{{ end }}
```

---

## Phase 5: Migrate Content (Day 2-3)

### 5.1 Create Content Structure

```
content/
├── es/
│   ├── _index.md           # Homepage content (optional)
│   ├── blog/
│   │   ├── _index.md       # Blog section page
│   │   └── [posts].md
│   ├── entrevistas/
│   ├── juegos-recomendados/
│   └── proyectos/
│       ├── jpacman/
│       └── learnai/
└── en/
    ├── _index.md
    ├── blog/
    ├── interviews/
    ├── recommended-games/
    └── projects/
```

### 5.2 Convert Post Front Matter

**Jekyll format**:
```yaml
---
title: "Post Title"
image: images/featured.jpg
author: jpl
lang: es
translation_url: english-post.html
description: "Description"
featured: true
---
```

**Hugo format**:
```yaml
---
title: "Post Title"
date: 2024-06-11
image: /images/featured.jpg
author: jpl
description: "Description"
featured: true
categories:
  - blog
translationKey: unique-key-for-linking
slug: post-slug
---
```

**Key changes**:
- Add `date` field (Jekyll derives from filename)
- Add leading `/` to image paths
- Replace `lang` → file location determines language
- Replace `translation_url` → `translationKey` (shared between translations)
- Add `categories` array (Jekyll uses path)
- Add `slug` if different from filename

### 5.3 Post Migration Script

Create a PowerShell script to help migrate posts:

```powershell
# migrate-posts.ps1
# Run from repository root

$sourceDirs = @(
    @{Path="articles/blog/_posts"; Category="blog"; LangES="content/es/blog"; LangEN="content/en/blog"},
    @{Path="articles/interviews/_posts"; Category="interviews"; LangES="content/es/entrevistas"; LangEN="content/en/interviews"},
    @{Path="projects/jpacman/_posts"; Category="jpacman"; LangES="content/es/proyectos/jpacman"; LangEN="content/en/projects/jpacman"}
    # Add more mappings...
)

foreach ($dir in $sourceDirs) {
    Get-ChildItem "$($dir.Path)/*.md" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        # Extract front matter and determine language from 'lang:' field
        # Copy to appropriate content/es/ or content/en/ directory
        # This is a template - customize as needed
        Write-Host "Would migrate: $($_.Name)"
    }
}
```

### 5.4 Convert Liquid to Hugo Shortcodes

**Create shortcodes** in `layouts/shortcodes/`:

| Jekyll Include | Hugo Shortcode | File |
|----------------|----------------|------|
| `{% include youtube id="x" %}` | `{{</* youtube id="x" */>}}` | `youtube.html` |
| `{% include image url="x" %}` | `{{</* image src="x" */>}}` | `image.html` |
| `{% include audio file="x" %}` | `{{</* audio src="x" */>}}` | `audio.html` |

**layouts/shortcodes/youtube.html**:
```html
<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/{{ .Get "id" }}{{ with .Get "start" }}?start={{ . }}{{ end }}"
    allowfullscreen>
  </iframe>
  {{ with .Get "caption" }}<p class="caption">{{ . }}</p>{{ end }}
</div>
```

**layouts/shortcodes/image.html**:
```html
<figure>
  <img src="{{ .Get "src" }}" alt="{{ .Get "caption" | default "" }}">
  {{ with .Get "caption" }}<figcaption>{{ . }}</figcaption>{{ end }}
</figure>
```

**layouts/shortcodes/audio.html**:
```html
<audio controls>
  <source src="{{ .Get "src" }}" type="audio/mpeg">
</audio>
```

### 5.5 Find/Replace in Content

After copying posts, run find/replace:

| Find (regex) | Replace |
|--------------|---------|
| `{% include youtube id="([^"]+)" %}` | `{{</* youtube id="$1" */>}}` |
| `{% include image url="([^"]+)" caption="([^"]+)" %}` | `{{</* image src="$1" caption="$2" */>}}` |
| `{% post_url ([^}]+) %}` | Direct URL path |
| `{% link ([^}]+) %}` | Direct URL path |

---

## Phase 6: Internationalization (Day 3)

### 6.1 Create Translation Files

**i18n/es.yaml**:
```yaml
featuredPosts: "Artículos Destacados"
recentPosts: "Artículos Recientes"
readMore: "Leer más"
comments: "Comentarios"
relatedPosts: "Artículos Relacionados"
search: "Buscar..."
noResults: "No se encontraron resultados."
submit: "Enviar"
```

**i18n/en.yaml**:
```yaml
featuredPosts: "Featured Posts"
recentPosts: "Recent Posts"
readMore: "Read more"
comments: "Comments"
relatedPosts: "Related Posts"
search: "Search..."
noResults: "No results found."
submit: "Submit"
```

### 6.2 Use Translations in Templates

```html
<h2>{{ T "featuredPosts" }}</h2>
<button>{{ T "submit" }}</button>
```

---

## Phase 7: Comments & Forms (Day 4)

### 7.1 Comment Display Partial

**layouts/partials/comments.html**:
```html
{{ $slug := .File.BaseFileName }}
{{ $comments := index site.Data.comments $slug }}

{{ if $comments }}
<section class="comments">
  <h3>{{ T "comments" }}</h3>
  
  {{ range sort $comments "date" }}
    <div class="comment">
      <img src="https://www.gravatar.com/avatar/{{ .emailmd5 }}?s=50&d=mp" alt="">
      <div class="comment-body">
        <strong>{{ .name }}</strong>
        <time>{{ .date | time.Format "January 2, 2006" }}</time>
        <p>{{ .message | markdownify }}</p>
      </div>
    </div>
  {{ end }}
</section>
{{ end }}

<!-- Comment form -->
{{ partial "comment-form.html" . }}
```

### 7.2 Comment Form Partial

**layouts/partials/comment-form.html**:
```html
<form id="comment-form" class="comment-form">
  <input type="hidden" name="slug" value="{{ .File.BaseFileName }}">
  
  <label>{{ T "name" }}
    <input type="text" name="name" required>
  </label>
  
  <label>{{ T "email" }}
    <input type="email" name="email" required>
  </label>
  
  <label>{{ T "message" }}
    <textarea name="message" required></textarea>
  </label>
  
  <div class="g-recaptcha" data-sitekey="{{ site.Params.reCaptcha.siteKey }}"></div>
  
  <button type="submit">{{ T "submit" }}</button>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
document.getElementById('comment-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  
  try {
    const response = await fetch('{{ site.Params.backend.commentApi }}', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
      alert('{{ T "commentSuccess" }}');
      form.reset();
    }
  } catch (err) {
    alert('{{ T "commentError" }}');
  }
});
</script>
```

---

## Phase 8: Search (Day 4)

### 8.1 Generate Search Index

**layouts/_default/search.json**:
```json
{{- $pages := where site.RegularPages ".Lang" .Lang -}}
[
{{- range $index, $page := $pages -}}
  {{- if $index }},{{ end }}
  {
    "title": {{ $page.Title | jsonify }},
    "url": {{ $page.RelPermalink | jsonify }},
    "date": {{ $page.Date.Format "2006-01-02" | jsonify }},
    "description": {{ $page.Description | jsonify }},
    "categories": {{ $page.Params.categories | jsonify }},
    "image": {{ $page.Params.image | jsonify }}
  }
{{- end }}
]
```

### 8.2 Search Page

**content/es/search.md**:
```yaml
---
title: "Buscar"
layout: search
outputs:
  - html
  - json
---
```

**layouts/_default/search.html**:
```html
{{ define "main" }}
<div class="search-container">
  <input type="text" id="search-input" placeholder="{{ T "search" }}">
  <div id="search-results"></div>
</div>
{{ end }}

{{ define "scripts" }}
<script src="/js/simple-jekyll-search.min.js"></script>
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  json: '/{{ .Lang }}/search/index.json',
  searchResultTemplate: '<a href="{url}"><h3>{title}</h3><p>{description}</p></a>',
  noResultsText: '{{ T "noResults" }}'
});
</script>
{{ end }}
```

---

## Phase 9: GitHub Actions Deployment (Day 5)

### 9.1 Create Workflow

**.github/workflows/hugo.yml**:
```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.140.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
          
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
          
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
        
      - name: Build with Hugo
        env:
          HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
        run: |
          hugo \
            --gc \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
            
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 9.2 Configure GitHub Pages

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Remove any Jekyll-specific settings

---

## Phase 10: Cleanup (After Successful Deployment)

### 10.1 Remove Jekyll Files

```powershell
# Only after Hugo site is working!
Remove-Item _config.yml
Remove-Item Gemfile, Gemfile.lock
Remove-Item -Recurse _includes, _layouts, _data
Remove-Item -Recurse _drafts  # Or migrate to content/drafts/
Remove-Item -Recurse articles, projects  # Old post locations
Remove-Item -Recurse category  # Old category pages
Remove-Item index.md, index-en.md, contact.md, contacto.md, 404.md
Remove-Item search-es.md, search-en.md, search-es.json, search-en.json
Remove-Item -Recurse css, js, images, audio, downloads  # Now in static/
```

### 10.2 Update .gitignore

```gitignore
# Hugo
public/
resources/_gen/
.hugo_build.lock

# Remove Jekyll entries
# _site  (no longer needed)
```

### 10.3 Update README

Document new build process:
```markdown
## Development

```bash
hugo server -D
```

## Build

```bash
hugo --minify
```
```

---

## Rollback Plan

If migration fails:
```powershell
git checkout main
git branch -D migrate-to-hugo
# Site continues working with Jekyll
```

---

## Quick Reference

### Hugo Commands

| Command | Purpose |
|---------|---------|
| `hugo server` | Dev server with hot reload |
| `hugo server -D` | Include drafts |
| `hugo` | Build to `public/` |
| `hugo --minify` | Production build |
| `hugo new content/es/blog/my-post.md` | Create new post |

### Template Cheat Sheet

| Jekyll Liquid | Hugo Go Template |
|---------------|------------------|
| `{{ page.title }}` | `{{ .Title }}` |
| `{{ site.posts }}` | `{{ site.RegularPages }}` |
| `{% for post in posts %}` | `{{ range $posts }}` |
| `{% if condition %}` | `{{ if condition }}` |
| `{% include file.html %}` | `{{ partial "file.html" . }}` |
| `{{ post.url }}` | `{{ .Permalink }}` |
| `{{ content \| markdownify }}` | `{{ .Content }}` |
| `{{ page.lang }}` | `{{ .Lang }}` |
| `{{ site.data.file }}` | `{{ site.Data.file }}` |

### File Mapping

| Jekyll | Hugo |
|--------|------|
| `_config.yml` | `hugo.toml` |
| `_data/` | `data/` |
| `_includes/` | `layouts/partials/` |
| `_layouts/` | `layouts/_default/` |
| `_posts/` | `content/<section>/` |
| `_drafts/` | `content/<section>/` with `draft: true` |
| `css/`, `js/`, `images/` | `static/` or `assets/` |

---

## Progress Tracking

| Phase | Status | Started | Completed | Notes |
|-------|--------|---------|-----------|-------|
| 1. Hugo Setup | ⬜ Not started | | | |
| 2. Static Assets | ⬜ Not started | | | |
| 3. Data Files | ⬜ Not started | | | |
| 4. Base Templates | ⬜ Not started | | | |
| 5. Content Migration | ⬜ Not started | | | |
| 6. Internationalization | ⬜ Not started | | | |
| 7. Comments & Forms | ⬜ Not started | | | |
| 8. Search | ⬜ Not started | | | |
| 9. GitHub Actions | ⬜ Not started | | | |
| 10. Cleanup | ⬜ Not started | | | |

---

*Last updated: December 28, 2025*
