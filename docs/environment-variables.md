# Environment Variables

This project uses a combination of [Doppler](https://www.doppler.com/) and [Babel](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-inline-environment-variables) to manage environment variables.

## Doppler

We preface all run/build/deploy scripts with `doppler run -- command-here` which pulls environment variables from Doppler and injects them into the running process.

By using Doppler, environment variables are stored remotely and developers don't need to set up `.env`. This ensures consistency across devices. The setup instructions for Doppler are linked [here](https://docs.doppler.com/docs/install-cli).

## Babel

Now that environment variables are in the running process, how can we use them in our code? `babel-plugin-transform-inline-environment-variables` takes those variables and includes them in `process.env` to be used throughout the app. Throughout the app we can reference [`services/env`](../src/services/env) which compiles environment variables into an object.

# Adding New Environment Variables

1. Add the new environment variable to the `mobile` project in Doppler. This will now be included in the process.
2. In order for Babel to pick up on it, add the key to the `environmentVariables` list in [babel.config.js](../babel.config.js).
3. Finally, add the variables to the env config in [`services/env`](../src/services/env). Now you can reference this throughout the app.
4. If you want to update values, you just need to update them in Doppler.
