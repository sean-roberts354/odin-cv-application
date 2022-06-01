import React from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';

export default class Form extends React.Component {
     

      render() {

            return (
                  <form>
                        <GeneralInfo general={this.props.data.general} handleInput={this.props.handleInput}/>
                        <Education data={this.props.data.education}/>
                  </form>
            )
      }
}