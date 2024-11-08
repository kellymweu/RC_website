import Image from "next/image";

const ArticleCard = ({ title, description, imageSrc, onClick, className }) => {
  return (
    <div className="mt-4 ml-6 mr-2">
      <div
        className={`rounded-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${className}`}
        onClick={onClick}
      >
        <Image
          src={imageSrc}
          height={400}
          width={400}
          alt="Article Image"
          className="md:h-60 md:w-30"
        />
        <div className="p-2">
          <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl">
            {title}
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
