import { useState } from 'react';

interface PhotoGalleryProps {
  images: string[];
  title?: string;
}

export default function PhotoGallery({ images, title = '사진 갤러리' }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-300 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">{title}</h2>

      {/* 갤러리 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer border border-gray-300 hover:border-gray-500"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`사진 ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            {/* 닫기 버튼 */}
            <button
              className="absolute -top-10 right-0 text-white text-sm hover:text-gray-300 border border-white px-3 py-1"
              onClick={() => setSelectedImage(null)}
            >
              닫기
            </button>

            {/* 확대된 이미지 */}
            <img
              src={selectedImage}
              alt="확대 이미지"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
