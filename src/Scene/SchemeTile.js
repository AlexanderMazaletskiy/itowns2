/**
* Generated On: 2015-10-5
* Class: SchemeTile
* Description: Cette classe décrit un découpage spatiale. 
*/


define('Scene/SchemeTile',['Scene/BoudingBox'], function(BoudingBox){

    function SchemeTile(){
        //Constructor

        this.maximumChildren    = 4;
        this.schemeBB           = [];
           
    }
    /**
     * 
     * @param {type} minLo
     * @param {type} maxLo
     * @param {type} minLa
     * @param {type} maxLa
     * @returns {SchemeTile_L8.SchemeTile.prototype@pro;schemeBB@call;push}
     */
     
    SchemeTile.prototype.add = function(minLo,maxLo,minLa,maxLa)
    {
        return this.schemeBB.push(new BoudingBox(minLo,maxLo,minLa,maxLa));
    };
    
    
    SchemeTile.prototype.rootCount = function()
    {
        return this.schemeBB.length;
    };
    
    SchemeTile.prototype.getRoot = function(id)
    {        
        return this.schemeBB[id];
    };
    

    return SchemeTile;
    
});