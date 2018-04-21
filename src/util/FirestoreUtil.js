const firebase = require("firebase");

export function addReviewToReviewsCollection (userId, ratings, schoolData) {
    const db = firebase.firestore();
    const schoolId = schoolData.schoolID; //Coming From MYSQL DB
    return db.collection('reviews').doc(schoolId).collection('schoolReviews').add({
        ratings: ratings,
        userId: userId
    });
}

export function addReviewToUsersCollection (userId, ratings, ratingsId, schoolId) {
    const db = firebase.firestore();
    return db.collection('users').doc(userId).collection('reviews').doc(ratingsId).set({
        ratings: ratings,
        schoolId: schoolId
    });
}