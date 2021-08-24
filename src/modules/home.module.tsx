import React from "react";

import { Player } from "@characters/player";
import { NPC } from "@characters/npc";
import { defaultNPCStats, defaultPlayerStats } from "@characters/constants";

export const HomeModule = (): JSX.Element => {
    return (
        <div className="flex flex-col space-y-8">
            <pre>{JSON.stringify(new Player(defaultPlayerStats).getBaseStats(), null, 4)}</pre>
            <pre>{JSON.stringify(new NPC(defaultNPCStats).getBaseStats(), null, 4)}</pre>
        </div>
    );
};
