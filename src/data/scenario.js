const scenario = [
    {
        "id": "scenario01",
        "name" : "黄巾之乱",
        "rules": [ "rule01", "rule02" ],
        "special": "*如刘关张均在游戏,当其任意一名角色体力值为一时,则游戏在当前玩家结束回合后进入\"桃园结义\"场景"
    },
    {
        "id": "scenario02",
        "name" : "桃园结义",
        "rules": [ "rule03", "rule04" ]
    },
    {
        "id": "scenario03",
        "name": "群雄逐鹿",
        "rules": [ "rule05", "rule06" ]
    },
    {
        "id": "scenario04",
        "name" : "官渡之战",
        "rules": [ "rule07", "rule08", "rule09" ]
    },
    {
        "id": "scenario05",
        "name": "赤壁之战",
        "rules": [ "rule10", "rule11", "rule12" ],
        "special": "*当主公两血并无手牌时,则游戏进入\"华容道\"场景"
    },
    {
        "id": "scenario06",
        "name": "苦肉计(黄盖)",
        "rules": [ "rule13", "rule14" ]
    },
    {
        "id": "scenario07",
        "name" : "草船借箭",
        "rules": [ "rule15", "rule16" ]
    },
    {
        "id": "scenario08",
        "name" : "华容道(曹操)",
        "rules": [ "rule17", "rule18" ]
    },
    {
        "id": "scenario09",
        "name" : "走麦城(关羽)",
        "rules": [ "rule19", "rule20" ]
    },
    {
        "id": "scenario10",
        "name" : "火烧连营",
        "rules": [ "rule21", "rule22" ]
    },
    {
        "id": "scenario11",
        "name" : "七擒孟获(孟获)",
        "rules": [ "rule23", "rule24" ]
    },
    {
        "id": "scenario12",
        "name" : "失街亭(马谡)",
        "rules": [ "rule25", "rule26" ],
        "special": "*如马谡死亡,则游戏进入\"空城计\"场景"
    },
    {
        "id": "scenario13",
        "name" : "空城计(诸葛亮)",
        "rules": [ "rule27", "rule28" ]
    },
    {
        "id": "scenario14",
        "name" : "五丈原",
        "rules": [ "rule29", "rule30" ]
    },
    {
        "id": "scenario15",
        "name" : "天下归心",
        "rules": [ "rule31", "rule32" ]
    }
];

export default scenario;

