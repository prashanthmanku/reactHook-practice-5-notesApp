import styled from 'styled-components'

export const AppCard = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`

export const AppWidthCard = styled.div`
  width: 90%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 26px;
  color: #4c63b6;
  font-weight: 500;
  margin-bottom: 40px;
  text-align: center;
`

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px 0px #aab8c8;

  padding: 20px;
  border-radius: 10px;
`
export const Input = styled.input`
  height: 35px;
  border: none;
  outline: none;
`

export const TextArea = styled.textarea`
  margin-top: 20px;
  height: 100px;
  border: none;
  outline: none;
  line-height: 23px;
`

export const Button = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 10px 20px 0px 0px;
  font-size: 16px;
  font-weight: 500;
`

export const NoPostsCard = styled.div`
  margin-top: 60px;
  text-align: center;
`

export const Img = styled.img`
  width: 100px;
`

export const Title = styled.h1`
  color: #475569;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 600;
`

export const Description = styled.p`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`

export const PostsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`
