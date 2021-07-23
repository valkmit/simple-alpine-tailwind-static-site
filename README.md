# Alpine Static Website

A simple starting point for building a static website using `AlpineJS` and `TailwindCSS`.

## Usage

- ```npm run dev```

    Builds things from src and places them into the `build/` subdirectory, development-style

- ```npm run production```

    Builds things from src and places them into the `build/` subdirectory, and also minifies it.

You don't need to constantly upload the contents of the `build/` directory to a webserver. Instead, you can install the following Node package globally like so: ```sudo npm install http-server -g```. From there, you can spin up a webserver on ```127.0.0.1:8080``` like so: ```http-server ./build```.

## Justification

I'm not a web developer, and I don't keep up with the latest in web technologies. The last time I did anything serious with web development, I wrote the HTML, Javascript, and CSS directly in files and uploaded them via SCP to my webserver.

But alas, times have changed. As someone already familiar with development in other languages (namely C, Go,  and a few others) I wanted an introduction to building a simple static website built around the Node package manager, but all the tutorials I could find catered to those just entering the development world.

I had no clue what webpack, rollup, parcel, alpine, or any of these newfangled components were. So here's a simple stack with my choices from a day of research :)

## The stack

- **AlpineJS**

    I considered both React and Vue, but ultimately determined they were far too heavy for my simple use-case. I just needed something "close enough", but without the heavy engines that come with React and Vue. AlpineJS is a nice, small project similar to Vue, but much, much smaller.

- **Laravel Mix**

    I spent most of my time picking which software would package my website. To someone not involved in web development, it's not intuitive at all how code written as a node module adjacent project actually gets deployed onto a webserver like nginx. Back in ye old days, I would just write my HTML/CSS/JS directly. 

    Laravel Mix is built on top of webpack, which is a competitor to rollup and parcel. All of these technologies are responsible for solving the above problem - how do you go from multiple HTML/CSS/JS files, to a minified, packed version of your code?

    Contrary to its name, Laravel Mix does not actually require Laravel, PHP, or even any server-sided code. It's just a wrapper on top of webpack to make it simpler. It was a nice compromise between parcel, which gives very little configurability, to webpack, which requires extreme explicitness.

- **TailwindCSS**

    Everyone knows about Bootstrap at this point. I wanted to try out a different CSS framework just to see what else was out there. The best description of Tailwind I've heard is "Alpine is to Vue as Tailwind is to Bootstrap". It's fresh, it's new, and it's got some moving power behind it.

## Closing Thoughts

I'm sure everybody could argue back and forth for days what the best tools to use in each category are. I don't pretend to be a web developer, but I tried to pick the ones that seem both fresh and easy to use.

## Resources

I cobbled together commands and information from the following articles. None of them gave me a solid picture of what actually needed to happen, but they were instrumental in my understanding nonetheless.

- https://stephenafamo.com/blog/posts/tailwind-css-getting-set-up-in-minutes
- https://medium.com/@giova.rod93/build-a-static-website-with-laravel-mix-7e6bcd85fd3f
- https://laravel.com/docs/7.x/mix
- https://stackoverflow.com/questions/68094419/how-to-set-up-alpine-js-3-with-mix