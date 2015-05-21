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
                            id: '_06_03',
                            type: 'image',
                            rect: ['133', '56', '1146px', '769px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"06_03.jpg",'0px','0px']
                        },
                        {
                            id: '_06_06',
                            type: 'image',
                            rect: ['67', '840', '1146px', '290px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"06_06.jpg",'0px','0px']
                        },
                        {
                            id: '_06_09',
                            type: 'image',
                            rect: ['65', '1174', '1148px', '718px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"06_09.png",'0px','0px']
                        },
                        {
                            id: '_06_032',
                            type: 'image',
                            rect: ['578', '142', '237px', '88px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"06_03.png",'0px','0px']
                        },
                        {
                            id: '_06_07',
                            type: 'image',
                            rect: ['548', '220', '222px', '44px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"06_07.png",'0px','0px']
                        },
                        {
                            id: '_06_11',
                            type: 'image',
                            rect: ['603', '274', '212px', '69px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"06_11.png",'0px','0px']
                        },
                        {
                            id: '_06_15',
                            type: 'image',
                            rect: ['568', '965', '182px', '40px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"06_15.png",'0px','0px']
                        },
                        {
                            id: '_06_19',
                            type: 'image',
                            rect: ['982', '1790', '198px', '37px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"06_19.png",'0px','0px']
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
                            "eid7",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_06_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            4250,
                            750,
                            "linear",
                            "${_06_19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2000,
                            750,
                            "linear",
                            "${_06_15}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${_06_07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            3750,
                            1250,
                            "linear",
                            "${_06_09}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "top",
                            3250,
                            1750,
                            "linear",
                            "${_06_09}",
                            '1174px',
                            '1144px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${_06_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${_06_032}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${_06_07}",
                            '220px',
                            '230px'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1250,
                            2000,
                            "linear",
                            "${_06_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            750,
                            "linear",
                            "${_06_03}",
                            '133px',
                            '72px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("06_edgeActions.js");
})("EDGE-807889718");
