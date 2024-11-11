import { test, expect } from '@jest/globals'

import { HeartBeep } from '..';


let playedSound: string[] = [];

const mockPlayer = {
    play: (
        file: string,
        errorHandler: () => void,
    ) => {
        playedSound.push(file);
        // const actualPlayer = require('play-sound')();
        // actualPlayer.play(`./${file}`, (error) => {});
    }
}

test(
    'first strategy match',
    async () => {
        const expectedFile = 'xxxxyyy.wav';
        const beep = new HeartBeep({ 
            interval: 100,
            strategies: [
                {
                    match: () => {
                        return true;
                    },
                    getAudioFile() {
                        return expectedFile;
                    },
                },
                {
                    match: () => {
                        return true;
                    },
                    getAudioFile() {
                        return 'aaaaa.wav';
                    },
                }
            ],
            player: mockPlayer
        });
        playedSound = [];
        beep.start();
        await Bun.sleep(290);
        expect(playedSound).toStrictEqual([
            expectedFile,
            expectedFile
        ]);
    }
)