import React, { Component } from "react"
import classnames from "classnames"
import { connect } from "react-redux"
import Actions from "actions/logger"
import WorldActions from "actions/world"

class SharePanel extends Component {
  constructor(props) {
    super(props)

    this.state = { collapsed: false }
  }

  share() {
    this.props.dispatch(Actions.share())
  }

  clear() {
    this.props.dispatch(WorldActions.clear())
  }

  render() {
    return (
      <div className={classnames("SidePanel", {"collapsed": this.state.collapsed})}>
        <div className="SidePanel-header">
          <span className="SidePanel-header-name">Share this Structure</span>
          <div onClick={() => this.setState({ collapsed: !this.state.collapsed })} className="SidePanel-header-arrow">
            {(() => {
              if (this.state.collapsed) return (<span>&larr;</span>)
              return (<span>&rarr;</span>)
            })()}
          </div>
        </div>
        <div className="SidePanel-content">
          <div>
            <p>Once you have built an interesting structure, please share it with the community!</p>
            <p>You can share as many structures as you want!</p>
            <br />
            <p><strong>Your score:</strong> {this.props.score}</p>
          </div>
          <button
            onClick={() => this.share()}
            className="active full"
            style={{borderRadius:"3px"}}>
            Share Now
          </button>
          <button
            onClick={() => this.clear()}
            className="active full red"
            style={{borderRadius:"3px"}}
          >
            Clear
          </button>
        </div>
      </div>
    )
  }
}

export default connect()(SharePanel)
