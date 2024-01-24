const words = [
  "shade",
  "clast",
  "dated",
  "thews",
  "papal",
  "deash",
  "mazed",
  "truly",
  "mamba",
  "newly",
  "arrow",
  "leses",
  "spean",
  "adopt",
  "stoae",
  "baize",
  "hists",
  "oxims",
  "boody",
  "picul",
  "techs",
  "saree",
  "herns",
  "adman",
  "nolos",
  "spicy",
  "honey",
  "aleph",
  "skean",
  "hulks",
  "seamy",
  "email",
  "rotis",
  "stoop",
  "safes",
  "wauls",
  "syrup",
  "iglus",
  "beads",
  "typed",
  "ninja",
  "clops",
  "kivas",
  "fares",
  "youse",
  "irade",
  "lefts",
  "magic",
  "roset",
  "linky",
  "beryl",
  "sighs",
  "sworn",
  "omits",
  "spies",
  "sinks",
  "clout",
  "delts",
  "label",
  "pried",
  "louts",
  "zarfs",
  "furor",
  "parol",
  "krait",
  "sided",
  "butut",
  "welds",
  "naans",
  "frigs",
  "seine",
  "rewed",
  "gulag",
  "khafs",
  "braws",
  "utter",
  "sorts",
  "therm",
  "cupel",
  "coati",
  "pones",
  "cower",
  "micro",
  "amnio",
  "petit",
  "gloss",
  "biddy",
  "gayly",
  "solon",
  "stink",
  "duvet",
  "strum",
  "gapes",
  "sware",
  "toter",
  "oater",
  "adzes",
  "phlox",
  "burls",
  "chits",
  "yills",
  "lanes",
  "murex",
  "macle",
  "pumas",
  "abuts",
  "toons",
  "noddy",
  "maxed",
  "forbs",
  "sixth",
  "slues",
  "fuddy",
  "foamy",
  "grain",
  "salvo",
  "rearm",
  "hanks",
  "meted",
  "swage",
  "hollo",
  "lindy",
  "guild",
  "banjo",
  "outer",
  "seers",
  "guiro",
  "stied",
  "bunds",
  "jibbs",
  "inert",
  "raita",
  "ikats",
  "trues",
  "loggy",
  "cuvee",
  "hitch",
  "scrip",
  "baaed",
  "kirks",
  "melic",
  "viola",
  "olios",
  "seeks",
  "whang",
  "liney",
  "trigo",
  "hence",
  "progs",
  "meshy",
  "paces",
  "roper",
  "tafia",
  "sides",
  "lyres",
  "kitty",
  "ernes",
  "trice",
  "whale",
  "waver",
  "disco",
  "wawls",
  "hived",
  "krona",
  "fined",
  "jokey",
  "corer",
  "tendu",
  "ousel",
  "sobas",
  "macro",
  "skegs",
  "vibes",
  "rides",
  "ramus",
  "mount",
  "druse",
  "snash",
  "imids",
  "imbue",
  "steel",
  "flows",
  "zoeal",
  "griff",
  "palmy",
  "jucos",
  "telos",
  "money",
  "nimbi",
  "amnia",
  "silky",
  "matza",
  "click",
  "mynah",
  "anele",
  "chais",
  "lehua",
  "zlote",
  "dozer",
  "mitts",
  "lotte",
  "timed",
  "blast",
  "umami",
  "ounce",
  "meets",
  "pinch",
  "gases",
  "tutus",
  "seeps",
  "taper",
  "drawl",
  "fuses",
  "taunt",
  "treys",
  "shily",
  "latke",
  "crypt",
  "geest",
  "hunch",
  "apres",
  "gater",
  "teffs",
  "cooks",
  "sasin",
  "undue",
  "foxes",
  "chaps",
  "segni",
  "wazoo",
  "stagy",
  "paseo",
  "stags",
  "mafic",
  "doxie",
  "neaps",
  "zonal",
  "relic",
  "pupus",
  "miked",
  "sente",
  "avens",
  "taped",
  "sawed",
  "toque",
  "dobra",
  "indue",
  "hayed",
  "pungs",
  "stare",
  "jeers",
  "added",
  "waves",
  "shent",
  "repro",
  "whiny",
  "spurn",
  "gangs",
  "litas",
  "audad",
  "igloo",
  "buppy",
  "maund",
  "tofts",
  "grids",
  "birle",
  "domic",
  "mells",
  "korat",
  "keeks",
  "wytes",
  "femme",
  "teary",
  "furls",
  "kiddy",
  "winos",
  "hulls",
  "bourn",
  "blabs",
  "cleek",
  "fakes",
  "doses",
  "memos",
  "monad",
  "kyaks",
  "fatly",
  "piano",
  "seven",
  "cites",
  "stupa",
  "riyal",
  "lowse",
  "widow",
  "bleak",
  "didie",
  "score",
  "parts",
  "annal",
  "arson",
  "burds",
  "earth",
  "clamp",
  "albas",
  "newel",
  "lunks",
  "huzza",
  "volti",
  "bayou",
  "spite",
  "caulk",
  "poems",
  "start",
  "taupe",
  "gimme",
  "yulan",
  "orris",
  "gaped",
  "unpeg",
  "rakis",
  "hahas",
  "manly",
  "anima",
  "paged",
  "attar",
  "flout",
  "amaze",
  "sotol",
  "yodle",
  "pluck",
  "cusps",
  "oaten",
  "looey",
  "coden",
  "jenny",
  "yamen",
  "mould",
  "drink",
  "unbar",
  "diwan",
  "silts",
  "plots",
  "soupy",
  "reels",
  "waits",
  "whelp",
  "hoofs",
  "bogan",
  "skelm",
  "rotor",
  "dungy",
  "upper",
  "shawl",
  "woald",
  "least",
  "skoal",
  "styes",
  "stela",
  "nomen",
  "chiao",
  "jowar",
  "quoin",
  "panda",
  "hocus",
  "coxes",
  "koras",
  "kheth",
  "wails",
  "paddy",
  "paxes",
  "kelim",
  "cache",
  "cubeb",
  "roars",
  "loper",
  "inapt",
  "kylix",
  "snaky",
  "cully",
  "mauve",
  "sards",
  "bohos",
  "moral",
  "twiny",
  "deoxy",
  "cines",
  "mudra",
  "graph",
  "roams",
  "mincy",
  "ocrea",
  "chare",
  "haled",
  "grown",
  "vichy",
  "ender",
  "teths",
  "drees",
  "blocs",
  "droll",
  "songs",
  "twigs",
  "joist",
  "lyart",
  "light",
  "kanji",
  "crams",
  "boule",
  "music",
  "wasps",
  "sneap",
  "coned",
  "awash",
  "forme",
  "aloin",
  "women",
  "laces",
  "stunt",
  "ulama",
  "youth",
  "algin",
  "boral",
  "event",
  "mufti",
  "nippy",
  "coria",
  "ihram",
  "shalt",
  "usher",
  "raver",
  "plasm",
  "baulk",
  "setts",
  "force",
  "stubs",
  "wrote",
  "aspen",
  "murra",
  "saved",
  "waxes",
  "cooch",
  "hills",
  "rewin",
  "forum",
  "ecrus",
  "kinks",
  "lodge",
  "coset",
  "frost",
  "xenic",
  "teals",
  "perch",
  "gyves",
  "hards",
  "berks",
  "fifty",
  "crape",
  "ennui",
  "brute",
  "haste",
  "verve",
  "hansa",
  "dewan",
  "twice",
  "troop",
  "clapt",
  "looby",
  "omega",
  "sophs",
  "lamby",
  "dilly",
  "stalk",
  "wooly",
  "algum",
  "britt",
  "dynel",
  "yogin",
  "alway",
  "razes",
  "areca",
  "ducky",
  "wally",
  "zaire",
  "bravi",
  "waugh",
  "cling",
  "horns",
  "vents",
  "trees",
  "thine",
  "soled",
  "chimb",
  "emeer",
  "loots",
  "baked",
  "jaunt",
  "value",
  "pappy",
  "gripy",
  "hempy",
  "rivet",
];

export default words;