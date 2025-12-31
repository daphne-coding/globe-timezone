# Timezones Globe

https://observablehq.com/@raphaelchalicarne/timezones-globe@397

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/da9a8167025bf58e@397.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@raphaelchalicarne/timezones-globe";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~

Drag on the globe to rotate it; the projection updates dynamically based on mouse movement, so no manual longitude/latitude inputs are needed.

## Deploying to GitHub Pages

A GitHub Actions workflow (`.github/workflows/pages.yml`) packages the static assets in this repository and publishes them to GitHub Pages. Once Pages is enabled for the repository (Settings → Pages → Source: GitHub Actions), pushes to the `main` branch will automatically build and deploy the site. You can also trigger a deployment manually from the **Actions** tab by running the "Deploy static site to GitHub Pages" workflow.
