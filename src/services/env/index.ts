const env = Object.freeze({
  apiUrl: process.env.API_URL as string,
  environmentName: process.env.ENVIRONMENT_NAME as "dev",
  stytchPublicToken: process.env.STYTCH_PUBLIC_TOKEN as string,
  internalSecret: process.env.INTERNAL_SECRET as string,
  hypercardAuthorization: process.env.HYPERCARD_AUTHORIZATION as string,
  authorizationToken: process.env.AUTHORIZATION_TOKEN as string,
  mmkvEncryptionKey: process.env.MMKV_ENCRYPTION_KEY as string,
});

export { env };
