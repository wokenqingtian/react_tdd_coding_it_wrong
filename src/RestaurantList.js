import React from 'react';
import {
  Collection,
  CollectionItem,
} from 'react-materialize';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurantNames }) => (
  <Collection header="Restaurants">
    <RestaurantItems restaurantNames={restaurantNames}/>
  </Collection>
);

const RestaurantItems = ({ restaurantNames }) => (
  restaurantNames.length === 0
    ? <NoRestaurantItems />
    : <SomeRestaurantItems restaurantNames={restaurantNames} />
);

const NoRestaurantItems = () => (
  <CollectionItem style={{ color: 'gray' }}>
    (none added yet)
  </CollectionItem>
);

const SomeRestaurantItems = ({ restaurantNames }) => (
  restaurantNames.map(restaurantName => (
    <CollectionItem key="restaurantName">
      <Link to={`/restaurants/${restaurantName}`}>
        {restaurantName}
      </Link>
    </CollectionItem>
  ))
);

export default RestaurantList;
