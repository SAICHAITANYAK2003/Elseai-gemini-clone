 
import { assets } from "../assets/assets";

const cardContent = [
  {
    id: 1,
    cardInfo: "Suggest beautiful places to see on an upcoming road trip",
    cardIcon: assets.compass_icon,
  },
  {
    id: 2,
    cardInfo: "Briefly summarize this concept: urban planning",
    cardIcon: assets.bulb_icon,
  },
  {
    id: 3,
    cardInfo: "Brainstorm team bonding activities for our work retreat",
    cardIcon: assets.message_icon,
  },
  {
    id: 4,
    cardInfo: "Tell me about React js and React native",
    cardIcon: assets.code_icon,
  },
];

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 p-3 mt-5  ">
        {cardContent.map((card) => (
          <div
            key={card.id}
            className="w-[240px] p-3 flex items-center justify-between bg-[#f0f4f9] rounded-2xl cursor-pointer hover:shadow-md"
          >
            <p className="text-[#585858] text-[15px]">{card.cardInfo}</p>
            <img
              src={card.cardIcon}
              alt="card-icon"
              className="w-8 h-8 bg-white p-1 rounded-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
