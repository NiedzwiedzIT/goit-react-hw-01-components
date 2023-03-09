import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 400px;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 20%);
  margin: 0 auto 40px;
  text-align: center;
  font-size: 12px;
  color: #909090;

  th,
  td {
    padding: 10px;
    border: 1px solid #e0e0e0;
  }

  th {
    background-color: #00a0f0;
    text-transform: uppercase;
    color: #fff;
  }

  tr:nth-child(odd) {
    background-color: #eee;
  }

  th:first-child {
    border-radius: 4px 0 0 0;
  }

  th:last-child {
    border-radius: 0 4px 0 0;
  }

  tr:last-child td:first-child {
    border-radius: 0 0 0 4px;
  }

  tr:last-child td:last-child {
    border-radius: 0 0 4px 0;
  }
`;
