import { useRef } from "react";
import emailjs from "@emailjs/browser";
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5kcybm7",
        "template_7cnx9ao",
        form.current,
        "E4xSnQw01OwcLuVII"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2 className="text-center mt-6 text-3xl font-mono ">
        email-massage-send-project
      </h2>
      <form ref={form} onSubmit={sendEmail} className="hero min-h-screen">
        <div className="card flex-shrink-0 w-full md:max-w-sm shadow-2xl ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">massage</span>
              </label>
              <textarea
                className="input input-bordered"
                name="message"
                placeholder="your comment..."
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                <input type="submit" value="Send" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
