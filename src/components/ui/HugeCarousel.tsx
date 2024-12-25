import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './carousel';
import Image from 'next/image';
import { ImageT } from '@/services/data';

// Функция для группировки изображений по 6 штук
const chunkArray = (array: ImageT[], size: number) => {
  return array.reduce((acc: ImageT[][], _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);
};

const HugeCarousel = ({ images }: { images: ImageT[] }) => {
  const groupedImages = chunkArray(images, 6); // Группируем по 6 изображений

  return (
    <Carousel className="h-fit">
      <CarouselContent className="h-fit">
        {groupedImages.map((group, groupIndex) => (
          <CarouselItem key={groupIndex} className="h-fit">
            <div className="grid gap-[20px] overflow-hidden md:rounded-tl-[48px] md:rounded-br-[48px] rounded-tl-[12px] rounded-br-[12px] ">
              {group.map((image, index) => {
                const nextImage = group[index + 1]; // Следующая картинка для пары

                // Пропускаем следующую итерацию (чтобы избежать дублирования)
                if (index % 2 !== 0) return null;

                // Чередуем col-span для строк внутри слайда
                const isEvenRow = index % 4 === 0;

                return (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-[20px] max-h-[440px] overflow-hidden"
                  >
                    <Image
                      src={'/' + image.img}
                      alt={`Image ${index}`}
                      width={image.width}
                      height={image.height}
                      className={`${
                        isEvenRow ? 'col-span-2' : 'col-span-1'
                      } w-full h-full object-cover`}
                    />
                    {nextImage ? (
                      <Image
                        src={'/' + nextImage.img}
                        alt={`Image ${index}`}
                        width={nextImage.width}
                        height={nextImage.height}
                        className={`${
                          isEvenRow ? 'col-span-1' : 'col-span-2'
                        } w-full h-full object-cover`}
                      />
                    ) : (
                      <div
                        className={isEvenRow ? 'col-span-1 ' : 'col-span-2 '}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="relative flex items-center  justify-end gap-[10px] mt-[60px]">
        <CarouselPrevious className="bg-red aspect-square border-none w-[36px] text-white" />
        <CarouselNext className="bg-red aspect-square border-none w-[36px] text-white" />
      </div>
    </Carousel>
  );
};

export default HugeCarousel;
