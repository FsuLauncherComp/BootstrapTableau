# BootstrapTableau

Bootstrap 5 style extension for Tableau. Create rich backgrounds for Tableau objects using only class names.

![Example 0!](/assets/Example0.png "Example 0")

## Usage

Bootstrap Tableau works in a similar manner to background images. The difference is you use Tableau objects as your anchor for backgrounds.

Download the .trex file [here](https://github.com/FsuLauncherComp/BootstrapTableau/releases/tag/trex).

1. Float the Extension onto the Dashboard and set it to the size of the dashboard.
2. Design your Dashboard by placing your objects (worksheets, text, etc) on top of the Extension
3. Change the name of the Object in the item hierarchy
4. Pattern: Object Name|Bootstrap 5 Classes

## Just use some words

The Extension levarages a unique idea: Create a blank html canvas, create objects with the same location and size as the Tableau Objects, style them using Bootstrap. 

There is no configuration popup, no JSON configs, just pure Bootstrap CSS

*Before*
![Example 4!](/assets/Example4.png "Example 4")

*After*
![Example 5!](/assets/Example5.png "Example 5")

## Examples

### Container Styling

*Container with rounded borders, drop shadow, and gradient background*

BarChart|border rounded-10 shadow bg-light bg-gradient

![Example 1!](/assets/Example1.png "Example 1")

*Container with more rounded borders, large drop shadow, and thicker border*

BarChart|border border-2 rounded-20 shadow-lg

![Example 2!](/assets/Example2.png "Example 2")

### Icons

Use any Bootstrap Icon as a background imag

[Bootstrap Icons](https://icons.getbootstrap.com/).

*Add icon before the pipe deliminator | in the Object Name along with the Icon Classes*

Github icon|bi bi-github

![Example 3!](/assets/Example3.png "Example 3")


### Extended Bootstrap Classes

**Border Radius**

rounded-4
rounded-5
rounded-10
rounded-20
rounded-30
rounded-40
rounded-50

**Z Index**

z-1
z-2
z-3
z-4
z-5
z-6
z-7
z-8
z-9

**Neuomorphic**

bg-morph
bg-morph-inset

## Useful Links

[Bootstrap 5 Documentation](https://getbootstrap.com/) Here you can find all the Bootstrap 5 Classes to style your containers

[Bootstrap Icons](https://icons.getbootstrap.com/). Get all the Bootstrap Icons that can be loaded onto your dashboard, as well as, how to customize them with Text style classes

## Help

The extension is in Alpha and does not have automatic reloading. To see your changes take effect you have to reload the extension by clicking on the dropdown carrot and pressing reload.

![Example 6!](/assets/Example6.png "Example 6")