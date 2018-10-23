import Ember from 'ember';

export default Ember.Object.extend({
    layout: [ [2,2,2,2,2,2,2,1],
            [2,1,2,1,2,2,2,1],
            [2,2,1,2,3,2,2,1],
            [2,2,2,2,2,2,2,1],
            [2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,1],
    ],

    teleport: false,

    startingPac: {
        x: 0,
        y: 0
    },

    startingGhosts: [
        {
            x: 1,
            y: 2
        }
    ],

    ghostRetreat: {
        x: 2,
        y: 2
    },

    squareSize: 40,

    width: Ember.computed(function(){return this.get('grid.firstObject.length');}),
    height: Ember.computed(function(){return this.get('grid.length');}),
    pixelWidth: Ember.computed(function(){return this.get('width') * this.get('squareSize');}),
    pixelHeight: Ember.computed(function(){return this.get('height') * this.get('squareSize');}),

    isComplete(){
        let grid = this.get('grid')
        let hasPelletsLeft = false;
        grid.forEach((row)=>{
            row.forEach((cell)=>{
                if (cell == 2)
                    hasPelletsLeft = true;
            })
        })
        return !hasPelletsLeft;
    },

    restart(){
        let grid = jQuery.extend(true, [], this.get('layout'));
        this.set('grid', grid);
    },
})