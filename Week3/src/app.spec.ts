import 'mocha';
import { expect} from 'chai';

import {TeslaModels} from './app';

 describe ('test for app.ts',()=>{



const teslaModels = new TeslaModels(true,50, 25, ["2010", "2015", "2018"], true);
console.log(teslaModels.getModels());
console.log(teslaModels.hasFalconWings());

 });


