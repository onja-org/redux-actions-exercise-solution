import { connect } from 'react-redux';
import { setCurrentTemp } from '../actions';
import ChangeTemperature from '../components/ChangeTemperature';

export default connect(null, { set: setCurrentTemp })(ChangeTemperature);
