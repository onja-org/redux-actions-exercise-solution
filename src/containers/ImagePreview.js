import { connect } from 'react-redux';
import ImagePreview from '../components/ImagePreview';

export default connect(
	(state) => ({ imageUrl: state.imageUrl, scale: state.imageScale }),
	{}
)(ImagePreview);
