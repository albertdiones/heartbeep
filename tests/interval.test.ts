import { test, expect } from '@jest/globals'

import { HeartBeep } from '..';

test(
    'first test',
    async () => {
        const beep = new HeartBeep(/* {inteval: 10000, strategies: []} */);
        expect(beep).toBeInstanceOf(HeartBeep);
    }
)

let playedSound: string[] = [];

const mockPlayer = {
    play: (
        file: string,
        errorHandler: () => void,
    ) => {
        playedSound.push(file);
        const actualPlayer = require('play-sound')();
        // actualPlayer.play(`./${file}`, (error) => {});
    }
}

test(
    '2nd test',
    async () => {
        const beep = new HeartBeep({ 
            interval: 200,
            player: mockPlayer
        });
        beep.start();
        await Bun.sleep(500);
        expect(playedSound.length).toBe(2);
    }
)