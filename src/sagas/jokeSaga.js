import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import "../App.css"


const fetchjoke = async () => {
    const res = await fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe")
    const result = await res.json();
    /* console.log(result.value.joke) */
    return result.value.joke
}

/* Worker Saga */
function* getJoke() {
  const joke= yield fetchjoke()
  yield put({type:'JOKE_SUCCESS',payload:joke})
    /* try {
        const joke = yield call(getJoke)
        yield put({ type: 'UPDATE_JOKE', payload: joke })

        const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    } catch (e) {
        console.log(e)
    } */
}


/* Yield works like await */
/* Watcher Saga */
function* jokeSaga() {
    yield takeLatest("GET_JOKE", getJoke);

}

export default jokeSaga