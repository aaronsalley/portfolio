declare const fwcrm: {
  identify: (
    identifier: string,
    contact: unknown,
    successMessage: unknown,
    failureMessage: unknown,
  ) => void;
};

export const createContact = (formData: FormData) => {
  const email = formData.get("email") as string;

  const properties = {
    Email: email,
    last_medium: "Website",
  };
  const userID = email;

  if (typeof fwcrm !== "undefined" && typeof fwcrm.identify === "function") {
    fwcrm.identify(userID, properties, successCallback(), failureCallback());
  } else {
    console.warn("fwcrm is not available");
  }
};

// TODO: Replace with API
export const createDeal = (formData: FormData) => {
  // const name = formData.get('name') as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const referrer = formData.get("referrer") as string;
  // const message = formData.get('message') as string;

  const properties = {
    Email: email,
    deal: {
      Name: subject,
      "Related contacts": [email, referrer],
      "Deal value": 0,
    },
  };
  const userID = email;

  if (typeof fwcrm !== "undefined" && typeof fwcrm.identify === "function") {
    fwcrm.identify(userID, properties, successCallback, failureCallback);
  } else {
    console.warn("fwcrm is not available");
  }
};

const successCallback = () => {
  return "Thank you for your inquiry! We will get back to you shortly.";
};

const failureCallback = () => {
  console.error("Error creating deal.");
  return "There was an error processing your inquiry. Please try again later.";
};
