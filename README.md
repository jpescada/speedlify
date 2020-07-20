# speedlify

After you make a fast web site, keep it fast by measuring it over time. Read [Use Speedlify to Continuously Measure Site Performance](https://www.zachleat.com/web/speedlify/). Created by [@zachleat](https://www.zachleat.com/).

* Requires Node 12+
* Each file in `_data/sites/*.js` is a category and contains a list of sites for comparison.

## Run locally

```
npm install
npm run test-pages
npm run start
```

## Deploy to Netlify

Can run directly on Netlify (including your tests) and will save the results to a Netlify build cache (via Netlify Build Plugins, see `plugins/keep-data-cache/`).

Speedlify will also save your data to [`/results.zip`](https://jpescada-speedlify.netlify.app/results.zip) so that you can download later. This serves as a fallback backup mechanism in case your Netlify cache gets blown away. Just look up your previous build URL and download the data to restore.

[![Netlify Status](https://api.netlify.com/api/v1/badges/bf6e14c5-6588-4404-a8b8-3f3b17887198/deploy-status)](https://app.netlify.com/sites/jpescada-speedlify/deploys)
