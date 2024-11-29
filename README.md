# Codeforces Contest Dashboard

A single-page application (SPA) built with React, TypeScript, and Shopify Polaris to display and interact with Codeforces contest data. This project efficiently fetches, filters, searches, paginates, and visualizes contest information.

## Features

* **Data Fetching:**  Efficiently retrieves contest data from the Codeforces API using React Query, minimizing API calls and maximizing performance.  Handles loading states and error conditions gracefully.  The response includes detailed information on all the contests such as type, phase, duration, id and names and even a way to identify what kind of contest they are by the phase the contests are in (Upcoming, Contest Over).
* **Search Functionality:**  Allows users to search for contests by name using a debounced search implementation (using Lodash's `debounce` function), preventing excessive API calls and improving responsiveness. Search queries also check both upper and lower-case strings allowing the application to match whatever the user types in regardless of capitalization.  This allows quick and simple searches.
* **Filtering:** Users can filter contests by type (`ICPC` or `CF`).
* **Pagination:** Implements client-side pagination to handle large numbers of contests, enhancing user experience. Users are able to customize the items per page so they have more control and get the information they need efficiently and effectively.
* **Data Visualization:**  A bar chart, generated with Chart.js, visualizes contest durations against their names. Dynamic filtering on the chart reflects type and phase filters to adjust data visualized instantly in front of the user's eyes.  Tooltips are provided on all the chart elements.
* **Contest Details Page:** Clicking on a contest name navigates to a details page showing contest information including: `id`, `name`, `type`, `phase`, `duration`, and start time (converted to the user's local time zone). Includes a function to add or remove items from favorites. The link is also displayed to allow user to visit contest directly.  Contests can also be easily and effectively added to and removed from the favorite list without loading delay.
* **Favorites:**  Allows users to add and remove contests to their favorites.  Favorites are persistently stored using localStorage. A favorite icon next to each contest in the contest list allows easy and simple access to add or remove from the favorites section, also providing immediate feedback through updating icon colour on success.
* **Responsive Design:** The application is designed to work well on different screen sizes (through a combination of polaris design elements and inline-css).


## Technologies Used

* **React:**  The primary framework for building the user interface. Uses functional components, hooks and typescript to handle and improve application design.
* **TypeScript:**  Adds static typing for enhanced code maintainability, readability, and preventing type-related runtime errors. This greatly improves quality of the application for both developers and end-users by minimizing common run-time issues which significantly enhance user-experience.
* **Shopify Polaris:**  Provides a consistent and user-friendly design system for the UI elements.  All visual elements are made through using the components of the shopify polaris library to adhere to best UI standards.
* **React Query:**  Manages asynchronous data fetching, caching, and updates for efficient data handling. This efficiently handles all the information obtained through the API, also implementing optimized and robust error handling for situations that involve lack of access to API and poor or unreliable networks.
* **Chart.js:**  Used to create an interactive bar chart that visualizes contest durations. Charts update dynamically, changing and resizing to display and fit in available information depending on filters and selected items per page settings. The chart also features helpful and practical tooltips to convey extra information such as exact timings of contests to end-users.
* **React Router DOM:** Enables client-side routing to the contest details page. This seamless integrates within the application allowing smooth transitioning between the Contest List and Contest Details pages. This simple yet very helpful feature boosts user-experience and makes it easier to navigate the application with a better overall feel for user's usability.
* **Lodash:** The `debounce` function from Lodash is used to optimize the search functionality. Prevents too frequent API requests to enhance performance, minimizing server-side load as well.  This feature further helps implement faster searches, avoiding long waits while improving the response time for queries allowing user interaction to be snappy and responsive resulting in overall user experience enhancements.

## Setup

1. **Clone the repository:** `git clone <repository_url>`
2. **Navigate to the project directory:** `cd codeforces-dashboard`
3. **Install dependencies:** `npm install`  (or `yarn install`)
4. **Start the development server:** `npm start` (or `yarn start`)

## Implementation Details

*Detailed explanation of how individual features and modules work are documented in the code itself.*

This project showcases robust front-end development skills, using modern JavaScript techniques and carefully choosing libraries to provide an optimized and scalable user experience.
