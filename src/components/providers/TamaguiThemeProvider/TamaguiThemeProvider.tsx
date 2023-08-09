import { TamaguiProvider, TamaguiProviderProps } from "tamagui";
import tamaguiConfig from "../../../theme/tamagui.config";

type TamaguiThemeProviderProps = Omit<TamaguiProviderProps, "config">;

const TamaguiThemeProvider = ({ children, ...rest }: TamaguiThemeProviderProps) => (
  <TamaguiProvider config={tamaguiConfig} {...rest}>
    {children}
  </TamaguiProvider>
);

export { TamaguiThemeProvider };
