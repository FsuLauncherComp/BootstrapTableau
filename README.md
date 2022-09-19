# BootstrapTableau

Bootstrap 5 style extension for Tableau. Create rich backgrounds for Tableau objects using only class names.

![Example 0!](/assets/Example0.png "Example 0")

## Usage

Bootstrap Tableau works in a similar manner to background images. The difference is you use Tableau objects as your anchor for backgrounds.

Support for clickthrough and automatic resizing/positioning

Download the .trex file [here](https://github.com/FsuLauncherComp/BootstrapTableau/releases/tag/trex).

### 1. Drag/drop the Extension onto your Dashboard.
![Howto1!](/assets/howto1.png "How to one")

### 2. Set the Extension to fit the entire dashboard. Set Extension outer padding to zero if needed
![Howto2!](/assets/howto2.png "How to two")

### 3. Send the Extension to the back so it becomes the bottom layer
![Howto3!](/assets/howto3.png "How to three")

### 4. Design your Dashboard by drag/dropping your objects (worksheets, text, etc) on top of the Extension

### 5. In the Item hierarchy, rename the objects/containers you want to style. The Patten is (Object Name)|(Bootstrap 5 Classes). IMPORTANT, use the Pipe | delieator between 
![Howto4!](/assets/howto4.png "How to four")

### 6. Set the inner padding for the objects (Optional)
Since the Extension draws the divs with the same height/width and position, adding inner padding makes things look nicer
![Howto5!](/assets/howto5.png "How to five")

### 7. Repeat this process for any objects/containers you want to style
![Howto6!](/assets/howto6.png "How to six")

### 8. (Tip/Optional) The extension doesn't know "Outer Padding". Use Blank objects to create spacing
![Howto7!](/assets/howto7.png "How to seven")

### 9. Try different styles! Look through the docs and try different combinations
![Howto8!](/assets/howto8.png "How to eight")

## Style Patten: Just use some words

The Extension levarages a unique idea: Create a blank html canvas, create objects with the same location and size as the Tableau Objects, style them using Bootstrap. 

There is no configuration popup, no JSON configs, just pure Bootstrap CSS

*Before*
![Example 4!](/assets/Example4.png "Example 4")

*After*
![Example 5!](/assets/Example0.png "Example 5")

## Examples

### Just add the classes to the object name

![Example 00!](/assets/Example00.png "Example 00")

### Container Styling

*Container with rounded borders, drop shadow, and gradient background*

>BarChart|border rounded-10 shadow bg-light bg-gradient

![Example 1!](/assets/Example1.png "Example 1")

*Container with more rounded borders, large drop shadow, and thicker border*

>BarChart|border border-2 rounded-20 shadow-lg

![Example 2!](/assets/Example2.png "Example 2")

## Bootstrap Specific Docs

### Borders 
For adding various border widths, styles, and colors

> [Boostrap Border Classes](https://getbootstrap.com/docs/5.0/utilities/borders/) 

### Corner Radius
Control how rounded your containers' corners are. Specificy which corners to round

> [Boostrap Radius Classes](https://getbootstrap.com/docs/5.0/utilities/borders/#border-radius) 

> Also supports 
> rounded-4, rounded-5, rounded-10, rounded-20, rounded-30, rounded-40, rounded-50

### Drop Shadows
Add drop shadows of different sizes and directions to give your containers depth

> [Bootstrap Shadow Classes](https://getbootstrap.com/docs/5.0/utilities/shadows/)

Extended drop shadow classes
> shadow-top, shadow-top-lg, shadow-bottom, shadow-bottom-lg, shadow-start, shadow-start-lg, shadow-end, shadow-end-lg

### Background Colors
Add background colors to your containers. Works in combination with gradients

> [Boostrap Background Classes](https://getbootstrap.com/docs/5.0/utilities/background/) 

Also Support Tailwind CSS Background Classes
> [Tailwind Color Classes](https://tailwindcss.com/docs/background-color) 


### Background Gradient
Add gradients with the background colors above. Control the intensity and direction

> [Bootstrap Gradients](https://getbootstrap.com/docs/5.0/utilities/background/#background-gradient)

Extended gradient classes. Allow you to adjust the hue of the gradient and the direction

Directional
> bg-gradient-end, bg-gradient-start, bg-gradient-top

Small
> bg-gradient-sm, bg-gradient-end-sm, bg-gradient-start-sm, bg-gradient-top-sm

Very small
>bg-gradient-vsm, bg-gradient-end-vsm, bg-gradient-start-vsm, bg-gradient-top-vsm    

You can make any background color a gradient simply by adding bg-gradient to your container class names

## Extended Bootstrap Classes

**Border Radius:** Additional rounded border classes

> rounded-4, rounded-5, rounded-10, rounded-20, rounded-30, rounded-40, rounded-50

**Z Index:** Control the Z order of objects

> z-1, z-2, ..., z-15

**Neuomorphic:** Basic Neomorphic classes

> bg-morph, bg-morph-inset

**Built in Starschema class:**

> star-cntr

**Tailwind Background Colors:** Tailwind.css BG color classes

> [Tailwind Color Classes](https://tailwindcss.com/docs/background-color) 

**Margin classes:**

In case you use padding in Tableau to position your elements in containers, you can use a margin class in TabCSS. This works similarly to "outer padding" in Tableau, whereby any border and background classes you define will respect this padding.

Add 20px margin all around:
> margin-20

Add 10px margin vertically and 20px horizontally:
> margin-10-20

Use different margins on each side (numbers go top-right-bottom-left according to CSS conventions):
> margin-5-10-15-10

## Useful Links

[Bootstrap 5 Documentation](https://getbootstrap.com/) Here you can find all the Bootstrap 5 Classes to style your containers

## Help

The Tableau Extension API does not expose the Outer padding of objects. For objects inside of containers you will need to create parent containers to create spacing, or add blank/text objects to seperate objects.

Tableau objects are returned in the order they are craeted, not the order they are in the hierarchy. Sometimes this causes the extension to load the backgrounds in the wrong order. To adjust for this, use the zindex classes (1-15) to ensure your containers render in the right order.

