= HeartBeepJs =

Constant interval condition-based audio beep for application status tracking (or more?)

Configure a constantly beeping sound that can be changed using your own conditions (e.g. errors, warning, critical decisions?)


Todos:
* Parameters on the match() function?
* Check if Repeater is better to use than setInterval
* Check if add_logger and add_repeater should be removed from deps

```

const beep = new HeartBeep(
    {
        interval: 1000,
        strategies: [
            {
                match: () => {
                    return Date.now()%120000 < 60000; // true when the minute is even
                },
                getAudioFile: () => {
                    return './manual-tests/even.wav';
                }
            },
            {
                match: () => {
                    return true; // default sound
                },
                getAudioFile: () => {
                    return './manual-tests/odd.wav';
                }
            },
        ]
    }
);
```
