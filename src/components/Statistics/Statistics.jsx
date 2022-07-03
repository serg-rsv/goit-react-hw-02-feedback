import styled from 'styled-components';

const StatField = styled.p`
  margin-bottom: 8px;
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
      <StatField>Positive feedback:{positivePercentage}%</StatField>
    </>
  );
};
