export const HomeQualityItem = ({ item }) => {
  return (
    <div className="homeQualityItem">
      <img className="homeQualityItem__image" src={item.image} alt="" />
      <p className="homeQualityItem__title">{item.title}</p>
      <p className="homeQualityItem__description">{item.description}</p>
    </div>
  );
};
