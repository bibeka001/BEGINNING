import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [], selectedContact: {} }
    }
    getSelectedContact = (contact) => {
        console.log(contact);
        this.setState({ selectedContact: contact })
    }
    componentDidMount() {
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch()
    }
    render() {
        return (
            <>
                <pre>{JSON.stringify(this.state)}</pre>
                <h4>Contact App</h4>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            {
                                this.state.contacts.length > 0 ? <><ContactList contacts={this.state.contacts} selContact={this.getSelectedContact} />
                                </> : null
                            }
                        </div>
                        <div className="col-md-4">
                            {
                                Object.keys(this.state.selectedContact).length > 0 ? <> <ContactDetails details={this.props.selectedContact} /></> : null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    };
};
export default ContactApp;

























// import React, { Component } from "react";
// import ContactList from "../PsaContact/ContactList";
// import ContactDetails from "../PsaContact/ContactDetails"
// import Axios from "axios";
// class ContactApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: [],
//       selectedContact: {},
//     };
//   }

//   userSelectedContact = (contact) => {
//     console.log(contact.name.first);
//     this.setState({ selectedContact: contact });
//   }; 
//   userSelectedContact = (contact) => {
//     console.log(contact.name.first);
//     this.setState({ selectedContact: contact });
//   };
//   componentDidMount() {
//     let url =
//       "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
//     Axios.get(url)
//       .catch((response) => {
//         this.setState({ contacts: response.data });
//       })
//       .then((err) => {
//         console.log(err);
//       });
//   }
//   render() {
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8">
//               <ContactList
//                 rajni={this.state.contacts}
//                 methodOne={this.userSelectedContact}
//               />
//             </div>
//           </div>
//           <div className="col-md-4">
//             {/*Coontact Details Component */}
//             {Object.keys(this.state.selectedContact).length > 0 ? (
//               <>
//                 <ContactDetails
//                   userSelectedContact={this.state.selectedContact}
//                 />
//               </>
//             ) : null}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default ContactApp;
