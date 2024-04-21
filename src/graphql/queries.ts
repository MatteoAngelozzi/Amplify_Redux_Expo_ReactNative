/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProperties = /* GraphQL */ `query GetProperties($id: ID!) {
  getProperties(id: $id) {
    id
    name
    logo
    photo
    tasks {
      id
      title
      description
      due_date
      media
      __typename
    }
    clientsID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPropertiesQueryVariables,
  APITypes.GetPropertiesQuery
>;
export const listProperties = /* GraphQL */ `query ListProperties(
  $filter: ModelPropertiesFilterInput
  $limit: Int
  $nextToken: String
) {
  listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      logo
      photo
      tasks {
        id
        title
        description
        due_date
        media
        __typename
      }
      clientsID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPropertiesQueryVariables,
  APITypes.ListPropertiesQuery
>;
export const propertiesByClientsID = /* GraphQL */ `query PropertiesByClientsID(
  $clientsID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPropertiesFilterInput
  $limit: Int
  $nextToken: String
) {
  propertiesByClientsID(
    clientsID: $clientsID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      logo
      photo
      tasks {
        id
        title
        description
        due_date
        media
        __typename
      }
      clientsID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PropertiesByClientsIDQueryVariables,
  APITypes.PropertiesByClientsIDQuery
>;
export const getClients = /* GraphQL */ `query GetClients($id: ID!) {
  getClients(id: $id) {
    id
    name
    address
    phone_number
    email
    avatar
    Properties {
      items {
        id
        name
        logo
        photo
        tasks {
          id
          title
          description
          due_date
          media
          __typename
        }
        clientsID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetClientsQueryVariables,
  APITypes.GetClientsQuery
>;
export const listClients = /* GraphQL */ `query ListClients(
  $filter: ModelClientsFilterInput
  $limit: Int
  $nextToken: String
) {
  listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      address
      phone_number
      email
      avatar
      Properties {
        items {
          id
          name
          logo
          photo
          tasks {
            id
            title
            description
            due_date
            media
            __typename
          }
          clientsID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientsQueryVariables,
  APITypes.ListClientsQuery
>;
