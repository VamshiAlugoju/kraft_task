 
 ## Deployed Site

 You can see the deployed application in [https://kraft-task.vercel.app/]

## Getting Started

To run dev server 
Navigate to root folder then install all the necessary dependecies and run the dev server
```bash
npm i 
#or
npm install

npm run dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run build server for more optimised application

After installing the dependecies run 
```bash
npm run build
npm run start
```

Now open the browser for result

## Features 

- Infinite Scrolling is implemented when viewing the hotels.
- A real time map included which show the markers of the hotels.You can controll the map , zoom it and much more.
- when you click a marker it shows a popup item showing the hotel name and browser automatically scrolls to the clicked hotel.
- Responsive to every screensize.

- On the home page you can see a navigation bar and a list of hotels in the body.
  These items are dummy hotels.
- In navigation bar using the search bar type any city and click the search icon to open a new page with the result.
- Currently we do not have any real time data and there is no Free API for it.I'm using mocked data.
- But you can search for [bengaluru,hyderabad,warangal,mumbai] for some real results on the map.I've added real time
  latitudes and longitudes  for them.For all other keywords you get a 100 dummy hotels list array with dummy lat and lng.
