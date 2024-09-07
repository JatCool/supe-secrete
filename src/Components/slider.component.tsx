import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, EffectFlip } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

// Стилізація кнопок
const NavigationButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.swiper-button-next {
    right: 20px;
  }

  &.swiper-button-prev {
    left: 20px;
  }
`;

const SlideContent = styled.div<{ position?: string }>`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
  color: white;
  
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return `top: 10px; left: 10px;`;
      case 'top-right':
        return `top: 10px; right: 10px;`;
      case 'bottom-left':
        return `bottom: 10px; left: 10px;`;
      case 'bottom-right':
        return `bottom: 10px; right: 10px;`;
      case 'center':
        return `top: 50%; left: 50%; transform: translate(-50%, -50%);`;
      default:
        return `bottom: 20px; left: 20px;`;
    }
  }}

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  border: 5px solid #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const SlideImage = styled.img`

  height: 100%;
  object-fit: cover;
`;

const SlideVideo = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex; /* Додаємо flex для центрування */
  justify-content: center;
  align-items: center;

  .react-player {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Розтягує відео для заповнення всього контейнера */
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;


const Slider: React.FC = () => {
    const slides = [
      { type: 'image', src: '/images/nastya.jpeg', text: 'Перша причина: Вона дуже мила і красива(фото Насті прикріпляю)', textPosition: 'top-right' },
      { type: 'video', src: '/videos/IMG_8296.MOV', text: 'Друга причина: Мені з тобою дуже комфортно', textPosition: 'top-right' },
      { type : 'image', src: '/images/IMG_5271.jpeg', text: 'Третья причина: За те що ти вмієш робити класні івенти(мені дуже сподобався той пікнік. Буду намагатися робити щось подібна 🙃)', textPosition: 'top-right'},
      { type : 'video', src: '/videos/v09044g40000cmf56hnog65tr64of6i0.MP4', text: 'Четверта причина: За те що ти в мене дуже розумна', textPosition: 'top-right'},
      { type : 'image', src: '/images/IMG_2424.jpeg', text: 'Пʼята причина: за те що ти дуже хот 🫣', textPosition: 'top-right'},
      { type : 'image', src: '/images/IMG_8076.jpeg', text: 'Шоста причина: за твої укуси по моєму тілу', textPosition: 'top-right'},
      { type : 'image', src: '/images/IMG_1328.jpeg', text: 'Cьома причина: за твою щиру посмішку', textPosition: 'center'},
      { type : 'image', src: '/images/IMG_2410.jpeg', text: 'Восьма причина: за твої красиві очі', textPosition: 'top-right'},
      { type : 'image', src: '/images/IMG_2662.jpeg', text: 'Девʼята причина: за те що поруч зі мною в скрутну хвилину', textPosition: 'top-right'},
      { type : 'image', src: '/images/IMG_1238.WEBP', text: 'Десята причина: за те що зʼявилась в моєму житті і робиш його краще (Але далі ще щось є, невже більше ніж 10 слайдів 🤔)', textPosition: 'center'},
      { type : 'image', src: '/images/2024-09-06 11.14.36.jpg', text: 'Бонусна підтримка', textPosition: 'top-right'},
      { type : 'image', src: '/images/temp_image_066B5ED9-AA99-4251-954F-DDC574776326.WEBP', text: 'Ця квіточка тобі', textPosition: 'top-right'},
      { type : 'video', src: '/videos/RPReplay_Final1725610698.mov', text: 'Запрошую тебе на такий танець, як приїдеш', textPosition: 'center'},
      // Інші слайди
    ]; 

  return (
    <SliderContainer>
      <SwiperStyled
        modules={[Navigation, Pagination, EffectFlip]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        effect="fade"
      >
        {slides.map((slide, index) => (
          <SwiperSlideStyled virtualIndex={index} key={index}>
            {slide.type === 'image' ? (
              <>
                <SlideImage src={slide.src} alt={`slide-${index}`} />
                <SlideContent position={slide.textPosition}>{slide.text}</SlideContent>
              </>
            ) : (
              <>
              <SlideVideo>
                <StyledReactPlayer
                  url={slide.src}
                  playing={false}
                  controls
                  width="100%"
                  height="100%"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
                </SlideVideo>
                <SlideContent position={slide.textPosition}>{slide.text}</SlideContent>
              </>
            )}
          </SwiperSlideStyled>
        ))}
        <NavigationButton className="swiper-button-prev">&#10094;</NavigationButton>
        <NavigationButton className="swiper-button-next">&#10095;</NavigationButton>
      </SwiperStyled>
    </SliderContainer>
  );
};

export default Slider;