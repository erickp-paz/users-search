import React from "react";
import Spinner from "../Spinner";

const Form = ({
  user,
  loading,
  loading2,
  error,
  buttonAction,
  buttonAction2,
  changeUser,
}) => (
  <div className="formContainer">
    <input
      type="text"
      className="userInput"
      value={user}
      placeholder="Usuário ou Organização"
      onChange={(e) => changeUser(e.target.value)}
    />
    <div classNamne="buttonsContainer">
      <button className="searchButton" onClick={buttonAction}>
        {loading ? <Spinner /> : "Repos"}
      </button>
      <button className="searchButton2" onClick={buttonAction2}>
        {loading2 ? <Spinner /> : "Starred"}
      </button>
    </div>

    <p className="errorText">{error}</p>
  </div>
);

export default Form;
