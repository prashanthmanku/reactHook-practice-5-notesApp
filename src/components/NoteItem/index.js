import {RiDeleteBin6Line} from 'react-icons/ri'

import {NoteCard, Title, Note, Button, Icon} from './styledComponents'

const NoteItem = props => {
  const {noteDetails, deleteNote} = props
  const {title, note, id} = noteDetails

  const onClickClose = () => {
    deleteNote(id)
  }
  return (
    <NoteCard>
      <Button type="button" onClick={onClickClose}>
        <Icon as={RiDeleteBin6Line} />
      </Button>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </NoteCard>
  )
}
export default NoteItem
