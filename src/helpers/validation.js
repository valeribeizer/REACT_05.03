export function validation(state, setState) {
  nameValidation.call({ state, setState });
  surnameValidation.call({ state, setState });
  dateOfBirthValidation.call({ state, setState });
  phoneValidation.call({ state, setState });
  webSiteValidation.call({ state, setState });
  aboutValidation.call({ state, setState });
  stackValidation.call({ state, setState });
  descriptionValidation.call({ state, setState });
  setState((prev) => {
    if (Object.values(prev.errors).every((it) => !it)) {
      return { displayProfile: true };
    }
  });
}

const emptyError = "The field cannot be empty";
const firstLetterError = "Check first character. It must be capitalized";
const phoneTextError = "At least 9 digits";
const webSiteTextError = "Don't forget 'https://' in the beginning";

function nameValidation() {
  if (this.state.name.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        nameError: emptyError,
      },
    }));
  } else if (this.state.name[0] !== this.state.name[0].toUpperCase()) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        nameError: firstLetterError,
      },
    }));
  }
}

function surnameValidation() {
  if (this.state.surname.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        surnameError: emptyError,
      },
    }));
  } else if (this.state.surname[0] !== this.state.surname[0].toUpperCase()) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        surnameError: firstLetterError,
      },
    }));
  }
}

function dateOfBirthValidation() {
  if (this.state.dateOfBirth.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        dateOfBirthError: emptyError,
      },
    }));
  }
}

function phoneValidation() {
  if (this.state.phone.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        phoneError: emptyError,
      },
    }));
  } else if (this.state.phone.length !== 12) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        phoneError: phoneTextError,
      },
    }));
  }
}

function webSiteValidation() {
  if (this.state.webSite.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        webSiteError: emptyError,
      },
    }));
  } else if (!this.state.webSite.startsWith("https://")) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        webSiteError: webSiteTextError,
      },
    }));
  }
}

function aboutValidation() {
  if (this.state.about.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        aboutError: emptyError,
      },
    }));
  }
}

function stackValidation() {
  if (this.state.stack.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        stackError: emptyError,
      },
    }));
  }
}

function descriptionValidation() {
  if (this.state.description.length === 0) {
    this.setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        descriptionError: emptyError,
      },
    }));
  }
}
