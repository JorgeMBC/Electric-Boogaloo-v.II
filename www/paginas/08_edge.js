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
                            id: '_08',
                            type: 'image',
                            rect: ['0', '-1', '1280px', '1920px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08.jpg",'0px','0px']
                        },
                        {
                            id: '_08Copy',
                            type: 'image',
                            rect: ['0', '-1', '1280px', '1920px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08.jpg",'0px','0px']
                        },
                        {
                            id: '_08_03',
                            type: 'image',
                            rect: ['482', '384', '315px', '55px', 'auto', 'auto'],
                            opacity: '0.008130',
                            fill: ["rgba(0,0,0,0)",im+"08_03.png",'0px','0px']
                        },
                        {
                            id: '_08_07',
                            type: 'image',
                            rect: ['454', '750', '371px', '168px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"08_07.png",'0px','0px']
                        },
                        {
                            id: '_08_11',
                            type: 'image',
                            rect: ['309', '1672', '662px', '117px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08_11.png",'0px','0px']
                        },
                        {
                            id: '_08_012',
                            type: 'image',
                            rect: ['236', '402', '910px', '436px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08_01.png",'0px','0px']
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
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "opacity",
                            500,
                            1000,
                            "linear",
                            "${_08_07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_08_03}",
                            '0.008130',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("08_edgeActions.js");
})("EDGE-808087423");
