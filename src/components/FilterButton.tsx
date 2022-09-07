import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 40px;
  padding: 0px 16px;
  font-size: 18px;
  font-family: monospace;
  color: #36395a;
  background-color: white;
  border-color: #4c8bf5;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;

  :not(:first-child) {
    margin-left: 8px;
  }
`;

interface Props {
  filter: {
    id: string;
    label: string;
  };
  onFilterClick: (id: string) => void;
}

const FilterButton = ({ filter, onFilterClick }: Props) => {
  return (
    <StyledButton
      onClick={() => {
        onFilterClick(filter.id);
      }}
    >
      {filter.label}
    </StyledButton>
  );
};

export default FilterButton;
