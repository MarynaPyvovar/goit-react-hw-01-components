import styled from 'styled-components';

export const ProfileThumb = styled.div`
  width: 300px;
  margin: 30px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;
  padding: 20px;

  & img {
    width: 100%;
  }

  & p {
    margin: 0;
  }
`;

export const StatsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 20px;
  background-color: #ffe6e6;
  border-radius: 20px;

  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
