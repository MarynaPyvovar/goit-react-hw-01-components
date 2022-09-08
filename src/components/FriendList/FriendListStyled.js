import styled from 'styled-components';

export const FriendListWrapper = styled.ul`
  width: 300px;
  padding: 0;
  margin: 30px auto;
`;
export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & span {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    border-radius: 50%;
    background-color: ${props => (props.isOnline ? '#009933' : '#ff0000')};
  }

  & img {
    margin-right: 20px;
    border-radius: 5px;
    background-color: #ffe6e6;
  }
`;
