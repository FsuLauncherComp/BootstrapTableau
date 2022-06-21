let $ = window.$;
const tableauExt = window.tableau.extensions;

async function init(){
    let dashboard = tableauExt.dashboardContent.dashboard;
    //Loop through the Objects on the Dashboard and render the HTML Objects
    dashboard.objects.forEach(obj => {
        render(obj);
    })
}

async function render(obj) {
    let objNameAndClasses = obj.name.split("|");
    //Parse the Name and Classes from the Object Name
    let objId = objNameAndClasses[0];
    let objClasses;
    //Check if there are classes on the object
    if (objNameAndClasses.length > 1 ) {
        objClasses = objNameAndClasses[1];
    }
    //Create the initial object with CSS Props
    //Here we set the CSS props to match the location of the objects on the Dashboard
    let props = {
        id: `${objId}`,
        css: {
            'position': 'absolute',
            'top': `${parseInt(obj.position.y)}px`,
            'left': `${parseInt(obj.position.x)}px`,
            'width': `${parseInt(obj.size.width)}px`,
            'height': `${parseInt(obj.size.height)}px`
        }
    }
    let $div;
    //Check if the object is an Icon
    if (objId.toUpperCase().includes('ICON')) {
        props.css['font-size'] = `${parseInt(obj.size.height)/16.0}rem`;
        props.css['text-align'] = "center";
        $div = $('<svg>', props);
        $div.attr("height", parseInt(obj.size.height));
        $div.attr("width", parseInt(obj.size.width));
        $div.attr("fill", "currentColor");
        $div.attr("xmlns", "http://www.w3.org/2000/svg");
    } else {
        $div = $('<div>', props);
    }
    //Add the class to the HTML Body
    $div.addClass(objClasses);
    $('body').append($div);
}

$(document).ready(() => {
    tableauExt.initializeAsync().then(() => {
        init();
    }, (err) => {
        console.log("Broken")
    });
});