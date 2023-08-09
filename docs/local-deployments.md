# Local Deployments

## Choose environment

Determine which environment you want to deploy to:

- `dev`
- `staging`
- `production`

These are the project configuration slugs configured in Doppler.

## iOS

### TestFlight

- Run `doppler run -p mobile -c <environment> -- eas build --platform ios --profile <environment> --local`
- When that's complete, run `doppler run -p mobile -c <environment> -- eas submit -p ios` to submit the build to TestFlight, entering the path of the generated `.ipa` file when prompted by the cli

### Local Installation

You may want to build and install a non-debug version of the app locally on your device. This is useful for testing push notifications, for example.

The following script will create an ad-hoc `dev` build that can be installed on an iOS device that's been registered on Hypercard's Devices on the Apple Developer Portal:

```bash
doppler run -p mobile -c dev -- npx eas build --profile=dev-adhoc --platform ios --local
```

Once built, follow the [Expo docs](https://docs.expo.dev/archive/classic-updates/building-standalone-apps/#5-test-it-on-your-device-or-simulator) for how to install and test on your device.

Important to note, here, is the `--profile dev-adhoc` flag. This is set in `eas.json`. Similarly, there are `staging-adhoc` and `production-adhoc` profiles that can be used to build and install ad-hoc versions of the app for those environments.

If/when using them, be sure to [choose the proper environment](#choose-environment) when running the script.

## Android

### Google Play

- Run `doppler run -p mobile -c <environment> -- eas build --platform android --profile <environment> --local`
- When that's complete, run `doppler run -p mobile -c <environment> -- eas submit -p android` to submit the build to Google Play, entering the path of the generated `.aab` file when prompted by the cli
