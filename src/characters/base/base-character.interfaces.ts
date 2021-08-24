export type BaseCharacterType = "NPC" | "Player" | "UNSET";

export interface IBaseCharacterProgress {
    currentLevel: number;
    nextLevel?: number;
    experience?: number;
    nextLevelExperience?: number;
}

export interface IBaseCharacterStats {
    hp: number;
    mp: number;
    strength: number;
    magic: number;
    attack: number;
    magicAttack: number;
    defense: number;
    magicDefense: number;
    type: BaseCharacterType;
}
