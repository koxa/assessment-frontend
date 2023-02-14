const VALUES = require('../values');

module.exports = {
    variables: [
        {
            name: 'show_image',
            type: 'string',
            initialValue: 'hide'
        },
        {
            name: 'location',
            type: 'string',
            initialValue: 'ny'
        }
    ],
    lists: [
        {
            id: 0,
            components: [3, 4, 31, 32, 33, 24, 22, 23, 25, 26, 27, 28, 29, 30]
        }
    ],
    components: [
        {
            id: 1,
            type: 'button',
            options: {
                text: 'Show',
                variable: 'show_image',
                value: 'show'
            }
        },
        {
            id: 2,
            type: 'button',
            options: {
                text: 'Hide',
                variable: 'show_image',
                value: 'hide'
            }
        },
        {
            id: 3,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'hide'
            },
            children: 1
        },
        {
            id: 4,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show'
            },
            children: 2
        },
        {
            id: 5,
            type: 'button',
            options: {
                text: 'New York',
                variable: 'location',
                value: 'ny'
            }
        },
        {
            id: 6,
            type: 'button',
            options: {
                text: 'San Francisco',
                variable: 'location',
                value: 'ca'
            }
        },
        {
            id: 7,
            type: 'button',
            options: {
                text: 'Chicago',
                variable: 'location',
                value: 'ch'
            }
        },
        {
            id: 11,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[0].lon,
                lat: VALUES.WEATHER_LOCATIONS[0].lat
            }
        },
        {
            id: 12,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[1].lon,
                lat: VALUES.WEATHER_LOCATIONS[1].lat
            }
        },
        {
            id: 13,
            type: 'weather',
            options: {
                lon: VALUES.WEATHER_LOCATIONS[2].lon,
                lat: VALUES.WEATHER_LOCATIONS[2].lat
            }
        },
        {
            id: 17,
            type: 'image',
            options: VALUES.IMAGES[0]
        },
        {
            id: 18,
            type: 'image',
            options: VALUES.IMAGES[1]
        },
        {
            id: 19,
            type: 'image',
            options: VALUES.IMAGES[2]
        },
        {
            id: 22,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ch'
            },
            children: 13
        },
        {
            id: 23,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ny'
            },
            children: 7
        },
        {
            id: 24,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ny'
            },
            children: 11
        },
        {
            id: 25,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ny'
            },
            children: 6
        },
        {
            id: 26,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ch'
            },
            children: 6
        },
        {
            id: 27,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ch'
            },
            children: 5
        },
        {
            id: 28,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ca'
            },
            children: 12
        },
        {
            id: 29,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ca'
            },
            children: 5
        },
        {
            id: 30,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ca'
            },
            children: 7
        },
        {
            id: 31,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ny'
            },
            children: 310
        },
        {
            id: 310,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show'
            },
            children: 17
        },
        {
            id: 32,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ca'
            },
            children: 320
        },
        {
            id: 320,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show'
            },
            children: 18
        },
        {
            id: 33,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ch'
            },
            children: 330
        },
        {
            id: 330,
            type: 'condition',
            options: {
                variable: 'show_image',
                value: 'show'
            },
            children: 19
        }
    ]
};
