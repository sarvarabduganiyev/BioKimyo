import { useState } from "react";
import ContactTab from "./ContactTab";
function ContactOne() {
  const [location, setLocation] = useState("Uzbekistan");
  return (
    <div >
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11981.409506287195!2d69.206178!3d41.344694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42835c8e24a158e5!2z0JHQtdGA0YPQvdC4!5e0!3m2!1sru!2s!4v1659092045314!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <div className="mt-12 w-10/12 mx-auto">
        <div className="orange__line"></div>
        <h1 className="content__four__h1">Contacts</h1>
      </div>
      <div className="mt-12 w-full">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11981.409506287195!2d69.206178!3d41.344694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42835c8e24a158e5!2z0JHQtdGA0YPQvdC4!5e0!3m2!1sru!2s!4v1659092045314!5m2!1sru!2s"
          width="100%"
          height="450"
          allowfullscreen=""
        ></iframe> */}
        <iframe
          src="https://yandex.uz/maps/-/CCURYCRDhB"
          width="100%"
          height="450"
          allowfullscreen=""
        ></iframe>
      </div>
      <div className="100 h-auto  relative">
        <ContactTab setLocation={setLocation} />
      </div>
    </div>
  );
}

export default ContactOne;
