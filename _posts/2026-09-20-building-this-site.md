---
title: 'Building This Site'
date: 2026-09-20 09:00:00 -0400
image: /assets/images/building-this-site.svg
image_alt: Stacked layers on a dark blue background
---

This site is built with Jekyll and hosted on GitHub Pages. It uses the Midnight theme, with a custom navigation bar and a card layout for the blog.

## How it's put together

- **Jekyll** turns Markdown files into static HTML pages.
- **GitHub Pages** rebuilds and publishes the site on every push to `main`.
- **Midnight** provides the base styles, with a few overrides in `assets/css/style.scss`.

## Writing a post

Each post is a Markdown file in `_posts/` named `YEAR-MONTH-DAY-title.md`. Adding an `image:` to the front matter sets the picture on the blog card and the hero image at the top of the post.
