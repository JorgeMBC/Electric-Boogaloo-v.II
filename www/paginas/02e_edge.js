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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_02_02',
                            type: 'image',
                            rect: ['0', '1246', '1280px', '674px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"02_02.png",'0px','0px']
                        },
                        {
                            id: '_02_03',
                            type: 'image',
                            rect: ['129', '64', '1141px', '815px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"02_03.jpg",'0px','0px']
                        },
                        {
                            id: '_02_062',
                            type: 'image',
                            rect: ['69', '929', '1141px', '550px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"02_062.png",'0px','0px']
                        },
                        {
                            id: '_02_032',
                            type: 'image',
                            rect: ['128', '105', '162px', '52px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo10.png",'0px','0px']
                        },
                        {
                            id: '_02_07',
                            type: 'image',
                            rect: ['138', '158', '211px', '88px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo11.png",'0px','0px']
                        },
                        {
                            id: '_02_11',
                            type: 'image',
                            rect: ['171', '248', '178px', '62px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo12.png",'0px','0px']
                        },
                        {
                            id: '_02_14',
                            type: 'image',
                            rect: ['861', '786', '233px', '77px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo13.png",'0px','0px']
                        },
                        {
                            id: '_02_18',
                            type: 'image',
                            rect: ['304', '999', '187px', '37px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo14.png",'0px','0px']
                        },
                        {
                            id: '_02_22',
                            type: 'image',
                            rect: ['695', '1246', '148px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo15.png",'0px','0px']
                        },
                        {
                            id: '_02_26',
                            type: 'image',
                            rect: ['693', '1339', '151px', '73px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"dialogo16.png",'0px','0px']
                        },
                        {
                            id: '_02_30',
                            type: 'image',
                            rect: ['431', '1492', '144px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo17.png",'0px','0px']
                        },
                        {
                            id: '_02_34',
                            type: 'image',
                            rect: ['592', '1710', '124px', '73px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dialogo18.png",'0px','0px']
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
                            "eid33",
                            "opacity",
                            4750,
                            130,
                            "easeInQuad",
                            "${_02_30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            4750,
                            250,
                            "easeInQuad",
                            "${_02_34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            3250,
                            500,
                            "easeInQuad",
                            "${_02_26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2250,
                            500,
                            "easeInQuad",
                            "${_02_18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            750,
                            500,
                            "easeInQuad",
                            "${_02_07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            500,
                            500,
                            "easeInQuad",
                            "${_02_032}",
                            '0',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2500,
                            500,
                            "easeInQuad",
                            "${_02_062}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${_02_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "top",
                            2250,
                            750,
                            "easeInQuad",
                            "${_02_062}",
                            '929px',
                            '889px'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1250,
                            500,
                            "easeInQuad",
                            "${_02_14}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "top",
                            2000,
                            500,
                            "easeInQuad",
                            "${_02_18}",
                            '999px',
                            '989px'
                        ],
                        [
                            "eid12",
                            "left",
                            500,
                            750,
                            "easeInQuad",
                            "${_02_07}",
                            '138px',
                            '118px'
                        ],
                        [
                            "eid16",
                            "left",
                            1000,
                            250,
                            "linear",
                            "${_02_11}",
                            '171px',
                            '151px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_02_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            3000,
                            500,
                            "easeInQuad",
                            "${_02_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            750,
                            "easeInQuad",
                            "${_02_03}",
                            '129px',
                            '69px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            4000,
                            750,
                            "easeInQuad",
                            "${_02_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "left",
                            250,
                            750,
                            "easeInQuad",
                            "${_02_032}",
                            '128px',
                            '118px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("02e_edgeActions.js");
})("EDGE-807357463");
