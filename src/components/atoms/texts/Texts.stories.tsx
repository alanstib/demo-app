import { Component, Fragment } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { typedEntries } from "utils";
import { Spacer } from "tamagui";
import * as Headers from "./Headers";
import * as Bodies from "./Bodies";
import { Label } from "./Label";
import { ButtonLabel } from "./ButtonLabel";
import { Caption } from "./Caption";
import { Numbers } from "./Numbers";

const meta: ComponentMeta<typeof Component> = {
  title: storybookTitles.atoms,
};

const allTexts = {
  Numbers,
  ...Headers,
  ButtonLabel,
  Caption,
  ...Bodies,
  Label,
};

const TextsStory: ComponentStory<typeof Component> = () => (
  <>
    {typedEntries(allTexts).map(([componentName, TextComponent]) => (
      <Fragment key={componentName}>
        <TextComponent>{componentName}</TextComponent>
        <Spacer size={"$6"} />
      </Fragment>
    ))}
  </>
);

TextsStory.storyName = "Texts";

export default meta;
export { TextsStory };
