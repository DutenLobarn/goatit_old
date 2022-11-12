import { useState } from "react";

export default function Contact() {
  const [guestName, setGuestName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");

  function handlGuestNameValue(e) {
    setGuestName(e.target.value);
  }
  function handleFromEmail(e) {
    setFromEmail(e.target.value);
  }
  function handleTextValue(e) {
    setTextMessage(e.target.value);
  }

  let data = {
    from: fromEmail,
    subject: guestName,
    html: textMessage,
  };

  const sendEmail = (e) => {
    if (
      data.from.length > 0 &&
      data.subject.length > 0 &&
      data.html.length > 0
    ) {
      e.preventDefault();
      setGuestName("");
      setFromEmail("");
      setTextMessage("");
      fetch("http://localhost:5000/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (response) {
          if (response.ok) {
            console.log("Email was sent.");
            return;
          }
          throw new Error("Request failed.");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="h-[695px] xl:px-32 lg:bg-right lg:bg-cover lg:bg-[url('../assets/contactbg.png')] mb">
        <section className="h-full text-fuchsia-900 flex items-center xl:w-3/5 lg:w-2/4 lg:m-0 md:w-3/4 md:mx-auto">
          <div className="w-5/6 mx-auto xl:m-0">
            <p className="text-xl font-semibold lg:w-5/6">
              Fill in the form and our team will respond to you within 24 hours.
            </p>
            <form className="text-black mt-6 flex flex-col lg:w-4/6">
              <label className="flex flex-col justify-evenly mb-4 h-20 font-semibold">
                Your Name:
                <input
                  className="mt-1 h-10 rounded font-thin border-2 border-black text-black"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={guestName}
                  required
                  onChange={handlGuestNameValue}
                />
              </label>
              <label className="flex flex-col justify-evenly mb-4 h-20 font-semibold">
                Mail:
                <input
                  className="mt-1 h-10 rounded font-thin border-2 border-black text-black"
                  type="email"
                  name="email"
                  placeholder="Name@email.com"
                  value={fromEmail}
                  required
                  onChange={handleFromEmail}
                />
              </label>
              <label className="flex flex-col mb-6 font-semibold">
                Message:
                <textarea
                  className="mt-2 h-32 rounded font-thin border-2 border-black text-black lg:h-52"
                  placeholder="Message"
                  value={textMessage}
                  required
                  onChange={handleTextValue}
                />
              </label>
              <input
                className="text-white mx-auto bg-fuchsia-900 w-32 py-3 font-semibold border-black hover:bg-orange-600 hover:border-white rounded-3xl border"
                type="submit"
                value="Submit"
                onClick={sendEmail}
              />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
