export const setSchool = schoolData => ({
    type: 'SET_SCHOOL',
    schoolData
});

export const setPlacementRating = rating => ({
    type: 'SET_PLACEMENT_RATING',
    rating
});

export const setTeachingRating = rating => ({
    type: 'SET_TEACHING_RATING',
    rating
});

export const setFacilitiesRating = rating => ({
   type: 'SET_FACILITY_RATING' ,
   rating
});

export const setSportsRating = rating => ({
    type: 'SET_SPORTS_RATING',
    rating
});

export const setOverallRating = rating => ({
    type: 'SET_OVERALL_RATING',
    rating
});

export const setRecommendation = bool => ({
    type: 'SET_RECOMMENDATION',
    bool
});
