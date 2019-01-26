console.clear();
import { createStore, combineReducers } from "redux";

// people dropping off forms (Action Creators)
const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    //This is the form (Action)
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

const createPolicy = name => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount: 20
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  };
};

// departments (Reducers)
const claimsHistory = (oldListOfClaims, action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies, action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter(policy => policy != action.payload.name);
  }
};
