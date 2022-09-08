import styled from 'styled-components';

export const StatisticsThumb = styled.section`
  width: fit-content;
  margin: 30px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & h2 {
    color: #303030;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
    text-align: center;
  }
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #ffe6e6;
  border: 1px solid #ff99bb;

  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 60px;
    height: 50px;
    padding: 20px;
    border: 1px solid #ff99bb;
  }
`;
