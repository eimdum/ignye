import { IBaseCharacterStats, INpcStats, IPlayerStats } from "./base-character.interfaces";

export abstract class BaseCharacter {
    constructor(private baseCharacterStats: IBaseCharacterStats) {}

    getBaseStats(): IBaseCharacterStats {
        return this.baseCharacterStats;
    }
}

class Player extends BaseCharacter {
    constructor(playerStats: IPlayerStats) {
        super(playerStats);
    }
}

class NPC extends BaseCharacter {
    constructor(npcStats: INpcStats) {
        super(npcStats);
    }
}

const player = new Player({
    hp: 100,
    mp: 100,
    attackDamage: 1,
    magicDamage: 1,
    type: "Player",
    progress: { currentLevel: 1, experience: 1, nextLevel: 2, nextLevelExperience: 10 },
});

const npc = new NPC({
    hp: 100,
    mp: 100,
    attackDamage: 1,
    magicDamage: 1,
    type: "NPC",
    progress: { currentLevel: 1 },
});

console.log(player.getBaseStats());
console.log(npc.getBaseStats());
