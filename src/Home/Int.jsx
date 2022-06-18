// import { ICountry, IState, ICity } from "country-state-city";
import React from "react";
// import { Country, State, City } from "country-state-city";
// console.log(Country.getAllCountries());
// console.log(State.getAllStates());
import "./Int.css";
import TextField from "../Home/TextField";
const Assign = () => {
  const data = {
    countries: [
      {
        name: "Germany",
        states: [
          {
            name: "A",
            cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
          },
        ],
      },
      { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },

      { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },
      {
        name: "Mexico",
        states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }],
      },
      {
        name: "India",
        states: [
          { name: "E", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] },
        ],
      },
    ],
  };
  const [selectedCountry, setSelectedCountry] = React.useState();
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();
  const [selectedAddress, setSelectedAddress] = React.useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);
  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );
  console.log("availableCities",availableCities)
  console.log("availableState",availableState)
  return (
    <>
      <form>
        <pre>{JSON.stringify()}</pre>
        <h1>Hello this is the assigned task</h1>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              type={"text"}
              label={"Address"}
              placeholder={"Enter your Address"}
              value={selectedAddress}
              onChange={setSelectedAddress}
            />
            <TextField
              type={"text"}
              label={"Address2"}
              placeholder={"Enter your Address2"}
              value={""}
              // onChange={() => {}}
            />
          </div>
          <TextField
            type={"dropdown"}
            label={"City"}
            placeholder={"City"}
            optionText={"--Choose City--"}
            optionValue={availableCities?.cities}
          />
          <TextField
            type={"dropdown"}
            label={"State"}
            placeholder={"State"}
            optionText={"--Choose State--"}
            optionValue={availableCities?.cities}
          />
          <TextField
            type={"number"}
            label={"PinCode"}
            placeholder={"Enter your PinCode"}
            value={""}
            // onChange={() => {}}
          />
          <TextField
            type={"dropdown"}
            label={"Country"}
            placeholder={"Country"}
            optionText={"--Choose Country--"}
            // optionValue={data.countries}
            value={selectedCountry}
          />
          <TextField
            type={"Date"}
            label={"Date of Birth"}
            onChange={setSelectedDate}
          />
          <TextField
            type={"number"}
            label={"Social Security Last 4"}
            placeholder={"Enter your Social Security Last 4"}
            value={""}
            // onChange={() => {}}
          />
          <div>
            <label>City</label>
            <select
              placeholder="City"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option>--Choose City--</option>
              {availableCities?.cities.map((e, key) => {
                return (
                  <option value={e.name} key={key}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>State</label>
            <select
              placeholder="State"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option>--Choose State--</option>
              {availableState?.states.map((e, key) => {
                return (
                  <option value={e.name} key={key}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <label>PinCode</label>
          <input type="number" placeholder="Enter your PinCode" />
          <div>
            <label>Country</label>
            <select
              placeholder="Country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option>--Choose Country--</option>
              {data.countries.map((value, key) => {
                return (
                  <option value={value.name} key={key}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>
          <label>Date of Birth</label>
          <input type="Date" />
          <label>Social Security Last 4</label>
          <input type="number" />
          <div>
            <h5>Select an Indntification to Upload</h5>
            <input type="radio" />
            <label>Driver's Liscence</label>
            <input type="radio" />
            <label>State Issued Id</label>
            <input type="radio" />
            <label>Passport</label>
          </div>
        </div>
      </form>
    </>
  );
};
export default Assign;
