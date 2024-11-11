import { test, expect } from '@jest/globals'

import { HeartBeep } from '../index';

test(
    'first test',
    async () => {
        const beep = new HeartBeep(/* {inteval: 10000, strategies: []} */);
        expect(beep).toBeInstanceOf(HeartBeep);
    }
)