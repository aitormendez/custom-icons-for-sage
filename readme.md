# Custom icons for Sage 8.5.3

Automated workflow to design custom icons and implement it into Sage 8.5.3 WordPress starter theme environment.

1. Design as many icons as you want with [Sketch app](https://www.sketchapp.com/) template
2. Generate one SVG sprite with all icons.
3. Generate Scss to manage the sprite.
3. Inject scss in the main css Sage workflow and put the sprite in its place.

Sketch template:
![Sketch template](readme-img/sketch-template.png?raw=true "Title")

Default sage HTML page with some icons rendered:
![default sage HTML page with some icons rendered](readme-img/html-render-dark.png?raw=true "Title")


## Install

From theme directory, run:

```
$ git@github.com:aitormendez/custom-icons-for-sage.git && cd custom-icons-for-sage/
```
```
$ npm install
```

Add this line: `@import "svg-sprite/sprite";` to `your-theme-dir/assets/styles/main.scss`

## Usage

From `your-theme-dir/custom-icons-for-sage`, run:

```
$ gulp && gulp watch
```

In another terminal window, from `your-theme-dir`, run:

```
$ gulp && gulp watch
```

(You should to have at this moment two terminal windows, both running `gulp watch`)

Edit `src/sketch/icons.sketch` as you like.

Edit your theme templates to include some icons in this way (look at `assets/styles/svg-sprite/_sprite.scss` to get a complete list of your css classes):

```html
<div class="svg-icon-one svg-icon-one-dims"></div>
<div class="svg-icon-two svg-icon-two-dims"></div>
<div class="svg-icon-three svg-icon-three-dims"></div>
```
Every time you save changes in sketch file, browser sync will update the page render with all changes.

:smile:
