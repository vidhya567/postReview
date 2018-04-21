

const ratings = (state = {} ,action) => {
    console.log("state",state);
    switch (action.type) {
        case 'SET_PLACEMENT_RATING': {
            console.log("got placement action");
            const newState = Object.assign({},state);
            newState['placementRating'] = action.rating;
            return newState;
        }
        case 'SET_TEACHING_RATING': {
            console.log("got teaching action");
            const newState = Object.assign({},state);
            newState['teachingRating'] = action.rating;
            return newState;
        }
        case 'SET_FACILITY_RATING': {
            console.log("got facility action");
            const newState = Object.assign({},state);
            newState['facilityRating'] = action.rating;
            return newState;
        }
        case 'SET_SPORTS_RATING': {
            console.log("got sports action");
            const newState = Object.assign({},state);
            newState['sportsRating'] = action.rating;
            return newState;
        }
        case 'SET_OVERALL_RATING': {
            console.log("got overall action");
            const newState = Object.assign({},state);
            newState['overallRating'] = action.rating;
            return newState;
        }
        case 'SET_RECOMMENDATION': {
            console.log("got recommendation action");
            const newState = Object.assign({},state);
            newState['recommendation'] = action.bool;
            return newState;
        }
        case 'SET_SCHOOL': {
            console.log("set school data");
            const newState = Object.assign({},state);
            newState['schoolData'] = action.schoolData;
            return newState;
        }
        default:
            return state;

    }
}

export default ratings;