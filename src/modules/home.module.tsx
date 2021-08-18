import React from "react";

import { PlayerBase, PlayerBaseStats } from "@player";
import { Card } from "src/components/layout";
import { Button } from "src/components/base";

type Enemy = PlayerBaseStats;
const player = new PlayerBase();

const defaultEnemy: Enemy = { hp: 10, mp: 10, strength: 1, intelligence: 1, magicDefense: 1, powerDefense: 1 };

export const HomeModule = (): JSX.Element => {
    const [enemy, setEnemy] = React.useState<Enemy>(defaultEnemy);

    React.useEffect(() => {
        if (enemy.hp === 0) {
            setTimeout(() => setEnemy(defaultEnemy), 2000);
        }
    }, [enemy.hp]);

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
        <div className="p-6 flex flex-1 items-center">
            <div className="flex flex-1 justify-center space-x-16">
                <Card header="Player">
                    <div className="flex flex-col font-medium text-gray-600">
                        <div>HP: {player.getPlayerStats().hp}</div>
                        <div>MP: {player.getPlayerStats().mp}</div>
                        <div>EXP: {player.getExperience()}</div>
                    </div>
                    <div className="actions space-x-4">
                        <Button className="bg-yellow-600 active:bg-yellow-700" disabled={enemy.hp === 0} onClick={onPowerAttackClick}>
                            Power Attack
                        </Button>
                        <Button
                            className="bg-green-600 active:bg-green-700"
                            disabled={enemy.hp === 0 || player.getPlayerStats().mp === 0}
                            onClick={onMagicAttackClick}
                        >
                            Magic Attack
                        </Button>
                    </div>
                </Card>

                <Card header="Enemy">
                    {enemy.hp === 0 ? (
                        <div className="text-xl font-semibold text-gray-700">Searching for new enemy...</div>
                    ) : (
                        <div className="flex flex-col font-medium text-gray-600">
                            <div>HP: {enemy.hp}</div>
                            <div>MP: {enemy.mp}</div>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};
