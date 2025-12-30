type AutoListPropsType = {
    cars: AutoArray[]
}

type AutoArray = {
    manufacturer: string,
    model: string
}

export const AutoList = (props: AutoListPropsType) => {
    return (
        <div className="table-container">
            <h3>Car Collection</h3>
            <table className="auto-table">
                <thead>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                {props.cars.map((car, index) =>
                    <tr key={index}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}