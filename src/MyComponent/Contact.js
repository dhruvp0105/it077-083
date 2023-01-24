import React,{useEffect,useState} from "react";
import styled from "styled-components";
import './contact.css';
import { db } from "../backend/firebase";
import { getFirestore, collection, getDocs} from "firebase/firestore";

export const Contact =  () => {
    // const querySnapshot = await getDocs(collection(db, "contacts"));
    // querySnapshot.forEach((doc) => console.log(doc.data())); 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
      console.log("hello ")
      db.collection('contacts')
      .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
        })
        .catch((error) => {
            console.log("dfdgkjsn")
            alert(error.message);
            setLoader(false);
        });
  
      setName("");
      setEmail("");
      setMessage("");
      window.location="/Contact"
    };
//     const Wrapper = styled.section`
//     padding: 3rem 0 5rem 0;
//     .container {
//       margin-top: 5rem;
//       text-align: center;
//       .contact-form {
//         max-width: 50rem;
//         margin: auto;
//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 2rem;
//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;
//           }
//         }
//       }
//     }
//   `;

    return (




        <>
        <div className="foo">

        <style>{'body { background-color:#e6fff5; }'}</style>
            {/* <center><h2 className="common-heading">Feel Free to Contact us</h2></center> */}
            <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.901899072697!2d72.77802941498277!3d21.196055685908032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c4a9b65bf65%3A0x9156175adc86439a!2sShanti%20Sagar%20Row%20House%2C%20Adajan%20Gam%2C%20L.P.Savani%2C%20Surat%2C%20Gujarat%20395009!5e0!3m2!1sen!2sin!4v1674148214124!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br /><br />

            {/* <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xgedgjkr"
                        method="POST"
                        className="contact-inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            name="message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            required></textarea>

                        <input type="submit" value="send" style={{backgroundColor:"blue",color:"white"}} />
                    </form>
                </div>
            </div> */}



<form className="form1" onSubmit={handleSubmit} >
    <br /><br /><br /><br />
   <center>
     <h1>Contact Us 🤳</h1>
    </center>  

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="button"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>

        </div>


            
        </>
    );
};

 export default Contact;