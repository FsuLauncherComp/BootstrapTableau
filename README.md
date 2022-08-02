# BootstrapTableau

Bootstrap 5 style extension for Tableau. Create rich backgrounds for Tableau objects using only class names.

![Example 0!](/assets/Example0.png "Example 0")

## Usage

Bootstrap Tableau works in a similar manner to background images. The difference is you use Tableau objects as your anchor for backgrounds.

Support for clickthrough and automatic resizing/positioning

Download the .trex file [here](https://github.com/FsuLauncherComp/BootstrapTableau/releases/tag/trex).

1. Float the Extension onto the Dashboard and set it to the size of the dashboard.
2. Set Extension outer padding to zero
3. Design your Dashboard by placing your objects (worksheets, text, etc) on top of the Extension
4. Add inner padding or blank objects for spacing
5. Change the name of the Object in the item hierarchy
6. Pattern: Object Name|Bootstrap 5 Classes

## Just use some words

The Extension levarages a unique idea: Create a blank html canvas, create objects with the same location and size as the Tableau Objects, style them using Bootstrap. 

There is no configuration popup, no JSON configs, just pure Bootstrap CSS

*Before*
![Example 4!](/assets/Example4.png "Example 4")

*After*
![Example 5!](/assets/Example0.png "Example 5")

## Examples

### Container Styling

*Container with rounded borders, drop shadow, and gradient background*

>BarChart|border rounded-10 shadow bg-light bg-gradient

![Example 1!](/assets/Example1.png "Example 1")

*Container with more rounded borders, large drop shadow, and thicker border*

>BarChart|border border-2 rounded-20 shadow-lg

![Example 2!](/assets/Example2.png "Example 2")

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

## Useful Links

[Bootstrap 5 Documentation](https://getbootstrap.com/) Here you can find all the Bootstrap 5 Classes to style your containers

[Bootstrap Icons](https://icons.getbootstrap.com/). Get all the Bootstrap Icons that can be loaded onto your dashboard, as well as, how to customize them with Text style classes

## Help

The Tableau Extension API does not expose the Outer padding of objects. For objects inside of containers you will need to create parent containers to create spacing, or add blank/text objects to seperate objects.

Tableau objects are returned in the order they are craeted, not the order they are in the hierarchy. Sometimes this causes the extension to load the backgrounds in the wrong order. To adjust for this, use the zindex classes (1-15) to ensure your containers render in the right order.

