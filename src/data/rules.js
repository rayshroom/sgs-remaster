const rules = [
    {
        "id": "rule01",
        "ruleName": "狼烟四起",
        "ruleContent": "摸牌阶段少摸一张牌,从其他人那里得到一张牌.(主公不被此效果影响)"
    },
    {
        "id": "rule02",
        "ruleName": "天下大乱",
        "ruleContent": "主公技无效"
    },
    {
        "id": "rule03",
        "ruleName": "义薄云天",
        "ruleContent": "每轮血量最少人加一点体力,如果有超过一人血量最少,猜拳决定"
    },
    {
        "id": "rule04",
        "ruleName": "兄弟齐心",
        "ruleContent": "刘关张为第四势力"
    },
    {
        "id": "rule05",
        "ruleName": "文和乱武",
        "ruleContent": "开局执行乱武"
    },
    {
        "id": "rule06",
        "ruleName": "三思而行",
        "ruleContent": "所有人回合开始阶段都可选择是否多摸一张牌,如此做则弃牌阶段多弃一张手牌"
    },
    {
        "id": "rule07",
        "ruleName": "千里匮粮",
        "ruleContent": "酒锁定为当兵粮寸断"
    },
    {
        "id": "rule08",
        "ruleName": "贪而无治",
        "ruleContent": "每名玩家在回合结束阶段有一次机会向另一名玩家投诚.若如此做,则选择投诚的玩家从对方玩家处摸一张牌并失去一点体力.体力为1的玩家不可发动投诚"
    },
    {
        "id": "rule09",
        "ruleName": "以寡敌众",
        "ruleContent": "体力为1的玩家对满体力的人造成的伤害+1"
    },
    {
        "id": "rule10",
        "ruleName": "连环计",
        "ruleContent": "铁锁连环可最多连三人"
    },
    {
        "id": "rule11",
        "ruleName": "七星坛",
        "ruleContent": "每人回合开始前有一次机会弃掉所有手牌,装备区与判定区内牌,解除连锁状态,指定下一轮的天气,除延时锦囊外弃牌数需大于三张,天气即时生效"
    },
    {
        "id": "rule12",
        "ruleName": "灰飞烟灭",
        "ruleContent": "在角色回合外,其失去了一张红桃牌,则该角色进行二选一:指定其攻击范围内的任意一名角色并视为对其使用一张火杀或指定任意一名角色,并对其使用火攻"
    },
    {
        "id": "rule13",
        "ruleName": "忠肝义胆",
        "ruleContent": "黄盖弃四张牌以上回一点体力"
    },
    {
        "id": "rule14",
        "ruleName": "亦真亦假",
        "ruleContent": "杀同势力角色时,出杀的一方可使用质疑"
    },
    {
        "id": "rule15",
        "ruleName": "草船借箭",
        "ruleContent": "若杀被闪避掉,则武器归受伤害方"
    },
    {
        "id": "rule16",
        "ruleName": "知己知彼",
        "ruleContent": "除武器外的装备牌手牌都可以当闪使用"
    },
    {
        "id": "rule17",
        "ruleName": "狼狈不堪",
        "ruleContent": "曹操可以在濒死时选择是否翻面,若如此则无视所有伤害直到正面朝上"
    },
    {
        "id": "rule18",
        "ruleName": "逃之夭夭",
        "ruleContent": "若场上有三种及以上不同血量,血最多的人不能打血最少的人"
    },
    {
        "id": "rule19",
        "ruleName": "神话",
        "ruleContent": "关羽变神关羽"
    },
    {
        "id": "rule20",
        "ruleName": "死地",
        "ruleContent": "方块桃和桃园结义只可当闪使用"
    },
    {
        "id": "rule21",
        "ruleName": "星火燎原",
        "ruleContent": "当受到火焰伤害时,受伤害角色周围距离为一的角色都受到一点火焰伤害(伤害仅传递一次)"
    },
    {
        "id": "rule22",
        "ruleName": "料敌先机",
        "ruleContent": "八卦阵可防止规则1中传递的火焰伤害"
    },
    {
        "id": "rule23",
        "ruleName": "归顺",
        "ruleContent": "孟获在濒死状态被同一个角色救活过两次则孟获与该角色互视身份牌,并孟获与该角色归为同一阵营(孟获为主公时除外),并回复至两点体力"
    },
    {
        "id": "rule24",
        "ruleName": "蛮王",
        "ruleContent": "所有万箭都是南蛮"
    },
    {
        "id": "rule25",
        "ruleName": "刚愎自用",
        "ruleContent": "马谡的红桃都必须当作乐不思蜀或兵粮寸断使用"
    },
    {
        "id": "rule26",
        "ruleName": "纸上谈兵",
        "ruleContent": "通过乐不思蜀的判定牌为方片或红桃,兵粮寸断为黑桃和梅花"
    },
    {
        "id": "rule27",
        "ruleName": "足智多谋",
        "ruleContent": "诸葛亮可以在弃牌阶段结束后选择再弃掉一张手牌"
    },
    {
        "id": "rule28",
        "ruleName": "愚弄",
        "ruleContent": "当一名角色失去最后一张手牌时,在回合结束时可选择将场上任意一张牌移动到一个合理的位置"
    },
    {
        "id": "rule29",
        "ruleName": "祈天禳星",
        "ruleContent": "体力上限小于等于三的武将濒死可摸一张判定牌,如为锦囊则可回复至一点体力"
    },
    {
        "id": "rule30",
        "ruleName": "生死由命",
        "ruleContent": "体力上限大于三的武将可以把桃当无懈可击使用"
    },
    {
        "id": "rule31",
        "ruleName": "权略无双",
        "ruleContent": "所有角色主公技均启用,不论身份"
    },
    {
        "id": "rule32",
        "ruleName": "正统",
        "ruleContent": "加一张装备\"玉玺\",出牌阶段可执行一次判定,判定如为红桃则加一点体力.装备玉玺的角色暂时失去主公技,直到失去玉玺为止"
    }
];

export default rules;