import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatField = styled.p`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatField>Good: {good}</StatField>
      <StatField>Neutral:{neutral}</StatField>
      <StatField>Bad: {bad}</StatField>
      <StatField>Total: {total}</StatField>
      <StatField>Positive feedback: {positivePercentage}%</StatField>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
