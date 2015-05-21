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
                            id: '_03_06',
                            type: 'image',
                            rect: ['49', '76', '473px', '458px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"03_06.png",'0px','0px']
                        },
                        {
                            id: '_03_03',
                            type: 'image',
                            rect: ['566', '76', '340px', '458px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_03.png",'0px','0px']
                        },
                        {
                            id: '_03_09',
                            type: 'image',
                            rect: ['943', '76', '288px', '458px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_09.png",'0px','0px']
                        },
                        {
                            id: '_03_15',
                            type: 'image',
                            rect: ['77', '568', '330px', '744px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_15.png",'0px','0px']
                        },
                        {
                            id: '_03_17',
                            type: 'image',
                            rect: ['447', '548', '794px', '744px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"03_17.png",'0px','0px']
                        },
                        {
                            id: '_03_21',
                            type: 'image',
                            rect: ['77', '1303', '537px', '560px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_21.png",'0px','0px']
                        },
                        {
                            id: '_03_23',
                            type: 'image',
                            rect: ['656', '1303', '585px', '560px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"03_23.png",'0px','0px']
                        },
                        {
                            id: '_03_03_03',
                            type: 'image',
                            rect: ['110', '106', '164px', '72px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_03_03.png",'0px','0px']
                        },
                        {
                            id: '_03_03_06',
                            type: 'image',
                            rect: ['513', '150', '78px', '56px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"03_03_06.png",'0px','0px']
                        },
                        {
                            id: '_03_03_11',
                            type: 'image',
                            rect: ['829', '305', '154px', '66px', 'auto', 'auto'],
                            opacity: '0.008130080997943878',
                            fill: ["rgba(0,0,0,0)",im+"03_03_11.png",'0px','0px']
                        },
                        {
                            id: '_03_03_15',
                            type: 'image',
                            rect: ['988', '465', '161px', '55px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_03_15.png",'0px','0px']
                        },
                        {
                            id: '_03_22',
                            type: 'image',
                            rect: ['355', '806', '123px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_22.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: '_03_03_26',
                            type: 'image',
                            rect: ['790', '734', '213px', '119px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"03_03_26.png",'0px','0px']
                        },
                        {
                            id: '_03_03_19',
                            type: 'image',
                            rect: ['499', '614', '224px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_03_19.png",'0px','0px']
                        },
                        {
                            id: '_03_03_30',
                            type: 'image',
                            rect: ['939', '1796', '260px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"03_03_30.png",'0px','0px']
                        },
                        {
                            id: '_03_03_23',
                            type: 'image',
                            rect: ['497', '667', '205px', '88px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"03_03_23.png",'0px','0px']
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
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "left",
                            1000,
                            750,
                            "easeInCubic",
                            "${_03_09}",
                            '943px',
                            '919px'
                        ],
                        [
                            "eid14",
                            "opacity",
                            1000,
                            750,
                            "easeInCubic",
                            "${_03_09}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1750,
                            500,
                            "easeInCubic",
                            "${_03_15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11",
                            "opacity",
                            1000,
                            250,
                            "easeInCubic",
                            "${_03_03_11}",
                            '0.008130080997943878',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2250,
                            500,
                            "easeInBack",
                            "${_03_17}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            2000,
                            250,
                            "easeInBack",
                            "${_03_22}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid23",
                            "top",
                            1250,
                            1000,
                            "easeInCubic",
                            "${_03_15}",
                            '568px',
                            '548px'
                        ],
                        [
                            "eid52",
                            "opacity",
                            5250,
                            750,
                            "easeInQuad",
                            "${_03_03_30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2000,
                            750,
                            "easeInBack",
                            "${_03_03_19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            4500,
                            1000,
                            "easeInQuad",
                            "${_03_23}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "left",
                            4500,
                            1000,
                            "easeInQuad",
                            "${_03_23}",
                            '656px',
                            '626px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            250,
                            500,
                            "easeInCubic",
                            "${_03_03_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            750,
                            "linear",
                            "${_03_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1500,
                            250,
                            "easeInCubic",
                            "${_03_03_15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "opacity",
                            750,
                            500,
                            "easeInCubic",
                            "${_03_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2750,
                            250,
                            "easeInQuad",
                            "${_03_03_26}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            500,
                            250,
                            "easeInCubic",
                            "${_03_03_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "left",
                            2000,
                            750,
                            "easeInBack",
                            "${_03_17}",
                            '447px',
                            '417px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            2000,
                            250,
                            "easeInCubic",
                            "${_03_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            2000,
                            250,
                            "easeInBack",
                            "${_03_22}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            2750,
                            1750,
                            "easeInQuad",
                            "${_03_21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "left",
                            0,
                            750,
                            "linear",
                            "${_03_06}",
                            '49px',
                            '79px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2500,
                            500,
                            "easeInQuad",
                            "${_03_03_23}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid39",
                            "left",
                            2000,
                            750,
                            "easeInQuad",
                            "${_03_03_19}",
                            '499px',
                            '479px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("03_edgeActions.js");
})("EDGE-807511287");
