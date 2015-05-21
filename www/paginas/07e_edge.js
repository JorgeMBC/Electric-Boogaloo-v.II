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
                            id: '_07_03',
                            type: 'image',
                            rect: ['65', '58', '1150px', '754px', 'auto', 'auto'],
                            opacity: '0.024390',
                            fill: ["rgba(0,0,0,0)",im+"07_03.jpg",'0px','0px']
                        },
                        {
                            id: '_07_07',
                            type: 'image',
                            rect: ['195', '820', '400px', '373px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"07_07.jpg",'0px','0px']
                        },
                        {
                            id: '_07_09',
                            type: 'image',
                            rect: ['644', '820', '348px', '373px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"07_09.jpg",'0px','0px']
                        },
                        {
                            id: '_07_12',
                            type: 'image',
                            rect: ['998', '821', '387px', '371px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"07_12.jpg",'0px','0px']
                        },
                        {
                            id: '_07_18',
                            type: 'image',
                            rect: ['65', '1203', '1146px', '633px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"07_03.jpg",'0px','0px']
                        },
                        {
                            id: '_07_30',
                            type: 'image',
                            rect: ['687', '1629', '315px', '168px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"07_30.png",'0px','0px'],
                            transform: [[],[],[],['0.6','0.6']]
                        },
                        {
                            id: '_07_26',
                            type: 'image',
                            rect: ['928', '1312', '200px', '32px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo50.png",'0px','0px']
                        },
                        {
                            id: '_07_15',
                            type: 'image',
                            rect: ['901', '1192', '241px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo47.png",'0px','0px']
                        },
                        {
                            id: '_07_11',
                            type: 'image',
                            rect: ['680', '492', '193px', '50px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo46.png",'0px','0px']
                        },
                        {
                            id: '_07_072',
                            type: 'image',
                            rect: ['276', '274', '173px', '32px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo45.png",'0px','0px']
                        },
                        {
                            id: '_07_032',
                            type: 'image',
                            rect: ['126', '184', '140px', '68px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo44.png",'0px','0px']
                        },
                        {
                            id: '_07_20',
                            type: 'image',
                            rect: ['572', '1187', '173px', '34px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo49.png",'0px','0px']
                        },
                        {
                            id: '_07_18_1',
                            type: 'image',
                            rect: ['188', '1187', '229px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo48.png",'0px','0px']
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
                    duration: 5500,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${_07_26}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11",
                            "left",
                            500,
                            500,
                            "linear",
                            "${_07_072}",
                            '276px',
                            '286px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            250,
                            750,
                            "linear",
                            "${_07_032}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            3000,
                            351,
                            "linear",
                            "${_07_15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${_07_072}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21",
                            "left",
                            2750,
                            500,
                            "linear",
                            "${_07_12}",
                            '998px',
                            '828px'
                        ],
                        [
                            "eid33",
                            "top",
                            2630,
                            250,
                            "linear",
                            "${_07_20}",
                            '1187px',
                            '1147px'
                        ],
                        [
                            "eid30",
                            "top",
                            2500,
                            250,
                            "linear",
                            "${_07_18_1}",
                            '1187px',
                            '1147px'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            5000,
                            250,
                            "easeInExpo",
                            "${_07_30}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid38",
                            "top",
                            3000,
                            500,
                            "linear",
                            "${_07_15}",
                            '1192px',
                            '1112px'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            5000,
                            250,
                            "easeInExpo",
                            "${_07_30}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2500,
                            250,
                            "linear",
                            "${_07_18_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${_07_18}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${_07_11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid19",
                            "left",
                            2250,
                            250,
                            "linear",
                            "${_07_07}",
                            '195px',
                            '67px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${_07_30}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2630,
                            250,
                            "linear",
                            "${_07_20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_07_03}",
                            '0.024390',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2250,
                            155,
                            "linear",
                            "${_07_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${_07_09}",
                            '644px',
                            '474px'
                        ],
                        [
                            "eid7",
                            "left",
                            250,
                            750,
                            "linear",
                            "${_07_032}",
                            '126px',
                            '146px'
                        ],
                        [
                            "eid25",
                            "opacity",
                            2500,
                            260,
                            "linear",
                            "${_07_09}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2750,
                            500,
                            "linear",
                            "${_07_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "top",
                            5000,
                            250,
                            "linear",
                            "${_07_30}",
                            '1629px',
                            '1497px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("07e_edgeActions.js");
})("EDGE-807963095");
