interface Typography {
  regular: string;
  bold: string;
  semiBold: string;
}

interface InputProps {
  title: string;
  password: boolean;
  onChangeText?: (text: string | number) => void;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  multiline?: boolean;
  value?: string;
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

interface CreateTodoBodyData {
  title: string;
  description: string;
  theme: string;
  email?: string;
  _id?: string;
}

interface SigninBodyData {
  email: string;
}
interface signUpState {
  isLoading: boolean;
  error: string;
  user: any | null;
}

interface IState {
  email: signUpState;
}

interface DeleteTodoBody {
  _id: string;
}
