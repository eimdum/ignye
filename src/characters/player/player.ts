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

    updatePlayerStats(stats: PlayerBaseStats): void {
        this.baseStats = stats;
    }

    getPlayerStats(): PlayerBaseStats {
        return this.baseStats;
    }

    powerAttack(): number {
        return this.baseStats.strength;
    }

    magicAttack(): number {
        return this.baseStats.intelligence;
    }

    updateExperience(exp: number): void {
        this.experience += exp;
    }

    getExperience(): number {
        return this.experience;
    }
}
