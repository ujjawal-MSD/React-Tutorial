const Map = () => {
    const users = [
        { id: 1, name: "Aman", age: 25, profession: "Engineer" },
        { id: 2, name: "Riya", age: 22, profession: "Designer" },
        { id: 3, name: "Rahul", age: 28, profession: "Developer" },
        { id: 4, name: "Priya", age: 24, profession: "Data Analyst" },
        { id: 5, name: "Karan", age: 30, profession: "Manager" },
    ];

    return (
        <table border={1}>
            <thead>
                <tr>
                    <td>S.no</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>profession</td>
                </tr>
            </thead>
            <tbody>
                {users.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.profession}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Map