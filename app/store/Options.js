/**
 * Menu structure of app using tree store data structure
 * Roots are defined by function; leaves are end points for navigating to specified views 
**/

(function () {

    var root = {
        id: 'root',
        text: 'EvaluateIt!',
        items: [
            {
                text: 'Manage Evaluations',
                id: 'ui',
                cls: 'launchscreen',
                items: [
                    {
                        text: 'Evaluation',
                        leaf: true,
                        id: 'evaluation',
            			category: 'evaluations'
                    }, 
                    {
                        text: 'Geolocation',
                        leaf: true,
                        id: 'geolocation',
            			category: 'geolocations'
                    }
		
                ]
            }
        ]
    };
 
    root.items.push({ 
        text: 'Manage Data',
        id: 'data',
		card: false,
        items: [
            {
                text: 'Pull',
                leaf: true,
                id: 'pull'
            },
		 	{
                text: 'Push',
                leaf: true,
                id: 'push',
				category: 'push'
            }

        ]
    });

    Ext.define('EvaluateIt.store.Options', {
        alias: 'store.Options',
        extend: 'Ext.data.TreeStore',
        requires: ['EvaluateIt.model.Option'],

        config: {
            model: 'EvaluateIt.model.Option',
            root: root,
            defaultRootProperty: 'items'
        }
    });
})();