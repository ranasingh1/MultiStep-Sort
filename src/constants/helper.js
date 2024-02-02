export const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  
 export const isValidCardNumber = (cardNumber) => {
    return /^[0-9]{16}$/.test(cardNumber);
  };
  
  export const isValidExpiryDate = (expiryDate) => {
    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const expiryDateObj = new Date(Number(`20${year}`), Number(month) - 1);
  
    return (
      expiryDate.trim() !== "" &&
      /^\d{2}\/\d{4}$/.test(expiryDate) &&
      expiryDateObj > currentDate
    );
  };
  
  export const isValidField = (field, value) => {
    switch (field) {
      case "email":
        return isValidEmail(value);
      case "cardNumber":
        return isValidCardNumber(value);
      case "expiryDate":
        return isValidExpiryDate(value);
      case "cvv":
        return /^\d{3}$/.test(value);
      default:
        return true;
    }
  };
  