import { test, expect } from '@jest/globals'

import { HeartBeep } from '..';

class MockPlayer {
    playedSound:string[] = [];
    play(
        file: string,
        errorHandler: () => void,
    ) {
        this.playedSound.push(file);
        // const actualPlayer = require('play-sound')();
        // actualPlayer.play(`./${file}`, (error) => {});
    }
}

test(
    'first strategy match',
    async () => {
        const expectedFile = 'xxxxyyy.wav';
        const mockPlayer = new MockPlayer();
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
        beep.start();
        await Bun.sleep(290);
        expect(mockPlayer.playedSound).toStrictEqual([
            expectedFile,
            expectedFile
        ]);
    }
)



test(
    '3rd strategy match',
    async () => {
        const expectedFile = 'xxxxyyy.wav';
        const mockPlayer = new MockPlayer();
        const beep = new HeartBeep({ 
            interval: 100,
            strategies: [
                {
                    match: () => {
                        return false;
                    },
                    getAudioFile() {
                        return 'aaaaa.wav';
                    },
                },
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
                        return 'bbbbbb.wav';
                    },
                },
            ],
            player: mockPlayer
        });
        beep.start();
        await Bun.sleep(290);
        expect(mockPlayer.playedSound).toStrictEqual([
            expectedFile,
            expectedFile
        ]);
    }
)