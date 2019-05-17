const countryCurrencies = [
    {country: "Afghanistan",title: "Afghan afghani",code: "AFN"},
    {country: "Akrotiri and Dhekelia (UK)",title: "European euro",code: "EUR"},
    {country: "Aland Islands (Finland)", title: "European euro", code: "EUR"},
    {country: "Albania",title: "Albanian lek",code: "ALL"},
    {country: "Algeria", title: "Algerian dinar", code: "DZD"},
    {country: "American Samoa (USA)",title: "United States dollar",code: "USD"},
    {country: "Andorra", title: "European euro", code: "EUR"},
    {country: "Angola",title: "Angolan kwanza",code: "AOA"},
    {country: "Anguilla (UK)", title: "East Caribbean dollar", code: "XCD"},
    {country: "Antigua and Barbuda",title: "East Caribbean dollar",code: "XCD"},
    {country: "Argentina", title: "Argentine peso", code: "ARS"},
    {country: "Armenia",title: "Armenian dram",code: "AMD"},
    {country: "Aruba (Netherlands)", title: "Aruban florin", code: "AWG"},
    {country: "Ascension Island (UK)",title: "Saint Helena pound",code: "SHP"},
    {country: "Australia", title: "Australian dollar", code: "AUD"},
    {country: "Austria",title: "European euro",code: "EUR"},
    {country: "Azerbaijan", title: "Azerbaijan manat", code: "AZN"},
    {country: "Bahamas",title: "Bahamian dollar",code: "BSD"},
    {country: "Bahrain", title: "Bahraini dinar", code: "BHD"},
    {country: "Bangladesh",title: "Bangladeshi taka",code: "BDT"},
    {country: "Barbados", title: "Barbadian dollar", code: "BBD"},
    {country: "Belarus",title: "Belarusian ruble",code: "BYN"},
    {country: "Belgium", title: "European euro", code: "EUR"},
    {country: "Belize",title: "Belize dollar",code: "BZD"},
    {country: "Benin", title: "West African CFA franc", code: "XOF"},
    {country: "Bermuda (UK)",title: "Bermudian dollar",code: "BMD"},
    {country: "Bhutan", title: "Bhutanese ngultrum", code: "BTN"},
    {country: "Bolivia",title: "Bolivian boliviano",code: "BOB"},
    {country: "Bonaire (Netherlands)",title: "United States dollar",code: "USD"},
    {country: "Bosnia and Herzegovina",title: "Bosnia and Herzegovina convertible mark",code: "BAM"},
    {country: "Botswana", title: "Botswana pula", code: "BWP"},
    {country: "Brazil",title: "Brazilian real",code: "BRL"},
    {country: "British Indian Ocean Territory (UK)",title: "United States dollar",code: "USD"},
    {country: "British Virgin Islands (UK)", title: "United States dollar", code: "USD"},
    {country: "Brunei",title: "Brunei dollar",code: "BND"},
    {country: "Bulgaria", title: "Bulgarian lev", code: "BGN"},
    {country: "Burkina Faso",title: "West African CFA franc",code: "XOF"},
    {country: "Burundi", title: "Burundi franc", code: "BIF"},
    {country: "Cabo Verde",title: "Cape Verdean escudo",code: "CVE"},
    {country: "Cambodia", title: "Cambodian riel", code: "KHR"},
    {country: "Cameroon",title: "Central African CFA franc",code: "XAF"},
    {country: "Canada",title: "Canadian dollar",code: "CAD"},
    {country: "Caribbean Netherlands (Netherlands)",title: "United States dollar",code: "USD"},
    {country: "Cayman Islands (UK)",title: "Cayman Islands dollar",code: "KYD"},
    {country: "Central African Republic", title: "Central African CFA franc", code: "XAF"},
    {country: "Chad",title: "Central African CFA franc",code: "XAF"},
    {country: "Chatham Islands (New Zealand)", title: "New Zealand dollar", code: "NZD"},
    {country: "Chile",title: "Chilean peso",code: "CLP"},
    {country: "China",title: "Chinese Yuan Renminbi",code: "CNY"},
    {country: "Christmas Island (Australia)",title: "Australian dollar",code: "AUD"},
    {country: "Cocos (Keeling) Islands (Australia)",title: "Australian dollar",code: "AUD"},
    {country: "Colombia", title: "Colombian peso", code: "COP"},
    {country: "Comoros",title: "Comorian franc",code: "KMF"},
    {country: "Congo, Democratic Republic of the",title: "Congolese franc",code: "CDF"},
    {country: "Congo, Republic of the",title: "Central African CFA franc",code: "XAF"},
    {country: "Costa Rica", title: "Costa Rican colon", code: "CRC"},
    {country: "Cote d'Ivoire",title: "West African CFA franc",code: "XOF"},
    {country: "Croatia", title: "Croatian kuna", code: "HRK"},
    {country: "Cuba",title: "Cuban peso",code: "CUP"},
    {country: "Curacao (Netherlands)",title: "Netherlands Antillean guilder",code: "ANG"},
    {country: "Cyprus", title: "European euro", code: "EUR"},
    {country: "Czechia",title: "Czech koruna",code: "CZK"},
    {country: "Denmark", title: "Danish krone", code: "DKK"},
    {country: "Djibouti",title: "Djiboutian franc",code: "DJF"},
    {country: "Dominica", title: "East Caribbean dollar", code: "XCD"},
    {country: "Dominican Republic",title: "Dominican peso",code: "DOP"},
    {country: "Ecuador", title: "United States dollar", code: "USD"},
    {country: "Egypt",title: "Egyptian pound",code: "EGP"},
    {country: "El Salvador", title: "United States dollar", code: "USD"},
    {country: "Equatorial Guinea",title: "Central African CFA franc",code: "XAF"},
    {country: "Eritrea", title: "Eritrean nakfa", code: "ERN"},
    {country: "Estonia",title: "European euro",code: "EUR"},
    {country: "Eswatini (formerly Swaziland)", title: "Swazi lilangeni", code: "SZL"},
    {country: "Ethiopia",title: "Ethiopian birr",code: "ETB"},
    {country: "Falkland Islands (UK)",title: "Falkland Islands pound",code: "FKP"},
    {country: "Fiji",title: "Fijian dollar",code: "FJD"},
    {country: "Finland", title: "European euro", code: "EUR"},
    {country: "France",title: "European euro",code: "EUR"},
    {country: "French Guiana (France)",title: "European euro",code: "EUR"},
    {country: "French Polynesia (France)", title: "CFP franc", code: "XPF"},
    {country: "Gabon",title: "Central African CFA franc",code: "XAF"},
    {country: "Gambia", title: "Gambian dalasi", code: "GMD"},
    {country: "Georgia",title: "Georgian lari",code: "GEL"},
    {country: "Germany", title: "European euro", code: "EUR"},
    {country: "Ghana",title: "Ghanaian cedi",code: "GHS"},
    {country: "Gibraltar (UK)", title: "Gibraltar pound", code: "GIP"},
    {country: "Greece",title: "European euro",code: "EUR"},
    {country: "Greenland (Denmark)", title: "Danish krone", code: "DKK"},
    {country: "Grenada",title: "East Caribbean dollar",code: "XCD"},
    {country: "Guadeloupe (France)", title: "European euro", code: "EUR"},
    {country: "Guam (USA)",title: "United States dollar",code: "USD"},
    {country: "Guatemala", title: "Guatemalan quetzal", code: "GTQ"},
    {country: "Guernsey (UK)",title: "Guernsey Pound",code: "GGP"},
    {country: "Guinea", title: "Guinean franc", code: "GNF"},
    {country: "Guinea-Bissau",title: "West African CFA franc",code: "XOF"},
    {country: "Guyana", title: "Guyanese dollar", code: "GYD"},
    {country: "Haiti",title: "Haitian gourde",code: "HTG"},
    {country: "Honduras", title: "Honduran lempira", code: "HNL"},
    {country: "Hong Kong (China)",title: "Hong Kong dollar",code: "HKD"},
    {country: "Hungary", title: "Hungarian forint", code: "HUF"},
    {country: "Iceland",title: "Icelandic krona",code: "ISK"},
    {country: "India", title: "Indian rupee", code: "INR"},
    {country: "Indonesia",title: "Indonesian rupiah",code: "IDR"},
    {country: "International Monetary Fund (IMF)",title: "SDR (Special Drawing Right)",code: "XDR"},
    {country: "Iran", title: "Iranian rial", code: "IRR"},
    {country: "Iraq",title: "Iraqi dinar",code: "IQD"},
    {country: "Ireland", title: "European euro", code: "EUR"},
    {country: "Isle of Man (UK)",title: "Manx pound",code: "IMP"},
    {country: "Israel", title: "Israeli new shekel", code: "ILS"},
    {country: "Italy",title: "European euro",code: "EUR"},
    {country: "Jamaica", title: "Jamaican dollar", code: "JMD"},
    {country: "Japan",title: "Japanese yen",code: "JPY"},
    {country: "Jersey (UK)", title: "Jersey pound", code: "JEP"},
    {country: "Jordan",title: "Jordanian dinar",code: "JOD"},
    {country: "Kazakhstan", title: "Kazakhstani tenge", code: "KZT"},
    {country: "Kenya",title: "Kenyan shilling",code: "KES"},
    {country: "Kiribati", title: "Australian dollar", code: "AUD"},
    {country: "Kosovo",title: "European euro",code: "EUR"},
    {country: "Kuwait", title: "Kuwaiti dinar", code: "KWD"},
    {country: "Kyrgyzstan",title: "Kyrgyzstani som",code: "KGS"},
    {country: "Laos", title: "Lao kip", code: "LAK"},
    {country: "Latvia",title: "European euro",code: "EUR"},
    {country: "Lebanon", title: "Lebanese pound", code: "LBP"},
    {country: "Lesotho",title: "Lesotho loti",code: "LSL"},
    {country: "Liberia", title: "Liberian dollar", code: "LRD"},
    {country: "Libya",title: "Libyan dinar",code: "LYD"},
    {country: "Liechtenstein", title: "Swiss franc", code: "CHF"},
    {country: "Lithuania",title: "European euro",code: "EUR"},
    {country: "Luxembourg", title: "European euro", code: "EUR"},
    {country: "Macau (China)",title: "Macanese pataca",code: "MOP"},
    {country: "Madagascar", title: "Malagasy ariary", code: "MGA"},
    {country: "Malawi",title: "Malawian kwacha",code: "MWK"},
    {country: "Malaysia", title: "Malaysian ringgit", code: "MYR"},
    {country: "Maldives",title: "Maldivian rufiyaa",code: "MVR"},
    {country: "Mali", title: "West African CFA franc", code: "XOF"},
    {country: "Malta",title: "European euro",code: "EUR"},
    {country: "Marshall Islands",title: "United States dollar",code: "USD"},
    {country: "Martinique (France)", title: "European euro", code: "EUR"},
    {country: "Mauritania",title: "Mauritanian ouguiya",code: "MRU"},
    {country: "Mauritius", title: "Mauritian rupee", code: "MUR"},
    {country: "Mayotte (France)",title: "European euro",code: "EUR"},
    {country: "Mexico", title: "Mexican peso", code: "MXN"},
    {country: "Micronesia",title: "United States dollar",code: "USD"},
    {country: "Moldova", title: "Moldovan leu", code: "MDL"},
    {country: "Monaco",title: "European euro",code: "EUR"},
    {country: "Mongolia", title: "Mongolian tugrik", code: "MNT"},
    {country: "Montenegro",title: "European euro",code: "EUR"},
    {country: "Montserrat (UK)", title: "East Caribbean dollar", code: "XCD"},
    {country: "Morocco",title: "Moroccan dirham",code: "MAD"},
    {country: "Mozambique", title: "Mozambican metical", code: "MZN"},
    {country: "Myanmar (formerly Burma)",title: "Myanmar kyat",code: "MMK"},
    {country: "Namibia", title: "Namibian dollar", code: "NAD"},
    {country: "Nauru",title: "Australian dollar",code: "AUD"},
    {country: "Nepal", title: "Nepalese rupee", code: "NPR"},
    {country: "Netherlands",title: "European euro",code: "EUR"},
    {country: "New Caledonia (France)", title: "CFP franc", code: "XPF"},
    {country: "New Zealand",title: "New Zealand dollar",code: "NZD"},
    {country: "Nicaragua", title: "Nicaraguan cordoba", code: "NIO"},
    {country: "Niger",title: "West African CFA franc",code: "XOF"},
    {country: "Nigeria", title: "Nigerian naira", code: "NGN"},
    {country: "Niue (New Zealand)",title: "New Zealand dollar",code: "NZD"},
    {country: "Norfolk Island (Australia)",title: "Australian dollar",code: "AUD"},
    {country: "Northern Mariana Islands (USA)",title: "United States dollar",code: "USD"},
    {country: "North Korea",title: "North Korean won",code: "KPW"},
    {country: "North Macedonia (formerly Macedonia)",title: "Macedonian denar",code: "MKD"},
    {country: "Norway", title: "Norwegian krone", code: "NOK"},
    {country: "Oman",title: "Omani rial",code: "OMR"},
    {country: "Pakistan", title: "Pakistani rupee", code: "PKR"},
    {country: "Palau",title: "United States dollar",code: "USD"},
    {country: "Palestine", title: "Israeli new shekel", code: "ILS"},
    {country: "Panama",title: "United States dollar",code: "USD"},
    {country: "Papua New Guinea", title: "Papua New Guinean kina", code: "PGK"},
    {country: "Paraguay",title: "Paraguayan guarani",code: "PYG"},
    {country: "Peru", title: "Peruvian sol", code: "PEN"},
    {country: "Philippines",title: "Philippine peso",code: "PHP"},
    {country: "Pitcairn Islands (UK)", title: "New Zealand dollar", code: "NZD"},
    {country: "Poland",title: "Polish zloty",code: "PLN"},
    {country: "Portugal", title: "European euro", code: "EUR"},
    {country: "Puerto Rico (USA)",title: "United States dollar",code: "USD"},
    {country: "Qatar", title: "Qatari riyal", code: "QAR"},
    {country: "Reunion (France)",title: "European euro",code: "EUR"},
    {country: "Romania", title: "Romanian leu", code: "RON"},
    {country: "Russia",title: "Russian ruble",code: "RUB"},
    {country: "Rwanda", title: "Rwandan franc", code: "RWF"},
    {country: "Saba (Netherlands)",title: "United States dollar",code: "USD"},
    {country: "Saint Barthelemy (France)",title: "European euro",code: "EUR"},
    {country: "Saint Helena (UK)",title: "Saint Helena pound",code: "SHP"},
    {country: "Saint Kitts and Nevis", title: "East Caribbean dollar", code: "XCD"},
    {country: "Saint Lucia",title: "East Caribbean dollar",code: "XCD"},
    {country: "Saint Martin (France)",title: "European euro",code: "EUR"},
    {country: "Saint Pierre and Miquelon (France)",title: "European euro",code: "EUR"},
    {country: "Saint Vincent and the Grenadines",title: "East Caribbean dollar",code: "XCD"},
    {country: "Samoa", title: "Samoan tala", code: "WST"},
    {country: "San Marino",title: "European euro",code: "EUR"},
    {country: "Sao Tome and Principe",title: "Sao Tome and Principe dobra",code: "STN"},
    {country: "Saudi Arabia", title: "Saudi Arabian riyal", code: "SAR"},
    {country: "Senegal",title: "West African CFA franc",code: "XOF"},
    {country: "Serbia", title: "Serbian dinar", code: "RSD"},
    {country: "Seychelles",title: "Seychellois rupee",code: "SCR"},
    {country: "Sierra Leone", title: "Sierra Leonean leone", code: "SLL"},
    {country: "Singapore",title: "Singapore dollar",code: "SGD"},
    {country: "Sint Eustatius (Netherlands)",title: "United States dollar",code: "USD"},
    {country: "Sint Maarten (Netherlands)",title: "Netherlands Antillean guilder",code: "ANG"},
    {country: "Slovakia", title: "European euro", code: "EUR"},
    {country: "Slovenia",title: "European euro",code: "EUR"},
    {country: "Solomon Islands", title: "Solomon Islands dollar", code: "SBD"},
    {country: "Somalia",title: "Somali shilling",code: "SOS"},
    {country: "South Africa",title: "South African rand",code: "ZAR"},
    {country: "South Georgia Island (UK)", title: "Pound sterling", code: "GBP"},
    {country: "South Korea",title: "South Korean won",code: "KRW"},
    {country: "South Sudan", title: "South Sudanese pound", code: "SSP"},
    {country: "Spain",title: "European euro",code: "EUR"},
    {country: "Sri Lanka", title: "Sri Lankan rupee", code: "LKR"},
    {country: "Sudan",title: "Sudanese pound",code: "SDG"},
    {country: "Suriname",title: "Surinamese dollar",code: "SRD"},
    {country: "Svalbard and Jan Mayen (Norway)", title: "Norwegian krone", code: "NOK"},
    {country: "Sweden",title: "Swedish krona",code: "SEK"},
    {country: "Switzerland", title: "Swiss franc", code: "CHF"},
    {country: "Syria",title: "Syrian pound",code: "SYP"},
    {country: "Taiwan", title: "New Taiwan dollar", code: "TWD"},
    {country: "Tajikistan",title: "Tajikistani somoni",code: "TJS"},
    {country: "Tanzania", title: "Tanzanian shilling", code: "TZS"},
    {country: "Thailand",title: "Thai baht",code: "THB"},
    {country: "Timor-Leste", title: "United States dollar", code: "USD"},
    {country: "Togo",title: "West African CFA franc",code: "XOF"},
    {country: "Tokelau (New Zealand)", title: "New Zealand dollar", code: "NZD"},
    {country: "Tonga",title: "Tongan pa’anga",code: "TOP"},
    {country: "Trinidad and Tobago",title: "Trinidad and Tobago dollar",code: "TTD"},
    {country: "Tristan da Cunha (UK)", title: "Pound sterling", code: "GBP"},
    {country: "Tunisia",title: "Tunisian dinar",code: "TND"},
    {country: "Turkey", title: "Turkish lira", code: "TRY"},
    {country: "Turkmenistan",title: "Turkmen manat",code: "TMT"},
    {country: "Turks and Caicos Islands (UK)",title: "United States dollar",code: "USD"},
    {country: "Tuvalu", title: "Australian dollar", code: "AUD"},
    {country: "Uganda",title: "Ugandan shilling",code: "UGX"},
    {country: "Ukraine", title: "Ukrainian hryvnia", code: "UAH"},
    {country: "United Arab Emirates",title: "UAE dirham",code: "AED"},
    {country: "United Kingdom", title: "Pound sterling", code: "GBP"},
    {country: "United States of America",title: "United States dollar",code: "USD"},
    {country: "Uruguay", title: "Uruguayan peso", code: "UYU"},
    {country: "US Virgin Islands (USA)",title: "United States dollar",code: "USD"},
    {country: "Uzbekistan", title: "Uzbekistani som", code: "UZS"},
    {country: "Vanuatu",title: "Vanuatu vatu",code: "VUV"},
    {country: "Vatican City (Holy See)", title: "European euro", code: "EUR"},
    {country: "Venezuela",title: "Venezuelan bolivar",code: "VES"},
    {country: "Vietnam", title: "Vietnamese dong", code: "VND"},
    {country: "Wake Island (USA)",title: "United States dollar",code: "USD"},
    {country: "Wallis and Futuna (France)", title: "CFP franc", code: "XPF"},
    {country: "Yemen",title: "Yemeni rial",code: "YER"},
    {country: "Zambia", title: "Zambian kwacha", code: "ZMW"},
    {country: "Zimbabwe",title: "United States dollar",code: "USD"}
];

// make codes unique
let currencyListObject = {};
countryCurrencies.map(({code, title}) => {
  currencyListObject[code] = {code, title}
})

// sort by code
let codes = Object.keys(currencyListObject);
codes.sort();
let currencies = codes.map(code => currencyListObject[code]);

module.exports = currencies;