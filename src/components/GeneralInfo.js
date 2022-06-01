import React from "react";

export default class GeneralInfo extends React.Component {
    render() {
        return (
            <fieldset className="general-info">
                <legend>General Information</legend>

                <label htmlFor="fname">
                    First Name:
                    <input
                        type="text"
                        id="fname"
                        value={this.props.general.fname}
                        onChange={(e) => {
                            this.props.handleInput(e, "general", null);
                        }}
                    />
                </label>

                <label htmlFor="lname">
                    Last Name:
                    <input
                        type="text"
                        id="lname"
                        value={this.props.general.lname}
                        onChange={(e) => {
                            this.props.handleInput(e, "general", null);
                        }}
                    />
                </label>

                <label htmlFor="email">
                    Email Address:
                    <input
                        type="email"
                        id="email"
                        value={this.props.general.email}
                        onChange={(e) => {
                            this.props.handleInput(e, "general", null);
                        }}
                    />
                </label>

                <label htmlFor="phonenum">
                    Phone Number:
                    <input
                        type="text"
                        id="phonenum"
                        value={this.props.general.phonenum}
                        onChange={(e) => {
                            this.props.handleInput(e, "general", null);
                        }}
                    />
                </label>
            </fieldset>
        );
    }
}
