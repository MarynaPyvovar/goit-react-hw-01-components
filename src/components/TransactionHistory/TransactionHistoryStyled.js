import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 500px;
  margin: 30px auto;
  background-color: #d9f2d9;
`;
export const TableHead = styled.thead`
    padding: 20px;
    background-color: #40bf80;

    & th {
      padding: 5px;
    }
  }
`;

export const TableBody = styled.tbody`
  color: #293d3d;
  background-color: #ecf9ec;

  & td {
    padding: 5px;
    text-align: center;
  }
`;
