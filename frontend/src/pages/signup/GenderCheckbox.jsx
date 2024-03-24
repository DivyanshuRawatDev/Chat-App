const GenderCheckbox = () => {
  return (
    <div className="flex mt-2">
      <div className="form-controller">
        <lable className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox" />
        </lable>
      </div>
      <div className="form-controller">
        <lable className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox" />
        </lable>
      </div>
    </div>
  );
};

export default GenderCheckbox;

