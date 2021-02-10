import { connect } from 'react-redux';
import UserButtons from '../components/UserButtons';
import { addUser, removeUser } from '../actions';

export default connect(null, { add: addUser, remove: removeUser })(UserButtons);
