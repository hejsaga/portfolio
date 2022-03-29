import { useState } from "react";
import { send } from "emailjs-com";
import styles from "./css/ContactForm.module.css";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    send(
      "service_dvnlooo",
      "template_y6uvdsc",
      toSend,
      "user_rYxjCTvBDS9dt8xTzOTtl"
    )
      .then((response) => {
        console.log("Success!", response.status, response.text);
        setMessage("Your message is sent! I'll get back to you.");
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setMessage("Something went wrong, please try again.");
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="from_name"
          value={toSend.from_name}
          onChange={handleChange}
          required
          placeholder="Name"
        ></input>

        <input
          className={styles.input}
          type="text"
          name="reply_to"
          value={toSend.reply_to}
          onChange={handleChange}
          required
          placeholder="Email"
        ></input>

        <textarea
          className={styles.input}
          cols="50"
          rows="3"
          type="text"
          name="message"
          value={toSend.message}
          onChange={handleChange}
          placeholder="Your message"
          required
        ></textarea>

        <button disabled={loading} type="submit" className={styles.button}>
          Send
        </button>
        <div className={styles.message}>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
