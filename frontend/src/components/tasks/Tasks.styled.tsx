import styled from 'styled-components';

export const TasksStyled = styled.div`
  background-color: #8A817C;
  color: #D9D9D9;
`

export const TasksItemStyled = styled.li<{ isDone?: boolean }>`
  background-color: #F4F3EE;
  color: ${props => props.isDone ? 'gray' : 'black'};
  text-decoration: ${props => props.isDone && 'line-through'};
`
