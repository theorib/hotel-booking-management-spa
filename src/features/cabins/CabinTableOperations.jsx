import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import TableOperations from '../../ui/TableOperations';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        searchParamProperty="discount"
        options={[
          { value: 'all', label: 'All' },
          {
            value: 'with-discount',
            label: 'With discount',
          },
          {
            value: 'no-discount',
            label: 'No discount',
          },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-dsc', label: 'Sort by name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
          { value: 'regularPrice-dsc', label: 'Sort by price (high first)' },
          { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
          { value: 'maxCapacity-dsc', label: 'Sort by capacity (high first)' },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
