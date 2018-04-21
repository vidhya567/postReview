import { connect } from 'react-redux';
import { setSchool, setPlacementRating, setTeachingRating, setFacilitiesRating, setSportsRating, setOverallRating, setRecommendation } from '../actions/index';
import PageReviewMain from '../components/PageReviewMain';

const mapStateToProps = state => ({
    appState: state
});

const mapDispatchToProps = dispatch => ({
    setSchool: schoolData => dispatch(setSchool(schoolData)),
    setPlacementRating: rating => dispatch(setPlacementRating(rating)),
    setTeachingRating:  rating => dispatch(setTeachingRating(rating)),
    setFacilitiesRating: rating => dispatch(setFacilitiesRating(rating)),
    setSportsRating: rating => dispatch(setSportsRating(rating)),
    setOverallRating: rating => dispatch(setOverallRating(rating)),
    setRecommendation: rating => dispatch(setRecommendation(rating)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageReviewMain);