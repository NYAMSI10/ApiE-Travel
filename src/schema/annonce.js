
import gql from 'graphql-tag'

export const annonceSchema = gql`
    
    
    type Annonce{
        id         : ID!          
        title       :String!
        description :String!        
        startcity   :String!
        startend    :String!
        hourstart   :String!
        hourend     :String!
        datedepart  :String!      
        placedispo  :Int!
        price       :Float!
        user: User!
        images: [Image]!

    }



    input NewAnnonce{
        title       :String!
        description :String!
        startcity   :String!
        startend    :String!
        hourstart   :String!
        hourend     :String!
        datedepart  :String!
        placedispo  :Int!
        price       :Float!,
        images : String!,
        userId: Int

    }

   

    type Query{
        getAnnonce: [Annonce]!
        getAnnonceById(id: Int): Annonce!
        

    }

    type Mutation{
       addAnnonce(newAnnonce: NewAnnonce):Annonce

    }
`



