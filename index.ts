import Repeater from "add_repeater";

interface player {
    play: (
        fileName: string, 
        errorCallback: (err: string) => void
    ) => void;
}

export class HeartBeep {

    
    interval: number;
    strategies: AudioStrategy[];
    defaultAudio: string;
    player: player;

    constructor(
        options: {
            interval?: number, 
            strategies?: AudioStrategy[], 
            defaultAudio?: string,
            player?: player
        } = {}
    ) {
        this.interval = options.interval ?? 1000;
        this.strategies = options.strategies ?? [];
        this.defaultAudio = options.defaultAudio ?? 'xxxxxx';
        this.player = options.player ?? require('play-sound')();
    }

    start() {
        setInterval(
            () => {
                this.player.play(this.defaultAudio, () => {})
            },
            this.interval
        );
    }

}

export interface AudioStrategy {

    match(): boolean;

    getAudioFile(): string;

}