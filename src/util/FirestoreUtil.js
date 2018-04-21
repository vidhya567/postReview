import firebase from 'firebase';


const firestore = firebase.firestore();

export function addReviewToReviewsCollection (userId, ratings, schoolData) {
    const schoolId = schoolData.schoolID; //Coming From MYSQL DB
    return firestore.collection('reviews').doc(schoolId).collection('schoolReviews').add({
        ratings: ratings,
        userId: userId
    });
}

export function addReviewToUsersCollection (userId, ratings, ratingsId, schoolId) {
    return firestore.collection('users').doc(userId).collection('reviews').doc(ratingsId).set({
        ratings: ratings,
        schoolId: schoolId
    })
}