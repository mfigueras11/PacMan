import Level from './level1'

export default Level.extend({
    squareSize: 60,
    layout: [
        [2,2,2,2,2,2,2,2,2],
        [2,1,1,2,1,2,1,1,2],
        [2,1,2,2,2,2,2,1,2],
        [2,2,2,1,1,1,2,2,2],
        [2,1,2,2,2,2,2,1,2],
        [2,1,1,2,1,2,1,1,2],
        [2,2,2,2,2,2,2,2,2],
    ],
    
    startingPac: {
        x: 0,
        y: 3
    },

    ghostRetreat: {
        x: 4,
        y: 3,
    },

    startingGhosts: [
        {
            x: 0,
            y: 0
        },
        {
            x: 5,
            y: 0
        }]
})