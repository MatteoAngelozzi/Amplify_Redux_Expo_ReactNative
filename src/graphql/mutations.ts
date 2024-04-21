/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProperties = /* GraphQL */ `mutation CreateProperties(
  $input: CreatePropertiesInput!
  $condition: ModelPropertiesConditionInput
) {
  createProperties(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePropertiesMutationVariables,
  APITypes.CreatePropertiesMutation
>;
export const updateProperties = /* GraphQL */ `mutation UpdateProperties(
  $input: UpdatePropertiesInput!
  $condition: ModelPropertiesConditionInput
) {
  updateProperties(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePropertiesMutationVariables,
  APITypes.UpdatePropertiesMutation
>;
export const deleteProperties = /* GraphQL */ `mutation DeleteProperties(
  $input: DeletePropertiesInput!
  $condition: ModelPropertiesConditionInput
) {
  deleteProperties(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePropertiesMutationVariables,
  APITypes.DeletePropertiesMutation
>;
export const createClients = /* GraphQL */ `mutation CreateClients(
  $input: CreateClientsInput!
  $condition: ModelClientsConditionInput
) {
  createClients(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClientsMutationVariables,
  APITypes.CreateClientsMutation
>;
export const updateClients = /* GraphQL */ `mutation UpdateClients(
  $input: UpdateClientsInput!
  $condition: ModelClientsConditionInput
) {
  updateClients(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClientsMutationVariables,
  APITypes.UpdateClientsMutation
>;
export const deleteClients = /* GraphQL */ `mutation DeleteClients(
  $input: DeleteClientsInput!
  $condition: ModelClientsConditionInput
) {
  deleteClients(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClientsMutationVariables,
  APITypes.DeleteClientsMutation
>;
