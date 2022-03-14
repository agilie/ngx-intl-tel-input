(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('google-libphonenumber'), require('@angular/core'), require('@angular/forms'), require('ngx-bootstrap/utils'), require('@angular/common'), require('ngx-bootstrap/dropdown'), require('ngx-mask')) :
    typeof define === 'function' && define.amd ? define('ngx-intl-tel-input', ['exports', 'google-libphonenumber', '@angular/core', '@angular/forms', 'ngx-bootstrap/utils', '@angular/common', 'ngx-bootstrap/dropdown', 'ngx-mask'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-intl-tel-input"] = {}, global["^3"]["2"]["3"], global.ng.core, global.ng.forms, global.utils, global.ng.common, global["ngx-bootstrap-dropdown"], global.i4));
})(this, (function (exports, lpn, i0, i5, utils, i2, i3, i4) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var lpn__namespace = /*#__PURE__*/_interopNamespace(lpn);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    exports.CountryISO = void 0;
    (function (CountryISO) {
        CountryISO["Afghanistan"] = "af";
        CountryISO["Albania"] = "al";
        CountryISO["Algeria"] = "dz";
        CountryISO["AmericanSamoa"] = "as";
        CountryISO["Andorra"] = "ad";
        CountryISO["Angola"] = "ao";
        CountryISO["Anguilla"] = "ai";
        CountryISO["AntiguaAndBarbuda"] = "ag";
        CountryISO["Argentina"] = "ar";
        CountryISO["Armenia"] = "am";
        CountryISO["Aruba"] = "aw";
        CountryISO["Australia"] = "au";
        CountryISO["Austria"] = "at";
        CountryISO["Azerbaijan"] = "az";
        CountryISO["Bahamas"] = "bs";
        CountryISO["Bahrain"] = "bh";
        CountryISO["Bangladesh"] = "bd";
        CountryISO["Barbados"] = "bb";
        CountryISO["Belarus"] = "by";
        CountryISO["Belgium"] = "be";
        CountryISO["Belize"] = "bz";
        CountryISO["Benin"] = "bj";
        CountryISO["Bermuda"] = "bm";
        CountryISO["Bhutan"] = "bt";
        CountryISO["Bolivia"] = "bo";
        CountryISO["BosniaAndHerzegovina"] = "ba";
        CountryISO["Botswana"] = "bw";
        CountryISO["Brazil"] = "br";
        CountryISO["BritishIndianOceanTerritory"] = "io";
        CountryISO["BritishVirginIslands"] = "vg";
        CountryISO["Brunei"] = "bn";
        CountryISO["Bulgaria"] = "bg";
        CountryISO["BurkinaFaso"] = "bf";
        CountryISO["Burundi"] = "bi";
        CountryISO["Cambodia"] = "kh";
        CountryISO["Cameroon"] = "cm";
        CountryISO["Canada"] = "ca";
        CountryISO["CapeVerde"] = "cv";
        CountryISO["CaribbeanNetherlands"] = "bq";
        CountryISO["CaymanIslands"] = "ky";
        CountryISO["CentralAfricanRepublic"] = "cf";
        CountryISO["Chad"] = "td";
        CountryISO["Chile"] = "cl";
        CountryISO["China"] = "cn";
        CountryISO["ChristmasIsland"] = "cx";
        CountryISO["Cocos"] = "cc";
        CountryISO["Colombia"] = "co";
        CountryISO["Comoros"] = "km";
        CountryISO["CongoDRCJamhuriYaKidemokrasiaYaKongo"] = "cd";
        CountryISO["CongoRepublicCongoBrazzaville"] = "cg";
        CountryISO["CookIslands"] = "ck";
        CountryISO["CostaRica"] = "cr";
        CountryISO["C\u00F4teDIvoire"] = "ci";
        CountryISO["Croatia"] = "hr";
        CountryISO["Cuba"] = "cu";
        CountryISO["Cura\u00E7ao"] = "cw";
        CountryISO["Cyprus"] = "cy";
        CountryISO["CzechRepublic"] = "cz";
        CountryISO["Denmark"] = "dk";
        CountryISO["Djibouti"] = "dj";
        CountryISO["Dominica"] = "dm";
        CountryISO["DominicanRepublic"] = "do";
        CountryISO["Ecuador"] = "ec";
        CountryISO["Egypt"] = "eg";
        CountryISO["ElSalvador"] = "sv";
        CountryISO["EquatorialGuinea"] = "gq";
        CountryISO["Eritrea"] = "er";
        CountryISO["Estonia"] = "ee";
        CountryISO["Ethiopia"] = "et";
        CountryISO["FalklandIslands"] = "fk";
        CountryISO["FaroeIslands"] = "fo";
        CountryISO["Fiji"] = "fj";
        CountryISO["Finland"] = "fi";
        CountryISO["France"] = "fr";
        CountryISO["FrenchGuiana"] = "gf";
        CountryISO["FrenchPolynesia"] = "pf";
        CountryISO["Gabon"] = "ga";
        CountryISO["Gambia"] = "gm";
        CountryISO["Georgia"] = "ge";
        CountryISO["Germany"] = "de";
        CountryISO["Ghana"] = "gh";
        CountryISO["Gibraltar"] = "gi";
        CountryISO["Greece"] = "gr";
        CountryISO["Greenland"] = "gl";
        CountryISO["Grenada"] = "gd";
        CountryISO["Guadeloupe"] = "gp";
        CountryISO["Guam"] = "gu";
        CountryISO["Guatemala"] = "gt";
        CountryISO["Guernsey"] = "gg";
        CountryISO["Guinea"] = "gn";
        CountryISO["GuineaBissau"] = "gw";
        CountryISO["Guyana"] = "gy";
        CountryISO["Haiti"] = "ht";
        CountryISO["Honduras"] = "hn";
        CountryISO["HongKong"] = "hk";
        CountryISO["Hungary"] = "hu";
        CountryISO["Iceland"] = "is";
        CountryISO["India"] = "in";
        CountryISO["Indonesia"] = "id";
        CountryISO["Iran"] = "ir";
        CountryISO["Iraq"] = "iq";
        CountryISO["Ireland"] = "ie";
        CountryISO["IsleOfMan"] = "im";
        CountryISO["Israel"] = "il";
        CountryISO["Italy"] = "it";
        CountryISO["Jamaica"] = "jm";
        CountryISO["Japan"] = "jp";
        CountryISO["Jersey"] = "je";
        CountryISO["Jordan"] = "jo";
        CountryISO["Kazakhstan"] = "kz";
        CountryISO["Kenya"] = "ke";
        CountryISO["Kiribati"] = "ki";
        CountryISO["Kosovo"] = "xk";
        CountryISO["Kuwait"] = "kw";
        CountryISO["Kyrgyzstan"] = "kg";
        CountryISO["Laos"] = "la";
        CountryISO["Latvia"] = "lv";
        CountryISO["Lebanon"] = "lb";
        CountryISO["Lesotho"] = "ls";
        CountryISO["Liberia"] = "lr";
        CountryISO["Libya"] = "ly";
        CountryISO["Liechtenstein"] = "li";
        CountryISO["Lithuania"] = "lt";
        CountryISO["Luxembourg"] = "lu";
        CountryISO["Macau"] = "mo";
        CountryISO["Macedonia"] = "mk";
        CountryISO["Madagascar"] = "mg";
        CountryISO["Malawi"] = "mw";
        CountryISO["Malaysia"] = "my";
        CountryISO["Maldives"] = "mv";
        CountryISO["Mali"] = "ml";
        CountryISO["Malta"] = "mt";
        CountryISO["MarshallIslands"] = "mh";
        CountryISO["Martinique"] = "mq";
        CountryISO["Mauritania"] = "mr";
        CountryISO["Mauritius"] = "mu";
        CountryISO["Mayotte"] = "yt";
        CountryISO["Mexico"] = "mx";
        CountryISO["Micronesia"] = "fm";
        CountryISO["Moldova"] = "md";
        CountryISO["Monaco"] = "mc";
        CountryISO["Mongolia"] = "mn";
        CountryISO["Montenegro"] = "me";
        CountryISO["Montserrat"] = "ms";
        CountryISO["Morocco"] = "ma";
        CountryISO["Mozambique"] = "mz";
        CountryISO["Myanmar"] = "mm";
        CountryISO["Namibia"] = "na";
        CountryISO["Nauru"] = "nr";
        CountryISO["Nepal"] = "np";
        CountryISO["Netherlands"] = "nl";
        CountryISO["NewCaledonia"] = "nc";
        CountryISO["NewZealand"] = "nz";
        CountryISO["Nicaragua"] = "ni";
        CountryISO["Niger"] = "ne";
        CountryISO["Nigeria"] = "ng";
        CountryISO["Niue"] = "nu";
        CountryISO["NorfolkIsland"] = "nf";
        CountryISO["NorthKorea"] = "kp";
        CountryISO["NorthernMarianaIslands"] = "mp";
        CountryISO["Norway"] = "no";
        CountryISO["Oman"] = "om";
        CountryISO["Pakistan"] = "pk";
        CountryISO["Palau"] = "pw";
        CountryISO["Palestine"] = "ps";
        CountryISO["Panama"] = "pa";
        CountryISO["PapuaNewGuinea"] = "pg";
        CountryISO["Paraguay"] = "py";
        CountryISO["Peru"] = "pe";
        CountryISO["Philippines"] = "ph";
        CountryISO["Poland"] = "pl";
        CountryISO["Portugal"] = "pt";
        CountryISO["PuertoRico"] = "pr";
        CountryISO["Qatar"] = "qa";
        CountryISO["R\u00E9union"] = "re";
        CountryISO["Romania"] = "ro";
        CountryISO["Russia"] = "ru";
        CountryISO["Rwanda"] = "rw";
        CountryISO["SaintBarth\u00E9lemy"] = "bl";
        CountryISO["SaintHelena"] = "sh";
        CountryISO["SaintKittsAndNevis"] = "kn";
        CountryISO["SaintLucia"] = "lc";
        CountryISO["SaintMartin"] = "mf";
        CountryISO["SaintPierreAndMiquelon"] = "pm";
        CountryISO["SaintVincentAndTheGrenadines"] = "vc";
        CountryISO["Samoa"] = "ws";
        CountryISO["SanMarino"] = "sm";
        CountryISO["S\u00E3oTom\u00E9AndPr\u00EDncipe"] = "st";
        CountryISO["SaudiArabia"] = "sa";
        CountryISO["Senegal"] = "sn";
        CountryISO["Serbia"] = "rs";
        CountryISO["Seychelles"] = "sc";
        CountryISO["SierraLeone"] = "sl";
        CountryISO["Singapore"] = "sg";
        CountryISO["SintMaarten"] = "sx";
        CountryISO["Slovakia"] = "sk";
        CountryISO["Slovenia"] = "si";
        CountryISO["SolomonIslands"] = "sb";
        CountryISO["Somalia"] = "so";
        CountryISO["SouthAfrica"] = "za";
        CountryISO["SouthKorea"] = "kr";
        CountryISO["SouthSudan"] = "ss";
        CountryISO["Spain"] = "es";
        CountryISO["SriLanka"] = "lk";
        CountryISO["Sudan"] = "sd";
        CountryISO["Suriname"] = "sr";
        CountryISO["SvalbardAndJanMayen"] = "sj";
        CountryISO["Swaziland"] = "sz";
        CountryISO["Sweden"] = "se";
        CountryISO["Switzerland"] = "ch";
        CountryISO["Syria"] = "sy";
        CountryISO["Taiwan"] = "tw";
        CountryISO["Tajikistan"] = "tj";
        CountryISO["Tanzania"] = "tz";
        CountryISO["Thailand"] = "th";
        CountryISO["TimorLeste"] = "tl";
        CountryISO["Togo"] = "tg";
        CountryISO["Tokelau"] = "tk";
        CountryISO["Tonga"] = "to";
        CountryISO["TrinidadAndTobago"] = "tt";
        CountryISO["Tunisia"] = "tn";
        CountryISO["Turkey"] = "tr";
        CountryISO["Turkmenistan"] = "tm";
        CountryISO["TurksAndCaicosIslands"] = "tc";
        CountryISO["Tuvalu"] = "tv";
        CountryISO["USVirginIslands"] = "vi";
        CountryISO["Uganda"] = "ug";
        CountryISO["Ukraine"] = "ua";
        CountryISO["UnitedArabEmirates"] = "ae";
        CountryISO["UnitedKingdom"] = "gb";
        CountryISO["UnitedStates"] = "us";
        CountryISO["Uruguay"] = "uy";
        CountryISO["Uzbekistan"] = "uz";
        CountryISO["Vanuatu"] = "vu";
        CountryISO["VaticanCity"] = "va";
        CountryISO["Venezuela"] = "ve";
        CountryISO["Vietnam"] = "vn";
        CountryISO["WallisAndFutuna"] = "wf";
        CountryISO["WesternSahara"] = "eh";
        CountryISO["Yemen"] = "ye";
        CountryISO["Zambia"] = "zm";
        CountryISO["Zimbabwe"] = "zw";
        CountryISO["\u00C5landIslands"] = "ax";
    })(exports.CountryISO || (exports.CountryISO = {}));

    var CountryCode = /** @class */ (function () {
        function CountryCode() {
            this.allCountries = [
                [
                    'Afghanistan (‫افغانستان‬‎)',
                    exports.CountryISO.Afghanistan,
                    '93'
                ],
                [
                    'Albania (Shqipëri)',
                    exports.CountryISO.Albania,
                    '355'
                ],
                [
                    'Algeria (‫الجزائر‬‎)',
                    exports.CountryISO.Algeria,
                    '213'
                ],
                [
                    'American Samoa',
                    'as',
                    '1',
                    1,
                    [
                        '684',
                    ]
                ],
                [
                    'Andorra',
                    exports.CountryISO.Andorra,
                    '376'
                ],
                [
                    'Angola',
                    exports.CountryISO.Angola,
                    '244'
                ],
                [
                    'Anguilla',
                    'ai',
                    '1',
                    1,
                    [
                        '264',
                    ]
                ],
                [
                    'Antigua and Barbuda',
                    'ag',
                    '1',
                    1,
                    [
                        '268',
                    ]
                ],
                [
                    'Argentina',
                    exports.CountryISO.Argentina,
                    '54'
                ],
                [
                    'Armenia (Հայաստան)',
                    exports.CountryISO.Armenia,
                    '374'
                ],
                [
                    'Aruba',
                    exports.CountryISO.Aruba,
                    '297'
                ],
                [
                    'Australia',
                    exports.CountryISO.Australia,
                    '61',
                    0
                ],
                [
                    'Austria (Österreich)',
                    exports.CountryISO.Austria,
                    '43'
                ],
                [
                    'Azerbaijan (Azərbaycan)',
                    exports.CountryISO.Azerbaijan,
                    '994'
                ],
                [
                    'Bahamas',
                    'bs',
                    '1',
                    1,
                    [
                        '242',
                    ]
                ],
                [
                    'Bahrain (‫البحرين‬‎)',
                    exports.CountryISO.Bahrain,
                    '973'
                ],
                [
                    'Bangladesh (বাংলাদেশ)',
                    exports.CountryISO.Bangladesh,
                    '880'
                ],
                [
                    'Barbados',
                    'bb',
                    '1',
                    1,
                    [
                        '246',
                    ]
                ],
                [
                    'Belarus (Беларусь)',
                    exports.CountryISO.Belarus,
                    '375'
                ],
                [
                    'Belgium (België)',
                    exports.CountryISO.Belgium,
                    '32'
                ],
                [
                    'Belize',
                    exports.CountryISO.Belize,
                    '501'
                ],
                [
                    'Benin (Bénin)',
                    exports.CountryISO.Benin,
                    '229'
                ],
                [
                    'Bermuda',
                    'bm',
                    '1',
                    1,
                    [
                        '441',
                    ]
                ],
                [
                    'Bhutan (འབྲུག)',
                    exports.CountryISO.Bhutan,
                    '975'
                ],
                [
                    'Bolivia',
                    exports.CountryISO.Bolivia,
                    '591'
                ],
                [
                    'Bosnia and Herzegovina (Босна и Херцеговина)',
                    exports.CountryISO.BosniaAndHerzegovina,
                    '387'
                ],
                [
                    'Botswana',
                    exports.CountryISO.Botswana,
                    '267'
                ],
                [
                    'Brazil (Brasil)',
                    exports.CountryISO.Brazil,
                    '55'
                ],
                [
                    'British Indian Ocean Territory',
                    exports.CountryISO.BritishIndianOceanTerritory,
                    '246'
                ],
                [
                    'British Virgin Islands',
                    'vg',
                    '1',
                    1,
                    [
                        '284',
                    ]
                ],
                [
                    'Brunei',
                    exports.CountryISO.Brunei,
                    '673'
                ],
                [
                    'Bulgaria (България)',
                    exports.CountryISO.Bulgaria,
                    '359'
                ],
                [
                    'Burkina Faso',
                    exports.CountryISO.BurkinaFaso,
                    '226'
                ],
                [
                    'Burundi (Uburundi)',
                    exports.CountryISO.Burundi,
                    '257'
                ],
                [
                    'Cambodia (កម្ពុជា)',
                    exports.CountryISO.Cambodia,
                    '855'
                ],
                [
                    'Cameroon (Cameroun)',
                    exports.CountryISO.Cameroon,
                    '237'
                ],
                [
                    'Canada',
                    exports.CountryISO.Canada,
                    '1',
                    1,
                    [
                        '204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416',
                        '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587',
                        '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807',
                        '819', '825', '867', '873', '902', '905'
                    ]
                ],
                [
                    'Cape Verde (Kabu Verdi)',
                    exports.CountryISO.CapeVerde,
                    '238'
                ],
                [
                    'Caribbean Netherlands',
                    exports.CountryISO.CaribbeanNetherlands,
                    '599',
                    1
                ],
                [
                    'Cayman Islands',
                    'ky',
                    '1',
                    1,
                    [
                        '345',
                    ]
                ],
                [
                    'Central African Republic (République centrafricaine)',
                    exports.CountryISO.CentralAfricanRepublic,
                    '236'
                ],
                [
                    'Chad (Tchad)',
                    exports.CountryISO.Chad,
                    '235'
                ],
                [
                    'Chile',
                    exports.CountryISO.Chile,
                    '56'
                ],
                [
                    'China (中国)',
                    exports.CountryISO.China,
                    '86'
                ],
                [
                    'Christmas Island',
                    exports.CountryISO.ChristmasIsland,
                    '61',
                    2
                ],
                [
                    'Cocos (Keeling) Islands',
                    exports.CountryISO.Cocos,
                    '61',
                    1
                ],
                [
                    'Colombia',
                    exports.CountryISO.Colombia,
                    '57'
                ],
                [
                    'Comoros (‫جزر القمر‬‎)',
                    exports.CountryISO.Comoros,
                    '269'
                ],
                [
                    'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
                    exports.CountryISO.CongoDRCJamhuriYaKidemokrasiaYaKongo,
                    '243'
                ],
                [
                    'Congo (Republic) (Congo-Brazzaville)',
                    exports.CountryISO.CongoRepublicCongoBrazzaville,
                    '242'
                ],
                [
                    'Cook Islands',
                    exports.CountryISO.CookIslands,
                    '682'
                ],
                [
                    'Costa Rica',
                    exports.CountryISO.CostaRica,
                    '506'
                ],
                [
                    'Côte d’Ivoire',
                    exports.CountryISO.CôteDIvoire,
                    '225'
                ],
                [
                    'Croatia (Hrvatska)',
                    exports.CountryISO.Croatia,
                    '385'
                ],
                [
                    'Cuba',
                    exports.CountryISO.Cuba,
                    '53'
                ],
                [
                    'Curaçao',
                    exports.CountryISO.Curaçao,
                    '599',
                    0
                ],
                [
                    'Cyprus (Κύπρος)',
                    exports.CountryISO.Cyprus,
                    '357'
                ],
                [
                    'Czech Republic (Česká republika)',
                    exports.CountryISO.CzechRepublic,
                    '420'
                ],
                [
                    'Denmark (Danmark)',
                    exports.CountryISO.Denmark,
                    '45'
                ],
                [
                    'Djibouti',
                    exports.CountryISO.Djibouti,
                    '253'
                ],
                [
                    'Dominica',
                    exports.CountryISO.Dominica,
                    '1767'
                ],
                [
                    'Dominican Republic (República Dominicana)',
                    exports.CountryISO.DominicanRepublic,
                    '1',
                    2,
                    ['809', '829', '849']
                ],
                [
                    'Ecuador',
                    exports.CountryISO.Ecuador,
                    '593'
                ],
                [
                    'Egypt (‫مصر‬‎)',
                    exports.CountryISO.Egypt,
                    '20'
                ],
                [
                    'El Salvador',
                    exports.CountryISO.ElSalvador,
                    '503'
                ],
                [
                    'Equatorial Guinea (Guinea Ecuatorial)',
                    exports.CountryISO.EquatorialGuinea,
                    '240'
                ],
                [
                    'Eritrea',
                    exports.CountryISO.Eritrea,
                    '291'
                ],
                [
                    'Estonia (Eesti)',
                    exports.CountryISO.Estonia,
                    '372'
                ],
                [
                    'Ethiopia',
                    exports.CountryISO.Ethiopia,
                    '251'
                ],
                [
                    'Falkland Islands (Islas Malvinas)',
                    exports.CountryISO.FalklandIslands,
                    '500'
                ],
                [
                    'Faroe Islands (Føroyar)',
                    exports.CountryISO.FaroeIslands,
                    '298'
                ],
                [
                    'Fiji',
                    exports.CountryISO.Fiji,
                    '679'
                ],
                [
                    'Finland (Suomi)',
                    exports.CountryISO.Finland,
                    '358',
                    0
                ],
                [
                    'France',
                    exports.CountryISO.France,
                    '33'
                ],
                [
                    'French Guiana (Guyane française)',
                    exports.CountryISO.FrenchGuiana,
                    '594'
                ],
                [
                    'French Polynesia (Polynésie française)',
                    exports.CountryISO.FrenchPolynesia,
                    '689'
                ],
                [
                    'Gabon',
                    exports.CountryISO.Gabon,
                    '241'
                ],
                [
                    'Gambia',
                    exports.CountryISO.Gambia,
                    '220'
                ],
                [
                    'Georgia (საქართველო)',
                    exports.CountryISO.Georgia,
                    '995'
                ],
                [
                    'Germany (Deutschland)',
                    exports.CountryISO.Germany,
                    '49'
                ],
                [
                    'Ghana (Gaana)',
                    exports.CountryISO.Ghana,
                    '233'
                ],
                [
                    'Gibraltar',
                    exports.CountryISO.Gibraltar,
                    '350'
                ],
                [
                    'Greece (Ελλάδα)',
                    exports.CountryISO.Greece,
                    '30'
                ],
                [
                    'Greenland (Kalaallit Nunaat)',
                    exports.CountryISO.Greenland,
                    '299'
                ],
                [
                    'Grenada',
                    exports.CountryISO.Grenada,
                    '1473'
                ],
                [
                    'Guadeloupe',
                    exports.CountryISO.Guadeloupe,
                    '590',
                    0
                ],
                [
                    'Guam',
                    'gu',
                    '1',
                    1,
                    [
                        '671',
                    ]
                ],
                [
                    'Guatemala',
                    exports.CountryISO.Guatemala,
                    '502'
                ],
                [
                    'Guernsey',
                    exports.CountryISO.Guernsey,
                    '44',
                    1,
                    [1481]
                ],
                [
                    'Guinea (Guinée)',
                    exports.CountryISO.Guinea,
                    '224'
                ],
                [
                    'Guinea-Bissau (Guiné Bissau)',
                    exports.CountryISO.GuineaBissau,
                    '245'
                ],
                [
                    'Guyana',
                    exports.CountryISO.Guyana,
                    '592'
                ],
                [
                    'Haiti',
                    exports.CountryISO.Haiti,
                    '509'
                ],
                [
                    'Honduras',
                    exports.CountryISO.Honduras,
                    '504'
                ],
                [
                    'Hong Kong (香港)',
                    exports.CountryISO.HongKong,
                    '852'
                ],
                [
                    'Hungary (Magyarország)',
                    exports.CountryISO.Hungary,
                    '36'
                ],
                [
                    'Iceland (Ísland)',
                    exports.CountryISO.Iceland,
                    '354'
                ],
                [
                    'India (भारत)',
                    exports.CountryISO.India,
                    '91'
                ],
                [
                    'Indonesia',
                    exports.CountryISO.Indonesia,
                    '62'
                ],
                [
                    'Iran (‫ایران‬‎)',
                    exports.CountryISO.Iran,
                    '98'
                ],
                [
                    'Iraq (‫العراق‬‎)',
                    exports.CountryISO.Iraq,
                    '964'
                ],
                [
                    'Ireland',
                    exports.CountryISO.Ireland,
                    '353'
                ],
                [
                    'Isle of Man',
                    exports.CountryISO.IsleOfMan,
                    '44',
                    2,
                    [1624]
                ],
                [
                    'Israel (‫ישראל‬‎)',
                    exports.CountryISO.Israel,
                    '972'
                ],
                [
                    'Italy (Italia)',
                    exports.CountryISO.Italy,
                    '39',
                    0
                ],
                [
                    'Jamaica',
                    'jm',
                    '1',
                    1,
                    [
                        '876',
                    ]
                ],
                [
                    'Japan (日本)',
                    exports.CountryISO.Japan,
                    '81'
                ],
                [
                    'Jersey',
                    exports.CountryISO.Jersey,
                    '44',
                    3,
                    [1534]
                ],
                [
                    'Jordan (‫الأردن‬‎)',
                    exports.CountryISO.Jordan,
                    '962'
                ],
                [
                    'Kazakhstan (Казахстан)',
                    exports.CountryISO.Kazakhstan,
                    '7',
                    1
                ],
                [
                    'Kenya',
                    exports.CountryISO.Kenya,
                    '254'
                ],
                [
                    'Kiribati',
                    exports.CountryISO.Kiribati,
                    '686'
                ],
                [
                    'Kosovo',
                    exports.CountryISO.Kosovo,
                    '383'
                ],
                [
                    'Kuwait (‫الكويت‬‎)',
                    exports.CountryISO.Kuwait,
                    '965'
                ],
                [
                    'Kyrgyzstan (Кыргызстан)',
                    exports.CountryISO.Kyrgyzstan,
                    '996'
                ],
                [
                    'Laos (ລາວ)',
                    exports.CountryISO.Laos,
                    '856'
                ],
                [
                    'Latvia (Latvija)',
                    exports.CountryISO.Latvia,
                    '371'
                ],
                [
                    'Lebanon (‫لبنان‬‎)',
                    exports.CountryISO.Lebanon,
                    '961'
                ],
                [
                    'Lesotho',
                    exports.CountryISO.Lesotho,
                    '266'
                ],
                [
                    'Liberia',
                    exports.CountryISO.Liberia,
                    '231'
                ],
                [
                    'Libya (‫ليبيا‬‎)',
                    exports.CountryISO.Libya,
                    '218'
                ],
                [
                    'Liechtenstein',
                    exports.CountryISO.Liechtenstein,
                    '423'
                ],
                [
                    'Lithuania (Lietuva)',
                    exports.CountryISO.Lithuania,
                    '370'
                ],
                [
                    'Luxembourg',
                    exports.CountryISO.Luxembourg,
                    '352'
                ],
                [
                    'Macau (澳門)',
                    exports.CountryISO.Macau,
                    '853'
                ],
                [
                    'Macedonia (FYROM) (Македонија)',
                    exports.CountryISO.Macedonia,
                    '389'
                ],
                [
                    'Madagascar (Madagasikara)',
                    exports.CountryISO.Madagascar,
                    '261'
                ],
                [
                    'Malawi',
                    exports.CountryISO.Malawi,
                    '265'
                ],
                [
                    'Malaysia',
                    exports.CountryISO.Malaysia,
                    '60'
                ],
                [
                    'Maldives',
                    exports.CountryISO.Maldives,
                    '960'
                ],
                [
                    'Mali',
                    exports.CountryISO.Mali,
                    '223'
                ],
                [
                    'Malta',
                    exports.CountryISO.Malta,
                    '356'
                ],
                [
                    'Marshall Islands',
                    exports.CountryISO.MarshallIslands,
                    '692'
                ],
                [
                    'Martinique',
                    exports.CountryISO.Martinique,
                    '596'
                ],
                [
                    'Mauritania (‫موريتانيا‬‎)',
                    exports.CountryISO.Mauritania,
                    '222'
                ],
                [
                    'Mauritius (Moris)',
                    exports.CountryISO.Mauritius,
                    '230'
                ],
                [
                    'Mayotte',
                    exports.CountryISO.Mayotte,
                    '262',
                    1
                ],
                [
                    'Mexico (México)',
                    exports.CountryISO.Mexico,
                    '52'
                ],
                [
                    'Micronesia',
                    exports.CountryISO.Micronesia,
                    '691'
                ],
                [
                    'Moldova (Republica Moldova)',
                    exports.CountryISO.Moldova,
                    '373'
                ],
                [
                    'Monaco',
                    exports.CountryISO.Monaco,
                    '377'
                ],
                [
                    'Mongolia (Монгол)',
                    exports.CountryISO.Mongolia,
                    '976'
                ],
                [
                    'Montenegro (Crna Gora)',
                    exports.CountryISO.Montenegro,
                    '382'
                ],
                [
                    'Montserrat',
                    'ms',
                    '1',
                    1,
                    [
                        '664',
                    ]
                ],
                [
                    'Morocco (‫المغرب‬‎)',
                    exports.CountryISO.Morocco,
                    '212',
                    0
                ],
                [
                    'Mozambique (Moçambique)',
                    exports.CountryISO.Mozambique,
                    '258'
                ],
                [
                    'Myanmar (Burma) (မြန်မာ)',
                    exports.CountryISO.Myanmar,
                    '95'
                ],
                [
                    'Namibia (Namibië)',
                    exports.CountryISO.Namibia,
                    '264'
                ],
                [
                    'Nauru',
                    exports.CountryISO.Nauru,
                    '674'
                ],
                [
                    'Nepal (नेपाल)',
                    exports.CountryISO.Nepal,
                    '977'
                ],
                [
                    'Netherlands (Nederland)',
                    exports.CountryISO.Netherlands,
                    '31'
                ],
                [
                    'New Caledonia (Nouvelle-Calédonie)',
                    exports.CountryISO.NewCaledonia,
                    '687'
                ],
                [
                    'New Zealand',
                    exports.CountryISO.NewZealand,
                    '64'
                ],
                [
                    'Nicaragua',
                    exports.CountryISO.Nicaragua,
                    '505'
                ],
                [
                    'Niger (Nijar)',
                    exports.CountryISO.Niger,
                    '227'
                ],
                [
                    'Nigeria',
                    exports.CountryISO.Nigeria,
                    '234'
                ],
                [
                    'Niue',
                    exports.CountryISO.Niue,
                    '683'
                ],
                [
                    'Norfolk Island',
                    exports.CountryISO.NorfolkIsland,
                    '672'
                ],
                [
                    'North Korea (조선 민주주의 인민 공화국)',
                    exports.CountryISO.NorthKorea,
                    '850'
                ],
                [
                    'Northern Mariana Islands',
                    exports.CountryISO.NorthernMarianaIslands,
                    '1670'
                ],
                [
                    'Norway (Norge)',
                    exports.CountryISO.Norway,
                    '47',
                    0
                ],
                [
                    'Oman (‫عُمان‬‎)',
                    exports.CountryISO.Oman,
                    '968'
                ],
                [
                    'Pakistan (‫پاکستان‬‎)',
                    exports.CountryISO.Pakistan,
                    '92'
                ],
                [
                    'Palau',
                    exports.CountryISO.Palau,
                    '680'
                ],
                [
                    'Palestine (‫فلسطين‬‎)',
                    exports.CountryISO.Palestine,
                    '970'
                ],
                [
                    'Panama (Panamá)',
                    exports.CountryISO.Panama,
                    '507'
                ],
                [
                    'Papua New Guinea',
                    exports.CountryISO.PapuaNewGuinea,
                    '675'
                ],
                [
                    'Paraguay',
                    exports.CountryISO.Paraguay,
                    '595'
                ],
                [
                    'Peru (Perú)',
                    exports.CountryISO.Peru,
                    '51'
                ],
                [
                    'Philippines',
                    exports.CountryISO.Philippines,
                    '63'
                ],
                [
                    'Poland (Polska)',
                    exports.CountryISO.Poland,
                    '48'
                ],
                [
                    'Portugal',
                    exports.CountryISO.Portugal,
                    '351'
                ],
                [
                    'Puerto Rico',
                    exports.CountryISO.PuertoRico,
                    '1',
                    3,
                    ['787', '939']
                ],
                [
                    'Qatar (‫قطر‬‎)',
                    exports.CountryISO.Qatar,
                    '974'
                ],
                [
                    'Réunion (La Réunion)',
                    exports.CountryISO.Réunion,
                    '262',
                    0
                ],
                [
                    'Romania (România)',
                    exports.CountryISO.Romania,
                    '40'
                ],
                [
                    'Russia (Россия)',
                    exports.CountryISO.Russia,
                    '7',
                    0
                ],
                [
                    'Rwanda',
                    exports.CountryISO.Rwanda,
                    '250'
                ],
                [
                    'Saint Barthélemy (Saint-Barthélemy)',
                    exports.CountryISO.SaintBarthélemy,
                    '590',
                    1
                ],
                [
                    'Saint Helena',
                    exports.CountryISO.SaintHelena,
                    '290'
                ],
                [
                    'Saint Kitts and Nevis',
                    exports.CountryISO.SaintKittsAndNevis,
                    '1869'
                ],
                [
                    'Saint Lucia',
                    'lc',
                    '1',
                    1,
                    [
                        '758',
                    ]
                ],
                [
                    'Saint Martin (Saint-Martin (partie française))',
                    exports.CountryISO.SaintMartin,
                    '590',
                    2
                ],
                [
                    'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
                    exports.CountryISO.SaintPierreAndMiquelon,
                    '508'
                ],
                [
                    'Saint Vincent and the Grenadines',
                    'vc',
                    '1',
                    1,
                    [
                        '784',
                    ]
                ],
                [
                    'Samoa',
                    exports.CountryISO.Samoa,
                    '685'
                ],
                [
                    'San Marino',
                    exports.CountryISO.SanMarino,
                    '378'
                ],
                [
                    'São Tomé and Príncipe (São Tomé e Príncipe)',
                    exports.CountryISO.SãoToméAndPríncipe,
                    '239'
                ],
                [
                    'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
                    exports.CountryISO.SaudiArabia,
                    '966'
                ],
                [
                    'Senegal (Sénégal)',
                    exports.CountryISO.Senegal,
                    '221'
                ],
                [
                    'Serbia (Србија)',
                    exports.CountryISO.Serbia,
                    '381'
                ],
                [
                    'Seychelles',
                    exports.CountryISO.Seychelles,
                    '248'
                ],
                [
                    'Sierra Leone',
                    exports.CountryISO.SierraLeone,
                    '232'
                ],
                [
                    'Singapore',
                    exports.CountryISO.Singapore,
                    '65'
                ],
                [
                    'Sint Maarten',
                    'sx',
                    '1',
                    1,
                    [
                        '721',
                    ]
                ],
                [
                    'Slovakia (Slovensko)',
                    exports.CountryISO.Slovakia,
                    '421'
                ],
                [
                    'Slovenia (Slovenija)',
                    exports.CountryISO.Slovenia,
                    '386'
                ],
                [
                    'Solomon Islands',
                    exports.CountryISO.SolomonIslands,
                    '677'
                ],
                [
                    'Somalia (Soomaaliya)',
                    exports.CountryISO.Somalia,
                    '252'
                ],
                [
                    'South Africa',
                    exports.CountryISO.SouthAfrica,
                    '27'
                ],
                [
                    'South Korea (대한민국)',
                    exports.CountryISO.SouthKorea,
                    '82'
                ],
                [
                    'South Sudan (‫جنوب السودان‬‎)',
                    exports.CountryISO.SouthSudan,
                    '211'
                ],
                [
                    'Spain (España)',
                    exports.CountryISO.Spain,
                    '34'
                ],
                [
                    'Sri Lanka (ශ්‍රී ලංකාව)',
                    exports.CountryISO.SriLanka,
                    '94'
                ],
                [
                    'Sudan (‫السودان‬‎)',
                    exports.CountryISO.Sudan,
                    '249'
                ],
                [
                    'Suriname',
                    exports.CountryISO.Suriname,
                    '597'
                ],
                [
                    'Svalbard and Jan Mayen',
                    exports.CountryISO.SvalbardAndJanMayen,
                    '47',
                    1
                ],
                [
                    'Swaziland',
                    exports.CountryISO.Swaziland,
                    '268'
                ],
                [
                    'Sweden (Sverige)',
                    exports.CountryISO.Sweden,
                    '46'
                ],
                [
                    'Switzerland (Schweiz)',
                    exports.CountryISO.Switzerland,
                    '41'
                ],
                [
                    'Syria (‫سوريا‬‎)',
                    exports.CountryISO.Syria,
                    '963'
                ],
                [
                    'Taiwan (台灣)',
                    exports.CountryISO.Taiwan,
                    '886'
                ],
                [
                    'Tajikistan',
                    exports.CountryISO.Tajikistan,
                    '992'
                ],
                [
                    'Tanzania',
                    exports.CountryISO.Tanzania,
                    '255'
                ],
                [
                    'Thailand (ไทย)',
                    exports.CountryISO.Thailand,
                    '66'
                ],
                [
                    'Timor-Leste',
                    exports.CountryISO.TimorLeste,
                    '670'
                ],
                [
                    'Togo',
                    exports.CountryISO.Togo,
                    '228'
                ],
                [
                    'Tokelau',
                    exports.CountryISO.Tokelau,
                    '690'
                ],
                [
                    'Tonga',
                    exports.CountryISO.Tonga,
                    '676'
                ],
                [
                    'Trinidad and Tobago',
                    'tt',
                    '1',
                    1,
                    [
                        '868',
                    ]
                ],
                [
                    'Tunisia (‫تونس‬‎)',
                    exports.CountryISO.Tunisia,
                    '216'
                ],
                [
                    'Turkey (Türkiye)',
                    exports.CountryISO.Turkey,
                    '90'
                ],
                [
                    'Turkmenistan',
                    exports.CountryISO.Turkmenistan,
                    '993'
                ],
                [
                    'Turks and Caicos Islands',
                    exports.CountryISO.TurksAndCaicosIslands,
                    '1649'
                ],
                [
                    'Tuvalu',
                    exports.CountryISO.Tuvalu,
                    '688'
                ],
                [
                    'U.S. Virgin Islands',
                    'vi',
                    '1',
                    1,
                    [
                        '340',
                    ]
                ],
                [
                    'Uganda',
                    exports.CountryISO.Uganda,
                    '256'
                ],
                [
                    'Ukraine (Україна)',
                    exports.CountryISO.Ukraine,
                    '380'
                ],
                [
                    'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
                    exports.CountryISO.UnitedArabEmirates,
                    '971'
                ],
                [
                    'United Kingdom',
                    exports.CountryISO.UnitedKingdom,
                    '44',
                    0
                ],
                [
                    'United States',
                    exports.CountryISO.UnitedStates,
                    '1',
                    0
                ],
                [
                    'Uruguay',
                    exports.CountryISO.Uruguay,
                    '598'
                ],
                [
                    'Uzbekistan (Oʻzbekiston)',
                    exports.CountryISO.Uzbekistan,
                    '998'
                ],
                [
                    'Vanuatu',
                    exports.CountryISO.Vanuatu,
                    '678'
                ],
                [
                    'Vatican City (Città del Vaticano)',
                    exports.CountryISO.VaticanCity,
                    '39',
                    1
                ],
                [
                    'Venezuela',
                    exports.CountryISO.Venezuela,
                    '58'
                ],
                [
                    'Vietnam (Việt Nam)',
                    exports.CountryISO.Vietnam,
                    '84'
                ],
                [
                    'Wallis and Futuna',
                    exports.CountryISO.WallisAndFutuna,
                    '681'
                ],
                [
                    'Western Sahara (‫الصحراء الغربية‬‎)',
                    exports.CountryISO.WesternSahara,
                    '212',
                    1
                ],
                [
                    'Yemen (‫اليمن‬‎)',
                    exports.CountryISO.Yemen,
                    '967'
                ],
                [
                    'Zambia',
                    exports.CountryISO.Zambia,
                    '260'
                ],
                [
                    'Zimbabwe',
                    exports.CountryISO.Zimbabwe,
                    '263'
                ],
                [
                    'Åland Islands',
                    exports.CountryISO.ÅlandIslands,
                    '358',
                    1
                ]
            ];
        }
        return CountryCode;
    }());
    CountryCode.ɵfac = function CountryCode_Factory(t) { return new (t || CountryCode)(); };
    CountryCode.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: CountryCode, factory: CountryCode.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CountryCode, [{
                type: i0.Injectable
            }], null, null);
    })();

    exports.SearchCountryField = void 0;
    (function (SearchCountryField) {
        SearchCountryField["DialCode"] = "dialCode";
        SearchCountryField["Iso2"] = "iso2";
        SearchCountryField["Name"] = "name";
        SearchCountryField["All"] = "all";
    })(exports.SearchCountryField || (exports.SearchCountryField = {}));

    /* eslint-disable */
    /*
    We use "control: any" instead of "control: FormControl" to silence:
    "Property 'nativeElement' does not exist on type 'FormControl'".
    This happens because I've expanded control with nativeElement via
    'NativeElementInjectorDirective' to get an access to the element.
    More about this approach and reasons for this:
    https://github.com/angular/angular/issues/18025
    https://stackoverflow.com/a/54075119/1617590
    */
    var phoneNumberValidator = function (control) {
        if (!control.value) {
            return;
        }
        // Find <input> inside injected nativeElement and get its "id".
        var el = control.nativeElement;
        var inputBox = el
            ? el.querySelector('input[type="tel"]')
            : undefined;
        if (inputBox) {
            var id = inputBox.id;
            var isCheckValidation = inputBox.getAttribute('validation');
            if (isCheckValidation === 'true') {
                var isRequired = control.errors && control.errors.required === true;
                var error = { validatePhoneNumber: { valid: false } };
                inputBox.setCustomValidity('Invalid field.');
                var number = void 0;
                try {
                    number = lpn__namespace.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
                }
                catch (e) {
                    if (isRequired === true) {
                        return error;
                    }
                    else {
                        inputBox.setCustomValidity('');
                    }
                }
                if (control.value) {
                    if (!number) {
                        return error;
                    }
                    else {
                        if (!lpn__namespace.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                            return error;
                        }
                        else {
                            inputBox.setCustomValidity('');
                        }
                    }
                }
            }
            else if (isCheckValidation === 'false') {
                inputBox.setCustomValidity('');
                control.clearValidators();
            }
        }
        return;
    };

    exports.PhoneNumberFormat = void 0;
    (function (PhoneNumberFormat) {
        PhoneNumberFormat["International"] = "INTERNATIONAL";
        PhoneNumberFormat["National"] = "NATIONAL";
    })(exports.PhoneNumberFormat || (exports.PhoneNumberFormat = {}));

    /*
    "Property 'nativeElement' does not exist on type 'FormControl'".
    'NativeElementInjectorDirective' injects nativeElement to each control,
    so we can access it from inside validator for example.
    More about this approach and reasons for this:
    https://github.com/angular/angular/issues/18025
    https://stackoverflow.com/a/54075119/1617590
    */
    var NativeElementInjectorDirective = /** @class */ (function () {
        function NativeElementInjectorDirective(controlDir, host) {
            this.controlDir = controlDir;
            this.host = host;
        }
        NativeElementInjectorDirective.prototype.ngOnInit = function () {
            if (this.controlDir.control) {
                this.controlDir.control['nativeElement'] = this.host.nativeElement;
            }
        };
        return NativeElementInjectorDirective;
    }());
    NativeElementInjectorDirective.ɵfac = function NativeElementInjectorDirective_Factory(t) { return new (t || NativeElementInjectorDirective)(i0__namespace.ɵɵdirectiveInject(i5__namespace.NgControl), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    NativeElementInjectorDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: NativeElementInjectorDirective, selectors: [["", "ngModel", ""], ["", "formControl", ""], ["", "formControlName", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NativeElementInjectorDirective, [{
                type: i0.Directive,
                args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: '[ngModel], [formControl], [formControlName]',
                    }]
            }], function () { return [{ type: i5__namespace.NgControl }, { type: i0__namespace.ElementRef }]; }, null);
    })();

    /* eslint-disable */
    var _c0 = ["countryList"];
    function NgxIntlTelInputComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 9);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" +", ctx_r0.selectedCountry.dialCode, " ");
        }
    }
    function NgxIntlTelInputComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 17);
            i0__namespace.ɵɵelementStart(1, "input", 18);
            i0__namespace.ɵɵlistener("ngModelChange", function NgxIntlTelInputComponent_div_6_div_1_Template_input_ngModelChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r8 = i0__namespace.ɵɵnextContext(2); return ctx_r8.countrySearchText = $event; })("keyup", function NgxIntlTelInputComponent_div_6_div_1_Template_input_keyup_1_listener() { i0__namespace.ɵɵrestoreView(_r9_1); var ctx_r10 = i0__namespace.ɵɵnextContext(2); return ctx_r10.searchCountry(); })("click", function NgxIntlTelInputComponent_div_6_div_1_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngModel", ctx_r3.countrySearchText)("placeholder", ctx_r3.searchCountryPlaceholder);
        }
    }
    function NgxIntlTelInputComponent_div_6_li_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 19);
            i0__namespace.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_4_Template_li_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r14_1); var country_r12 = restoredCtx.$implicit; var ctx_r13 = i0__namespace.ɵɵnextContext(2); var _r2 = i0__namespace.ɵɵreference(8); return ctx_r13.onCountrySelect(country_r12, _r2); });
            i0__namespace.ɵɵelementStart(1, "div", 20);
            i0__namespace.ɵɵelement(2, "div", 3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "span", 21);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "span", 22);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var country_r12 = ctx.$implicit;
            i0__namespace.ɵɵproperty("id", country_r12.htmlId + "-preferred");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngClass", country_r12.flagClass);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(country_r12.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("+", country_r12.dialCode, "");
        }
    }
    function NgxIntlTelInputComponent_div_6_li_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "li", 23);
        }
    }
    function NgxIntlTelInputComponent_div_6_li_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "li", 24);
            i0__namespace.ɵɵlistener("click", function NgxIntlTelInputComponent_div_6_li_6_Template_li_click_0_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r17_1); var country_r15 = restoredCtx.$implicit; var ctx_r16 = i0__namespace.ɵɵnextContext(2); var _r2 = i0__namespace.ɵɵreference(8); return ctx_r16.onCountrySelect(country_r15, _r2); });
            i0__namespace.ɵɵelementStart(1, "div", 20);
            i0__namespace.ɵɵelement(2, "div", 3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "span", 21);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "span", 22);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var country_r15 = ctx.$implicit;
            i0__namespace.ɵɵproperty("id", country_r15.htmlId);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngClass", country_r15.flagClass);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(country_r15.name);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("+", country_r15.dialCode, "");
        }
    }
    function NgxIntlTelInputComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 10);
            i0__namespace.ɵɵtemplate(1, NgxIntlTelInputComponent_div_6_div_1_Template, 2, 2, "div", 11);
            i0__namespace.ɵɵelementStart(2, "ul", 12, 13);
            i0__namespace.ɵɵtemplate(4, NgxIntlTelInputComponent_div_6_li_4_Template, 7, 4, "li", 14);
            i0__namespace.ɵɵtemplate(5, NgxIntlTelInputComponent_div_6_li_5_Template, 1, 0, "li", 15);
            i0__namespace.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_li_6_Template, 7, 4, "li", 16);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.searchCountryFlag && ctx_r1.searchCountryField);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r1.preferredCountriesInDropDown);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.preferredCountriesInDropDown == null ? null : ctx_r1.preferredCountriesInDropDown.length);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r1.allCountries);
        }
    }
    var _c1 = function (a0) { return { disabled: a0 }; };
    var NgxIntlTelInputComponent = /** @class */ (function () {
        function NgxIntlTelInputComponent(countryCodeData) {
            this.countryCodeData = countryCodeData;
            this.value = '';
            this.preferredCountries = [];
            this.enablePlaceholder = true;
            this.numberFormat = exports.PhoneNumberFormat.International;
            this.cssClass = 'form-control';
            this.onlyCountries = [];
            this.enableAutoCountrySelect = true;
            this.searchCountryFlag = false;
            this.searchCountryField = [exports.SearchCountryField.All];
            this.searchCountryPlaceholder = 'Search Country';
            this.maxLength = '';
            this.selectFirstCountry = true;
            this.phoneValidation = true;
            this.inputId = 'phone';
            this.separateDialCode = false;
            this.defaultPhoneMask = '00 00 00 00';
            this.countryChange = new i0.EventEmitter();
            this.selectedCountry = {
                areaCodes: undefined,
                dialCode: '',
                htmlId: '',
                flagClass: '',
                iso2: '',
                name: '',
                placeHolder: '',
                priority: 0,
            };
            this.phoneNumber = '';
            this.allCountries = [];
            this.preferredCountriesInDropDown = [];
            // Has to be 'any' to prevent a need to install @types/google-libphonenumber by the package user...
            this.phoneUtil = lpn__namespace.PhoneNumberUtil.getInstance();
            this.disabled = false;
            this.errors = ['Phone number is required.'];
            this.countrySearchText = '';
            this.phoneMask = this.defaultPhoneMask;
            this.onTouched = function () { };
            this.propagateChange = function (_) { };
            // If this is not set, ngx-bootstrap will try to use the bs3 CSS (which is not what we've embedded) and will
            // Add the wrong classes and such
            utils.setTheme('bs4');
        }
        NgxIntlTelInputComponent.prototype.ngOnInit = function () {
            this.init();
        };
        NgxIntlTelInputComponent.prototype.ngOnChanges = function (changes) {
            var selectedISO = changes['selectedCountryISO'];
            if (this.allCountries &&
                selectedISO &&
                selectedISO.currentValue !== selectedISO.previousValue) {
                this.updateSelectedCountry();
            }
            if (changes.preferredCountries) {
                this.updatePreferredCountries();
            }
            this.checkSeparateDialCodeStyle();
        };
        /*
            This is a wrapper method to avoid calling this.ngOnInit() in writeValue().
            Ref: http://codelyzer.com/rules/no-life-cycle-call/
        */
        NgxIntlTelInputComponent.prototype.init = function () {
            var _this = this;
            this.fetchCountryData();
            if (this.preferredCountries.length) {
                this.updatePreferredCountries();
            }
            if (this.onlyCountries.length) {
                this.allCountries = this.allCountries.filter(function (c) { return _this.onlyCountries.includes(c.iso2); });
            }
            if (this.selectFirstCountry) {
                if (this.preferredCountriesInDropDown.length) {
                    this.setSelectedCountry(this.preferredCountriesInDropDown[0]);
                }
                else {
                    this.setSelectedCountry(this.allCountries[0]);
                }
            }
            this.updateSelectedCountry();
            this.checkSeparateDialCodeStyle();
        };
        NgxIntlTelInputComponent.prototype.setSelectedCountry = function (country) {
            this.selectedCountry = country;
            this.countryChange.emit(country);
        };
        /**
         * Search country based on country name, iso2, dialCode or all of them.
         */
        NgxIntlTelInputComponent.prototype.searchCountry = function () {
            var _this = this;
            if (!this.countrySearchText) {
                this.countryList.nativeElement
                    .querySelector('.iti__country-list li')
                    .scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'nearest',
                });
                return;
            }
            var countrySearchTextLower = this.countrySearchText.toLowerCase();
            var country = this.allCountries.filter(function (c) {
                if (_this.searchCountryField.indexOf(exports.SearchCountryField.All) > -1) {
                    // Search in all fields
                    if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                    if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                        return c;
                    }
                    if (c.dialCode.startsWith(_this.countrySearchText)) {
                        return c;
                    }
                }
                else {
                    // Or search by specific SearchCountryField(s)
                    if (_this.searchCountryField.indexOf(exports.SearchCountryField.Iso2) > -1) {
                        if (c.iso2.toLowerCase().startsWith(countrySearchTextLower)) {
                            return c;
                        }
                    }
                    if (_this.searchCountryField.indexOf(exports.SearchCountryField.Name) > -1) {
                        if (c.name.toLowerCase().startsWith(countrySearchTextLower)) {
                            return c;
                        }
                    }
                    if (_this.searchCountryField.indexOf(exports.SearchCountryField.DialCode) > -1) {
                        if (c.dialCode.startsWith(_this.countrySearchText)) {
                            return c;
                        }
                    }
                }
            });
            if (country.length > 0) {
                var el = this.countryList.nativeElement.querySelector('#' + country[0].htmlId);
                if (el) {
                    el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'nearest',
                    });
                }
            }
            this.checkSeparateDialCodeStyle();
        };
        NgxIntlTelInputComponent.prototype.onPhoneNumberChange = function () {
            var countryCode;
            // Handle the case where the user sets the value programatically based on a persisted ChangeData obj.
            if (this.phoneNumber && typeof this.phoneNumber === 'object') {
                var numberObj = this.phoneNumber;
                this.phoneNumber = numberObj.number;
                countryCode = numberObj.countryCode;
            }
            this.value = this.phoneNumber;
            countryCode = countryCode || this.selectedCountry.iso2;
            var number = this.getParsedNumber(this.phoneNumber, countryCode);
            // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
            if (this.enableAutoCountrySelect) {
                countryCode =
                    number && number.getCountryCode()
                        ? this.getCountryIsoCode(number.getCountryCode(), number)
                        : this.selectedCountry.iso2;
                if (countryCode && countryCode !== this.selectedCountry.iso2) {
                    var newCountry = this.allCountries
                        .sort(function (a, b) {
                        return a.priority - b.priority;
                    })
                        .find(function (c) { return c.iso2 === countryCode; });
                    if (newCountry) {
                        this.selectedCountry = newCountry;
                    }
                }
            }
            countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
            this.checkSeparateDialCodeStyle();
            if (!this.value) {
                // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                // tslint:disable-next-line: no-null-keyword
                this.propagateChange(null);
            }
            else {
                var intlNo = number
                    ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.INTERNATIONAL)
                    : '';
                // parse phoneNumber if separate dial code is needed
                if (this.separateDialCode && intlNo) {
                    this.value = this.removeDialCode(intlNo);
                }
                this.propagateChange({
                    number: this.value,
                    internationalNumber: intlNo,
                    nationalNumber: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.NATIONAL)
                        : '',
                    e164Number: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.E164)
                        : '',
                    countryCode: countryCode.toUpperCase(),
                    dialCode: '+' + this.selectedCountry.dialCode,
                });
            }
        };
        NgxIntlTelInputComponent.prototype.onCountrySelect = function (country, el) {
            var countryPlaceholder = country.placeHolder.replace(/[0-9]/g, '0');
            if (countryPlaceholder) {
                this.phoneMask = countryPlaceholder;
            }
            this.setSelectedCountry(country);
            this.checkSeparateDialCodeStyle();
            if (this.phoneNumber && this.phoneNumber.length > 0) {
                this.value = this.phoneNumber;
                var number = this.getParsedNumber(this.phoneNumber, this.selectedCountry.iso2);
                var intlNo = number
                    ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.INTERNATIONAL)
                    : '';
                // parse phoneNumber if separate dial code is needed
                if (this.separateDialCode && intlNo) {
                    this.value = this.removeDialCode(intlNo);
                }
                this.propagateChange({
                    number: this.value,
                    internationalNumber: intlNo,
                    nationalNumber: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.NATIONAL)
                        : '',
                    e164Number: number
                        ? this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat.E164)
                        : '',
                    countryCode: this.selectedCountry.iso2.toUpperCase(),
                    dialCode: '+' + this.selectedCountry.dialCode,
                });
            }
            else {
                // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                // tslint:disable-next-line: no-null-keyword
                this.propagateChange(null);
            }
            el.focus();
        };
        NgxIntlTelInputComponent.prototype.onInputKeyPress = function (event) {
            var allowedChars = /[0-9\+\-\(\)\ ]/;
            var allowedCtrlChars = /[axcv]/; // Allows copy-pasting
            var allowedOtherKeys = [
                'ArrowLeft',
                'ArrowUp',
                'ArrowRight',
                'ArrowDown',
                'Home',
                'End',
                'Insert',
                'Delete',
                'Backspace',
            ];
            if (!allowedChars.test(event.key) &&
                !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
                !allowedOtherKeys.includes(event.key)) {
                event.preventDefault();
            }
        };
        NgxIntlTelInputComponent.prototype.registerOnChange = function (fn) {
            this.propagateChange = fn;
        };
        NgxIntlTelInputComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NgxIntlTelInputComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        NgxIntlTelInputComponent.prototype.writeValue = function (obj) {
            var _this = this;
            if (obj === undefined) {
                this.init();
            }
            this.phoneNumber = obj;
            setTimeout(function () {
                _this.onPhoneNumberChange();
            }, 1);
        };
        NgxIntlTelInputComponent.prototype.resolvePlaceholder = function () {
            var placeholder = '';
            if (this.customPlaceholder) {
                placeholder = this.customPlaceholder;
            }
            else if (this.selectedCountry.placeHolder) {
                placeholder = this.selectedCountry.placeHolder;
                if (this.separateDialCode) {
                    placeholder = this.removeDialCode(placeholder);
                }
            }
            return placeholder;
        };
        /* --------------------------------- Helpers -------------------------------- */
        /**
         * Returns parse PhoneNumber object.
         * @param phoneNumber string
         * @param countryCode string
         */
        NgxIntlTelInputComponent.prototype.getParsedNumber = function (phoneNumber, countryCode) {
            var number;
            try {
                number = this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase());
            }
            catch (e) { }
            return number;
        };
        /**
         * Adjusts input alignment based on the dial code presentation style.
         */
        NgxIntlTelInputComponent.prototype.checkSeparateDialCodeStyle = function () {
            if (this.separateDialCode && this.selectedCountry) {
                var cntryCd = this.selectedCountry.dialCode;
                this.separateDialCodeClass =
                    'separate-dial-code iti-sdc-' + (cntryCd.length + 1);
            }
            else {
                this.separateDialCodeClass = '';
            }
        };
        /**
         * Cleans dialcode from phone number string.
         * @param phoneNumber string
         */
        NgxIntlTelInputComponent.prototype.removeDialCode = function (phoneNumber) {
            var number = this.getParsedNumber(phoneNumber, this.selectedCountry.iso2);
            phoneNumber = this.phoneUtil.format(number, lpn__namespace.PhoneNumberFormat[this.numberFormat]);
            if (phoneNumber.startsWith('+') && this.separateDialCode) {
                phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
            }
            return phoneNumber;
        };
        /**
         * Sifts through all countries and returns iso code of the primary country
         * based on the number provided.
         * @param countryCode country code in number format
         * @param number PhoneNumber object
         */
        NgxIntlTelInputComponent.prototype.getCountryIsoCode = function (countryCode, number) {
            // Will use this to match area code from the first numbers
            var rawNumber = number['values_']['2'].toString();
            // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
            var countries = this.allCountries.filter(function (c) { return c.dialCode === countryCode.toString(); });
            // Main country is the country, which has no areaCodes specified in country-code.ts file.
            var mainCountry = countries.find(function (c) { return c.areaCodes === undefined; });
            // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
            var secondaryCountries = countries.filter(function (c) { return c.areaCodes !== undefined; });
            var matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
            /*
                Iterate over each secondary country and check if nationalNumber starts with any of areaCodes available.
                If no matches found, fallback to the main country.
            */
            secondaryCountries.forEach(function (country) {
                country.areaCodes.forEach(function (areaCode) {
                    if (rawNumber.startsWith(areaCode)) {
                        matchedCountry = country.iso2;
                    }
                });
            });
            return matchedCountry;
        };
        /**
         * Gets formatted example phone number from phoneUtil.
         * @param countryCode string
         */
        NgxIntlTelInputComponent.prototype.getPhoneNumberPlaceHolder = function (countryCode) {
            try {
                return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn__namespace.PhoneNumberFormat[this.numberFormat]);
            }
            catch (e) {
                return e;
            }
        };
        /**
         * Clearing the list to avoid duplicates (https://github.com/webcat12345/ngx-intl-tel-input/issues/248)
         */
        NgxIntlTelInputComponent.prototype.fetchCountryData = function () {
            var _this = this;
            this.allCountries = [];
            this.countryCodeData.allCountries.forEach(function (c) {
                var country = {
                    name: c[0].toString(),
                    iso2: c[1].toString(),
                    dialCode: c[2].toString(),
                    priority: +c[3] || 0,
                    areaCodes: c[4] || undefined,
                    htmlId: "iti-0__item-" + c[1].toString(),
                    flagClass: "iti__" + c[1].toString().toLocaleLowerCase(),
                    placeHolder: '',
                };
                if (_this.enablePlaceholder) {
                    country.placeHolder = _this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
                }
                _this.allCountries.push(country);
            });
        };
        /**
         * Populates preferredCountriesInDropDown with prefferred countries.
         */
        NgxIntlTelInputComponent.prototype.updatePreferredCountries = function () {
            var _this = this;
            if (this.preferredCountries.length) {
                this.preferredCountriesInDropDown = [];
                this.preferredCountries.forEach(function (iso2) {
                    var preferredCountry = _this.allCountries.filter(function (c) {
                        return c.iso2 === iso2;
                    });
                    _this.preferredCountriesInDropDown.push(preferredCountry[0]);
                });
            }
        };
        /**
         * Updates selectedCountry.
         */
        NgxIntlTelInputComponent.prototype.updateSelectedCountry = function () {
            var _this = this;
            if (this.selectedCountryISO) {
                this.selectedCountry = this.allCountries.find(function (c) {
                    return c.iso2.toLowerCase() === _this.selectedCountryISO.toLowerCase();
                });
                if (this.selectedCountry) {
                    if (this.phoneNumber) {
                        this.onPhoneNumberChange();
                    }
                    else {
                        // Reason: avoid https://stackoverflow.com/a/54358133/1617590
                        // tslint:disable-next-line: no-null-keyword
                        this.propagateChange(null);
                    }
                }
            }
        };
        return NgxIntlTelInputComponent;
    }());
    NgxIntlTelInputComponent.ɵfac = function NgxIntlTelInputComponent_Factory(t) { return new (t || NgxIntlTelInputComponent)(i0__namespace.ɵɵdirectiveInject(CountryCode)); };
    NgxIntlTelInputComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NgxIntlTelInputComponent, selectors: [["ngx-intl-tel-input"]], viewQuery: function NgxIntlTelInputComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.countryList = _t.first);
            }
        }, inputs: { value: "value", preferredCountries: "preferredCountries", enablePlaceholder: "enablePlaceholder", customPlaceholder: "customPlaceholder", numberFormat: "numberFormat", cssClass: "cssClass", onlyCountries: "onlyCountries", enableAutoCountrySelect: "enableAutoCountrySelect", searchCountryFlag: "searchCountryFlag", searchCountryField: "searchCountryField", searchCountryPlaceholder: "searchCountryPlaceholder", maxLength: "maxLength", selectFirstCountry: "selectFirstCountry", selectedCountryISO: "selectedCountryISO", phoneValidation: "phoneValidation", inputId: "inputId", separateDialCode: "separateDialCode", defaultPhoneMask: "defaultPhoneMask" }, outputs: { countryChange: "countryChange" }, features: [i0__namespace.ɵɵProvidersFeature([
                CountryCode,
                {
                    provide: i5.NG_VALUE_ACCESSOR,
                    // tslint:disable-next-line:no-forward-ref
                    useExisting: i0.forwardRef(function () { return NgxIntlTelInputComponent; }),
                    multi: true,
                },
                {
                    provide: i5.NG_VALIDATORS,
                    useValue: phoneNumberValidator,
                    multi: true,
                },
            ]), i0__namespace.ɵɵNgOnChangesFeature], decls: 9, vars: 15, consts: [[1, "iti", "iti--allow-dropdown", 3, "ngClass"], ["dropdown", "", 1, "iti__flag-container", 3, "ngClass", "isDisabled"], ["dropdownToggle", "", 1, "iti__selected-flag", "dropdown-toggle"], [1, "iti__flag", 3, "ngClass"], ["class", "selected-dial-code", 4, "ngIf"], [1, "iti__arrow"], ["class", "dropdown-menu country-dropdown", 4, "dropdownMenu"], ["type", "tel", "autocomplete", "off", 3, "mask", "id", "ngClass", "ngModel", "disabled", "placeholder", "blur", "keypress", "ngModelChange"], ["focusable", ""], [1, "selected-dial-code"], [1, "dropdown-menu", "country-dropdown"], ["class", "search-container", 4, "ngIf"], [1, "iti__country-list"], ["countryList", ""], ["class", "iti__country iti__preferred", 3, "id", "click", 4, "ngFor", "ngForOf"], ["class", "iti__divider", 4, "ngIf"], ["class", "iti__country iti__standard", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["id", "country-search-box", "autofocus", "", 3, "ngModel", "placeholder", "ngModelChange", "keyup", "click"], [1, "iti__country", "iti__preferred", 3, "id", "click"], [1, "iti__flag-box"], [1, "iti__country-name"], [1, "iti__dial-code"], [1, "iti__divider"], [1, "iti__country", "iti__standard", 3, "id", "click"]], template: function NgxIntlTelInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelement(3, "div", 3);
                i0__namespace.ɵɵtemplate(4, NgxIntlTelInputComponent_div_4_Template, 2, 1, "div", 4);
                i0__namespace.ɵɵelement(5, "div", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, NgxIntlTelInputComponent_div_6_Template, 7, 4, "div", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "input", 7, 8);
                i0__namespace.ɵɵlistener("blur", function NgxIntlTelInputComponent_Template_input_blur_7_listener() { return ctx.onTouched(); })("keypress", function NgxIntlTelInputComponent_Template_input_keypress_7_listener($event) { return ctx.onInputKeyPress($event); })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener($event) { return ctx.phoneNumber = $event; })("ngModelChange", function NgxIntlTelInputComponent_Template_input_ngModelChange_7_listener() { return ctx.onPhoneNumberChange(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngClass", ctx.separateDialCodeClass);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(13, _c1, ctx.disabled))("isDisabled", ctx.disabled);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngClass", ctx.selectedCountry == null ? null : ctx.selectedCountry.flagClass);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.separateDialCode);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("mask", ctx.phoneMask)("id", ctx.inputId)("ngClass", ctx.cssClass)("ngModel", ctx.phoneNumber)("disabled", ctx.disabled)("placeholder", ctx.resolvePlaceholder());
                i0__namespace.ɵɵattribute("maxLength", ctx.maxLength)("validation", ctx.phoneValidation);
            }
        }, directives: [i2__namespace.NgClass, i3__namespace.BsDropdownDirective, i3__namespace.BsDropdownToggleDirective, i2__namespace.NgIf, i3__namespace.BsDropdownMenuDirective, i4__namespace.MaskDirective, i5__namespace.DefaultValueAccessor, i5__namespace.NgControlStatus, i5__namespace.NgModel, NativeElementInjectorDirective, i2__namespace.NgForOf], styles: [".dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%]{position:relative}.dropdown-toggle[_ngcontent-%COMP%]{white-space:nowrap}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropdown-menu[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-right[_ngcontent-%COMP%]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-sm-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-md-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-lg-right[_ngcontent-%COMP%]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left[_ngcontent-%COMP%]{right:auto;left:0}.dropdown-menu-xl-right[_ngcontent-%COMP%]{right:0;left:auto}}.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:0}.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty:after{margin-left:0}.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:before{vertical-align:0}.dropdown-menu[x-placement^=top][_ngcontent-%COMP%], .dropdown-menu[x-placement^=right][_ngcontent-%COMP%], .dropdown-menu[x-placement^=bottom][_ngcontent-%COMP%], .dropdown-menu[x-placement^=left][_ngcontent-%COMP%]{right:auto;bottom:auto}.dropdown-divider[_ngcontent-%COMP%]{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item[_ngcontent-%COMP%]{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show[_ngcontent-%COMP%]{display:block}.dropdown-header[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text[_ngcontent-%COMP%]{display:block;padding:.25rem 1.5rem;color:#212529}", "li.iti__country[_ngcontent-%COMP%]:hover{background-color:#0000000d}.iti__selected-flag.dropdown-toggle[_ngcontent-%COMP%]:after{content:none}.iti__flag-container.disabled[_ngcontent-%COMP%]{cursor:default!important}.iti.iti--allow-dropdown[_ngcontent-%COMP%]   .flag-container.disabled[_ngcontent-%COMP%]:hover   .iti__selected-flag[_ngcontent-%COMP%]{background:none}.country-dropdown[_ngcontent-%COMP%]{border:1px solid #ccc;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:1px;border-collapse:collapse}.search-container[_ngcontent-%COMP%]{position:relative}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;border-bottom:1px solid #ccc;padding-left:10px}.search-icon[_ngcontent-%COMP%]{position:absolute;z-index:2;width:25px;margin:1px 10px}.iti__country-list[_ngcontent-%COMP%]{position:relative;border:none}.iti[_ngcontent-%COMP%]   input#country-search-box[_ngcontent-%COMP%]{padding-left:6px}.iti[_ngcontent-%COMP%]   .selected-dial-code[_ngcontent-%COMP%]{margin-left:6px}.iti.separate-dial-code[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   .iti__selected-flag[_ngcontent-%COMP%]{width:93px}.iti.separate-dial-code[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .iti.separate-dial-code.iti--allow-dropdown.iti-sdc-4[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:98px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxIntlTelInputComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'ngx-intl-tel-input',
                        templateUrl: './ngx-intl-tel-input.component.html',
                        styleUrls: ['./bootstrap-dropdown.css', './ngx-intl-tel-input.component.css'],
                        providers: [
                            CountryCode,
                            {
                                provide: i5.NG_VALUE_ACCESSOR,
                                // tslint:disable-next-line:no-forward-ref
                                useExisting: i0.forwardRef(function () { return NgxIntlTelInputComponent; }),
                                multi: true,
                            },
                            {
                                provide: i5.NG_VALIDATORS,
                                useValue: phoneNumberValidator,
                                multi: true,
                            },
                        ],
                    }]
            }], function () { return [{ type: CountryCode }]; }, { value: [{
                    type: i0.Input
                }], preferredCountries: [{
                    type: i0.Input
                }], enablePlaceholder: [{
                    type: i0.Input
                }], customPlaceholder: [{
                    type: i0.Input
                }], numberFormat: [{
                    type: i0.Input
                }], cssClass: [{
                    type: i0.Input
                }], onlyCountries: [{
                    type: i0.Input
                }], enableAutoCountrySelect: [{
                    type: i0.Input
                }], searchCountryFlag: [{
                    type: i0.Input
                }], searchCountryField: [{
                    type: i0.Input
                }], searchCountryPlaceholder: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], selectFirstCountry: [{
                    type: i0.Input
                }], selectedCountryISO: [{
                    type: i0.Input
                }], phoneValidation: [{
                    type: i0.Input
                }], inputId: [{
                    type: i0.Input
                }], separateDialCode: [{
                    type: i0.Input
                }], defaultPhoneMask: [{
                    type: i0.Input
                }], countryChange: [{
                    type: i0.Output
                }], countryList: [{
                    type: i0.ViewChild,
                    args: ['countryList']
                }] });
    })();

    var dropdownModuleForRoot = i3.BsDropdownModule.forRoot();
    var ngxMaskModuleForRoot = i4.NgxMaskModule.forRoot();
    var NgxIntlTelInputModule = /** @class */ (function () {
        function NgxIntlTelInputModule() {
        }
        return NgxIntlTelInputModule;
    }());
    NgxIntlTelInputModule.ɵfac = function NgxIntlTelInputModule_Factory(t) { return new (t || NgxIntlTelInputModule)(); };
    NgxIntlTelInputModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: NgxIntlTelInputModule });
    NgxIntlTelInputModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule,
                i5.FormsModule,
                i5.ReactiveFormsModule,
                dropdownModuleForRoot,
                ngxMaskModuleForRoot,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxIntlTelInputModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                        imports: [
                            i2.CommonModule,
                            i5.FormsModule,
                            i5.ReactiveFormsModule,
                            dropdownModuleForRoot,
                            ngxMaskModuleForRoot,
                        ],
                        exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxIntlTelInputModule, { declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective], imports: [i2.CommonModule,
                i5.FormsModule,
                i5.ReactiveFormsModule, i3__namespace.BsDropdownModule, i4__namespace.NgxMaskModule], exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective] });
    })();

    /*
     * Public API Surface of ngx-intl-tel-input
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NativeElementInjectorDirective = NativeElementInjectorDirective;
    exports.NgxIntlTelInputComponent = NgxIntlTelInputComponent;
    exports.NgxIntlTelInputModule = NgxIntlTelInputModule;
    exports.dropdownModuleForRoot = dropdownModuleForRoot;
    exports.ngxMaskModuleForRoot = ngxMaskModuleForRoot;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-intl-tel-input.umd.js.map
