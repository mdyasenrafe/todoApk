interface Typography {
  regular: string;
  bold: string;
  semiBold: string;
}

interface InputProps {
  title: string;
  password: boolean;
  onChangeText?: (text: string | number) => void;
}

interface buttonProps {
  title: string;
  style?: TextStyle;
  onPress?: () => void;
}

interface SignupBodyData {
  name: string | null;
  email: string;
  password: string;
  age: number | null;
  gender: string | null;
}

interface signUpState {
  isLoading: boolean;
  error: string;
  user: any | null;
}

interface IState {
  email: signUpState;
}
