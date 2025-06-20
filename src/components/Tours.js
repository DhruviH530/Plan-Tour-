import Card from "./Card";
function Tours({tours ,removeTour} ){
    return (
             <div className="container">
            <div>
                 <h2  className="title">Plan With Dhruvi</h2>
            </div>

            <div className="cards">
            {/* map kriyu Card sathe  map  kriyu aetle badha ma card aavi jay  */}
                    {
                        
                        tours.map((tour)=>{
                             return <Card {...tour} removeTour={removeTour}> </Card>

                         
                        })
                    }
            </div>
             
        </div>
    )
       
    
}

export default Tours;