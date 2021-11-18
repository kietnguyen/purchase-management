import { types } from '../actions/purchases';

const initialState = [
  {
    id: 1,
    name: 'Food Processor',
    price: 100,
    serviceCost: 1,
    currentUsage: 5,
    expectedUsage: 100,
    purchasedAt: 1636709651,
  },
  {
    id: 2,
    name: 'eReader',
    price: 200,
    serviceCost: 0.25,
    currentUsage: 300,
    expectedUsage: 400,
    purchasedAt: 1605519251,
  },
  {
    id: 3,
    name: 'Tablet',
    price: 150,
    serviceCost: 0.25,
    currentUsage: 625,
    expectedUsage: 600,
    purchasedAt: 1542360851,
  },
];

const purchasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PURCHASES:
      return state;
    default:
      return state;
  }
};

export default purchasesReducer;
