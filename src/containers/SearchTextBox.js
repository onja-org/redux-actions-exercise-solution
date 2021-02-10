import { connect } from 'react-redux';
import { searchUserByFirstName } from '../actions';
import SearchTextBox from '../components/SearchTextBox';

export default connect(null, { set: searchUserByFirstName })(SearchTextBox);
