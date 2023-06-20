import { Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();

  // console.log(location);
  // console.log(backLinkLocationRef);
  //   console.log(dogId);

  //   useEffect(() => {
  //     // http request (fetch()....), if it's needed
  //   },[]);

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Back to the page colletction</Link>
      {/* {location.state && location.state.from} === {location.state?.from} */}
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
