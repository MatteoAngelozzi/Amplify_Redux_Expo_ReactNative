/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePropertiesInput = {
  id?: string | null,
  name?: string | null,
  logo?: string | null,
  photo?: string | null,
  tasks?: Array< TasksInput | null > | null,
  clientsID: string,
};

export type TasksInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  due_date?: string | null,
  media?: Array< string | null > | null,
};

export type ModelPropertiesConditionInput = {
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  clientsID?: ModelIDInput | null,
  and?: Array< ModelPropertiesConditionInput | null > | null,
  or?: Array< ModelPropertiesConditionInput | null > | null,
  not?: ModelPropertiesConditionInput | null,
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

export type Properties = {
  __typename: "Properties",
  id: string,
  name?: string | null,
  logo?: string | null,
  photo?: string | null,
  tasks?:  Array<Tasks | null > | null,
  clientsID: string,
  createdAt: string,
  updatedAt: string,
};

export type Tasks = {
  __typename: "Tasks",
  id: string,
  title?: string | null,
  description?: string | null,
  due_date?: string | null,
  media?: Array< string | null > | null,
};

export type UpdatePropertiesInput = {
  id: string,
  name?: string | null,
  logo?: string | null,
  photo?: string | null,
  tasks?: Array< TasksInput | null > | null,
  clientsID?: string | null,
};

export type DeletePropertiesInput = {
  id: string,
};

export type CreateClientsInput = {
  id?: string | null,
  name?: string | null,
  address?: string | null,
  phone_number?: string | null,
  email?: string | null,
  avatar?: string | null,
};

export type ModelClientsConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelClientsConditionInput | null > | null,
  or?: Array< ModelClientsConditionInput | null > | null,
  not?: ModelClientsConditionInput | null,
};

export type Clients = {
  __typename: "Clients",
  id: string,
  name?: string | null,
  address?: string | null,
  phone_number?: string | null,
  email?: string | null,
  avatar?: string | null,
  Properties?: ModelPropertiesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPropertiesConnection = {
  __typename: "ModelPropertiesConnection",
  items:  Array<Properties | null >,
  nextToken?: string | null,
};

export type UpdateClientsInput = {
  id: string,
  name?: string | null,
  address?: string | null,
  phone_number?: string | null,
  email?: string | null,
  avatar?: string | null,
};

export type DeleteClientsInput = {
  id: string,
};

export type ModelPropertiesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  photo?: ModelStringInput | null,
  clientsID?: ModelIDInput | null,
  and?: Array< ModelPropertiesFilterInput | null > | null,
  or?: Array< ModelPropertiesFilterInput | null > | null,
  not?: ModelPropertiesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelClientsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelClientsFilterInput | null > | null,
  or?: Array< ModelClientsFilterInput | null > | null,
  not?: ModelClientsFilterInput | null,
};

export type ModelClientsConnection = {
  __typename: "ModelClientsConnection",
  items:  Array<Clients | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPropertiesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  photo?: ModelSubscriptionStringInput | null,
  clientsID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPropertiesFilterInput | null > | null,
  or?: Array< ModelSubscriptionPropertiesFilterInput | null > | null,
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

export type ModelSubscriptionClientsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientsFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientsFilterInput | null > | null,
};

export type CreatePropertiesMutationVariables = {
  input: CreatePropertiesInput,
  condition?: ModelPropertiesConditionInput | null,
};

export type CreatePropertiesMutation = {
  createProperties?:  {
    __typename: "Properties",
    id: string,
    name?: string | null,
    logo?: string | null,
    photo?: string | null,
    tasks?:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      media?: Array< string | null > | null,
    } | null > | null,
    clientsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePropertiesMutationVariables = {
  input: UpdatePropertiesInput,
  condition?: ModelPropertiesConditionInput | null,
};

export type UpdatePropertiesMutation = {
  updateProperties?:  {
    __typename: "Properties",
    id: string,
    name?: string | null,
    logo?: string | null,
    photo?: string | null,
    tasks?:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      media?: Array< string | null > | null,
    } | null > | null,
    clientsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePropertiesMutationVariables = {
  input: DeletePropertiesInput,
  condition?: ModelPropertiesConditionInput | null,
};

export type DeletePropertiesMutation = {
  deleteProperties?:  {
    __typename: "Properties",
    id: string,
    name?: string | null,
    logo?: string | null,
    photo?: string | null,
    tasks?:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      media?: Array< string | null > | null,
    } | null > | null,
    clientsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateClientsMutationVariables = {
  input: CreateClientsInput,
  condition?: ModelClientsConditionInput | null,
};

export type CreateClientsMutation = {
  createClients?:  {
    __typename: "Clients",
    id: string,
    name?: string | null,
    address?: string | null,
    phone_number?: string | null,
    email?: string | null,
    avatar?: string | null,
    Properties?:  {
      __typename: "ModelPropertiesConnection",
      items:  Array< {
        __typename: "Properties",
        id: string,
        name?: string | null,
        logo?: string | null,
        photo?: string | null,
        tasks?:  Array< {
          __typename: "Tasks",
          id: string,
          title?: string | null,
          description?: string | null,
          due_date?: string | null,
          media?: Array< string | null > | null,
        } | null > | null,
        clientsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateClientsMutationVariables = {
  input: UpdateClientsInput,
  condition?: ModelClientsConditionInput | null,
};

export type UpdateClientsMutation = {
  updateClients?:  {
    __typename: "Clients",
    id: string,
    name?: string | null,
    address?: string | null,
    phone_number?: string | null,
    email?: string | null,
    avatar?: string | null,
    Properties?:  {
      __typename: "ModelPropertiesConnection",
      items:  Array< {
        __typename: "Properties",
        id: string,
        name?: string | null,
        logo?: string | null,
        photo?: string | null,
        tasks?:  Array< {
          __typename: "Tasks",
          id: string,
          title?: string | null,
          description?: string | null,
          due_date?: string | null,
          media?: Array< string | null > | null,
        } | null > | null,
        clientsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteClientsMutationVariables = {
  input: DeleteClientsInput,
  condition?: ModelClientsConditionInput | null,
};

export type DeleteClientsMutation = {
  deleteClients?:  {
    __typename: "Clients",
    id: string,
    name?: string | null,
    address?: string | null,
    phone_number?: string | null,
    email?: string | null,
    avatar?: string | null,
    Properties?:  {
      __typename: "ModelPropertiesConnection",
      items:  Array< {
        __typename: "Properties",
        id: string,
        name?: string | null,
        logo?: string | null,
        photo?: string | null,
        tasks?:  Array< {
          __typename: "Tasks",
          id: string,
          title?: string | null,
          description?: string | null,
          due_date?: string | null,
          media?: Array< string | null > | null,
        } | null > | null,
        clientsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPropertiesQueryVariables = {
  id: string,
};

export type GetPropertiesQuery = {
  getProperties?:  {
    __typename: "Properties",
    id: string,
    name?: string | null,
    logo?: string | null,
    photo?: string | null,
    tasks?:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      media?: Array< string | null > | null,
    } | null > | null,
    clientsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPropertiesQuery = {
  listProperties?:  {
    __typename: "ModelPropertiesConnection",
    items:  Array< {
      __typename: "Properties",
      id: string,
      name?: string | null,
      logo?: string | null,
      photo?: string | null,
      tasks?:  Array< {
        __typename: "Tasks",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        media?: Array< string | null > | null,
      } | null > | null,
      clientsID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PropertiesByClientsIDQueryVariables = {
  clientsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPropertiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PropertiesByClientsIDQuery = {
  propertiesByClientsID?:  {
    __typename: "ModelPropertiesConnection",
    items:  Array< {
      __typename: "Properties",
      id: string,
      name?: string | null,
      logo?: string | null,
      photo?: string | null,
      tasks?:  Array< {
        __typename: "Tasks",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        media?: Array< string | null > | null,
      } | null > | null,
      clientsID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClientsQueryVariables = {
  id: string,
};

export type GetClientsQuery = {
  getClients?:  {
    __typename: "Clients",
    id: string,
    name?: string | null,
    address?: string | null,
    phone_number?: string | null,
    email?: string | null,
    avatar?: string | null,
    Properties?:  {
      __typename: "ModelPropertiesConnection",
      items:  Array< {
        __typename: "Properties",
        id: string,
        name?: string | null,
        logo?: string | null,
        photo?: string | null,
        tasks?:  Array< {
          __typename: "Tasks",
          id: string,
          title?: string | null,
          description?: string | null,
          due_date?: string | null,
          media?: Array< string | null > | null,
        } | null > | null,
        clientsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientsConnection",
    items:  Array< {
      __typename: "Clients",
      id: string,
      name?: string | null,
      address?: string | null,
      phone_number?: string | null,
      email?: string | null,
      avatar?: string | null,
      Properties?:  {
        __typename: "ModelPropertiesConnection",
        items:  Array< {
          __typename: "Properties",
          id: string,
          name?: string | null,
          logo?: string | null,
          photo?: string | null,
          tasks?:  Array< {
            __typename: "Tasks",
            id: string,
            title?: string | null,
            description?: string | null,
            due_date?: string | null,
            media?: Array< string | null > | null,
          } | null > | null,
          clientsID: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionPropertiesFilterInput | null,
};

export type OnCreatePropertiesSubscription = {
  onCreateProperties?:  {
    __typename: "Properties",
    id: string,
    name?: string | null,
    logo?: string | null,
    photo?: string | null,
    tasks?:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      media?: Array< string | null > | null,
    } | null > | null,
    clientsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionPropertiesFilterInput | null,
};

export type OnUpdatePropertiesSubscription = {
  onUpdateProperties?:  {
    __typename: "Properties",
    id: string,
    name?: string | null,
    logo?: string | null,
    photo?: string | null,
    tasks?:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      media?: Array< string | null > | null,
    } | null > | null,
    clientsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionPropertiesFilterInput | null,
};

export type OnDeletePropertiesSubscription = {
  onDeleteProperties?:  {
    __typename: "Properties",
    id: string,
    name?: string | null,
    logo?: string | null,
    photo?: string | null,
    tasks?:  Array< {
      __typename: "Tasks",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      media?: Array< string | null > | null,
    } | null > | null,
    clientsID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateClientsSubscriptionVariables = {
  filter?: ModelSubscriptionClientsFilterInput | null,
};

export type OnCreateClientsSubscription = {
  onCreateClients?:  {
    __typename: "Clients",
    id: string,
    name?: string | null,
    address?: string | null,
    phone_number?: string | null,
    email?: string | null,
    avatar?: string | null,
    Properties?:  {
      __typename: "ModelPropertiesConnection",
      items:  Array< {
        __typename: "Properties",
        id: string,
        name?: string | null,
        logo?: string | null,
        photo?: string | null,
        tasks?:  Array< {
          __typename: "Tasks",
          id: string,
          title?: string | null,
          description?: string | null,
          due_date?: string | null,
          media?: Array< string | null > | null,
        } | null > | null,
        clientsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateClientsSubscriptionVariables = {
  filter?: ModelSubscriptionClientsFilterInput | null,
};

export type OnUpdateClientsSubscription = {
  onUpdateClients?:  {
    __typename: "Clients",
    id: string,
    name?: string | null,
    address?: string | null,
    phone_number?: string | null,
    email?: string | null,
    avatar?: string | null,
    Properties?:  {
      __typename: "ModelPropertiesConnection",
      items:  Array< {
        __typename: "Properties",
        id: string,
        name?: string | null,
        logo?: string | null,
        photo?: string | null,
        tasks?:  Array< {
          __typename: "Tasks",
          id: string,
          title?: string | null,
          description?: string | null,
          due_date?: string | null,
          media?: Array< string | null > | null,
        } | null > | null,
        clientsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteClientsSubscriptionVariables = {
  filter?: ModelSubscriptionClientsFilterInput | null,
};

export type OnDeleteClientsSubscription = {
  onDeleteClients?:  {
    __typename: "Clients",
    id: string,
    name?: string | null,
    address?: string | null,
    phone_number?: string | null,
    email?: string | null,
    avatar?: string | null,
    Properties?:  {
      __typename: "ModelPropertiesConnection",
      items:  Array< {
        __typename: "Properties",
        id: string,
        name?: string | null,
        logo?: string | null,
        photo?: string | null,
        tasks?:  Array< {
          __typename: "Tasks",
          id: string,
          title?: string | null,
          description?: string | null,
          due_date?: string | null,
          media?: Array< string | null > | null,
        } | null > | null,
        clientsID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
