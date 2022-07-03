import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.p`
  font-size: 20px;
  color: gray;
`;
export const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
