import React from "react";

export default class Education extends React.Component {
    render() {
        const education = Object.values(this.props.data);
        const area = "education";

        return (
            <fieldset className="education-info">
                <legend>Education</legend>
                {education.map((item) => {
                    return (
                        <div key={`ed${item.id}`} className="education-item">
                            <label htmlFor="school">
                                School:
                                <input
                                    type="text"
                                    id="school"
                                    value={item.school}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <label htmlFor="program">
                                Program:
                                <input
                                    type="text"
                                    id="program"
                                    value={item.program}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <label htmlFor="edStartYear">
                                Start Year:
                                <input
                                    type="text"
                                    id="edStartYear"
                                    value={item.edStartYear}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <label htmlFor="edEndYear">
                                End Year:
                                <input
                                    type="text"
                                    id="edEndYear"
                                    value={item.edEndYear}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <button
                                type="button"
                                onClick={() =>
                                    this.props.removeEducationItem(item.id)
                                }
                            >
                                Remove Education
                            </button>
                        </div>
                    );
                })}
                <button
                    type="button"
                    onClick={() => this.props.addEducationItem()}
                >
                    Add Education
                </button>
            </fieldset>
        );
    }
}
