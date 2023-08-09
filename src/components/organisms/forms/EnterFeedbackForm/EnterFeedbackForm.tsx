import { useCallback, useMemo } from "react";
import { ActivityIndicator } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import * as z from "zod";
import { useDisableGoBackOnValueTruthiness } from "navigation/hooks";
import { Body1, Body2, ScreenSubContainer } from "components/atoms";
import { PrimaryButton, TertiaryButton } from "components/molecules";
import { YGroup, YStack } from "tamagui";
import { useProfileDrawerStore } from "services/zustand";
import { getColorValue } from "theme/utils";
import { Form, FormProps } from "../Form";
import { useSendFeedback } from "../hooks";

const schema = z.object({
  feedback: z.string().min(1).max(300, "Feedback must be less than 300 characters."),
});

type Schema = z.infer<typeof schema>;

const EnterFeedbackForm = () => {
  const closeProfileDrawer = useProfileDrawerStore((state) => state.closeProfileDrawer);

  const methods = useForm<Schema>({
    mode: "onChange",
    delayError: 2000, // delay errors for 2 seconds onChangeText
    resolver: zodResolver(schema),
  });

  const { handleSendFeedback, error, loading, data } = useSendFeedback();

  const fieldConfigurations: FormProps<Schema>["fieldConfigurations"] = useMemo(
    () => ({
      feedback: {
        component: "ControlledFormMultilineInput",
        height: 200,
        placeholder: "How can we improve Hypercard?",
        labelText: "Your feedback and ideas are valuable to us.",
        name: "feedback",
        keyboardType: "default",
        autoCapitalize: "none",
        returnKeyType: "go",
        autoFocus: true,
        autoFocusType: "after-navigation",
      },
    }),
    [],
  );

  useDisableGoBackOnValueTruthiness(loading);

  const handleAddFeedback = useCallback(
    ({ feedback }: Schema) => {
      handleSendFeedback(feedback);
    },
    [handleSendFeedback],
  );

  const isValid = methods.formState.isValid;

  const navigation = useNavigation();

  const handleNavigateHome = useCallback(() => {
    closeProfileDrawer();
    navigation.navigate("HomeScreen");
  }, [closeProfileDrawer, navigation]);

  return (
    <>
      {data ? (
        <YStack flex={1} justifyContent={"space-between"}>
          <YGroup backgroundColor={"black"}>
            <Body1
              paddingTop={"$6"}
              alignSelf={"center"}
              color={"$white"}
              textAlign={"center"}
              width={"$18"}
            >
              {"Your valuable feedback helps us improve the shopping experience for all"}
            </Body1>
          </YGroup>
          <TertiaryButton onPress={handleNavigateHome}>{"Go to home"}</TertiaryButton>
        </YStack>
      ) : (
        <YStack flex={1}>
          <ScreenSubContainer flex={1} paddingTop={"$6"}>
            <Form methods={methods} fieldConfigurations={fieldConfigurations} />
          </ScreenSubContainer>
          {error ? (
            <Body2 paddingTop={"$6"} color={"$error"}>
              {"Unable to send feedback. Please try again."}
            </Body2>
          ) : null}
          <ScreenSubContainer paddingBottom={"$6"}>
            <PrimaryButton
              onPress={methods.handleSubmit(handleAddFeedback)}
              disabled={!isValid || loading}
            >
              {loading ? (
                <ActivityIndicator size={"small"} color={getColorValue("black")} />
              ) : (
                "Submit"
              )}
            </PrimaryButton>
          </ScreenSubContainer>
        </YStack>
      )}
    </>
  );
};

export { EnterFeedbackForm };
