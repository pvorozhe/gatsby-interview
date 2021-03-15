# Simple Pull Request App

## To Run

The client in this repo uses your Git OAUTH tokens. To make sure the code can authenticate, store `REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN` as an anvironment variable before running the code. Alternatively, you cna insert it directly in index.tsx.
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Features

You can search for a public repo on the main page, in the format of `<string>/<string>`. When the data is fetched, it can be filtered to only show MErged/closed/open PRS. Details of each pull request, including comments can be accessed when clicking the "Details" button.