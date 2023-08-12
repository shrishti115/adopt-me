import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <>
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
        </div>
      </Link>
    </>
  );
};

export default Pet;

/*
what is a link component in react router?
The Link component is used to navigate between pages in a React application.

what does it do?
It prevents the browser from making a request to the server.

how does it do?
It uses the HTML5 pushState API to update the URL in the browser 
without refreshing the page.

what is link component made of?
The Link component is made of an anchor tag.

then why not use the anchor tag instead?
The anchor tag will make a request to the server.

how does link stops from making a request to the server?
The Link component stops from making a request to the server by using the
 HTML5 pushState API to update the URL in the browser without refreshing the page.

what is the HTML5 pushState API?
The HTML5 pushState API is a standardized way to manipulate the browser history via script.\

how does pushState API do what it does?
The pushState API does what it does by adding a new entry to the browser history.

how does it add a new entry to the browser history?
It adds a new entry to the browser history by using the pushState method.

what is the pushState method?
The pushState method is a method that adds a new entry to the browser history.

what does to means in the context of pushState method?
to means the URL that you want to add to the browser history.

link to what does it mean?
link to means the URL that you want to add to the browser history.


*/
