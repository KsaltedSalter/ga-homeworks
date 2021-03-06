import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleWine } from '../../lib/api'

const WineShow = () => {
  const { id } = useParams()
  const [state, setState] = React.useState({ wine: null })

  const getSingleWineFromApi = async () => {
    try {
      const res = await getSingleWine(id)
      setState({ wine: res.data })
    } catch (err) {
      console.error(`error fetching single wine ${id}`, err)
    }
  }

  React.useEffect(() => {
    getSingleWineFromApi()
  }, [])

  if (state.wine === null) {
    return <p>Loading</p>
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{state.wine.name}</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <figure className="image is-1by1">
              <img src={state.wine.image} alt={state.wine.name} />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label="glass">
                🍷
              </span>{' '}
              Tasting Notes
            </h4>
            <hr />
            <p>{state.wine.tastingNotes}</p>
            <hr />
            <h4 className="title is-4">
              {' '}
              <span role="img" aria-label="globe">
                🌎
              </span>{' '}
              Origin
            </h4>
            <p>{state.wine.origin}</p>
            <hr />
            <h4 className="title is-4">
              <span role="img" aria-label="emoji-sunglasses">
                😎
              </span>{' '}
              Added by
            </h4>
            <p>{state.wine.user.username}</p>
            <hr />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WineShow
