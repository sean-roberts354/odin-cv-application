import React from 'react';

export default class Overview extends React.Component {

      render() {
            return (
                  <div>
                        <h2>Overview</h2>
                        <button type="button" onClick={this.props.toggleEdit}>
                        Make Changes
                    </button>
                  </div>
            )
      }
}