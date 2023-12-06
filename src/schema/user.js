
import gql from 'graphql-tag'

export const userSchema = gql`
    type User{
        id: ID!
        name  :      String!
        email  :     String!
        adresse :    String
        ville  :     String
        codepostal : String
        phone     :  String!
        avatar   :   String
        password  :  String!
        role    :    Role!
        annonce : [Annonce]!
    }

    type AuthPayload{
        user: User
        token: String
    }


    input NewUser{
        name  :      String!
        email  :     String!
        phone     :  String!
        password  :  String!
        role    :    Role!
    }

    input UpdateUser{
        name  :      String!
        email  :     String!
        adresse :    String
        ville  :     String
        codepostal : String
        phone     :  String!
        avatar   :   String
        password  :  String
    }

    enum Role{
        ADMIN,
        USER,
        AGENCE
    }

    type Query{
        getUser: [User]!

    }

    type Mutation{
        registreUser(newUser: NewUser): User
        login(email: String, password: String):AuthPayload
        updateUser(id: Int,updateUser: UpdateUser): User
        deleteUser(id: Int): String

    }
`