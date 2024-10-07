# Carter & George 2.0

## Development

### Running the app

Run `yarn run dev` to run the app.

This will run a dev instance at [http://localhost:3000](http://localhost:3000)

### Setup Local live preview

Follow these instructions to setup HTTPS proxy: https://www.storyblok.com/faq/setup-dev-server-https-proxy

### Run local live preview (over https)

On a separate terminal, run:

```
npx local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```
