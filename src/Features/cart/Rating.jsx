import star2 from "../../assets/star2.png";
import star from "../../assets/star.png";
function Rating() {
  return (
    <span className="flex gap-1 h-[16px]">
      <img src={star2} alt="star" />
      <img src={star2} alt="star" />
      <img src={star2} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </span>
  );
}

export default Rating;
