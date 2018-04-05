import React from 'react'
import { Query, Mutation } from 'react-apollo'

import { GetMovie, RateMovie } from '../queries'
import { Showings, Rating } from '../components'

const Movie = ({ match }) => (
  <div>
    <Query query={GetMovie} variables={{ id: match.params.id}}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error loading movie</div>
        const { movie } = data

        return (
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={movie.poster} alt={movie.title} />
              </figure>
            </div>
            <div className="column">
              <h1 className="title">{movie.title}</h1>
              <div className="subtitle is-6 has-text-grey">{movie.genre.join(', ')}</div>
              <div style={{marginTop: 20, marginBottom: 20}}>
                <Mutation mutation={RateMovie}>
                  {rateMovie =>
                    <Rating
                      initialRating={movie.rating}
                      onChange={rating => rateMovie({ variables: { id: movie.id, rating }})}
                    />
                  }
                </Mutation>
              </div>
              <div style={{marginTop: 20, marginBottom: 60}}>
                {movie.plot}
              </div>
              <div>
                <Showings showings={movie.showings}/>
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  </div>
)

export default Movie