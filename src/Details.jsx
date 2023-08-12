import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["pets", id], fetchPet);

  if (results.isLoading) {
    return <div className="loading-pane"></div>;
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <h2>{pet.name}</h2>
      <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
      <p>{pet.description}</p>
      <button>Adopt {pet.name}</button>
    </div>
  );
};
export default Details;

/* Use params

what is useParams?
useParams is a hook that allows you to access the parameters of the current route.

how does useParams work?
useParams works by returning an object of key/value pairs of URL parameters.


how does it return an object of key/value pairs of URL parameters?
It returns an object of key/value pairs of URL parameters by parsing the URL parameters from the current URL.

tell me everything about useParams
useParams returns an object of key/value pairs of URL parameters by parsing the URL parameters from the current URL.
Remember to use the useParams hook within components that are rendered within a Route component provided by React Router.
 The hook relies on the context provided by the router to access the current route's parameters.


how does it know the current route's parameters?

It knows the current route's parameters by using the context provided 
by the router to access the current route's parameters.   

*/
