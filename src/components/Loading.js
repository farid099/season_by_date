import React from 'react'

export default function Loading(props) {
    return (
        <div>
  <div className="ui active dimmer">
    <div className="ui text loader">{props.loading_text}</div>
  </div>
  <p></p>
        </div>
    )
}

Loading.defaultProps = {
  loading_text : "Loading"
}
