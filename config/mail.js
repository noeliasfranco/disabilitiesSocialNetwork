// Copy in your particulars and rename this to mail.js
module.exports = {
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secureConnection: true,
  //name: "servername",
  auth: {
    user: "admin gmail account",
    pass: "password"
  },
  ignoreTLS: false,
  debug: false,
  maxConnections: 5 // Default is 5
}
