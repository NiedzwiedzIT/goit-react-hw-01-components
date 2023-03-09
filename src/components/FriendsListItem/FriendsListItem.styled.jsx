import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  gap: 10px;
  border-radius: 4px;
  box-shadow: 2px 0px 6px rgb(0 0 0 / 12%), -2px 0px 6px rgb(0 0 0 / 14%),
    0px 2px 6px rgb(0 0 0 / 20%);
  padding: 4px 10px;
  align-items: center;
  background-color: ${props => props.theme.colors.fground};
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? '#00a000' : '#a00000')};
`;

export const Avatar = styled.img`
  border-radius: 6px;
  outline: 1px solid rgba(32, 32, 32, 0.3);
`;

export const FriendName = styled.p`
  font-size: 20px;
  color: rgba(32, 32, 32, 0.8);
`;
