/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTask = /* GraphQL */ `subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
  onCreateTask(filter: $filter) {
    id
    logo
    name
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTaskSubscriptionVariables,
  APITypes.OnCreateTaskSubscription
>;
export const onUpdateTask = /* GraphQL */ `subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
  onUpdateTask(filter: $filter) {
    id
    logo
    name
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTaskSubscriptionVariables,
  APITypes.OnUpdateTaskSubscription
>;
export const onDeleteTask = /* GraphQL */ `subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
  onDeleteTask(filter: $filter) {
    id
    logo
    name
    description
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTaskSubscriptionVariables,
  APITypes.OnDeleteTaskSubscription
>;
export const onCreateCustomers = /* GraphQL */ `subscription OnCreateCustomers($filter: ModelSubscriptionCustomersFilterInput) {
  onCreateCustomers(filter: $filter) {
    id
    logo
    name
    adress
    phone_number
    email
    VAT
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomersSubscriptionVariables,
  APITypes.OnCreateCustomersSubscription
>;
export const onUpdateCustomers = /* GraphQL */ `subscription OnUpdateCustomers($filter: ModelSubscriptionCustomersFilterInput) {
  onUpdateCustomers(filter: $filter) {
    id
    logo
    name
    adress
    phone_number
    email
    VAT
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomersSubscriptionVariables,
  APITypes.OnUpdateCustomersSubscription
>;
export const onDeleteCustomers = /* GraphQL */ `subscription OnDeleteCustomers($filter: ModelSubscriptionCustomersFilterInput) {
  onDeleteCustomers(filter: $filter) {
    id
    logo
    name
    adress
    phone_number
    email
    VAT
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomersSubscriptionVariables,
  APITypes.OnDeleteCustomersSubscription
>;
