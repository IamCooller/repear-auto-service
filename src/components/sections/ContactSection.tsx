import ContactForm from '@/components/ui/FormBlock';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';

const ContactSection = () => {
  return (
    <section
      className="pt-[20px] md:pt-[40px] pb-[80px] md:pb-[126px]"
      id="contact"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-[20px]">
          <div>
            <SubTitle text="Contact Us" />
            <Title className="mb-0">Let’s Get Your Car Back on Track!</Title>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
