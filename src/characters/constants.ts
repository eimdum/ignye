import { IBaseCharacterStats } from "./base";
import { INpcStats } from "./npc";
import { IPlayerStats } from "./player";

export const MAX_LEVEL = 10;

export const baseStats: IBaseCharacterStats = {
    attack: 1,
    defense: 1,
    hp: 10,
    mp: 10,
    magic: 1,
    magicAttack: 1,
    magicDefense: 1,
    strength: 1,
    type: "UNSET",
};

export const defaultPlayerStats: IPlayerStats = {
    ...baseStats,
    progress: { currentLevel: 1, experience: 0, nextLevel: 2, nextLevelExperience: 10 },
};

export const defaultNPCStats: INpcStats = {
    ...baseStats,
    progress: {
        currentLevel: 1,
    },
};
