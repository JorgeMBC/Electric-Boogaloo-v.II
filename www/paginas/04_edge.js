/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_04_03',
                            type: 'image',
                            rect: ['66', '60', '1147px', '290px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"04_03.jpg",'0px','0px']
                        },
                        {
                            id: '_04_06',
                            type: 'image',
                            rect: ['66', '428', '1149px', '719px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"04_06.jpg",'0px','0px']
                        },
                        {
                            id: '_04_10',
                            type: 'image',
                            rect: ['136', '1104', '1147px', '769px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"04_10.png",'0px','0px']
                        },
                        {
                            id: '_04_032',
                            type: 'image',
                            rect: ['535', '183', '211px', '54px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"04_03.png",'0px','0px']
                        },
                        {
                            id: '_04_07',
                            type: 'image',
                            rect: ['378', '562', '152px', '47px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"04_07.png",'0px','0px']
                        },
                        {
                            id: '_04_11',
                            type: 'image',
                            rect: ['345', '636', '217px', '92px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"04_11.png",'0px','0px']
                        },
                        {
                            id: '_04_15',
                            type: 'image',
                            rect: ['717', '1506', '206px', '116px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"04_15.png",'0px','0px'],
                            transform: [[],[],[],['0.85','0.85']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '1920', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "top",
                            2000,
                            750,
                            "linear",
                            "${_04_07}",
                            '562px',
                            '582px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1750,
                            "linear",
                            "${_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            3000,
                            750,
                            "linear",
                            "${_04_11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "top",
                            1420,
                            1580,
                            "easeInQuad",
                            "${_04_06}",
                            '428px',
                            '368px'
                        ],
                        [
                            "eid14",
                            "left",
                            4207,
                            543,
                            "easeInBack",
                            "${_04_10}",
                            '136px',
                            '66px'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${_04_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            3750,
                            457,
                            "easeInBack",
                            "${_04_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            4250,
                            750,
                            "easeInBack",
                            "${_04_15}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            4250,
                            750,
                            "easeInBack",
                            "${_04_15}",
                            '0.85',
                            '1'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            4250,
                            750,
                            "easeInBack",
                            "${_04_15}",
                            '0.85',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${_04_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            485,
                            1015,
                            "linear",
                            "${_04_032}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("04_edgeActions.js");
})("EDGE-807736534");
