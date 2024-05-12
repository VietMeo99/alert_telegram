import telegramService from "../services/telegramService";

let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let handlePushTelegramNotification = async (req, res) => {
  //send notification to telegram
  let user = {
    fullName: req.body.fullName,
    // email: req.body.email,
    description: req.body.description,
  };
  await telegramService.sendNotification(user);
  //then redirect to the telegram page
  return res.redirect("/telegram");
};

let getTelegramPage = (req, res) => {
  return res.render("telegram.ejs");
};

let sendAnimation = async (req, res) => {
  await telegramService.sendMeAGif();
  return res.redirect("/");
};

module.exports = {
  getHomePage: getHomePage,
  handlePushTelegramNotification: handlePushTelegramNotification,
  getTelegramPage: getTelegramPage,
  sendAnimation: sendAnimation,
};
