import { HeartBeep } from "..";

const beep = new HeartBeep(
    {
        interval: 1000,
        strategies: [
            {
                match: () => {
                    return Date.now()%120000 < 60000;
                },
                getAudioFile: () => {
                    return './manual-tests/even.wav';
                }
            },
            {
                match: () => {
                    return true;
                },
                getAudioFile: () => {
                    return './manual-tests/odd.wav';
                }
            },
        ]
    }
);

beep.start();