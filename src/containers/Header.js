import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Box  from 'grommet/components/Box'
import Heading  from 'grommet/components/Heading'
import Tabs  from 'grommet/components/Tabs'
import Tab  from 'grommet/components/Tab'

import * as actions from '../actions'

class Header extends Component {
  render () {
    return (
      <Box align="center">
        <Heading align="center">Act of Reinstating Independence of Lithuania</Heading>
        <h3>on Ethereum Blockchain &amp; Interplanetary File System</h3>
        <Tabs>
          <Tab title="Home">
            <Redirect to='/home' />
          </Tab>
        </Tabs>
      </Box>
    )
  }
}

function mapStateToProps(state) {
  return {
    web3: state.web3,
    account: state.account
  }
}

export default connect(mapStateToProps, actions)(Header)
