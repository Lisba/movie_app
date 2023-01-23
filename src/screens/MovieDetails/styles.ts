import styled from 'styled-components/native';
import { Colors } from '@assets';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${Colors.charade};
  padding: 20px;
`;

export const StyledText = styled.Text`
  color: ${Colors.zircon};
  text-align: center;
`;

export const StyledImage = styled.Image`
  width: 200px;
  height: 100px;
  align-self: center;
`;

export const StyledLoader = styled.ActivityIndicator`
  margin-top: 60px;
`;
