import { ColorTokens, getTokens, SizeTokens, SpaceTokens } from "tamagui";
import { ColorName } from "./tokens/color";
import { SpaceKey } from "./tokens/space";

type TokenType = SizeTokens | ColorTokens | SpaceTokens;

const createToken = <Type extends TokenType, TokenKey = string | number>(
  tokenKey: TokenKey,
): Type => `$${tokenKey}` as Type;

const getSpaceValue = (spaceKey: Exclude<SpaceKey, "true">) => {
  const obj = getTokens({ prefixed: false }).space[spaceKey];

  return obj.val;
};

const getColorValue = (colorName: ColorName): string =>
  // @ts-ignore
  getTokens({ prefixed: false }).color[colorName].val;

const getPrefixedSpaceValue = (spaceToken: Exclude<SpaceTokens, "true">): number =>
  // @ts-ignore
  getTokens({ prefixed: true }).space[spaceToken].val;

export { createToken, getSpaceValue, getColorValue, getPrefixedSpaceValue };
