import {describe, expect, test} from "vitest";
import {handleTaskIds} from "../helpers.ts";

describe('Given handleTaskIds function', () => {
    describe('When a proper input is send', ()=> {
        test('Then it returns a proper value', () => {
            const response = handleTaskIds('12345');
            expect(response).toBe('2345');
        });
    })
});
