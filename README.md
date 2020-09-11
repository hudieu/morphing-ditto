# MORPHING DITTO.

LIVE DEMOS:

- Standalone: https://morphing-ditto.netlify.app/

- Codepen: https://codepen.io/smoothdev35/pen/ExjzvGa 



This is a simple animation based on svg manipulation with the gsap (greensock animation platform) library. 

I used downloaded pokemon images from google, gathered the 'empty' shapes for each one as an svg path using GIMP (free alternative for photo editing on mac).
Then, I picked the dominant color for each picture with an online tool (https://www.imagecolorpicker.com).

Once all my elements are ready, I set up my html document with a svg element containing all (hidden in defs tag) references to the shapes, 
and set the first shape as a visible path in my svg. To insert the picture of my choice within the svg, I simply reference the picture as an img tag within a pattern tag 
in my svg defs.

The animation uses the core gsap library as well as an extra paid plugin, namely MorphSVGPlugin, which is free to use on the codepen website, but I can't include the plugin in the js folder here since all greensock files are subject to their own license. I purchased a paid plan, so the live demo is in agreement with the license terms.

The steps for the animation come in this order:

1 - Create the timeline with repeat:-1 for it to repeat indefinitely;

2 - Fill the first shape and picture with its corresponding dominant color to make the details disappear.

3 - Morph the svg path to the next shape and transition the color to the next dominant color for the next picture inside the shape.

4 - Insert the corresponding picture for the new shape before transitioning the fill color on top the picture to 0 opacity,
revealing the whole pokemon within its corresponding shape.

5 - Repeat 2, 3 and 4 for all the pokemons in the list.

// For the sake of simplicity, There are only 5 pokemon in the list. Ditto, the pokemon with the ability to morph, 
the three first pokemons (Bulbasaur, Squirtle and Charmander) and of course everyone's favorite, Pikachu!
The point to be made here is that, given the small number of shapes, colors, and pictures to handle, I repeated the lines of code to execute the steps 2, 3 and 4,
changing only the references to the corresponding assets.

With gsap, you can add different animations to a main timeline, defining them as a function which returns a timeline. You just have to call said function with 
the built-in .add method into your main timeline. Thus, if I wanted to add more pokemons to the animation and / or some controls to choose which pokemon
to morph from / to, I would need to isolate steps 2, 3 and 4 in a function and call it when needed with relevant parameters.

If anyone is interested in doing something along those lines (provided they respect greensock licensing terms for the MorphSVGPlugin), feel free to jump in!



