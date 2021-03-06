import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import {
  Button,
  Modal,
  Row,
} from 'react-materialize';
import NewDishForm from './NewDishForm';
import DishList from './DishList';
import { addDish } from './store/dishes/actions';

class RestaurantDetailPage extends Component {
  state = {
    isModalOpen: false,
  }

  handleAddDish = (dishName) => {
    const restaurantName = this.props.match.params.name;
    this.props.addDish({
      restaurantName,
      dishName,
    });

    this.setState({ isModalOpen: false });
  }

  render() {
    const { dishes, match } = this.props;
    const restaurantName = match.params.name;
    const restaurantDishes = dishes[restaurantName] || [];

    return (
      <div>
        <Link
          to="/"
          data-testid="backButton"
        >
          Back
        </Link>
        <Modal
          open={this.state.isModalOpen}
          header="New Dish"
          actions={[]}
          trigger={
            <Button
              data-testid="addDishButton"
            >
              Add Dish
            </Button>
          }
        >
          <NewDishForm
            onSave={this.handleAddDish}
          />
        </Modal>
        <Row>
          <DishList dishNames={restaurantDishes} />
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dishes: state.dishes,
  }
}

const mapDispatchToProps = {
  addDish,
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(RestaurantDetailPage);