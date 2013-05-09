Ext.define('EvaluateIt.profile.Base', {
    extend: 'Ext.app.Profile',
	requires: ['EvaluateIt.controller.GeolocationMaster', 'Ext.device.Geolocation', 'Ext.device.Notification'],

    launch: function() {
        var isBenchmarking = window.location.search.match(/(\?|&)bm/);

		//get_location();

		/*Ext.device.Geolocation.watchPosition({
			//frequency: 3000,
			scope: this,
			callback: function(position) {
				get_location();

			//	Ext.device.Notification.show({
			//		title: 'Geolocation',
			//		message: 'GPS found.'
			//	});
			},
			failure: function() {
				Ext.device.Notification.show({
					title: 'Geolocation',
					message: 'Something went wrong.'
				});
			}
    	});*/


		//alert('Device hath phyred - base!');
		//Wait for PhoneGap to load
		//document.addEventListener("deviceready", onDeviceReady, false);
	
		// wait till Phonegap has loaded
		//function onDeviceReady() {

		//	alert('Device hath phyred!'); 
		//	get_location();

		//}
        
		if (isBenchmarking) {
            Ext.Animator.on({
                animationend: 'onAnimationEnd',
                scope: this
            });

            this.benchmark = Ext.Viewport.add({
                style: 'background-color: red; color: #FFF',
                bottom: 0,
                right: 0,
                zIndex: 1000
            });
        }
    },

    onAnimationEnd: function(animator, animation, element) {
        var delay = (Date.now() - animation.startTime) - animation.getDuration(),
                benchmark = this.benchmark,
                item;

        item = benchmark.add({
            html: element.id + ' <b>' + delay + '</b>'
        });

        setTimeout(function() {
            item.destroy();
        }, 5000);
    }
});
