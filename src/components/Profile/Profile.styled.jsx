import styled from 'styled-components';

export const UserProfile = styled.div`
  max-width: 340px;
  margin: 0 auto 40px;
  border-radius: 8px;
  box-shadow: 1px 0px 4px rgb(0 0 0 / 12%), -1px 0px 4px rgb(0 0 0 / 14%),
    0px 4px 4px rgb(0 0 0 / 20%);
  background-color: ${props => props.theme.colors.fground};
`;

export const Description = styled.div`
  padding: 40px 0;
`;

export const Avatar = styled.img`
  max-width: 150px;
  margin: 0 auto 30px;
  border-radius: 50%;
  outline: 1px solid rgba(32, 32, 32, 0.3);
`;

export const UserName = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.75;
  color: ${props => props.theme.colors.primText};
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.colors.secdText};
  line-height: 1.75;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.colors.secdText};
  line-height: 1.75;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  gap: 1px;
  padding: 1px;
  border-radius: 0 0 8px 8px;
  font-size: 18px;
  color: ${props => props.theme.colors.secdText};
  line-height: 1.75;
  background-color: #d0d0d0;
`;

export const StatsItem = styled.li`
  flex-basis: calc((100% - 2px) / 3);
  display: flex;
  flex-direction: column;
  background-color: #e0e0e0;
  padding: 20px;
  text-align: center;
  &:first-child {
    border-radius: 0 0 0 7px;
  }
  &:last-child {
    border-radius: 0 0 7px 0;
  }
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.primText};
`;
