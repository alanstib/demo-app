import { useCallback } from "react";
import { env } from "services/env";
import {
  useSendOtpMutation,
  useSubmitFeedbackMutation,
} from "services/graphql/generated";
import { useLayoutAnimationOnChange } from "utils";

const useSendOtp = () => {
  const [sendOtp, { loading, error, data }] = useSendOtpMutation({
    context: { headers: { "introspection-key": env.internalSecret } },
  });

  const handleSendOtp = useCallback(
    (maskedPhone: string) => {
      const unmaskedPhone = maskedPhone.replace(/\D/g, "");

      return sendOtp({ variables: { phoneNumber: unmaskedPhone } });
    },
    [sendOtp],
  );

  useLayoutAnimationOnChange(loading);

  return {
    handleSendOtp,
    loading,
    error: !!error || data?.sendOTP.__typename?.includes("Error"),
    methodId:
      data?.sendOTP.__typename === "MutationSendOTPSuccess"
        ? data.sendOTP.data
        : undefined,
  };
};

const useSendFeedback = () => {
  const [sendFeedback, { loading, error, data }] = useSubmitFeedbackMutation({
    context: { headers: { "x-api-key": env.internalSecret } },
  });

  const handleSendFeedback = useCallback(
    (feedback: string) => sendFeedback({ variables: { feedback } }),
    [sendFeedback],
  );

  useLayoutAnimationOnChange(loading);

  return {
    handleSendFeedback,
    loading,
    error: !!error || data?.submitFeedback.__typename?.includes("Error"),
    data:
      data?.submitFeedback.__typename === "MutationSubmitFeedbackSuccess"
        ? data.submitFeedback.data
        : undefined,
  };
};

export { useSendOtp, useSendFeedback };
