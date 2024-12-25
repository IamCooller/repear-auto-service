import { FadeInComponent } from '@/components/Animations';
import HugeCarousel from '@/components/ui/HugeCarousel';
import SubTitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';
import { fetchImagesData } from '@/services/data';

const GallerySection = async () => {
  const clients = await fetchImagesData('clients');
  return (
    <section className="bg-black py-[20px] md:py-[40px]" id="gallery">
      <FadeInComponent className="container text-white">
        <SubTitle text="Gallery" />
        <Title>Our latest clients</Title>

        <div className=" ">
          <HugeCarousel images={clients} />
        </div>
      </FadeInComponent>
    </section>
  );
};

export default GallerySection;
