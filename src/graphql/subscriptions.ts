/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProperties = /* GraphQL */ `subscription OnCreateProperties(
  $filter: ModelSubscriptionPropertiesFilterInput
) {
  onCreateProperties(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePropertiesSubscriptionVariables,
  APITypes.OnCreatePropertiesSubscription
>;
export const onUpdateProperties = /* GraphQL */ `subscription OnUpdateProperties(
  $filter: ModelSubscriptionPropertiesFilterInput
) {
  onUpdateProperties(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePropertiesSubscriptionVariables,
  APITypes.OnUpdatePropertiesSubscription
>;
export const onDeleteProperties = /* GraphQL */ `subscription OnDeleteProperties(
  $filter: ModelSubscriptionPropertiesFilterInput
) {
  onDeleteProperties(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePropertiesSubscriptionVariables,
  APITypes.OnDeletePropertiesSubscription
>;
export const onCreateClients = /* GraphQL */ `subscription OnCreateClients($filter: ModelSubscriptionClientsFilterInput) {
  onCreateClients(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateClientsSubscriptionVariables,
  APITypes.OnCreateClientsSubscription
>;
export const onUpdateClients = /* GraphQL */ `subscription OnUpdateClients($filter: ModelSubscriptionClientsFilterInput) {
  onUpdateClients(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateClientsSubscriptionVariables,
  APITypes.OnUpdateClientsSubscription
>;
export const onDeleteClients = /* GraphQL */ `subscription OnDeleteClients($filter: ModelSubscriptionClientsFilterInput) {
  onDeleteClients(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteClientsSubscriptionVariables,
  APITypes.OnDeleteClientsSubscription
>;
