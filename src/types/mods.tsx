type Mods = {
    id: string
    name: string
    version: string
    developer: string
    linkDownload: string
    linkHomepage: string
    configFile: string
    gameVersion: string[]
    description: string
    dependMods: string[]
    dependLibs: string[]
    conflictMods: string[]
    sha256: string
}

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
]
