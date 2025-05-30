import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  //   readmore thi description ni value
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">

      <img src={image} alt={name} className="image" />

      <div className="tour-info">
            <div className="tour-details">

            <h4 className="tour-price">₹{price}</h4>
             <h4 className="tour-name">{name}</h4>
          </div>

          <div className="description">{description}
                {/* jetli showkrvanu che ae ani pr depende che 
                 */}

                 <span className="read-more" onClick={readmoreHandler}>
                  {/* logic ahiya k readmore pr click thay to showless thai jay and shoeless thay to read more fari aavi jay  */}
                  {readmore ? "Show Less" : "Read More"}
                     </span>
                    {/* readmore pr click kriye to show less thai jatu tu  */}
            </div>
      </div>
      {/* pachi but bnayu jenathi click kro to tour remove that and aa remove tour che app.js ma 10 line pr*/}
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}


export default Card;
