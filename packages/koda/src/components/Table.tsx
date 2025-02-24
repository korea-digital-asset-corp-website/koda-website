import { colors } from "src/styles/colors";
import styled from "styled-components";

export const Table = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  color: ${colors.text1.dark};
`;

export const THeadRow = styled.tr`
  background: ${colors.third};
`;

export const THead = styled.th`
  display: table-cell;
  border: 1px solid ${colors.border};
  padding: 8px;
  color: ${colors.text2.dark};
`;

export const TBody = styled.tbody``;

export const TRow = styled.tr``;

export const Td = styled.td`
  display: table-cell;
  border: 1px solid ${colors.border};
  padding: 8px;
  color: ${colors.text2.dark};

  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: keep-all;
`;

export const TdBold = styled(Td)`
  font-weight: 700;
`;
