import "./UpArrow.css";
import PropTypes from 'prop-types';

export const UpArrow = ({ onClick }) => {
  return (
        <div className="up-arrow-container" onClick={onClick}>
            <div className="up-arrow">
                ▲
            </div>
        </div>
  );
}

UpArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};