
import gql from 'graphql-tag'

export const imageSchema = gql`
    type Image{
        id         : ID!
        name       :String!
        annonceId: Annonce!
    }
    
`



