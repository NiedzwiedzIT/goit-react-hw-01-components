import styled from 'styled-components';

export const StatSection = styled.section`
  max-width: 340px;
  margin: 0 auto 40px;
  border-radius: 4px;
  box-shadow: 1px 0px 2px rgb(0 0 0 / 12%), -1px 0px 2px rgb(0 0 0 / 14%),
    0px 1px 2px rgb(0 0 0 / 20%);
  background-color: ${props => props.theme.colors.fground};
`;

export const StatTitle = styled.h2`
  padding: 20px 0;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.75;
  text-transform: uppercase;
  color: rgba(32, 32, 32, 0.8);
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1px;
  padding: 1px;
  border-radius: 0 0 4px 4px;
  font-size: 18px;
  color: rgba(32, 32, 32, 0.5);
  line-height: 1.75;
  background-color: #d0d0d0;
`;
