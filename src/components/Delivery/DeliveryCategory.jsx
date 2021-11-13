function DeliverySmCard({ image, title }) {
  return (
    <>
      <div className="w-24 bg-white rounded-md shadow lg:hidden md:w-56">
        <div className="w-full h-24">
          <img
            src={image}
            alt="food"
            className="object-cover w-full h-full rounded-t-md"
          />
        </div>
        <div>
          <h3 className="my-1 text-sm font-light text-center text-black">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
}

function DeliveryLgCard({ image, title }) {
  return (
    <>
      <div className="hidden w-64 h-full lg:block px-9">
        <div className="w-full h-48">
          <img
            src={image}
            alt={`image of${title}`}
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

export default function DeliveryCategory(props) {
  return (
    <>
      <DeliveryLgCard {...props} />
      <DeliverySmCard {...props} />
    </>
  );
}
