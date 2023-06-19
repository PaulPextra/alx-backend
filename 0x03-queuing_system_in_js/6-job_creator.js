import kue from "kue";

const queue = kue.createQueue();
const jobj = {
  phoneNumber: "+2341234567890",
  message: "This is my phone number",
};

const queueName = "push_notification_code";

const job = queue.create(queueName, jobj).save((err) => {
  if (!err) console.log(`Notification job created: ${job.id}`);
});

job.on("complete", () => {
  console.log("Notification job completed");
});

job.on("failed", () => {
  console.log("Notification job failed");
});
