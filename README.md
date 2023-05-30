# The Movie Test, aka Cruise Strikes Back

![Cruisey](https://media.giphy.com/media/D16XHdsB1PBxm/giphy.gif)

## Running the app

To run the app, first clone this repo to your system and do the following.

1. Do `npm i` on the root of the project
2. Do `npm run dev` and visit `http://localhost:3000/`

## Tech Stack and Details

The uses NextJS13, and its Page router since the Apollo Client doesn't have a production ready library to use with the App router.

Unfortunately, the Apollo Client still has issues with the NextJS13 and useQuery hook gets stuck in `{ loading: true }`. Thus, we use `fetch` API for client side data fetching.

The page is SSR and the contents loaded later by button event listener is CSR.

This message will self destruct in Five seconds
