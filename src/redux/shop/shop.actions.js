import ShopActionTypes from "./shop.types";
import { firestore,convertCollectionsSnaphotToMap } from "../../firebase/firebase.utils";

/* Makes isFetching Property in the state to be true */
export const fetchCollectionsStart = () => {
    return ({
        type : ShopActionTypes.FETCH_COLLECTIONS_START,
    })
}

/* Action to be dispatched when fetch is successful */
export const fetchCollectionsSuccess = collectionMap => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionMap
})

/* Action to be dispatched when fetch is not successful */
export const fetchCollectionsFailure = errorMessage => ({
    type : ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload : errorMessage
})


export const fetchCollectionsStartAsync =  () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(async snapshot => {
            const collectionMap = convertCollectionsSnaphotToMap(snapshot); 
            dispatch(fetchCollectionsSuccess(collectionMap));
            this.setState({ loading: false });
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}

export default fetchCollectionsStartAsync;