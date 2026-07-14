export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone) {
  return /^[+]?[\d\s()-]{7,20}$/.test(phone);
}

export function validateReservation(values) {
  const errors = {};
  if (!values.name || values.name.trim().length < 2)
    errors.name = "Please enter your full name.";
  if (!values.email || !isValidEmail(values.email))
    errors.email = "Enter a valid email address.";
  if (!values.phone || !isValidPhone(values.phone))
    errors.phone = "Enter a valid phone number.";
  if (!values.date) errors.date = "Please choose a date.";
  if (!values.time) errors.time = "Please choose a time.";
  if (!values.guests) errors.guests = "Select the number of guests.";
  return errors;
}

export function validateContact(values) {
  const errors = {};
  if (!values.name || values.name.trim().length < 2)
    errors.name = "Please enter your full name.";
  if (!values.email || !isValidEmail(values.email))
    errors.email = "Enter a valid email address.";
  if (!values.message || values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}
