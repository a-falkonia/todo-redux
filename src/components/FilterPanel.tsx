import styled from 'styled-components';

const FilterPanel = () => {
    const StyledPanel = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 0px;
  `;
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

    :not(:first-child){
        margin-left: 8px;
    }
  `;
  return (
    <StyledPanel>
      <StyledButton>Show All</StyledButton>
      <StyledButton>Show Active</StyledButton>
      <StyledButton>Show Completed</StyledButton>
    </StyledPanel>
  );
};

export default FilterPanel;
