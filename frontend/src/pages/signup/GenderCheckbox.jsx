const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-controller">
        <lable
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          />
        </lable>
      </div>
      <div className="form-controller">
        <lable
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          />
        </lable>
      </div>
    </div>
  );
};

export default GenderCheckbox;
