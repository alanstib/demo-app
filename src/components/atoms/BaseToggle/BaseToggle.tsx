import { Switch, SwitchProps } from "tamagui";

type BaseToggleProps = Pick<SwitchProps, "checked" | "onCheckedChange" | "disabled">;

const BaseToggle = ({ checked = false, onCheckedChange, disabled }: BaseToggleProps) => (
  <Switch
    size={"$8"}
    backgroundColor={checked ? "$white30" : "$white10"}
    checked={checked}
    onCheckedChange={onCheckedChange}
    disabled={disabled}
  >
    <Switch.Thumb backgroundColor={"$white"} />
  </Switch>
);

export { BaseToggle };
