import React from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Work from "./Work";

export default class Form extends React.Component {
    render() {
        return (
            <form>
                <GeneralInfo
                    general={this.props.data.general}
                    handleInput={this.props.handleInput}
                />
                <Education
                    data={this.props.data.education}
                    handleInput={this.props.handleInput}
                    markItemCurrent={this.props.markItemCurrent}
                    addEducationItem={this.props.addEducationItem}
                    removeEducationItem={this.props.removeEducationWorkItem}
                />
                <Work
                    data={this.props.data.work}
                    handleInput={this.props.handleInput}
                    markItemCurrent={this.props.markItemCurrent}
                    addWorkItem={this.props.addWorkItem}
                    removeWorkItem={this.props.removeEducationWorkItem}
                />
            </form>
        );
    }
}
