import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./SeatAllocation.css";
import Modal from "react-awesome-modal";
// import Modal from "react-native-modal";
import { Container, Col, Row } from "react-bootstrap";
class SeatBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectingSeats: [],
      visible: false,
    };
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }
  closeModal() {
    this.setState({
      visible: false,
    });
  }

  // componentDidMount() {
  //   // axios.get("http://localhost:8080/seatData").then((res) => {
  //   //   console.log(res.data);
  //   //   const resData = res.data;
  //   //   for (let i = 0; i < resData.length; i++) {
  //   //     if (resData[i].available === false) {
  //   //       document
  //   //         .getElementById(resData[i].seatNumber)
  //   //         .setAttribute("disabled", true);
  //   //     }
  //   //   }
  //   // });
  // }
  // componentDidMount() {
  //   axios.get("http://localhost:8080/seatData").then((res) => {
  //     const resData = res.data;
  //     for (let i = 0; i < resData.length; i++) {
  //       if (resData[i].available === false) {
  //         var Seats = resData[i].seatNumber;
  //         var d = '"' + Seats + '"';
  //         console.log(d);
  //         document.getElementById(d).setAttribute("disabled", true);
  //       }
  //     }
  //   });
  // }

  choiceSeat = (seat) => {
    const newBookedSeats = [...this.state.selectingSeats, seat];
    console.log(newBookedSeats);
    this.setState({
      selectingSeats: newBookedSeats,
    });
  };

  SelectSeats = () => {
    const Selected = this.state.selectingSeats;
    console.log(Selected);
    if (Selected.length !== 0) {
      axios
        .post("http://localhost:8080/seat_allocation/bookSeat", {
          seats: Selected,
        })
        .then((res) => {
          this.props.history.push("/invoice");
        });
    } else {
      alert("Please Select Seats");
    }
  };

  render() {
    const seatsColumns = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "",
      "6",
      "7",
      "8",
      "9",
      "10",
    ];
    const seatsRows = ["A", "B", "C", "D", "E", "", "F", "G", "H", "I", "J"];
    const seatsGenerator = () => {
      return (
        <table id="seatsBlock">
          <tbody>
            <tr>
              <td></td>
              {seatsColumns.map((column, index) => (
                <td key={index}>{column}</td>
              ))}
            </tr>
            {seatsRows.map((row, index) =>
              row === "" ? (
                <tr key={index} className="seatVGap"></tr>
              ) : (
                <tr key={index}>
                  <td>{row}</td>
                  {seatsColumns.map((column, index) => {
                    return column === "" ? (
                      <td key={index} className="seatGap"></td>
                    ) : (
                      <td key={index}>
                        <input
                          onClick={() => {
                            this.choiceSeat(`${row}${column}`);
                          }}
                          type="checkbox"
                          className="seats"
                          id={`${row}${column}`}
                          value={`${row}${column}`}
                        />
                      </td>
                    );
                  })}
                </tr>
              )
            )}
          </tbody>
        </table>
      );
    };
    return (
      <div>
        <div className="seat_selection">
          <h1>Church Seat Allocation</h1>
          <div className="container">
            <div className="w3ls-reg" style={{ paddingTop: "0px" }}>
              <ul className="seat_w3ls">
                <li className="smallBox greenBox">Selected Seat</li>
                <li className="smallBox redBox">Reserved Seat</li>
                <li className="smallBox emptyBox">Empty Seat</li>
              </ul>
              <div
                className="seatStructure txt-center"
                style={{ overflowX: "auto" }}
              >
                {seatsGenerator()}
                <div className="screen">
                  <h2 className="wthree">Screen this way</h2>
                </div>
                <section>
                  <button onClick={() => {this.openModal();this.SelectSeats();}}>
                    Confirm Selection
                  </button>
                  <Modal visible={this.state.visible} width="500" height="350" effect="fadeInUp" onClick={() => this.closeModal()}>
                    <div className="popup">
                      <Container style={{ display: "inline-block" }}>
                        <Row>
                          <Col className="close" md={6}>
                            <a href="/SeatAllocation"
                              style={{ marginLeft: "420px" }}
                              onClick={() => this.closeModal()}
                            >
                              x
                            </a>
                          </Col>
                          <Col className="popup_heading" md={6}>
                            <h3>SEAT DETAILS</h3>
                          </Col>
                        </Row>
                      </Container>
                      <form>
                        <label className="popup_label">Name:</label>
                        <br />
                        <input className="popup_input" type="text" />
                        <br />
                        <br />
                        <label className="popup_label">Seat No:</label>
                        <br />
                        <input type="text" className="popup_input" />
                        <br />
                        <button className="popup_btn">Submit</button>
                      </form>
                    </div>
                  </Modal>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SeatBooking);
