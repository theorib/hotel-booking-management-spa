import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || options?.at(0);

  const handleChange = function (e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  };

  if (!options.length) return null;

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type="white"
    />
  );
}

export default SortBy;
