import { all, call } from 'redux-saga/effects'
import jokeSaga from './jokeSaga'
import userSaga from './userSaga'
import "../App.css"


function* rootSaga() {
    yield all([
        call(jokeSaga),
        call(userSaga)])
}
export default rootSaga;