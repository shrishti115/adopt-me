import "./styles.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "./Landing/Landing";
//:id is the parameter that we are passing in the url hence the ":"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staletime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="details/:id" element={<Details />} />
          <Route path="/" element={<Landing />} />
          <Route path="/search" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

/* 
What is hash router?
HashRouter uses the hash portion of the URL (i.e. window.location.hash) 
to keep your UI in sync with the URL. HashRouter does not require any additional configuration and is the default router type.

What is the hash portion of the URL?
The hash portion of a URL is the # symbol followed by additional 
characters.

how do we know when to use hash router?
If you are using a static file server, HashRouter is required.

What is a static file server?
A static file server is a server that serves static files.

What is a static file?
A static file is a file that does not change. 
For example, an image file

What is a browser router?
BrowserRouter uses the HTML5 history API to keep your UI in sync with the URL.

What is the HTML5 history API?
The HTML5 history API is a standardized way to manipulate the browser history via script.


What is the browser history?
The browser history is a record of all the pages that a user has visited in a browser.

How does a browser router pull the pages that have not been visited?
The browser router pulls the pages that have not been visited by making a request to the server.

Does it store the pages that have been visited?
No, it does not store the pages that have been visited.

Then how does it know which pages have been visited?
It knows which pages have been visited by looking at the browser history.


How does browser history work?
The browser history works by storing the URL of the page that the user has visited.

 
then how does the browser history know which pages have been visited?
The browser history knows which pages have been visited by looking at the browser cache.

how is browser router connected to the browser history?
The browser router is connected to the browser history by the history object.

what is browser cache?
The browser cache is a temporary storage location on your computer for files downloaded by your browser to display websites.

what is the history object?
The history object is a global object that maintains a record of all the pages that have been visited.

how does history object work?
The history object works by storing the URL of the page that the user has visited.

explain the process of how the browser router step by step
1. The user clicks on a link.
2. The browser router intercepts the link.
3. The browser router looks at the browser history to see if the page has been visited.
4. If the page has been visited, the browser router displays the page from the browser cache.
5. If the page has not been visited, the browser router makes a request to the server for the page.
6. The server sends the page to the browser router.
7. The browser router displays the page to the user.
8. The browser router updates the browser history with the URL of the page that the user has visited.
9. The server returns the page as a response.
10.The page that the server returns is the HTML file.
11.The browser displays the HTML page by parsing the HTML file.
12.The browser parses the HTML file by converting the HTML file into a DOM tree.
13.The browser displays the web page by rendering the DOM tree.
14.The browser displays the web page by applying the CSS rules to the DOM tree.
16.The browser displays the web page by applying the JavaScript code to the CSSOM tree.

is browser inbuilt in the browser?
Yes, the browser is inbuilt in the browser.

how do we use browser router in react?
We use browser router in react by using the BrowserRouter component.

is it the same as the browser router in react?
No, it is not the same as the browser router in react.

then what is the difference between the browser router in react and the browser router in react router?
The browser router in react is a component that we use to wrap our application.




what is ccsom tree?
The CSSOM tree is a representation of the CSS rules that are applied to the DOM tree.

**/

/*
what is react Query?
React Query is a library for managing, caching, syncing and updating server state in React.

What is server state?
Server state is the state that is stored on the server.

what is a queryClient?
A queryClient is an object that is used to manage the cache and query states.

why do we need caching?
We need caching to improve the performance of our application.

*/
