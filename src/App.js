import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Overview from "./components/Overview";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: true,
            general: {
                fname: "Sean",
                lname: "Roberts",
                email: "test@gmail",
                phonenum: "1252223333",
            },
            education: {
                0: {
                    id: 0,
                    school: "",
                    program: "",
                    edStartYear: "",
                    edEndYear: "",
                },
            },
            work: {
                0: {
                    id: 0,
                    company: "",
                    jobTitle: "",
                    jobDescription: "",
                    jobStartYear: "",
                    jobEndYear: "",
                },
            },
        };

        this.handleInput = this.handleInput.bind(this);
        this.addEducationItem = this.addEducationItem.bind(this);
        this.removeEducationWorkItem = this.removeEducationWorkItem.bind(this);
    }

    handleInput(e, area, id) {
        if (area === "general") {
            this.setState((prevState) => ({
                [area]: {
                    ...prevState.general,
                    [e.target.id]: e.target.value,
                },
            }));
        } else if (area === "education" || area === "work") {
            this.setState((prevState) => ({
                [area]: {
                    ...prevState[area],
                    [id]: {
                        ...prevState[area][id],
                        [e.target.id]: e.target.value,
                    },
                },
            }));
        }
    }

    addEducationItem() {
        let stateArray = Object.keys(this.state.education);
        let newID = parseInt(stateArray[stateArray.length - 1]) + 1;

        this.setState((prevState) => ({
            education: {
                ...prevState.education,
                [newID]: {
                    id: newID,
                    school: "",
                    program: "",
                    edStartYear: "",
                    edEndYear: "",
                },
            },
        }));
    }

    removeEducationWorkItem(itemID, area) {
        let stateArray = Object.entries(this.state[area]);
        let newState = Object.fromEntries(
            stateArray.filter((item, i) => item[1].id !== itemID)
        );

        this.setState(() => ({
            [area]: {
                ...newState,
            },
        }));
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.state.isEdit ? (
                        <Form
                            data={this.state}
                            handleInput={this.handleInput}
                            addEducationItem={this.addEducationItem}
                            removeEducationWorkItem={this.removeEducationWorkItem}
                        />
                    ) : (
                        <Overview />
                    )}
                </main>
            </div>
        );
    }
}
