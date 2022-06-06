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
                    title: "",
                    description: "",
                    jobStartYear: "",
                    jobEndYear: "",
                },
            },
        };

        this.handleInput = this.handleInput.bind(this);
        this.addEducationItem = this.addEducationItem.bind(this);
        this.removeEducationItem = this.removeEducationItem.bind(this);
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

    removeEducationItem(educationID) {
        let educationStateArray = Object.entries(this.state.education);
        let newEducationState = Object.fromEntries(
            educationStateArray.filter((item, i) => item[1].id !== educationID)
        );

        this.setState(() => ({
            education: {
                ...newEducationState,
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
                            removeEducationItem={this.removeEducationItem}
                        />
                    ) : (
                        <Overview />
                    )}
                </main>
            </div>
        );
    }
}
