// In this challenge, the promise will resolve with a given data set.
// Create a promise chain of four steps to do the following

// Step 1: Return only the unread alerts, if there are none, trigger an error that says there are no unread alerts
// Step 2: If the alert is a system alert, call the printSystemAlert function on it and remove it from the list
// Step 3: Create a console.error message for the critical alerts that prints the alert message, if there are no critical alerts,
// do nothing and proceed to step 4
// Step 4: Console log all other types of alerts with the message, severity, and type properties

const alerts = [
  {
    type: "system",
    severity: "critical",
    timestamp: "",
    message: "System has experienced an error and must be restarted",
    user_id: null,
    short_code: "VDN877",
    readStatus: true,
  },
  {
    type: "users",
    severity: "critical",
    timestamp: "",
    message: "Unauthorized access to the system has been logged",
    user_id: null,
    short_code: "VDN077",
    readStatus: false,
  },
  {
    type: "system",
    severity: "informational",
    timestamp: "",
    message: "There are new updates available",
    user_id: null,
    short_code: "VDN827",
    readStatus: false,
  },
  {
    type: "users",
    severity: "warning",
    timestamp: "",
    message: "Some users on this system have not updated their passwords",
    user_id: null,
    short_code: "HDN877",
    readStatus: false,
  },
];

const printSystemAlert = (alert) => {
  console.info(
    alert,
    `This is a ${alert.severity} system wide alert: ${alert.message}`,
    "\n\n"
  );
};

new Promise((resolve, reject) => {
  // Step 1: Return only the unread alerts; if none, trigger an error
  const unread = alerts.filter((a) => !a.readStatus);
  if (unread.length === 0) {
    reject(new Error("There are no unread alerts"));
    return;
  }
  resolve(unread);
})
  .then((unreadAlerts) => {
    console.log("Done", unreadAlerts, "\n\n");
    return unreadAlerts; // pass to Step 2
  })
  // Step 2: If the alert is a system alert, print it and remove from list
  .then((alertsList) => {
    const remaining = [];
    for (const alert of alertsList) {
      if (alert.type === "system") {
        printSystemAlert(alert);
      } else {
        remaining.push(alert);
      }
    }
    return remaining; // pass non-system alerts to Step 3
  })
  // Step 3: Console.error critical alerts; proceed to Step 4 if none
  .then((remainingAlerts) => {
    const criticalAlerts = remainingAlerts.filter(
      (a) => a.severity === "critical"
    );
    if (criticalAlerts.length > 0) {
      criticalAlerts.forEach((alert) =>
        console.error("Critical alert:", alert.message, "\n\n")
      );
    }
    return remainingAlerts; // pass to Step 4
  })
  // Step 4: Console log all other alerts with message, severity, and type
  .then((finalAlerts) => {
    finalAlerts.forEach((alert) => {
      console.log(
        `Alert - Message: ${alert.message}, Severity: ${alert.severity}, Type: ${alert.type}`
      );
    });
  })
  .catch((err) => console.error(err.message));
