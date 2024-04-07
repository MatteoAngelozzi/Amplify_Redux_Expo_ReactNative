/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTask = /* GraphQL */ `mutation CreateTask(
  $input: CreateTaskInput!
  $condition: ModelTaskConditionInput
) {
  createTask(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTaskMutationVariables,
  APITypes.CreateTaskMutation
>;
export const updateTask = /* GraphQL */ `mutation UpdateTask(
  $input: UpdateTaskInput!
  $condition: ModelTaskConditionInput
) {
  updateTask(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTaskMutationVariables,
  APITypes.UpdateTaskMutation
>;
export const deleteTask = /* GraphQL */ `mutation DeleteTask(
  $input: DeleteTaskInput!
  $condition: ModelTaskConditionInput
) {
  deleteTask(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTaskMutationVariables,
  APITypes.DeleteTaskMutation
>;
export const createCustomers = /* GraphQL */ `mutation CreateCustomers(
  $input: CreateCustomersInput!
  $condition: ModelCustomersConditionInput
) {
  createCustomers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomersMutationVariables,
  APITypes.CreateCustomersMutation
>;
export const updateCustomers = /* GraphQL */ `mutation UpdateCustomers(
  $input: UpdateCustomersInput!
  $condition: ModelCustomersConditionInput
) {
  updateCustomers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomersMutationVariables,
  APITypes.UpdateCustomersMutation
>;
export const deleteCustomers = /* GraphQL */ `mutation DeleteCustomers(
  $input: DeleteCustomersInput!
  $condition: ModelCustomersConditionInput
) {
  deleteCustomers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomersMutationVariables,
  APITypes.DeleteCustomersMutation
>;
