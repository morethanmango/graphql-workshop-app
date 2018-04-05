import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import { GetMovies } from '../queries'
import { MovieCard } from '../components'

const Home = () => (
  <div>
    <Query query={GetMovies}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error loading movies</div>

        return (
          <div className="columns is-multiline">
            {
              data.movies.map(movie => (
                <div key={movie.id} className="column is-one-third">
                  <Link to={`/movies/${movie.id}`}>
                    <MovieCard movie={movie} />
                  </Link>
                </div>
              ))
            }
          </div>
        )
      }}
    </Query>
  </div>
)

export default Home