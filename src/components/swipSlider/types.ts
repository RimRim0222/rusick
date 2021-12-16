// export interface Slide_Items {
//   idx: number;
//   item: JSX.Element;
// }
export interface ISwipSlider {
  items: JSX.Element[];
  onPage?: (nowPage: number) => void;
  slidesPerView?: number;
  centeredSlides?: boolean;
  pagination?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
}
