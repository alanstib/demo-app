# Development Builds

[Expo Development Builds](https://docs.expo.dev/development/create-development-builds/) give you an almost-bare React Native development experience. Tools that are supported by bare React Native, but not Expo Go, are able to be used (i.e [Flipper mobile app debugger](https://fbflipper.com/)).

## Creating a Development Build

Use the `yarn ios:build:dev-debug` or `yarn android:build:dev-debug` yarn scripts to locally create a Development Build.

You can also, optionally, remove the `--local` flag from these scripts to, instead, build on via EAS + cloud.

Once complete, [follow the Expo documentation](https://docs.expo.dev/development/create-development-builds/#on-emulatorsimulator) for how to install on your simulator, emulator, or device.

For example, with an iOS simulator, the process is:

- Run `yarn ios:build:dev-debug` + wait for a successful build
- Open simulator + drag `./Hypercard.app` into the simulator to install
- Run `yarn start`
- Open `Hypercard` on the simulator and click `fetch development servers`
- Choose the appropriate server started with `yarn start` (usually on `localhost:19000`) and get started
