import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import AddressDataService from "../services/address.service";

export default class AddressList extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          contacts: [],
          currentContact: null,
          currentIndex: -1
        };
      }
    
    componentDidMount() {
        this.retrieveContacts();
    }

    retrieveContacts() {
        AddressDataService.getAll()
          .then(response => {
            this.setState({
              contacts: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            ReactDOM.render(<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>TutorialesAPI dice:</strong> No se ha podido conectar con la BBDD
              </div>, document.querySelector("div.list row"));
            console.log(e);
          });
      }

      setActiveContact(contact, index) {
        this.setState({
          currentContact: contact,
          currentIndex: index
        });
      }

    render() {
        const { contacts, currentContact, currentIndex } = this.state;
        return(
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts &&
                                contacts.map((contact, index) => (
                            <tr className={
                                (index === currentIndex ? "active" : "")
                            }
                                onClick={() => this.setActiveContact(contact, index)}
                                key={index}
                            >
                                <th scope="row">{index}</th>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                            </tr>
                ))} 
          </tbody>
          </table>
                </div>
            <div class="col-sm">
            {currentContact ? (
                <div>
                <h4>Contacto:</h4>
                <div>
                  <label>
                    <strong>Nombre:</strong>
                  </label>{" "}
                  {currentContact.firstName}
                </div>
                <div>
                  <label>
                    <strong>Apellidos:</strong>
                  </label>{" "}
                  {currentContact.lastName}
                </div>
                <div>
                  <label>
                    <strong>Direccion:</strong>
                  </label>{" "}
                  {currentContact.street}
                </div>
                <div>
                  <label>
                    <strong>Código postal:</strong>
                  </label>{" "}
                  {currentContact.postalCode}
                </div>
                <div>
                  <label>
                    <strong>Ciudad:</strong>
                  </label>{" "}
                  {currentContact.city}
                </div>
                <div>
                  <label>
                    <strong>Fecha de nacimiento:</strong>
                  </label>{" "}
                  {currentContact.birthday}
                </div>
  
                <Link
                  to={"/person/" + currentContact.code}
                  className="badge badge-warning"
                >
                  Edit
                </Link>
              </div>

            ) : (
                <div>
                  <br />
                  <p>Please click on a Tutorial...</p>
                </div>
              )}
            </div>
        </div>
    </div>
        );
    }

}