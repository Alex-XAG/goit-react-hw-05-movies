import { useParams } from 'react-router-dom';

export const Subbreeds = () => {
  const { dogId } = useParams();

  //   useEffect(() => {
  //     // http request (fetch()....), if it's needed
  //   },[]);

  return <div>Subbreeds: {dogId}</div>;
};
