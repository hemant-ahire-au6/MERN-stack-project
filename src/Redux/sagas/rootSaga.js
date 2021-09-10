


// function* loginWatcherSaga (){
//    yield takeEvery(CREATE_LOGIN,loginSaga)
// }


export default function* rootSaga(){
   // yield all([loginWatcherSaga])
   yield console.log("i am saga")
}