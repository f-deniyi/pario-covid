import { combineReducers } from 'redux';
import covid from './covid/reducer';

const Reducers = combineReducers({
    covid
});

export default Reducers;