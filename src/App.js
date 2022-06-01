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
                    startYear: "",
                    endYear: "",
                },
            },
            work: {
                0: {
                    id: 0,
                    company: "",
                    title: "",
                    description: "",
                    startYear: "",
                    endYear: "",
                },
            },
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e, area, id) {
        if (area === "general") {
            this.setState(prevState => ({
                [area]: {
                    ...prevState.general,
                    [e.target.id]: e.target.value,
                },
            }));
        } else if (area === "education" || area === "work") {
            this.setState(prevState => ({
                [area]: {
                    ...prevState[area],
                    [id]: {
                        ...prevState[area][id],
                        [e.target.id]: e.target.value,
                    }
                }
            }))
        }
        
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <Header />
                <main>
                    {this.state.isEdit ? (
                        <Form data={this.state} handleInput={this.handleInput}/>
                    ) : (
                        <Overview />
                    )}
                </main>
            </div>
        );
    }
}
