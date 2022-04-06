import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #f5dcb3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  ${mobile({ display: "none" })}
`;

const Announcement = () => {
  return (
    <Container>
      Envíos Gratis sobre $20.000 Valparaíso - Viña del Mar - Concon - Quilpue{" "}
    </Container>
  );
};

export default Announcement;
