import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Dogs = () => {
  const [dogs] = useState(['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5']);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';

  // console.log(searchParams.get('dogId')); // url string after ? in url link

  //   useEffect(() => {
  //     // http request (fetch()....), if it's needed
  //   },[]);

  const updateQueryString = evt => {
    const dogIdValue = evt.target.value;
    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: dogIdValue });

    // const nextParams = dogId !== ''?{dogId}: {}
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));
  console.log(location);
  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
//   const [searchParams, setSearchParams] = useSearchParams();
//

//   //   console.log(searchParams.get('dogId')); // url string after ? in url link

//   //   const visibleDogs = dogs.filter(dog => dog.includes(dogId));

//   return (
//     <div>
//       <input
//         type="text"
//         value={dogId}
//         onChange={evt => setSearchParams({ dogId: evt.target.value })}
//       />
//       {/* <button onClick={() => setSearchParams({ name: 'alex' })}>
//         Change SP
//       </button> */}
//       <ul>
//         {dogs.map(dog => {
//           return (
//             <li>
//               <Link to={`${dog}`}>{dog}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export default Dogs;
