import styled from 'styled-components/native';
import {TextInput, Button} from 'react-native-paper';
import {percentage, fontSize} from '../../constants/constantNumbers';
import {orangeColor} from '../../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../constants/dimensionsResponsive';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
`;

export const ContainerView = styled.View`
  padding-left: ${wp(percentage.percentage_3)};
  padding-right: ${wp(percentage.percentage_3)};
`;

export const TextView = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 24px;
  color: ${props => props.color ?? 'black'}
  font-weight: 500;
`;

export const TextInputView = styled(TextInput)`
  margin-top: ${hp(percentage.percentage_1)};
  fontsize: ${fontSize.SIZE_14};
  height: ${hp(percentage.percentage_5)};
`;

export const ButtonView = styled(Button)`
  margin-vertical: ${hp(percentage.percentage_2)};
  margin-horizontal: ${wp(percentage.percentage_5)};
  padding-vertical: ${hp(percentage.percentage_1)};
  padding-horizontal: ${wp(percentage.percentage_1)};
  background-color: ${orangeColor};
  font-size: ${fontSize.SIZE_14};
  font-weight: bold;
`;
