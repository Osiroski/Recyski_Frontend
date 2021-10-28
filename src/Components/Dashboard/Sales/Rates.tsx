
import React from "react"
import {  rates } from "./Data"
import SaleModal from "./SaleModal"

const Rates = () => {
    const [rateData]=React.useState(rates)
    const [ModalData,setModalData]=React.useState(rates[0])
    
    const handleSellClick= (e: React.MouseEvent<HTMLDivElement>) => {
        const tr = e.target as HTMLDivElement;
        const heading = tr.parentElement?.parentElement?.firstChild
        const unit = tr.parentElement?.parentElement?.firstChild?.nextSibling
        const title= heading
        ? heading.textContent
        :""
        const meas= unit
        ? unit.textContent
        :""
        setModalData({name:title,unit:meas,cell:"",BtnColor:""})
        };
    return (
        <div>
        <div className="overflow-scroll">
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Items</th>
                <th scope="col">Price per Unit</th>
                
            </tr>
        </thead>
        <tbody>
            { rateData.map((rates)=>(
            <tr key={rates.name} className={rates.cell}>
                <th scope="row">{rates.name}</th>
                <td>{rates.unit}</td>
                <td><div className={`btn ${rates.BtnColor} btn-sm`}data-bs-toggle="modal" data-bs-target="#sellModal" onClick={handleSellClick}>Sell</div></td>
            </tr>
            ))}                                                  
        </tbody>
    </table>
   
    </div>
    <SaleModal title={ModalData.name} unit={ModalData.unit}  />
    
  </div>
    )
}

export default Rates
