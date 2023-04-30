import { useRouter } from 'next/router';
function Collection() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Collection ID: {id}</h1>
    </div>
  );
}

export default Collection;
