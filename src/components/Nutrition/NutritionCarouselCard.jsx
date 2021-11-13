function LargeCard({ title, image }) {
  return (
    <>
      <div className="hidden w-64 h-full lg:block px-9">
        <div className="w-full h-58">
          <img
            src={image}
            alt="food"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div>
          <h3 className="my-1 text-xl font-medium text-black">{title}</h3>
        </div>
      </div>
    </>
  );
}

function SmallCard({ title, image }) {
  return (
    <div className="block w-24 h-full px-3 bg-white rounded-md shadow lg:hidden md:px4 md:w-56">
      <div className="w-full h-full md:h-36">
        <img
          src={image}
          alt="nutrition"
          className="object-cover object-center w-full h-full rounded-t-md"
        />
      </div>
      <div>
        <h3 className="my-1 text-sm font-light text-center md:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

function NutritionCarouselCard(props) {
  return (
    <div>
      <SmallCard {...props} />
      <LargeCard {...props} />
    </div>
  );
}

export default NutritionCarouselCard;
