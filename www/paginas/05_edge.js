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
                            id: '_05_03',
                            type: 'image',
                            rect: ['67', '29', '1146px', '709px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"05_03.jpg",'0px','0px']
                        },
                        {
                            id: '_05_06',
                            type: 'image',
                            rect: ['67', '751', '1146px', '1156px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"05_06.png",'0px','0px']
                        },
                        {
                            id: '_05_032',
                            type: 'image',
                            rect: ['84', '275', '285px', '457px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"05_03.png",'0px','0px']
                        },
                        {
                            id: '_05_11',
                            type: 'image',
                            rect: ['178', '469', '323px', '69px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"05_11.png",'0px','0px']
                        },
                        {
                            id: '_05_08',
                            type: 'image',
                            rect: ['708', '509', '323px', '223px', 'auto', 'auto'],
                            opacity: '0.008130',
                            fill: ["rgba(0,0,0,0)",im+"05_08.png",'0px','0px']
                        },
                        {
                            id: '_05_14',
                            type: 'image',
                            rect: ['435', '787', '369px', '631px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"05_14.png",'0px','0px']
                        },
                        {
                            id: '_05_18',
                            type: 'image',
                            rect: ['435', '1516', '196px', '84px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"05_18.png",'0px','0px']
                        },
                        {
                            id: '_05_05',
                            type: 'image',
                            rect: ['467', '275', '273px', '457px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"05_05.png",'0px','0px']
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
                            "eid2",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_05_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2000,
                            1250,
                            "easeInQuad",
                            "${_05_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            4250,
                            750,
                            "easeInQuad",
                            "${_05_18}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            3250,
                            750,
                            "easeInQuad",
                            "${_05_14}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            250,
                            250,
                            "easeInQuad",
                            "${_05_032}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            500,
                            750,
                            "easeInQuad",
                            "${_05_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            1000,
                            500,
                            "easeInQuad",
                            "${_05_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            1500,
                            500,
                            "easeInQuad",
                            "${_05_08}",
                            '0.008130',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("05_edgeActions.js");
})("EDGE-807819582");
