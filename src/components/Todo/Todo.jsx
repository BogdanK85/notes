import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/todoSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          NOTE #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
