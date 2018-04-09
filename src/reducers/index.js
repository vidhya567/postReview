

const ratings = (state = {} ,action) => {
    console.log("state",state);
    if (action.type === 'SET_PLACEMENT_RATING') {
        console.log("got action");
        const newState = Object.assign({},state);
        newState['placementRating'] = action.rating;
        return newState;
    } else {
        return state;
    }
}

export default ratings;