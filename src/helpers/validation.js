const emptyError = "The field cannot be empty";
const firstLetterError = "Check first character. It must be capitalized";
const phoneTextError = "At least 9 digits";
const webSiteTextError = "Don't forget 'https://' in the beginning";

const nameValidation = (value) => {
  const validation = new RegExp(/^[А-ЯA-Z]/);
  return validation.test(value);
};

const phoneValidation = (value) => {
  const validation = new RegExp(/^\d{1}-\d{4}-\d{2}-\d{2}$/);
  return validation.test(value) && value.length <= 12;
};

const webSiteValidation = (value) => {
  const validation = new RegExp(/^https?:\/\//);
  return validation.test(value);
};

export const validation = (inputs) => {
  const errors = {};
  for (const input in inputs) {
    const value = inputs[input];
    let error = "";

    switch (input) {
      case "name":
        if (value === "") {
          error = emptyError;
        } else if (!nameValidation(value)) {
          error = firstLetterError;
        }
        break;
      case "surname":
        if (value === "") {
          error = emptyError;
        } else if (!nameValidation(value)) {
          error = firstLetterError;
        }
        break;
      case "phone":
        if (value === "") {
          error = emptyError;
        } else if (!phoneValidation(value)) {
          error = phoneTextError;
        }
        break;
      case "webSite":
        if (value === "") {
          error = emptyError;
        } else if (!webSiteValidation(value)) {
          error = webSiteTextError;
        }
        break;
      default:
        if (value === "") {
          error = emptyError;
        }
        break;
    }
    if (error !== "") {
      errors[input] = error;
    }
  }
  return errors;
};
