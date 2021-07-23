import React from "react";

import { PlayerBase, PlayerBaseStats } from "@player";

type Enemy = PlayerBaseStats;
const player = new PlayerBase();

export const HomeModule = (): JSX.Element => {
    const defaultEnemy: Enemy = { hp: 10, mp: 10, strength: 1, intelligence: 1, magicDefense: 1, powerDefense: 1 };
    const [enemy, setEnemy] = React.useState<Enemy>(defaultEnemy);

    const onResetEnemyClick = () => setEnemy(defaultEnemy);

    const updatePlayersExp = (enemyHp: number, playerDamage: number) => {
        const reducedEnemyHp = enemyHp - playerDamage;

        if (reducedEnemyHp <= 0) {
            player.updateExperience(Math.ceil(Math.random() * Math.floor(Math.random() * 6) + 1));
        }

        return reducedEnemyHp;
    };

    const onPowerAttackClick = () => setEnemy((prevState) => ({ ...prevState, hp: updatePlayersExp(prevState.hp, player.powerAttack()) }));
    const onMagicAttackClick = () => {
        const playerStats = player.getPlayerStats();

        player.updatePlayerStats({ ...playerStats, mp: playerStats.mp - 1 });
        setEnemy((prevState) => ({ ...prevState, hp: updatePlayersExp(prevState.hp, player.magicAttack()) }));
    };

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                <div>Player</div>
                <div>HP: {player.getPlayerStats().hp}</div>
                <div>MP: {player.getPlayerStats().mp}</div>
                <div>EXP: {player.getExperience()}</div>
            </div>
            <div style={{ display: "flex", marginBottom: "16px" }}>
                <div>Actions</div>
                <div>
                    <button disabled={enemy.hp === 0} onClick={onPowerAttackClick}>
                        Power Attack
                    </button>
                </div>
                <div>
                    <button disabled={enemy.hp === 0 || player.getPlayerStats().mp === 0} onClick={onMagicAttackClick}>
                        Magic Attack
                    </button>
                </div>
            </div>
            <button disabled={enemy.hp !== 0} onClick={onResetEnemyClick}>
                Reset enemy
            </button>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "16px" }}>
                <div>Enemy</div>
                <div>HP: {enemy.hp}</div>
                <div>MP: {enemy.mp}</div>
            </div>
        </div>
    );
};
