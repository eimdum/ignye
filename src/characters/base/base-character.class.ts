import { IBaseCharacterStats } from "./base-character.interfaces";

export abstract class BaseCharacter {
    constructor(private baseCharacterStats: IBaseCharacterStats) {}

    getBaseStats(): IBaseCharacterStats {
        return this.baseCharacterStats;
    }
}
