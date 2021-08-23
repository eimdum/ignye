export type BaseCharacterType = "NPC" | "Player";

export interface IBaseCharacterProgress {
    currentLevel: number;
    nextLevel?: number;
    experience?: number;
    nextLevelExperience?: number;
}

export type INpcProgress = IBaseCharacterProgress;
export type IPlayerProgress = Required<IBaseCharacterProgress>;

export interface IBaseCharacterStats {
    hp: number;
    mp: number;
    attackDamage: number;
    magicDamage: number;
    type: BaseCharacterType;
}

export interface IPlayerStats extends IBaseCharacterStats {
    type: "Player";
    progress: IPlayerProgress;
}

export interface INpcStats extends IBaseCharacterStats {
    type: "NPC";
    progress: INpcProgress;
}
