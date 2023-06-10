import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dogs = () => {
  const [dogs] = useState(['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5']);

  //   useEffect(() => {
  //     // http request (fetch()....), if it's needed
  //   },[]);

  return (
    <div>
      {dogs.map(dog => {
        return (
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        );
      })}
    </div>
  );
};
//   const [searchParams, setSearchParams] = useSearchParams();
//   const dogId = searchParams.get('dogId');

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
