import { BaseCharacter, IBaseCharacterProgress, IBaseCharacterStats } from "@characters/base";

export type INpcProgress = IBaseCharacterProgress;
export interface INpcStats extends Omit<IBaseCharacterStats, "type"> {
    progress: INpcProgress;
}

export class NPC extends BaseCharacter {
    constructor(npcStats: INpcStats) {
        super({ ...npcStats, type: "NPC" });
    }
}
