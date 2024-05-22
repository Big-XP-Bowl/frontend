import styled from 'styled-components';
import style from 'styled-components';

const Card1 = style.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #333;
`;

const HeroVideoCard = style.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const EmpGrid = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`;

const EmpCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 30%;
  padding: 20px;
  text-align: center;
`;

const EmpImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const EmpTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const EmpDetails = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
`;

const EmpInitials = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

export { Card1, HeroVideoCard, EmpGrid, EmpCard, EmpImage, EmpTitle, EmpDetails, EmpInitials};
