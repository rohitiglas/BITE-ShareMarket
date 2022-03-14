import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {validateEmail, ValidatePassword} from '../../utils/util';
import {isEmpty} from 'lodash';
import {HelperText} from 'react-native-paper';
import {
  Container,
  TextView,
  TextInputView,
  ContainerView,
  ButtonView,
} from './LoginStyle';
import {lightBlack, lightGray, orangeColor} from '../../constants/colors';
import {ErrorMessage} from '../../constants/Constants';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState('');

  const onChangeEmail = emailText => {
    setEmail(emailText);
    if (isEmpty(emailText)) {
      setErrorEmail(ErrorMessage.EMAIL_EMPTY);
      setShowErrorEmail(true);
    } else if (!validateEmail(emailText)) {
      setErrorEmail(ErrorMessage.INVALID_EMAIL);
      setShowErrorEmail(true);
    } else {
      setErrorEmail('');
      setShowErrorEmail(false);
    }
  };

  const onChangePassword = passwordText => {
    setPassword(passwordText);
    if (isEmpty(passwordText)) {
      setErrorPassword(ErrorMessage.PASSWORD_EMPTY);
      setShowErrorPassword(true);
    } else if (ValidatePassword(passwordText)) {
      setErrorPassword(ErrorMessage.PASSWORD_INVALID);
      setShowErrorPassword(true);
    } else {
      setErrorPassword('');
      setShowErrorPassword(false);
    }
  };

  return (
    <Container>
      <SvgUri
        style={{alignSelf: 'center'}}
        width="80"
        height="80"
        uri="https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      />
      <TextView> Login To Kite</TextView>

      <ContainerView>
        <TextInputView
          error={showErrorEmail}
          label="Email"
          value={email}
          mode="outlined"
          outlineColor={lightGray}
          activeOutlineColor={lightBlack}
          onChangeText={text => onChangeEmail(text)}
        />
        <HelperText type="error" visible={showErrorEmail}>
          {errorEmail}
        </HelperText>
        <TextInputView
          error={showErrorPassword}
          label="Password"
          value={password}
          mode="outlined"
          outlineColor={lightGray}
          activeOutlineColor={lightBlack}
          onChangeText={text => onChangePassword(text)}
        />
        <HelperText type="error" visible={showErrorPassword}>
          {errorPassword}
        </HelperText>

        <ButtonView
          mode="contained"
          uppercase={false}
          onPress={() => console.log('Pressed')}>
          Login
        </ButtonView>
      </ContainerView>
    </Container>
  );
};

export default LoginPage;
