import styled from "styled-components";

export const Title = styled.span`
  font-size: 1.8em;
  font-weight: bold;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  color: #fff;
`;

export const Th = styled.th`
  font-size: 18px;
  font-weight: bold;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  color: #fff;
`;

export const Row = styled.div`
  width: 87.75%;
  height: 10vh;
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  width: 44%;
  height: 10vh;
  display: flex;
  align-items: center;
  margin-left: 1vw;
`;

export const Col2 = styled.div`
  width: 44%;
  height: 10vh;
  margin-left: 0.25vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Row2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;

export const Col21 = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const Col22 = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
`;

export const TitleBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const TdTitle = styled.span`
  font-size: 1em;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  color: #fff;
`;

export const TdSubTitle = styled.span`
  font-size: 0.8em;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  color: #fff;
`;

export const ButtonEditText = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  color: #fff;
`;

export const ButtonRemove = styled.button`
  width: 8vw;
  height: 3vw;
  background: rgba(255, 0, 0, 0.5);
  outline: none;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
`;

export const ButtonRemoveTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonRemoveText = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.94);
  color: #fff;
`;

export const ButtonEditTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonEdit = styled.button`
  width: 8vw;
  height: 3vw;
  background: rgba(41, 245, 34, 0.5);
  outline: none;
  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const TableLine = styled.div`
  width: 97%;
  margin-left: 1.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TableLineStriped = styled.div`
  width: 97%;
  margin-left: 1.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const TableColumn = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding-left: 10px;
`;

export const TableColumnTitle = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  padding-left: 20px;
  text-decoration: underline;
`;

export const ButtonSubmit = styled.button`
  width: 20%;
  height: 3vw;
  background: rgba(255, 198, 73);
  outline: none;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 9px #000000;
  font-size: 18px;
  margin: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 9px #000000;
  font-size: 18px;
  margin: 15px;
`;

export const InputEdit = styled.input`
  height: 2.5vw;
  width: 30%;
  margin: 15px;
`;

export const DivEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
