// the content here are doing nothings lol, i might remove it later.

type Mods = {
    id: string;
    name: string;
    version: string;
    developer: string;
    linkDownload: string;
    linkHomepage: string;
    configFile: string;
    gameVersion: string[];
    description: string;
    dependMods: string[];
    dependLibs: string[];
    conflictMods: string[];
    sha256: string;
};

export const mockModData: Mods[] = [
    {
        id: 'accuracy-display',
        name: 'AccuracyDisplay',
        version: '2.0.0',
        developer: 'PBalint817',
        linkDownload: 'Mods/AccuracyDisplay.dll',
        linkHomepage: '',
        configFile: 'AccuracyDisplay.cfg',
        gameVersion: ['*'],
        description: 'A live accuracy display.',
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: '70df3cd6fe9cc073d1221aeffad3f5bce97016044b961414a7a3bb5ab10fde68',
    },
    {
        id: 'accuracy-indicator',
        name: 'AccuracyIndicator',
        version: '2.0.2',
        developer: 'Azn9 & lxy',
        linkDownload: 'Mods/AccuracyIndicator.dll',
        linkHomepage: 'https://github.com/Azn9/MDAccuracyIndicatorMod',
        configFile: 'AccuracyIndicator.cfg',
        gameVersion: ['*'],
        description:
            'Adds a more exact accuracy indicator on the bottom of the screen.\nAlso displays average accuracy in milliseconds at the end of the level.',
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: 'e47d28fe2545d80b0865b24af563ab38e043d2718023028a91de1b6e87b2e370',
    },
    {
        id: 'album-scroll',
        name: "Album scroll",
        version: "2.0.2",
        developer: "bnfour",
        linkDownload: "Mods/AlbumScroll.dll",
        linkHomepage: "https://github.com/bnfour/md-mods",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "While holding shift, use the arrow keys to switch song categories in song selection",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "077be6d63434249aab7638b0dd90b131f8c5f41aba1c4e24780f02cb3f992a38"
    },
    {
        id: 'alttabmute',
        name: "AltTabMute",
        version: "3.0.0",
        developer: "Dom Gintoki",
        linkDownload: "Mods/AltTabMute.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "Mutes the game when it's not focused.",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "70e29d0dbfbc6712c3f13420527268878f8aa394c0cacae8a0410599b3159de3"
    },
    {
        id: 'always-aprilfool',
        name: "AlwaysAprilFool",
        version: "2.0.0",
        developer: "lxy",
        linkDownload: "Mods/AlwaysAprilFool.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "Boss always shoot pigeon and tutorial is always april fool's, activate good tek hidden",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "9b0f7127da444038116bf7041f68636d169522850640dd1720785dc3c7f2edf2"
    },
    {
        id: 'always-bapple',
        name: "AlwaysBadApple",
        version: "2.0.0",
        developer: "lxy",
        linkDownload: "Mods/AlwaysBadApple.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "A mod which changes the background and character etc into black and white in tohou scene",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "c6413ba03722babb05b50636a2cb6de1a08e2909736b947a7193ffbbb3167523"
    },
    {
        id: 'always-pigeons',
        name: "AlwaysPigeons",
        version: "1.0.1",
        developer: "lxy",
        linkDownload: "Mods/AlwaysPigeons.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "Boss always shoots pigeon, do not use AlwaysAprilFool at the same time",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "0c304a3ef08dfa5a48077eaf98a3073f954147756e64e745230c442bb8faafaa"
    },
    {
        id: 'ballcock',
        name: "BALLCOCK",
        version: "1.0.0",
        developer: "AshtonMemer",
        linkDownload: "Mods/Ballcock.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "Implements a simplified, less eye-straining and distracting fever effect.\nAlso includes a distasteful console message.",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "9217c2b58ce5a863c1ab4ab347345a20953db3a35b9d774d3f4784eb9669b1fe"
    },
    {
        id: 'best-suggest',
        name: "BestCombinationSuggest",
        version: "1.0.0",
        developer: "brooke_zb",
        linkDownload: "Mods/BestCombinationSuggest.dll",
        linkHomepage: "https://github.com/brooke-zb/MuseDashBestCombinationSuggest",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "Displays the best character combination for a level in the pause screen.\nThe character combo displayed is usually correct, but don't put your blind faith in it.\nWhen in doubt, refer to CharacterScoreboard.",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "3acd91e466ccbed2585ee262c2e63e6c2430cb29dd7d9410ae83bdae06a35915"
    },
    {
        id: 'betterhook',
        name: "BetterNativeHook",
        version: "1.0.0",
        developer: "PBalint817",
        linkDownload: "Mods/BetterNativeHook.dll",
        linkHomepage: "https://github.com/Balint817/BetterNativeHook",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "A library mod to do what NativeHook was never for...\nand another hint as to what's coming next.",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "6a8e949c75f73071a165e4a26ca3ddb4dd0c5a4c99feab027379b735947ab53b"
    },
    {
        id: 'bpmdisplay',
        name: "BPMDisplay",
        version: "2.0.0",
        developer: "lxy",
        linkDownload: "Mods/BPMDisplay.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "A mod which displays the BPM info above level designer on preparation screen",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "3bb437766d6ed5c329c6efe5b703aeab86361b31b7bb843a59ab3149dac961f7"
    },
    {
        id: 'random-character',
        name: "CharacterRandomizer",
        version: "1.1.4",
        developer: "lxy",
        linkDownload: "Mods/CharacterRandomizer.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "Everytime you play a chart, a random character combination will be selected.",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "8a6ff6b3edee3acec78769b4faf649219064159511d9c909116d3bdd12369940"
    },
    {
        id: 'character-sb',
        name: "CharacterScoreboard",
        version: "2.0.1",
        developer: "Creepler13 & lxy",
        linkDownload: "Mods/CharacterScoreboard.dll",
        linkHomepage: "https://github.com/Creepler13/CharacterScoreboard",
        configFile: "CharacterScoreboard.cfg",
        gameVersion: [
            "*"
        ],
        description: "Displays which character a specific score was achieved with on the leaderboard",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "3030dc1781812c502706cb4dacfa35c7bcc7fc4e1e9df5041cd92e50a6f9223f"
    },
    {
        id: 'chart-deleter',
        name: "ChartDeleter",
        version: "2.0.0",
        developer: "PBalint817",
        linkDownload: "Mods/ChartDeleter.dll",
        linkHomepage: "",
        configFile: "ChartDeleter.cfg",
        gameVersion: [
            "*"
        ],
        description: "Allows you to queue charts to be deleted when you exit the game using a configurable keybind.",
        dependMods: [
            "KeybindManager",
            "LocalizeLib",
            "PopupLib",
            "CustomAlbums"
        ],
        dependLibs: [],
        conflictMods: [],
        sha256: "4e9e91b59e4997b71c824b02e71c2fb67c92a3c6dadb2ce1c341c2388833658a"
    },
    {
        id: 'chart-preview',
        name: "ChartReview",
        version: "2.0.0",
        developer: "lxy",
        linkDownload: "Mods/ChartReview.dll",
        linkHomepage: "https://github.com/MDMods/ChartReview",
        configFile: "ChartReview.cfg",
        gameVersion: [
            "*"
        ],
        description: "Automatically selects sleepwalker, sets offset to 0, sets fever to manual, disables certain UI elements.\nCan be toggled on/off while in-game.",
        dependMods: [
            "MuseDashMirror"
        ],
        dependLibs: [],
        conflictMods: [],
        sha256: "6a43dd0edcdf6b557d56eabd977ec8cb3dd802bb2ad2d39b4bab01bbacd14d76"
    },
    {
        id: 'cn-mode',
        name: "ChineseMode",
        version: "2.0.0",
        developer: "RobotLucca",
        linkDownload: "Mods/ChineseMode.dll",
        linkHomepage: "",
        configFile: "",
        gameVersion: [
            "*"
        ],
        description: "Censores certain aspects of the game. (Characters, illustrations, etc)",
        dependMods: [],
        dependLibs: [],
        conflictMods: [],
        sha256: "bdb9e51281f53e55d3189f98abf1220ba72962b27ccd87699fc8f136f78f6181"
    },
];
