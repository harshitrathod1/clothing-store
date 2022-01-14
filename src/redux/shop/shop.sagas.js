import {call,put, takeLatest } from 'redux-saga/effects';

import { firestore,convertCollectionsSnaphotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess,fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsStartAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap =  yield call(convertCollectionsSnaphotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsStartAsync);
}

//Include saga
/*
    1. Included saga into the middleware in store.js
    2. sagas.run()
    3. Put async code into component.sagas file
    4. Specify the action on which that async code has to fire
*/