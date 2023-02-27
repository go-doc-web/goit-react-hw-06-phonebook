import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { rootReduser } from './reducers';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);
