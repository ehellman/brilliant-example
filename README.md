# Brilliant iframe iPhone problem

1. Modify the `.env` file, add the correct url there (mentioned in the e-mail, or use your own)
2. `npm install`
3. `npm run dev`
4. `npm run dev` starts Vite with the `--host` flag, exposing the server to your local network.
5. Change your Brillant config to allow your local IP as a host, if you cannot do this skip to step 6.
6. If you are on a home network that has a DNS server in you router, create an A-record for an allowed domain, pointing on your host IP. I.e:

```
A dev.lyko.com 192.168.20.210
```

### Testing

The problem occurs on MacOS Safari, iOS Safari. If you are on the same network, go to your Vite server in your browser, either `https://your-ip` or `https://dev.lyko.com/` if you set up your DNS. The form should load inside the iframe if you have set this up correctly. Now try clicking a rating, you should see the iframe reload and the rating reset.