import styles from "./ContactForms.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";

const ContactForms = () => {


  const onSubmit = (event) => {

    event.preventDefault();
    console.log("name",event.target[0].value);
    console.log("name",event.target[1].value);
    console.log("name",event.target[2].value);
  }


  return (
    <section className={styles.container}>
      <div className={styles.Contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button 
          
          
          text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<TbMailFilled fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div style={{display:'flex',justifyContent:"end"}}>
          <Button  text="SUBMIT"  />
          </div>
        </form>
      </div>
      <div className={styles.Contact_image}>
        <img src="./images/contact.png" alt="contactimage" />
      </div>
    </section>
  );
};

export default ContactForms;
