import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import {GET_USERS} from './TodoComments'

const TodoCommentForm = () => {
  return (
    <ApolloConsumer>
      {client => {
        return (
          <form onSubmit={event => handleSubmit(event, client)}>
            <input placeholder='comment...' name='comment' required />
            <button type='submit'>send from john</button>
          </form>
        )
      }}
    </ApolloConsumer>
  )
}

function handleSubmit(event, client) {
  event.preventDefault()
  const form = event.target
  const formData = new window.FormData(form)
  const comment = formData.get('comment')
  const date = new Date().toISOString();
  const id = Math.floor(Math.random() * 100);
  form.reset()
  client.mutate({
    mutation: gql`
      mutation createComment($date: Date!, $comment: String!, $id: ID!) {
        createComment(
          id: $id
          user_id: 123
          body: $comment
          date: $date
          ){
            id
            user_id
            body
          }
      }
    `,
    variables: { comment, date, id },
    update: (cache, { data: { createComment } }) => {
      const data = cache.readQuery({query: GET_USERS})
      const user = data.allUsers.find(user => user.id === createComment.user_id);
      user.Comments = user.Comments.concat([createComment]);

      cache.writeQuery({
        query: GET_USERS,
        data
      })
    }
  })
}

export default TodoCommentForm;