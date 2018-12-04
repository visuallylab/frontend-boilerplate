import { ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import { allPostsQuery, allPostsQueryVars } from './PostList'

export default () => {
  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <h1>Submit</h1>
          <input placeholder='title' name='title' type='text' required />
          <button type='submit'>create post</button>
        </form>
      )}
    </ApolloConsumer>
  )
}

function handleSubmit (event, client) {
  event.preventDefault()
  const form = event.target
  const formData = new window.FormData(form)
  const title = formData.get('title')
  form.reset()

  client.mutate({
    mutation: gql`
      mutation createPost($title: String!){
        createPost(id: 1, title: $title, views: 68, user_id: 1) {
          title
          id
          views
          user_id
        }
      }
    `,
    variables: { title },
    update: (proxy, { data: { createPost } }) => {
      const data = proxy.readQuery({
        query: allPostsQuery,
        variables: allPostsQueryVars
      })
      proxy.writeQuery({
        query: allPostsQuery,
        data: {
          ...data,
          allPosts: [createPost, ...data.allPosts]
        },
        variables: allPostsQueryVars
      })
    }
  })
}
