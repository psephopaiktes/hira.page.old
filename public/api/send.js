const sgMail = require("@sendgrid/mail");

export default async function(req, res) {
  sgMail.setApiKey(process.env.VUE_APP_SENDGRID_API_KEY);

  const { email, subject, message } = req.body;

  const content = {
    to: "contact@hira.page",
    from: email,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
