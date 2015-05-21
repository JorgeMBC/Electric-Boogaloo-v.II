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
                            id: '_01_03',
                            type: 'image',
                            rect: ['68', '4', '1144px', '716px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_03.jpg",'0px','0px']
                        },
                        {
                            id: '_01_06',
                            type: 'image',
                            rect: ['68', '859', '572px', '511px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_06.jpg",'0px','0px']
                        },
                        {
                            id: '_01_08',
                            type: 'image',
                            rect: ['650', '799', '562px', '511px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_08.jpg",'0px','0px']
                        },
                        {
                            id: '_01_12',
                            type: 'image',
                            rect: ['67', '1323', '1146px', '538px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_12.png",'0px','0px']
                        },
                        {
                            id: '_01_032',
                            type: 'image',
                            rect: ['541', '109', '158px', '32px', 'auto', 'auto'],
                            opacity: '0.070000000298023',
                            fill: ["rgba(0,0,0,0)",im+"01_03.png",'0px','0px']
                        },
                        {
                            id: '_01_07',
                            type: 'image',
                            rect: ['640', '693', '196px', '90px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_07.png",'0px','0px']
                        },
                        {
                            id: '_01_11',
                            type: 'image',
                            rect: ['86', '822', '208px', '82px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_11.png",'0px','0px']
                        },
                        {
                            id: '_01_19',
                            type: 'image',
                            rect: ['439', '993', '204px', '36px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_19.png",'0px','0px']
                        },
                        {
                            id: '_01_22',
                            type: 'image',
                            rect: ['444', '1031', '183px', '47px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_22.png",'0px','0px']
                        },
                        {
                            id: '_01_26',
                            type: 'image',
                            rect: ['435', '1207', '185px', '86px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_26.png",'0px','0px']
                        },
                        {
                            id: '_01_14',
                            type: 'image',
                            rect: ['711', '852', '144px', '61px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_14.png",'0px','0px']
                        },
                        {
                            id: '_01_29',
                            type: 'image',
                            rect: ['845', '1173', '171px', '41px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_29.png",'0px','0px']
                        },
                        {
                            id: '_01_34',
                            type: 'image',
                            rect: ['949', '1339', '237px', '75px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"01_34.png",'0px','0px']
                        },
                        {
                            id: '_01_38',
                            type: 'image',
                            rect: ['359', '1578', '567px', '27px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"01_38.png",'0px','0px']
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
                    duration: 4500,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "opacity",
                            2925,
                            575,
                            "easeInQuad",
                            "${_01_08}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            1500,
                            1000,
                            "easeOutQuad",
                            "${_01_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            3500,
                            1000,
                            "linear",
                            "${_01_12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${_01_11}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            2675,
                            575,
                            "linear",
                            "${_01_14}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            0,
                            1045,
                            "easeInQuad",
                            "${_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            3562,
                            938,
                            "linear",
                            "${_01_38}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "top",
                            1500,
                            625,
                            "easeInQuad",
                            "${_01_06}",
                            '859px',
                            '799px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            523,
                            "easeInQuad",
                            "${_01_032}",
                            '0.070000000298023',
                            '0.000000'
                        ],
                        [
                            "eid30",
                            "opacity",
                            523,
                            500,
                            "linear",
                            "${_01_032}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${_01_07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2250,
                            425,
                            "linear",
                            "${_01_26}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            3562,
                            438,
                            "easeOutQuint",
                            "${_01_34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2000,
                            375,
                            "linear",
                            "${_01_19}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            523,
                            "easeInQuad",
                            "${_01_03}",
                            '4px',
                            '74px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${_01_22}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            3250,
                            312,
                            "easeInQuad",
                            "${_01_29}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("01_edgeActions.js");
})("EDGE-803572747");
