let $ = window.$;
const tableauExt = window.tableau.extensions;

//Wrap everything into an anonymous function
(function () {
    async function init() {
        //clean up any divs from the last initialization
        $('body').empty();
        tableau.extensions.setClickThroughAsync(true).then(() => {
            let dashboard = tableauExt.dashboardContent.dashboard;
            //Loop through the Objects on the Dashboard and render the HTML Objects
            dashboard.objects.forEach(obj => {
                render(obj);
            })
        }).catch((error) => {
            // Can throw an error if called from a dialog or on Tableau Desktop
            console.error(error.message);
        });
    }

    function getMarginFromObjClasses(objClasses){
        const margin = [0, 0, 0, 0];
        if (!objClasses) return margin;

        const classNames = objClasses.split(/\s+/)
        classNames.reverse();
        const marginClass = classNames.find((cl) => cl.startsWith('margin-'));
        if (!marginClass) return margin;

        const marginValues = marginClass.split('-').slice(1).map(v => parseInt(v))
        if (marginValues.length === 1) {
            const [all] = marginValues
            return [all, all, all, all]
        }

        if (marginValues.length === 2) {
            const [vertical, horizontal] = marginValues
            return [vertical, horizontal, vertical, horizontal]
        }

        if (marginValues.length === 3) {
            const [top, horizontal, bottom] = marginValues
            return [top, horizontal, bottom, horizontal]
        }

        if (marginValues.length === 4) {
            return marginValues
        }

        return margin;
    }

    async function render(obj) {
        let objNameAndClasses = obj.name.split("|");
        //Parse the Name and Classes from the Object Name
        let objId = objNameAndClasses[0];
        let objClasses;
        //Check if there are classes on the object
        if (objNameAndClasses.length > 1) {
            objClasses = objNameAndClasses[1];
        }
        //Create the initial object with CSS Props
        
        // we need to check for padding classes first, as they must be handled via positioning
        const margin = getMarginFromObjClasses(objClasses)
        
        //Here we set the CSS props to match the location of the objects on the Dashboard
        let props = {
            id: `${objId}`,
            css: {
                'position': 'absolute',
                'top': `${parseInt(obj.position.y) + margin[0]}px`,
                'left': `${parseInt(obj.position.x) + margin[3]}px`,
                'width': `${parseInt(obj.size.width) - margin[1] - margin[3]}px`,
                'height': `${parseInt(obj.size.height) - margin[0] - margin[2]}px`
            }
        }
        let $div = $('<div>', props);
        //Add the class to the HTML Body
        $div.addClass(objClasses);
        $('body').append($div);
    }

    $(document).ready(() => {
        tableauExt.initializeAsync().then(() => {
            init();
            //Register an event handler for Dashboard Object resize
            //Supports automatic sized dashboards and reloads
            let resizeEventHandler = tableauExt.dashboardContent.dashboard.addEventListener(tableau.TableauEventType.DashboardLayoutChanged, init);
        }, (err) => {
            console.log("Broken")
        });
    });

})();