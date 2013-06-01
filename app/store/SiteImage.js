Ext.define('EvaluateIt.store.SiteImage',{
    extend: 'Ext.data.Store',
    xtype:'imagesqueue',
    requires:['Ext.data.proxy.LocalStorage'],
    config: {
        fields:['timestamp','src'],
        belongsTo: [{ model: 'EvaluateIt.model.Site', associationKey: 'siteId' }],
        storeId:'theImageQueue',
        autoLoad:true,
        proxy:{
            type:'localstorage',
            id:'idImagesQueue',
            reader: {
                type: 'json'
            }
        }
    }
});