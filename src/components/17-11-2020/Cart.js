import React from "react";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";



class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0,
    };
  }

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1,
        };
      } else {
        return null;
      }
    });
  };
  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 0) {
          
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };
//   ToggleClick = () => {
//     this.setState({
//       show: !this.state.show,
//     });
//   };
//   handleChange = (event) => {
//     this.setState({ quantity: event.target.value });
//   };

  render() {

    return (
      <div>
        {/* <button onClick={this.IncrementItem}>+</button>
        <input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
        <button onClick = {this.DecreaseItem}>-</button> */}

        <IconButton
          onClick={this.DecreaseItem}
          edge="start"
          // className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
        <span>{this.state.quantity}</span>
        <IconButton
          onClick={this.IncrementItem}
          edge="start"
          // className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <ControlPointIcon />
        </IconButton>
      </div>
    );
  }
}

export default Cart;
