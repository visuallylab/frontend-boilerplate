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

const CommentList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (error) {
        return <p>Error loading posts.</p>;
      }

      if (loading) {
        return <p>Loading</p>;
      }

      const { allUsers } = data as { allUsers: AllUsers };

      return (
        <ul>
          {allUsers.map(user => (
            <li key={user.id}>
              {user.name}:{' '}
              {user.Comments.map(comment => comment.body).reduce(
                (a, b) => `${a}, ${b}`,
              )}
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default CommentList;
