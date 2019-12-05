import { expect } from 'chai';
import 'mocha';

import {winners, combinedArray, originalPersons} from './comarr';
import { originalNumbers } from './spread';

describe ('test for combine arrays',()=>{

    it('should output array ',() => {
        // console.log(originalContenders)
        expect(combinedArray[0]).equal('first');
    });
});

// combine of Objects
describe ('test for combine objects',()=>{
    it('should combine objects ',() => {
        console.log(originalPersons)
        expect(originalPersons['boy']).equal('Kyle');
    });
});

