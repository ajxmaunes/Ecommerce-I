import { Link } from "react-router-dom";
// import image
import img1 from "../img/home-img-1.jpg"

function Banner({ title, text, img }) {
  return (
    <div className="my-[5rem] max-sm:mb-0">
      <div className="container">
        <div className="banner-container flex h-[30rem] max-md:h-[25rem] overflow-hidden flex-row-reverse max-sm:m-0">
          <div className="text-side w-[50%] max-sm:w-[100%] text-start max-sm:text-center flex flex-col justify-center md:p-[60px] max-sm:p-[40px] bg-[#E9E9E9]">
            <div className="text">
              <h2 className="text-[1.2rem] font-[600] mb-[1.5rem]">Comfortable & Elegante Living</h2>
              <p className="text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi nobis, reiciendis nesciunt impedit vero fugiat soluta modi inventore totam facere quo facilis sed doloremque asperiores, cum maxime iusto assumenda!</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button className="bg-black text-white text-[1rem] font-bold p-[1rem] uppercase mt-[2rem] cursor-pointer transition-all duration-75 ">Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side w-[50%] text-end bg-[#E9E9E9] max-sm:hidden">
            <img className="w-[100%] h-[100%] object-cover" src={img1} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;