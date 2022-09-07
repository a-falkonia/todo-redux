import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setVisibilityFilter } from '../redux/filterSlice';
import FilterButton from './FilterButton';

const StyledPanel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0px;
`;

const filters = [
  { id: 'SHOW_ALL', label: 'Show All' },
  { id: 'SHOW_COMPLETED', label: 'Show Completed' },
  { id: 'SHOW_ACTIVE', label: 'Show Active' },
];

const FilterPanel = () => {
  const dispatch = useDispatch();
  const setFilter = (id: string) => {
    dispatch(
      setVisibilityFilter({
        filter: id,
      })
    );
  };
  return (
    <StyledPanel>
      {filters.map((filter) => (
        <FilterButton
          key={filter.id}
          filter={filter}
          onFilterClick={setFilter}
        />
      ))}
    </StyledPanel>
  );
};

export default FilterPanel;
