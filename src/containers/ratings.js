import { connect } from 'react-redux';
import { setPlacementRating } from '../actions/index';
import PageReviewMain from '../PageReviewMain';

const mapStateToProps = state => ({
    ratings: state
})

const mapDispatchToProps = dispatch => ({
    setPlacementRating: rating => dispatch(setPlacementRating(rating))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageReviewMain);