import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      token
      userId
      role
    }
  }
`;

export const REGISTER = gql`
  mutation Register($payload: RegisterInput) {
    Register(payload: $payload) {
      _id
      name
      imageUrl
      email
      password
      role
      Coach {
        _id
        name
        sport
        Users {
          _id
          name
          imageUrl
          email
          password
          role
        }
        locationId
        email
        imgUrl
      }
    }
  }
`;

export const GET_PROFILE_USER = gql`
  query GetUserById {
    getUserById {
      _id
      name
      imageUrl
      email
      status
      password
      role
      Coach {
        _id
        name
        sport
        Users {
          _id
          name
          imageUrl
          email
          status
          password
          role
        }
        locationId
        email
        imgUrl
      }
    }
  }
`;

export const GET_ALL_CATEGORY = gql`
  query GetAllCategory {
    getAllCategory {
      _id
      name
      logo
    }
  }
`;

export const GET_ALL_LOCATION = gql`
query GetAllLocation {
  getAllLocation {
    _id
    name
    Coachs {
      _id
      name
      sport
      Users {
        _id
        name
        imageUrl
        email
        status
        password
        role
        Coach {
          _id
          name
          sport
          locationId
          email
          imgUrl
        }
        Schedules {
          _id
          sport
          duration
          decription
          CategoryId
        }
      }
      locationId
      email
      imgUrl
    }
    CategoryId
    Category {
      _id
      name
      logo
    }
    imageUrl
    longitude
    latitude
    address
  }
}`