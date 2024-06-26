import star2 from "../../assets/star2.png";
import star1 from "../../assets/star.png";
function Rating({ rating }) {
  const stars = ["star1", "star2", "star3", "star4", "star5"];
  return (
    <span className="flex gap-1 h-[16px]">
      {stars.map((star, index) =>
        index < rating ? (
          <img src={star2} alt="star" key={star} />
        ) : (
          <img src={star1} alt="star" key={star} />
        )
      )}
    </span>
  );
}

export default Rating;
