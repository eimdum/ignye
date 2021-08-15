import React from "react";

import { PlayerBase, PlayerBaseStats } from "@player";
import { Card } from "src/components/layout";
import { Button } from "src/components/base";

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
        <div className="p-6 flex flex-1 items-center justify-center space-x-12">
            <Card header="Player">
                <div>Player content</div>
                <div>
                    <Button>Action button</Button>
                </div>
            </Card>
            <Card header="Enemy">
                <div>Enemy content</div>
                <div>
                    <Button>Action button</Button>
                </div>
            </Card>
        </div>
    );

    // return {
    //     /* <div className="font-bold text-xl p-4">Player</div>
    //         <div className="flex flex-col mb-4">
    //             <div>HP: {player.getPlayerStats().hp}</div>
    //             <div>MP: {player.getPlayerStats().mp}</div>
    //             <div>EXP: {player.getExperience()}</div>
    //         </div>
    //         <div className="font-bold text-xl p-4">Actions</div>
    //         <div className="flex mb-4 space-x-4 text-sm">
    //             <div>
    //                 <button
    //                     className="bg-green-500 text-green-50 p-3 font-medium rounded-md leading-relaxed hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 tracking-wide"
    //                     disabled={enemy.hp === 0}
    //                     onClick={onPowerAttackClick}
    //                 >
    //                     Power Attack
    //                 </button>
    //             </div>
    //             <div>
    //                 <button
    //                     className="bg-blue-500 text-blue-50 p-3 font-medium rounded-md leading-relaxed hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 tracking-wide"
    //                     disabled={enemy.hp === 0 || player.getPlayerStats().mp === 0}
    //                     onClick={onMagicAttackClick}
    //                 >
    //                     Magic Attack
    //                 </button>
    //             </div>
    //         </div>
    //         <div className="font-bold text-xl p-4">Enemy</div>
    //         <div className="flex flex-col mb-4">
    //             <div>HP: {enemy.hp}</div>
    //             <div>MP: {enemy.mp}</div>
    //         </div>
    //         <div className="flex mb-4 space-x-4 text-sm tracking-wide">
    //             <button
    //                 className="bg-red-500 text-red-50 disabled:bg-gray-200 disabled:text-gray-400 p-3 tracking-wide font-medium rounded-md leading-relaxed"
    //                 disabled={enemy.hp !== 0}
    //                 onClick={onResetEnemyClick}
    //             >
    //                 Reset Enemy
    //             </button>
    //         </div> */
    // };
};
