import BannerCard from '@components/common/banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { homeSevenHeroImages as banners } from '@framework/static/banner';
import { ROUTES } from '@utils/routes';
import { SwiperSlide } from 'swiper/react';

const CustomSlider: React.FC = () => {
  return (
    <div className="relative mb-5 md:mb-8">
      <Carousel
        autoplay={true}
        className="mx-0"
        // buttonClassName="hidden"
        paginationPosition="left"
        pagination={{
          clickable: true,
        }}
      >
        {banners?.map((banner: any) => (
          <SwiperSlide
            className="carouselItem"
            key={`banner--key-${banner?.id}`}
          >
            <BannerCard
              banner={banner}
              href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomSlider;
