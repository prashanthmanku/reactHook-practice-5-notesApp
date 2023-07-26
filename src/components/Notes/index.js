import {useState, useEffect} from 'react'
import {v4} from 'uuid'
import {
  AppCard,
  AppWidthCard,
  Heading,
  InputForm,
  Input,
  TextArea,
  Button,
  NoPostsCard,
  Img,
  Title,
  Description,
  PostsList,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const InitialNotesList = JSON.parse(localStorage.getItem('NotesList'))
  const [NotesList, setNotesList] = useState(
    InitialNotesList === null ? [] : InitialNotesList,
  )
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  useEffect(() => {
    localStorage.setItem('NotesList', JSON.stringify(NotesList))
  })

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeNote = e => {
    setNote(e.target.value)
  }

  const deleteNote = id => {
    const Index = NotesList.map(each => {
      if (each.id === id) {
        return true
      }
      return false
    })
    NotesList.splice(Index, 1)
    setNotesList([...NotesList])
  }

  const onClickSubmit = e => {
    e.preventDefault()
    if (title.trim() !== '' && note.trim() !== '') {
      const newNote = {
        id: v4(),
        title,
        note,
      }
      setNotesList(prev => [...prev, newNote])
      setTitle('')
      setNote('')
    }
  }
  console.log(NotesList)

  const renderNoPostsCard = () => (
    <NoPostsCard>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <Title>No Notes Yet</Title>
      <Description>Notes you add will appear here</Description>
    </NoPostsCard>
  )

  const renderPostsList = () => (
    <PostsList>
      {NotesList.map(each => (
        <NoteItem noteDetails={each} key={each.id} deleteNote={deleteNote} />
      ))}
    </PostsList>
  )

  return (
    <AppCard>
      <AppWidthCard>
        <Heading>Notes</Heading>
        <InputForm onSubmit={onClickSubmit}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <TextArea
            placeholder="Take a Note..."
            value={note}
            onChange={onChangeNote}
          />
          <Button type="submit">Add</Button>
        </InputForm>
        {NotesList.length === 0 ? renderNoPostsCard() : renderPostsList()}
      </AppWidthCard>
    </AppCard>
  )
}
export default Notes
