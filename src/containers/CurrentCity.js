import { connect } from 'react-redux';
import CurrentCity from '../components/CurrentCity';

export default connect(
	(state) => ({ text: state.currentCity }),
	{}
)(CurrentCity);
