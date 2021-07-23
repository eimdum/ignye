import { PlayerBaseStats } from "./player.interfaces";

export class PlayerBase {
    private baseStats: PlayerBaseStats = {
        hp: 100,
        mp: 20,
        strength: 1,
        intelligence: 1,
        powerDefense: 5,
        magicDefense: 5,
    };
    private experience = 0;

    public updatePlayerStats(stats: PlayerBaseStats): void {
        this.baseStats = stats;
    }

    public getPlayerStats(): PlayerBaseStats {
        return this.baseStats;
    }

    public powerAttack(): number {
        return this.baseStats.strength;
    }

    public magicAttack(): number {
        return this.baseStats.intelligence;
    }

    public updateExperience(exp: number): void {
        this.experience += exp;
    }

    public getExperience(): number {
        return this.experience;
    }
}
