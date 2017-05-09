// @flow

import React from 'react'
import { connect } from 'react-redux'

type Props = {
  score: number
}

const Score = (props: Props) =>
  <div>
    <p><strong>Flip Score:</strong> {props.score}</p>
  </div>


const mapStateToProps = state => ({
  score: state.flipScore,
})

export default connect(mapStateToProps)(Score)
