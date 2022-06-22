# Chii

Remote web debugging tool, forked from [https://github.com/liriliri/chii](https://github.com/liriliri/chii), using [chrome devtools frontend](https://github.com/ChromeDevTools/devtools-frontend).

Adapted for TFORevive, for usage with the built-in game UI.

![Chii](https://res.liriliri.io/chii/screenshot.jpg)

## Install

You can get it on npm.

```bash
npm install chii -g
```

## Usage

Start the server with the following command.

```bash
chii start -p 8123
```

In-game you have to enable it with `uigt_chii 1`. You can also adjust the server URL with the `uigt_chii_server_url` cvar, default is `localhost:8123`.

If your pages are already loaded, use the `uigt_reload_all` console command to reload them.

Then browse to localhost:8123 to start debugging your page.

## Demo (outside of game)

Browse it on your phone: [https://chii.liriliri.io/test/demo.html](https://chii.liriliri.io/test/demo.html)

Open [https://chii.liriliri.io/](https://chii.liriliri.io/) and click inspect to start debugging the demo page.
