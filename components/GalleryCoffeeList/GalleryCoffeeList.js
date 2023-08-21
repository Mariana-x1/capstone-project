import ImageData from "@/lib/db";
import styled from "styled-components";

export default function GalleryCoffeeList() {
  return (
    <>
      <StyledCoffeList>
        {ImageData.map((BildInfo) => (
          <StyledDiv key={BildInfo.id}>
            <StyledImg src={BildInfo.imageUrl} alt={BildInfo.name} />
            <StyledTitle>{BildInfo.name}</StyledTitle>
            <StyledText>{BildInfo.text}</StyledText>
          </StyledDiv>
        ))}
      </StyledCoffeList>
    </>
  );
}

const StyledCoffeList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StyledDiv = styled.div`
  justify-content: center;
`;

const StyledImg = styled.img`
  display: grid;
  width: 100px;
  border: 2px solid #1f1f1f;
  padding: 3px;
  text-align: center;
`;

const StyledTitle = styled.h3`
  color: #1f1fEff;
  border-shadow: red;
  margin 0 0 0 auto;
  `;

const StyledText = styled.p`
  color: #1f1f1f;
    font-size: 15px;
    margin top: 0 auto;
    padding-bottom: 60px;
  `;
