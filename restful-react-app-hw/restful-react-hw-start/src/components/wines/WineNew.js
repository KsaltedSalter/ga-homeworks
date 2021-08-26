/* eslint-disable comma-dangle */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { createWine } from '../../lib/api'

const WineNew = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    formData: {
      name: '',
      origin: '',
      tastingNotes: '',
      image: '',
      grape: '',
      abv: '',
      price: '',
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await createWine(state.formData)
      history.push(`/wines/${result.data._id}`)
    } catch (err) {
      console.error('error creating new wine', err)
    }
  }

  const handleChange = (e) => {
    const formData = {
      ...state.formData,
      [e.target.name]: e.target.value,
    }

    setState({ formData })
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter box"
          >
            <div className="field">
              <label className="label">
                <span role="img" aria-label="wine">
                  🍷{' '}
                </span>
                Name:
              </label>
              <div className="control">
                <input
                  className="input is-danger"
                  placeholder="Name"
                  name="name"
                  value={state.formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">
                <span role="img" aria-label="glass">
                  🥂{' '}
                </span>
                Tasting Notes:
              </label>
              <div className="control">
                <textarea
                  className="input is-danger"
                  placeholder="Tasting Notes..."
                  name="tastingNotes"
                  value={state.formData.tastingNotes}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">
                <span role="img" aria-label="globe">
                  🌎{' '}
                </span>
                Origin:
              </label>
              <div className="control">
                <input
                  className="input is-danger"
                  placeholder="Origin"
                  name="origin"
                  value={state.formData.origin}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">
                <span role="img" aria-label="grape">
                  🍇{' '}
                </span>
                Grape:
              </label>
              <div className="control">
                <input
                  className="input is-danger"
                  placeholder="Grape"
                  name="grape"
                  value={state.formData.grape}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">
                <span role="img" aria-label="beer">
                  🍺{' '}
                </span>
                ABV:
              </label>
              <div className="control">
                <input
                  className="input is-danger"
                  placeholder="ABV"
                  name="abv"
                  value={state.formData.abv}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">
                <span role="img" aria-label="money">
                  💰{' '}
                </span>
                Price:
              </label>
              <div className="control">
                <input
                  className="input is-danger"
                  placeholder="Price"
                  name="price"
                  value={state.formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">
                <span role="img" aria-label="picture">
                  🖼{' '}
                </span>
                Image:
              </label>
              <div className="control">
                <input
                  className="input is-danger"
                  placeholder="Image"
                  name="image"
                  value={state.formData.image}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <input
                className="button is-fullwidth is-danger"
                type="submit"
                value={`Add ${state.formData.name || 'New Wine'}`}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default WineNew
