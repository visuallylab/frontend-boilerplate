import React from 'react';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-client';
import { ApolloConsumer } from 'react-apollo';
import { MutationUpdaterFn } from 'apollo-client/core/watchQueryOptions';

import { GET_USERS } from './CommentList';

const CommentForm = () => {
  return (
    <ApolloConsumer>
      {client => {
        return (
          <form onSubmit={event => handleSubmit(event, client)}>
            <input placeholder="comment..." name="comment" required={true} />
            <button type="submit">send from john</button>
          </form>
        );
      }}
    </ApolloConsumer>
  );
};

const update: MutationUpdaterFn = (proxy, mutationResult) => {
  const {
    data: { createComment }
  } = mutationResult as createCommentResult;
  const data = proxy.readQuery({ query: GET_USERS }) as { allUsers: AllUsers };

  const targetUser = data.allUsers.find(
    user => user.id === createComment.user_id
  );
  targetUser!.Comments = targetUser!.Comments.concat([createComment]);

  proxy.writeQuery({
    query: GET_USERS,
    data
  });
};

const handleSubmit = (event: React.SyntheticEvent, client: ApolloClient) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const comment = formData.get('comment');
  const date = new Date().toISOString();
  const id = Math.floor(Math.random() * 100);

  form.reset();

  client.mutate({
    mutation: gql`
      mutation createComment($date: Date!, $comment: String!, $id: ID!) {
        createComment(id: $id, user_id: 123, body: $comment, date: $date) {
          id
          user_id
          body
        }
      }
    `,
    variables: { comment, date, id },
    update
  });
};

export default CommentForm;
