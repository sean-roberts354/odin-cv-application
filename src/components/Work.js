import React from "react";

export default class Work extends React.Component {
    render() {
        const work = Object.values(this.props.data);
        const area = "work";

        return (
            <fieldset className="work-info">
                <legend>Work Information</legend>
                {work.map((item) => {
                    return (
                        <div key={`job${item.id}`} className="work-item">
                            <label htmlFor="company">
                                Company:
                                <input
                                    type="text"
                                    id="company"
                                    value={item.company}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <label htmlFor="title">
                                Job Title:
                                <input
                                    type="text"
                                    id="jobTitle"
                                    value={item.jobTitle}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <label htmlFor="description">
                                Job Description:
                                <textarea
                                    id="jobDescription"
                                    value={item.jobDescription}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <label htmlFor="jobStartYear">
                                Start Date:
                                <input
                                    type="date"
                                    id="jobStartYear"
                                    value={item.jobStartYear}
                                    onChange={(e) => {
                                        this.props.handleInput(
                                            e,
                                            area,
                                            item.id
                                        );
                                    }}
                                />
                            </label>
                            <div>
                                <label htmlFor="jobEndYear">
                                    End Date:
                                    {item.isCurrent ? (
                                        <input
                                            type="date"
                                            id="jobEndYear"
                                            value={item.jobEndYear}
                                            disabled
                                        />
                                    ) : (
                                        <input
                                            type="date"
                                            id="jobEndYear"
                                            value={item.jobEndYear}
                                            onChange={(e) => {
                                                this.props.handleInput(
                                                    e,
                                                    area,
                                                    item.id
                                                );
                                            }}
                                        />
                                    )}
                                </label>
                                <label htmlFor="isCurrent">
                                    <input
                                        type="checkbox"
                                        id="isCurrent"
                                        value={item.isCurrent}
                                        onChange={() => {
                                            this.props.markItemCurrent(
                                                item.id,
                                                area
                                            );
                                        }}
                                    />
                                    Current?
                                </label>
                            </div>
                            <button
                                type="button"
                                onClick={() =>
                                    this.props.removeWorkItem(item.id, area)
                                }
                            >
                                Remove Work
                            </button>
                        </div>
                    );
                })}
                <button type="button" onClick={() => this.props.addWorkItem()}>
                    Add Work
                </button>
            </fieldset>
        );
    }
}
