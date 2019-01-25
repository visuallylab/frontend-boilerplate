import React from 'react';
import initApollo from './init-apollo';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';
import { NextAppContext } from 'next/app';
import ApolloClient from 'apollo-boost';

export default (App: React.ComponentClass<any>) => {
  const isBrowser = typeof window !== 'undefined';
  return class Apollo extends React.Component<any> {
    public static displayName = 'withApollo(App)';
    public static async getInitialProps(ctx: NextAppContext) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.hasOwnProperty('getInitialProps')) {
        // @ts-ignore
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (!isBrowser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }
    public apolloClient: ApolloClient<any> = initApollo(this.props.apolloState);

    public render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
