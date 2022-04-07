import React from "react";
import axios from "axios";
// CSS imports
import styles from "../styles/Leader-Board.module.css";
class LeaderBoard extends React.Component {
  state = { hallData: [], error: null };
  componentDidMount() {
    axios
      .get("https://unkenny.herokuapp.com/leaderboard")
      .then((response) => {
        console.log(response.data);
        this.setState({ hallData: response.data, error: null });
      })
      .catch((err) => {
        this.setState({ hallData: [], error: err.message });
      });
  }
  renderTableItems(hallData) {
    return hallData.map((hall, index) => {
      return (
        <React.Fragment>
          <tr>
            <td>{hall["Hall/Hostel"]}</td>
            <td>{hall.Score}</td>
          </tr>
        </React.Fragment>
      );
    });
  }
  renderLeaderBoard() {
    if (this.state.error !== null) {
      return <h3>{this.state.error}</h3>;
    } else {
      return (
        <table className={styles.styled_table}>
          <thead>
            <tr>
              <th>Hall/Hostel Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>{this.renderTableItems(this.state.hallData)}</tbody>
        </table>
      );
    }
  }
  render() {
    return (
      <div className="container" style={{ height: "100vh" }}>
        <div className={styles.table_holder}>{this.renderLeaderBoard()}</div>
      </div>
    );
  }
}

export default LeaderBoard;
