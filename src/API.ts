/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  logo?: string | null,
  name?: string | null,
  description?: string | null,
  status?: Status | null,
};

export enum Status {
  TO_BE_DEFINED = "TO_BE_DEFINED",
  IDLE = "IDLE",
  ONGOING = "ONGOING",
  DONE = "DONE",
  CANCELLED = "CANCELLED",
  DELAY = "DELAY",
}


export type ModelTaskConditionInput = {
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  logo?: string | null,
  name?: string | null,
  description?: string | null,
  status?: Status | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTaskInput = {
  id: string,
  logo?: string | null,
  name?: string | null,
  description?: string | null,
  status?: Status | null,
};

export type DeleteTaskInput = {
  id: string,
};

export type CreateCustomersInput = {
  id?: string | null,
  logo?: string | null,
  name?: string | null,
  adress?: string | null,
  phone_number?: string | null,
  email?: string | null,
  VAT?: string | null,
  description?: string | null,
};

export type ModelCustomersConditionInput = {
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  adress?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  VAT?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCustomersConditionInput | null > | null,
  or?: Array< ModelCustomersConditionInput | null > | null,
  not?: ModelCustomersConditionInput | null,
};

export type Customers = {
  __typename: "Customers",
  id: string,
  logo?: string | null,
  name?: string | null,
  adress?: string | null,
  phone_number?: string | null,
  email?: string | null,
  VAT?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCustomersInput = {
  id: string,
  logo?: string | null,
  name?: string | null,
  adress?: string | null,
  phone_number?: string | null,
  email?: string | null,
  VAT?: string | null,
  description?: string | null,
};

export type DeleteCustomersInput = {
  id: string,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
};

export type ModelCustomersFilterInput = {
  id?: ModelIDInput | null,
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  adress?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  VAT?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCustomersFilterInput | null > | null,
  or?: Array< ModelCustomersFilterInput | null > | null,
  not?: ModelCustomersFilterInput | null,
};

export type ModelCustomersConnection = {
  __typename: "ModelCustomersConnection",
  items:  Array<Customers | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  logo?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCustomersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  logo?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  adress?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  VAT?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomersFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomersFilterInput | null > | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    logo?: string | null,
    name?: string | null,
    description?: string | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    logo?: string | null,
    name?: string | null,
    description?: string | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    logo?: string | null,
    name?: string | null,
    description?: string | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomersMutationVariables = {
  input: CreateCustomersInput,
  condition?: ModelCustomersConditionInput | null,
};

export type CreateCustomersMutation = {
  createCustomers?:  {
    __typename: "Customers",
    id: string,
    logo?: string | null,
    name?: string | null,
    adress?: string | null,
    phone_number?: string | null,
    email?: string | null,
    VAT?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomersMutationVariables = {
  input: UpdateCustomersInput,
  condition?: ModelCustomersConditionInput | null,
};

export type UpdateCustomersMutation = {
  updateCustomers?:  {
    __typename: "Customers",
    id: string,
    logo?: string | null,
    name?: string | null,
    adress?: string | null,
    phone_number?: string | null,
    email?: string | null,
    VAT?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomersMutationVariables = {
  input: DeleteCustomersInput,
  condition?: ModelCustomersConditionInput | null,
};

export type DeleteCustomersMutation = {
  deleteCustomers?:  {
    __typename: "Customers",
    id: string,
    logo?: string | null,
    name?: string | null,
    adress?: string | null,
    phone_number?: string | null,
    email?: string | null,
    VAT?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    logo?: string | null,
    name?: string | null,
    description?: string | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      logo?: string | null,
      name?: string | null,
      description?: string | null,
      status?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomersQueryVariables = {
  id: string,
};

export type GetCustomersQuery = {
  getCustomers?:  {
    __typename: "Customers",
    id: string,
    logo?: string | null,
    name?: string | null,
    adress?: string | null,
    phone_number?: string | null,
    email?: string | null,
    VAT?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomersConnection",
    items:  Array< {
      __typename: "Customers",
      id: string,
      logo?: string | null,
      name?: string | null,
      adress?: string | null,
      phone_number?: string | null,
      email?: string | null,
      VAT?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    logo?: string | null,
    name?: string | null,
    description?: string | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    logo?: string | null,
    name?: string | null,
    description?: string | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    logo?: string | null,
    name?: string | null,
    description?: string | null,
    status?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionCustomersFilterInput | null,
};

export type OnCreateCustomersSubscription = {
  onCreateCustomers?:  {
    __typename: "Customers",
    id: string,
    logo?: string | null,
    name?: string | null,
    adress?: string | null,
    phone_number?: string | null,
    email?: string | null,
    VAT?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionCustomersFilterInput | null,
};

export type OnUpdateCustomersSubscription = {
  onUpdateCustomers?:  {
    __typename: "Customers",
    id: string,
    logo?: string | null,
    name?: string | null,
    adress?: string | null,
    phone_number?: string | null,
    email?: string | null,
    VAT?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionCustomersFilterInput | null,
};

export type OnDeleteCustomersSubscription = {
  onDeleteCustomers?:  {
    __typename: "Customers",
    id: string,
    logo?: string | null,
    name?: string | null,
    adress?: string | null,
    phone_number?: string | null,
    email?: string | null,
    VAT?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
