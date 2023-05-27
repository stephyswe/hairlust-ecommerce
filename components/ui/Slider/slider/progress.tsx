export const SliderProgress = ({ slide }: any) => (
  <div className="slider-progress js-progressWrapper">
    <div
      className="slider-progress__fill slider-progress__fill--desktop js-progress"
      style={{ left: slide * 10 + '%', width: '30%' }}
    ></div>
    <div
      className="slider-progress__fill slider-progress__fill--mobile js-scrollIndicator"
      style={{ width: '10%', transform: 'translateX(0%)' }}
    ></div>
  </div>
)
