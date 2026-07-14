// Player Data sourced from Taiwan Baseball Wiki
const players = {
    "lin_kai_wei": {
        name: "林凱威",
        team: "味全龍隊 (Wei Chuan Dragons)",
        position: "投手 (Pitcher)",
        number: "99", // Sourced or Placeholder
        birthdate: "1996年03月19日",
        height_weight: "178cm / 79kg",
        throws_bats: "右投右打",
        photo_url: "https://twbsball.dils.tku.edu.tw/wiki/images/thumb/5/52/%E6%9E%97%E5%87%B1%E5%A8%81_20230506.jpg/300px-%E6%9E%97%E5%87%B1%E5%A8%81_20230506.jpg",
        wiki_url: "https://twbsball.dils.tku.edu.tw/wiki/index.php/%E6%9E%97%E5%87%B1%E5%A8%81",
        bio: "阿美族出身的職業棒球選手，曾效力於美國職棒亞利桑那響尾蛇隊小聯盟系統，最高層級至2A。2022年中華職棒季中選秀會味全龍隊第一指名，以終結者姿態活躍於牛棚。"
    }
};

// Mock Game Data simulating AI generation
const gameData = {
    match_id: "2024_12_world_premier",
    home_team: "中華隊",
    away_team: "日本隊",
    current_score: "4:0",
    innings: [
        {
            inning_label: "9▼",
            score_at_inning: "4:0",
            title: "林凱威關門製造雙殺 中華隊4：0完封日本創隊史首冠",
            description: "林凱威關門登板，雖被敲出安打，但隨即製造雙殺守備，成功抓下最後出局數——中華隊以 4比0 完封日本，勇奪本屆世界12強賽冠軍，締造隊史首冠，寫下台灣棒球嶄新里程碑。",
            featured_player_id: "lin_kai_wei",
            plays: [
                {
                    batter: "栗原陵矢",
                    result_title: "3出局",
                    result_desc: "一壘方向滾地球形成雙殺",
                    type: "out"
                },
                {
                    batter: "森下翔太",
                    result_title: "1出局",
                    result_desc: "二壘方向滾地球，辰己涼介被封殺在二壘，跑者上一壘",
                    type: "base"
                },
                {
                    batter: "辰己涼介",
                    result_title: "一壘安打",
                    result_desc: "右外野方向平飛安打",
                    type: "hit"
                }
            ]
        }
    ]
};

export { players, gameData };
