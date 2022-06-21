let $ = window.$;
const tableauExt = window.tableau.extensions;

let init = () => {
    let dashboard = tableauExt.dashboardContent.dashboard;
    let worksheets = tableauExt.dashboardContent.dashboard.worksheets;
    dashboard.objects.forEach(obj => {
        console.log(obj.name, obj.id, obj.position.x, obj.position.y, obj.size.height, obj.size.width);
        render(obj);
    })
}

async function render(obj) {
    let objNameAndClasses = obj.name.split("|");
    let divType = '<div>';
    let objId = objNameAndClasses[0];
    let objClasses;
    if (objNameAndClasses.length > 1 ) {
        objClasses = objNameAndClasses[1];
    }
    console.log(objId)
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
    console.log(parseInt(obj.size.height)/16.0)
    if (objId.includes('icon')) {
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