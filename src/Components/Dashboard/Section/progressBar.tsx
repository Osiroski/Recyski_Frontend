interface Iprop {
    title: string;
    value: string;
    barColor: string
}
const ProgressBar = (props:Iprop) => {
    const num=parseInt(props.value.replace('%',''))
    return (
        <div>
            <h4 className="small font-weight-bold">{props.title} <span className="float-right">{props.value}</span></h4>
            <div className="progress mb-4">
                <div className={`progress-bar ${props.barColor}`} role="progressbar" style={{ width: `${props.value}`}} aria-valuenow={num} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
        </div>
    )
}

export default ProgressBar
