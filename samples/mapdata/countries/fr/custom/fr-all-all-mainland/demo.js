$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "fr-e-mb",
            "value": 0
        },
        {
            "hc-key": "fr-u-am",
            "value": 1
        },
        {
            "hc-key": "fr-u-vr",
            "value": 2
        },
        {
            "hc-key": "fr-r-vd",
            "value": 3
        },
        {
            "hc-key": "fr-v-ai",
            "value": 4
        },
        {
            "hc-key": "fr-k-ad",
            "value": 5
        },
        {
            "hc-key": "fr-u-vc",
            "value": 6
        },
        {
            "hc-key": "fr-n-hg",
            "value": 7
        },
        {
            "hc-key": "fr-m-mm",
            "value": 8
        },
        {
            "hc-key": "fr-o-no",
            "value": 9
        },
        {
            "hc-key": "fr-n-hp",
            "value": 10
        },
        {
            "hc-key": "fr-b-dd",
            "value": 11
        },
        {
            "hc-key": "fr-t-cm",
            "value": 12
        },
        {
            "hc-key": "fr-u-ap",
            "value": 13
        },
        {
            "hc-key": "fr-s-as",
            "value": 14
        },
        {
            "hc-key": "fr-n-av",
            "value": 15
        },
        {
            "hc-key": "fr-k-ga",
            "value": 16
        },
        {
            "hc-key": "fr-g-ab",
            "value": 17
        },
        {
            "hc-key": "fr-d-co",
            "value": 18
        },
        {
            "hc-key": "fr-d-sl",
            "value": 19
        },
        {
            "hc-key": "fr-f-ch",
            "value": 20
        },
        {
            "hc-key": "fr-l-cr",
            "value": 21
        },
        {
            "hc-key": "fr-r-ml",
            "value": 22
        },
        {
            "hc-key": "fr-t-ds",
            "value": 23
        },
        {
            "hc-key": "fr-t-ct",
            "value": 24
        },
        {
            "hc-key": "fr-v-dm",
            "value": 25
        },
        {
            "hc-key": "fr-v-ah",
            "value": 26
        },
        {
            "hc-key": "fr-q-eu",
            "value": 27
        },
        {
            "hc-key": "fr-j-es",
            "value": 28
        },
        {
            "hc-key": "fr-f-el",
            "value": 29
        },
        {
            "hc-key": "fr-v-hs",
            "value": 30
        },
        {
            "hc-key": "fr-j-hd",
            "value": 31
        },
        {
            "hc-key": "fr-r-st",
            "value": 32
        },
        {
            "hc-key": "fr-f-il",
            "value": 33
        },
        {
            "hc-key": "fr-v-is",
            "value": 34
        },
        {
            "hc-key": "fr-i-ju",
            "value": 35
        },
        {
            "hc-key": "fr-v-lr",
            "value": 36
        },
        {
            "hc-key": "fr-c-cl",
            "value": 37
        },
        {
            "hc-key": "fr-n-lo",
            "value": 38
        },
        {
            "hc-key": "fr-n-tg",
            "value": 39
        },
        {
            "hc-key": "fr-b-lg",
            "value": 40
        },
        {
            "hc-key": "fr-e-iv",
            "value": 41
        },
        {
            "hc-key": "fr-m-ms",
            "value": 42
        },
        {
            "hc-key": "fr-d-ni",
            "value": 43
        },
        {
            "hc-key": "fr-f-lt",
            "value": 44
        },
        {
            "hc-key": "fr-j-vp",
            "value": 45
        },
        {
            "hc-key": "fr-n-ge",
            "value": 46
        },
        {
            "hc-key": "fr-b-pa",
            "value": 47
        },
        {
            "hc-key": "fr-j-se",
            "value": 48
        },
        {
            "hc-key": "fr-j-ss",
            "value": 49
        },
        {
            "hc-key": "fr-s-so",
            "value": 50
        },
        {
            "hc-key": "fr-i-tb",
            "value": 51
        },
        {
            "hc-key": "fr-i-hn",
            "value": 52
        },
        {
            "hc-key": "fr-j-vo",
            "value": 53
        },
        {
            "hc-key": "fr-j-vm",
            "value": 54
        },
        {
            "hc-key": "fr-t-vn",
            "value": 55
        },
        {
            "hc-key": "fr-m-vg",
            "value": 56
        },
        {
            "hc-key": "fr-j-yv",
            "value": 57
        },
        {
            "hc-key": "fr-u-bd",
            "value": 58
        },
        {
            "hc-key": "fr-f-lc",
            "value": 59
        },
        {
            "hc-key": "fr-e-fi",
            "value": 60
        },
        {
            "hc-key": "fr-p-mh",
            "value": 61
        },
        {
            "hc-key": "fr-g-an",
            "value": 62
        },
        {
            "hc-key": "fr-n-ag",
            "value": 63
        },
        {
            "hc-key": "fr-a-br",
            "value": 64
        },
        {
            "hc-key": "fr-p-cv",
            "value": 65
        },
        {
            "hc-key": "fr-e-ca",
            "value": 66
        },
        {
            "hc-key": "fr-l-cz",
            "value": 67
        },
        {
            "hc-key": "fr-i-db",
            "value": 68
        },
        {
            "hc-key": "fr-b-gi",
            "value": 69
        },
        {
            "hc-key": "fr-a-hr",
            "value": 70
        },
        {
            "hc-key": "fr-c-hl",
            "value": 71
        },
        {
            "hc-key": "fr-g-hm",
            "value": 72
        },
        {
            "hc-key": "fr-u-ha",
            "value": 73
        },
        {
            "hc-key": "fr-k-he",
            "value": 74
        },
        {
            "hc-key": "fr-b-ld",
            "value": 75
        },
        {
            "hc-key": "fr-r-la",
            "value": 76
        },
        {
            "hc-key": "fr-g-mr",
            "value": 77
        },
        {
            "hc-key": "fr-r-my",
            "value": 78
        },
        {
            "hc-key": "fr-m-mo",
            "value": 79
        },
        {
            "hc-key": "fr-p-or",
            "value": 80
        },
        {
            "hc-key": "fr-o-pc",
            "value": 81
        },
        {
            "hc-key": "fr-k-po",
            "value": 82
        },
        {
            "hc-key": "fr-c-al",
            "value": 83
        },
        {
            "hc-key": "fr-v-sv",
            "value": 84
        },
        {
            "hc-key": "fr-q-sm",
            "value": 85
        },
        {
            "hc-key": "fr-s-oi",
            "value": 86
        },
        {
            "hc-key": "fr-c-pd",
            "value": 87
        },
        {
            "hc-key": "fr-l-hv",
            "value": 88
        },
        {
            "hc-key": "fr-f-in",
            "value": 89
        },
        {
            "hc-key": "fr-k-lz",
            "value": 90
        },
        {
            "hc-key": "fr-v-rh",
            "value": 91
        },
        {
            "hc-key": "fr-n-ta",
            "value": 92
        },
        {
            "hc-key": "fr-d-yo",
            "value": 93
        },
        {
            "value": 94
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/fr/custom/fr-all-all-mainland.js">France, mainland admin2</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/fr/custom/fr-all-all-mainland'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
