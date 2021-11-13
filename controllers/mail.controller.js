import { initializeMailGun } from "../config/mail.config";

export async function postMail(req, res) {
  try {
    const { from, to, subject, text } = req.body.mailData;

    const sendMail = initializeMailGun();

    await sendMail.messages().send({
      from,
      to,
      subject,
      text,
    });

    return res.status(200).json({ status: "success sent" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
