import { useCallback, useMemo } from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ScreenSubContainer,
  BaseKeyboardAvoidingView,
  ScreenContainer,
  Body2,
} from "components/atoms";
import { PrimaryButton } from "components/molecules";
import {
  BankAccountType,
  GetAchPaymentMethodsDocument,
  useCreateAchPaymentMethodMutation,
} from "services/graphql/generated";
import { useDisableGoBackOnValueTruthiness } from "navigation/hooks";
import { getColorValue } from "theme/utils";
import { useApolloClient } from "@apollo/client";
import { useLayoutAnimationOnChange } from "utils";
import { Form, FormProps } from "../Form";

type AddBankAccountFormProps = {
  onSuccess: () => void;
};

const schema = z.object({
  accountNumber: z.string().min(1),
  accountType: z.string().min(1),
  bankName: z.string().min(1),
  name: z.string().min(1),
  routingNumber: z.string().min(1),
});

type Schema = z.infer<typeof schema>;

const createReadableAccountType = (accountType: BankAccountType) =>
  `${accountType.charAt(0).toUpperCase()}${accountType.slice(1)}`;

const convertReadableAccountTypeToBankAccountType = (accountType?: string) =>
  accountType?.toLowerCase() as BankAccountType;

const AddBankAccountForm = ({ onSuccess }: AddBankAccountFormProps) => {
  const client = useApolloClient();
  const methods = useForm<Schema>({
    mode: "onChange",
    delayError: 2000, // delay errors for 2 seconds onChangeText
    resolver: zodResolver(schema),
  });
  const [createACHPaymentMethod, { loading, data, error: graphqlError }] =
    useCreateAchPaymentMethodMutation();

  const error = useMemo(
    () => !!graphqlError || data?.createACHPaymentMethod.__typename?.includes("Error"),
    [data, graphqlError],
  );

  useLayoutAnimationOnChange(loading);

  const toggleAccountType = useCallback(() => {
    const accountType = convertReadableAccountTypeToBankAccountType(
      methods.getValues("accountType"),
    );

    if (accountType === BankAccountType.Checking) {
      methods.setValue("accountType", createReadableAccountType(BankAccountType.Savings));
    } else {
      methods.setValue(
        "accountType",
        createReadableAccountType(BankAccountType.Checking),
      );
    }
  }, [methods]);

  const fieldConfigurations = useMemo(
    (): FormProps<Schema>["fieldConfigurations"] => ({
      bankName: {
        autoFocus: true,
        autoFocusType: "after-navigation",
        component: "ControlledFormInput",
        labelText: "Bank Name",
        name: "bankName",
        placeholder: "Bank of America",
        autoCorrect: false,
        spellCheck: false,
      },
      name: {
        labelText: "Nickname",
        component: "ControlledFormInput",
        name: "name",
        placeholder: "Personal Checking",
        autoCorrect: false,
        spellCheck: false,
      },
      accountType: {
        labelText: "Account Type",
        component: "ControlledFormInput",
        name: "accountType",
        placeholder: "Checking | Savings",
        onPress: toggleAccountType,
      },
      accountNumber: {
        labelText: "Account number",
        component: "ControlledFormInput",
        name: "accountNumber",
        keyboardType: "number-pad",
        autoCapitalize: "none",
        placeholder: "1234567890",
        autoCorrect: false,
        spellCheck: false,
      },
      routingNumber: {
        labelText: "Routing Number",
        component: "ControlledFormInput",
        name: "routingNumber",
        returnKeyType: "go",
        placeholder: "#########",
        autoComplete: "off",
        autoCorrect: false,
        spellCheck: false,
      },
    }),
    [toggleAccountType],
  );

  const handleAddACHMethod = useCallback(
    async ({ accountNumber, accountType, bankName, name, routingNumber }: Schema) => {
      const result = await createACHPaymentMethod({
        variables: {
          paymentMethodInput: {
            accountNumber,
            accountType: convertReadableAccountTypeToBankAccountType(accountType),
            bankName,
            name,
            routingNumber,
          },
        },
      });

      if (
        result.data?.createACHPaymentMethod.__typename ===
        "MutationCreateACHPaymentMethodSuccess"
      ) {
        try {
          await client.refetchQueries({
            include: [GetAchPaymentMethodsDocument],
          });
        } catch {
          // TODO improve what happens when ach method has been added but we fail to refetch payment methods
        } finally {
          onSuccess();
        }
      }
    },
    [client, createACHPaymentMethod, onSuccess],
  );

  const isValid = methods.formState.isValid;

  useDisableGoBackOnValueTruthiness(loading);

  return (
    <>
      <ScreenContainer>
        <BaseKeyboardAvoidingView>
          <ScrollView keyboardShouldPersistTaps={"handled"}>
            <ScreenSubContainer flex={1} paddingTop={"$6"}>
              <Form methods={methods} fieldConfigurations={fieldConfigurations} />
            </ScreenSubContainer>
          </ScrollView>
        </BaseKeyboardAvoidingView>
        <ScreenSubContainer paddingBottom={"$6"}>
          {error ? (
            <Body2 paddingBottom={"$4"} color={"$error"}>
              {"Unable to add account. Please try again."}
            </Body2>
          ) : null}
          <PrimaryButton
            onPress={methods.handleSubmit(handleAddACHMethod)}
            disabled={!isValid || loading}
          >
            {loading ? (
              <ActivityIndicator size={"small"} color={getColorValue("black")} />
            ) : (
              "Add Account"
            )}
          </PrimaryButton>
        </ScreenSubContainer>
      </ScreenContainer>
    </>
  );
};

export { AddBankAccountForm };
