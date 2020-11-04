import styled from 'styled-components';
import { Text } from '../../components/Text';

export const AboutContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  flex: 1 1 600px;
  display: flex;
  align-items: center;
`;

export const Illustration = styled.img`
  width: 100%;
`;

export const AboutMe = styled.div`
  flex: 1 1 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8%;
  box-sizing: border-box;
`;

export const SectionHeader = styled(Text)`
  margin-bottom: 16px;
`;
