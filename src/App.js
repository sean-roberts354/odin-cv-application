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
                    isCurrent: false,
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
                    isCurrent: false,
                },
            },
        };

        this.handleInput = this.handleInput.bind(this);
        this.markItemCurrent = this.markItemCurrent.bind(this);
        this.addEducationItem = this.addEducationItem.bind(this);
        this.addWorkItem = this.addWorkItem.bind(this);
        this.removeEducationWorkItem = this.removeEducationWorkItem.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
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

    markItemCurrent(itemID, area) {
        this.setState((prevState) => ({
            [area]: {
                ...prevState[area],
                [itemID]: {
                    ...prevState[area][itemID],
                    isCurrent: !prevState[area][itemID].isCurrent,
                },
            },
        }));
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
                    isCurrent: false,
                },
            },
        }));
    }

    addWorkItem() {
        let stateArray = Object.keys(this.state.work);
        let newID = parseInt(stateArray[stateArray.length - 1]) + 1;

        this.setState((prevState) => ({
            work: {
                ...prevState.work,
                [newID]: {
                    id: newID,
                    company: "",
                    jobTitle: "",
                    jobDescription: "",
                    jobStartYear: "",
                    jobEndYear: "",
                    isCurrent: false,
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

    toggleEdit() {
        this.setState((prevState) => ({
            isEdit: !prevState.isEdit,
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
                            markItemCurrent={this.markItemCurrent}
                            addEducationItem={this.addEducationItem}
                            addWorkItem={this.addWorkItem}
                            removeEducationWorkItem={
                                this.removeEducationWorkItem
                            }
                            toggleEdit={this.toggleEdit}
                        />
                    ) : (
                        <Overview toggleEdit={this.toggleEdit} />
                    )}
                </main>
            </div>
        );
    }
}
