import gql from 'graphql-tag'

/**
 * Movies Component: display current running movies
 */
export const GetMovies = gql`
  {
    movies {
      id
      title
      genre
      rating
      poster
    }
  }
`

/**
 * Movies Component: display current running movies
 */
export const GetMovie = gql`
  query getMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      year
      genre
      plot
      rating
      allRatings
      poster
      showings {
        id,
        cinema {
          id
          name
        }
        time
      }
    }
  }
`

export const RateMovie = gql`
  mutation rateMovie($id: ID! $rating: Float!) {
    rate(id: $id rating: $rating) {
      id
      rating
    }
  }
`