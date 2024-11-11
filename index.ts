

export class HeartBeep {

    constructor(
        options: {
            interval: number, 
            strategies: AudioStrategy[], 
            defaultAudio: string
        }
    ) {

    }

}

interface AudioStrategy {

    match(): boolean;

    getAudioFile(): string;

}