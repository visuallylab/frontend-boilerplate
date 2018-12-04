import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PostUpvoter from './PostUpvoter'


export const allPostsQuery = gql`
  query allPosts{
    allPosts{
      title
      id
    }
    _allPostsMeta {
      count
    }
  }
`

export const allPostsQueryVars = {
  page: 1,
}

export default function PostList () {
  return (
    <Query query={allPostsQuery} variables={allPostsQueryVars}>
      {({ loading, error, data: { allPosts, _allPostsMeta }, fetchMore }) => {
        if (error) return <div>Error loading posts</div>
        if (loading) return <div>Loading</div>

        const areMorePosts = allPosts.length < _allPostsMeta.count
        console.log(allPosts)
        return (
          <section>
            <ul>
              {allPosts.map((post, index) => (
                <li key={post.id}>
                  <div>
                    <span>{index + 1}. </span>
                    <h2>{post.title} by {post.user_id}</h2>
                    <p>{post.comments}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* {areMorePosts ? (
              <button onClick={() => loadMorePosts(allPosts, fetchMore)}>
                {' '}
                {loading ? 'Loading...' : 'Show More'}{' '}
              </button>
            ) : (
              ''
            )} */}
          </section>
        )
      }}
    </Query>
  )
}

// function loadMorePosts (allPosts, fetchMore) {
//   fetchMore({
//     variables: {
//       skip: allPosts.length
//     },
//     updateQuery: (previousResult, { fetchMoreResult }) => {
//       if (!fetchMoreResult) {
//         return previousResult
//       }
//       return Object.assign({}, previousResult, {
//         // Append the new posts results to the old one
//         allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
//       })
//     }
//   })
// }
