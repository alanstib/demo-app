import { RetryLink } from "@apollo/client/link/retry";

const retryLink = new RetryLink({
  delay: {
    initial: 500,
    jitter: true,
  },
  attempts: {
    max: 3,
    // TODO define which operations we actually don't want to retry
    // For example, don't retry if it's a SignIn or SignUp attempt
    retryIf: (_error, operation) => operation.operationName !== "GetAccountOpenDate",
  },
});

export { retryLink };
