import styled from "styled-components";

export const ContentContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.imgUrl});
`;
export const MainContainer = styled.div`

  margin: 1rem auto;
  padding: 1rem 0 2rem;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 85%;
  background-color: black;
  opacity: 0.7;
  border-radius: 7px;
  display: grid;
  grid-template-rows: 0.5fr 3fr 0.5fr 1.5fr;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-auto-rows: auto;
  font-family: "Audiowide", cursive;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 10px;
  position: relative;
`;
export const ButtonHorizonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NameContainer = styled.div`
  margin: 0 1rem;

  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
`;
export const NameItemsContainer = styled.div`
  margin: 1rem 0 1rem 1rem;

  overflow-y: scroll;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
  grid-template-rows: repeat(${(props) => props.length}, 33%);
  padding: 1rem;
  z-index: 1 !important;
  background-color: #222222;
  opacity: 1;
  border-radius: 7px;
`;
export const Label = styled.label`
  color: white;
  font-size: 1rem;
  display: block;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
`;
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  background: white;
  opacity: 0.7;
  font-size: 1rem;
  color: black;
  height: 200px;
  margin: 1rem 0 0.5rem 0;
  font-family: "Audiowide", cursive;
`;
export const NameDetailsContainer = styled.div`
  margin: 1rem 1rem 1rem 0;
  background-color: #222222;
  padding: 2rem;
  border-radius: 7px;
`;
export const HorizomContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;
export const HorizonContainer = styled.div`
  margin: 0 1rem;
  height: 100%;
  display: flex;
  overflow-x: scroll;
  padding: 0 1rem;
  background-color: #222222;
  border-radius: 7px;
`;
export const LabelsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
`;
export const TitleLabel = styled.p`
  color: white;
  font-size: 24px;
  margin: 0 0 0 3rem;
`;
export const Title2Label = styled.p`
  color: white;
  font-size: 24px;
  margin: 0 0 0 1rem;
`;
