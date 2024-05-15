import BreadCrumb from "@/components/BreadCrumb";
import ContactForm from "@/components/ContactForm";
import callIcon from "../assets/call.svg";
import mailIcon from "../assets/mail.svg";

const ContactUs = () => {
  return (
    <section className="my-account mx-32 mt-10">
      <div className="flex flex-col">
        {/* Header and links */}
        <div className="flex justify-start items-center">
          <BreadCrumb />
        </div>
        <div className="flex mt-10 gap-20">
          <div className="flex-1 shadow-lg py-10 px-10 flex flex-col gap-6">
            {/* Contact Card */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <img src={callIcon} alt="" />
                <span className="font-semibold">Call To Us</span>
              </div>
              <span>We are available 24/7, 7 days a week.</span>
              <span>Phone: +91 9999999999</span>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <img src={mailIcon} alt="" />
                <span className="font-semibold">Write To Us</span>
              </div>
              <span className="text-wrap break-words">Fill out our form and we will contact you within 24 hours.</span>
              <span>Emails: customer@myapp.com</span>
              <span>Emails: support@myapp.com</span>
            </div>
          </div>
          <div className="flex-[3] shadow-lg py-10 px-20 flex flex-col gap-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
