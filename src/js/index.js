const body = window.document.body;
const tableauExt = window.tableau.extensions;

//Wrap everything into an anonymous function
(function () {
    async function init() {
        //clean up any divs from the last initialization
        body.innerHTML = '';
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
        const div = document.createElement('div');
        let objNameAndClasses = obj.name.split("|");
        let margin = getMarginFromObjClasses();
        //Parse the Name and Classes from the Object Name
        div.id = `${objNameAndClasses[0]}`;
        //Check if there are classes on the object
        if (objNameAndClasses.length > 1) {
            objClasses = objNameAndClasses[1];
            div.classList.add(objClasses);
            margin = getMarginFromObjClasses(objClasses);
        }
        // we need to check for padding classes first, as they must be handled via positioning    
        div.style.cssText = `position:absolute;top:${parseInt(obj.position.y) + margin[0]}px;left:${parseInt(obj.position.x) + margin[3]}px;width:${parseInt(obj.size.width) - margin[1] - margin[3]}px;height:${parseInt(obj.size.height) - margin[0] - margin[2]}px;`
        
        body.appendChild(div);
    }
    
    function ready(fn) {
      if (document.readyState !== 'loading'){
        fn();
        return;
      } 
      document.addEventListener('DOMContentLoaded', fn);
    }

    ready(function () {
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
