# zmk5566.github.io

Personal homepage for Kenny Ma.

This site is intentionally small and GitHub Pages friendly. It uses Jekyll only for shared templates and data files, while keeping the W3Schools-style direct HTML/CSS feeling.

## Editing Content

- Navigation lives in `_data/navigation.yml`.
- Research projects live in `_data/research.yml`.
- Teaching and workshops live in `_data/teaching.yml`.
- Random works live in `_data/works.yml`.
- Shared layout lives in `_layouts/default.html`.
- Shared SEO/head markup lives in `_includes/head.html`.
- Global styling lives in `assets/css/site.css`.

To add a new work, append an item to `_data/works.yml` and put any media files in `res/`.

## Local Preview

GitHub Pages will build the site automatically. For a local preview, use Ruby 3.4.9 through rbenv:

```sh
eval "$(rbenv init - zsh)"
rbenv local 3.4.9
gem install jekyll
jekyll serve
```
