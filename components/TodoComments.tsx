import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    allUsers {
      id
      name 
      Comments {
        id
        body
      }
    }
  }
`;

const TodoComments = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data: { allUsers } }) => {
      if (error) return <p>Error loading posts.</p>
      if (loading) return <p>Loading</p>

      return (
        <div>
          <h2>Comments from server</h2>
          <ul>
            {allUsers.map(user => (
              <li key={user.id}>{user.name}: {user.Comments.map(comment => comment.body).reduce((a,b)=>`${a}, ${b}`,)}</li>
            ))}
          </ul>
        </div>
      )
    }
    }
  </Query>
);

export default TodoComments;
