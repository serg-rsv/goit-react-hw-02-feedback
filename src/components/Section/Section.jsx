import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
