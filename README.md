# Reddit Client App

Reddit is a website where people share links to articles, media and other things on the web.

## Requirements
* The app should display posts and comments from Reddit
* Search posts by keywords
* Filter by categories (predefined)
* View post in detail (modal window or separate page)

## Flow
User opens the app -> popular posts are loaded (request to Reddit API) -> saved in Redux -> displayed

User enters a search query -> request is sent to the Reddit API -> results are stored in Redux -> displayed.

## High-level design

### System components
- Client (browser): React application, Redux for state management.
- Server: Reddit API (external data source)
- Our app doesn't have its own backend, but we must take into account the Reddit API's limitations (10 requests per minute).

### Interaction
- The client makes requests to the Reddit API (via a proxy, if CORS is needed?).
- Caching responses on the client to reduce the number of requests.
- Reddit API query parameters for searching and filtering.

### Issues
- Request rate limit: 10 per minute. Error handling and possibly caching are required.
- The Reddit API returns Markdown for comments -> a Markdown parser is required on the client.

## Component Structure Frontend


### Wireframes

### Technologies

- React
- Redux Toolkit
- React Router

### Features

### Future work