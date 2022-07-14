interface Typography {
  regular: string;
  bold: string;
  semiBold: string;
}

interface buttonProps {
  title: string;
  style?: TextStyle;
  onPress?: () => void;
}
