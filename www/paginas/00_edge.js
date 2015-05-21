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
                            id: '_00A',
                            type: 'image',
                            rect: ['0', '0', '1280px', '1920px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"00A.jpg",'0px','0px']
                        },
                        {
                            id: '_00C',
                            type: 'image',
                            rect: ['0', '1', '1280px', '91px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"00C.jpg",'0px','0px']
                        },
                        {
                            id: '_00B',
                            type: 'image',
                            rect: ['247', '245', '910px', '436px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"00B.png",'0px','0px']
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
                            "eid10",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuart",
                            "${_00A}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            1000,
                            500,
                            "easeOutQuart",
                            "${_00B}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("00_edgeActions.js");
})("EDGE-800674447");
