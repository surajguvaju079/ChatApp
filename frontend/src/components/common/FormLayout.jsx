import React from "react";
const FormLayout = ({
  formControl,
  buttonText,
  handleSubmit,
  formDetails,
  setFormDetails,
}) => {
  const handleFormControl = (element) => {
    switch (element.componentType) {
      case "input":
        if (element.type !== "radio")
          return (
            <div className="flex flex-col my-1">
              <label>{element.label}</label>
              <input
                name={element.name}
                placeholder={element.placeholder}
                type={element.type}
                onChange={(e) =>
                  setFormDetails({
                    ...formDetails,
                    [element.name]: e.target.value,
                  })
                }
                value={formDetails[element.name]}
                className="input input-bordered"
              ></input>
            </div>
          );
        else {
          return (
            <div className="flex my-[6px]  flex-col">
              <div>{element.label}</div>
              <div className="flex items-center w-full justify-between">
                {element.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex gap-2 w-full items-center justify-center"
                  >
                    <label>{option}</label>
                    <input
                      key={option}
                      name={element.name}
                      className="radio radio-accent"
                      type={element.type}
                      checked={
                        formDetails[element.name] === option.toLowerCase()
                      }
                      value={option.toLowerCase()}
                      onChange={(e) =>
                        setFormDetails({
                          ...formDetails,
                          [element.name]: e.target.value,
                        })
                      }
                    ></input>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        break;

      default:
        return (
          <div>
            <label>{element.label}</label>
            <input
              name={element.name}
              placeholder={
                element.name !== "password" &&
                element.name !== "confirmpassword"
                  ? element.placeholder
                  : null
              }
              type={element.type}
            ></input>
          </div>
        );
        break;
    }
  };

  const check = Object.keys(formDetails).every(
    (item) => formDetails[item] !== ""
  );
  console.log(check);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      {formControl.map((element, index) => (
        <div key={index}>{handleFormControl(element)}</div>
      ))}
      <button
        disabled={!check}
        className="btn btn-primary w-full"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default FormLayout;
