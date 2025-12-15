'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import CloseIcon from '@/public/assets/icons/close.svg';

interface ImagePopupProps {
  desktopImage: string;
  mobileImage: string;
  imageAlt?: string;
  backgroundColor?: string;
}

export const ImagePopup = ({
  desktopImage,
  mobileImage,
  imageAlt = 'Popup Image',
  backgroundColor = 'bg-white/60',
}: ImagePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
      <div className={`absolute inset-0 ${backgroundColor}`} onClick={handleClose} />

      <div className="relative w-full max-w-[375px] md:max-w-[900px]">
        <div className="relative w-full aspect-[335/335] md:aspect-[3/2] max-h-[80vh] rounded-[12px] shadow-[0_4px_12px_0_rgba(0,0,0,0.25)] overflow-hidden">
          <button
            onClick={handleClose}
            className="absolute top-[20px] right-[20px] md:top-[45px] md:right-[45px] z-10 text-[#919db6] cursor-pointer"
            aria-label="close"
          >
            <CloseIcon className="w-[12px] h-[12px] md:w-[17px] md:h-[17px]" />
          </button>

          <Image
            src={mobileImage}
            alt={imageAlt}
            fill
            className="object-contain md:hidden"
            sizes="(max-width: 768px) 100vw, 0px"
            priority
          />

          <Image
            src={desktopImage}
            alt={imageAlt}
            fill
            className="object-contain hidden md:block"
            sizes="(min-width: 768px) 100vw, 0px"
            priority
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};
