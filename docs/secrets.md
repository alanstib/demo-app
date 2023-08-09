# Secrets

This project uses [Doppler](https://www.doppler.com/) to manage secrets. This works by storing our secrets remotely instead of using .env files to maintain consistency across devices. The setup instructions for Doppler are linked [here](https://docs.doppler.com/docs/install-cli).

## How It Works

1. All of our run/build/deploy scripts are prefaced with `doppler run -- command-here`. This pulls secrets from Doppler and injects them into the running process.
2. We use `transform-inline-environment-variables` to load secrets from the running process into `process.env` to be used in code.
3. Throughout the app, we reference `services/env` which holds all secrets in one place.
