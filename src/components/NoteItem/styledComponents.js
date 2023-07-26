import styled from 'styled-components'

export const NoteCard = styled.li`
  border: 2px solid #cbd5e1;
  margin: 20px 0px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 350px;
    margin-right: 20px;
  }
`

export const Title = styled.h1`
  margin: 0px;
  color: #1e293b;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 600;
  display: flex;
  flex-direction: column;
`

export const Note = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 23px;
`
export const Button = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  padding: 0px;
  outline: none;
  cursor: pointer;
`

export const Icon = styled.div`
  color: #4c63b6;
  height: 22px;
  width: 22px;
`
