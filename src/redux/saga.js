import { all } from 'redux-saga/effects'
import covid from './covid/saga'

export default function * rootSaga () {
  yield all([covid()])
}
