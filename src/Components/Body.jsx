import React from 'react'

class Body_app extends React.Component{
    render(){
        return(
            <div className="Container_body">
                <div className="Container_content">
                    <p> DIGITE O VALOR TOTAL DAS DIARIAS DA VIAGEM </p>

                    <input type="number" placeholder="R$"/> 

                    <button><i class="fa fa-play" aria-hidden="true"></i></button>

                    <div className="Container_info">

                    </div>
                </div>
            </div>
            
        )
    }
}

export default Body_app;