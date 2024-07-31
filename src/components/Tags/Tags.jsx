import styled from 'styled-components';
import { useContext } from 'react';
import { StateContext } from '../StateProvider'; // Ensure this path is correct

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleTagClick = (index) => {
    if (typeof setActiveTag === 'function') {
      setActiveTag(index);
    } else {
      console.error('setActiveTag is not a function');
    }
  };

  return (
    <TagsContainer>
      {["Work", "Short Break", "Long Break"].map((tag, i) => (
        <Tag
          onClick={() => handleTagClick(i)}
          active={activeTag === i}
          key={i}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Tag = styled.button`
  all: unset;
  height: 4rem;
  background: ${(props) => (props.active ? "#b85600" : props.theme.colors.secondary)};
  text-align: center;
  border-radius: 5rem;
  flex: 1;
  font-size: 2rem;
  color: ${(props) => (props.active ? "#fff" : "#f5eaea")};
  cursor: pointer;
`;
