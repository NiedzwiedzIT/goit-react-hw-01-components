import styled from 'styled-components';

export const StatItem = styled.li`
  flex-basis: calc((100% - 4px) / 5);
  display: flex;
  flex-direction: column;
  background-color: #a0a0a0;
  color: #f0f0f0;
  padding: 10px 0;
  text-align: center;
  &:first-child {
    border-radius: 0 0 0 3px;
  }
  &:last-child {
    border-radius: 0 0 3px 0;
  }
`;

export const StatLabel = styled.span`
  font-size: 14px;
`;

export const StatPerc = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
