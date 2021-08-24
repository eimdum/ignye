import { BaseCharacter, IBaseCharacterProgress, IBaseCharacterStats } from "@characters/base";

export type IPlayerProgress = Required<IBaseCharacterProgress>;
export interface IPlayerStats extends Omit<IBaseCharacterStats, "type"> {
    progress: IPlayerProgress;
}

export class Player extends BaseCharacter {
    constructor(playerStats: IPlayerStats) {
        super({ ...playerStats, type: "Player" });
    }
}
