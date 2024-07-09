<<<<<<< HEAD
import propTypes from 'prop-types';


const NotificationItemShape = propTypes.shape({
	  id: propTypes.number.isRequired,
	  html: propTypes.objectOf(propTypes.string),
	  type: propTypes.string.isRequired,
	  value: propTypes.string
});

=======
import propTypes from 'prop-types';


const NotificationItemShape = propTypes.shape({
	  id: propTypes.number.isRequired,
	  html: propTypes.objectOf(propTypes.string),
	  type: propTypes.string.isRequired,
	  value: propTypes.string
});

>>>>>>> temp-branch
export default NotificationItemShape