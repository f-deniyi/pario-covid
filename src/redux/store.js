import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(saga);



export default store;

