import 'mocha';
import { expect} from 'chai';

import {ObservableClass} from './observables';

 describe ('test for app.ts',()=>{



const testObservable = new ObservableClass(["1", "2", "3"]);
// console.log(teslaModels.getModels());
// console.log(teslaModels.hasFalconWings());
testObservable.myObservable.subscribe(testObservable.myObserver);

 });
