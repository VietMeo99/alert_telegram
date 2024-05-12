import { CronJob } from "cron";

// const job = new CronJob(
// 	'* * * * * *', // cronTime
// 	function () {
// 		console.log('You will see this message every second');
// 	}, // onTick
// 	null, // onComplete
// 	true, // start
// 	// 'America/Los_Angeles' // timeZone
// );

const job = new CronJob("*/10 * * * * *", () => {
  // Tác vụ log message
  console.log("Đây là một log message.");
});

module.exports = {
  job: job,
};
