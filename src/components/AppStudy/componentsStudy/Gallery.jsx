import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();

  //   useEffect(() => {
  //     // http request (fetch()....), if it's needed
  //   },[]);

  return <div>Image Gallery: {dogId}</div>;
};
