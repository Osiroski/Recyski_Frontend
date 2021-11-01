import React, { ChangeEvent } from "react"



interface IProps {
    title: string | null;
    unit: string | null;
}
const SaleModal = (props: IProps) => {
    const [Amount, setAmount] = React.useState(0)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const meas = props.unit
            ? props.unit.split('/', 1)[0]
            : "0"
        if (event.target.value !== "") {
            const input = parseInt(event.target.value)
            setAmount(parseInt(meas) * input)
        }
        else {
            setAmount(0)
        }

    }


    return (
        <div className="modal fade" id="sellModal" tabIndex={-1} aria-labelledby="sellModal" aria-hidden="true" style={{ display: 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="sellModalLabel">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="row g-2">
                            <div className="h6 mt-3 mb-3">
                                {props.unit}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="units" className="form-label">Units</label>
                                <div className="input-group has-validation">
                                    <input type="number" className="form-control " id="units" aria-describedby="inputGroupPrepend1" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend2">$</span>
                                    <input type="number" className="form-control " id="amount" aria-describedby="inputGroupPrepend2" value={Amount} readOnly={true} />
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-info" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleModal
