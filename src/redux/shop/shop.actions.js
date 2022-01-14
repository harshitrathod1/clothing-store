import ShopActionTypes from "./shop.types";

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


export default fetchCollectionsStart;