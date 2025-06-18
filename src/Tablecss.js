import './MyFile.css'
export let  Tables=()=>
{
    return(
        <>
        <table >
            <thead>
                <tr>
                    <th>StudentName</th>
                    <th>StudentID</th>
                    <th>StudentAge</th>
                    <th>StudentPlace</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>Deva</td>
                    <td>501</td>
                    <td>20</td>
                    <td>Rasipuram</td>
                </tr>
                <tr>
                    <td>Gowthami</td>
                    <td>502</td>
                    <td>28</td>
                    <td>Salem</td>
                </tr>
                <tr>
                    <td>Annamalai</td>
                    <td>503</td>
                    <td>28</td>
                    <td>Salem</td>

                    </tr>
            </tbody>
        </table>
        </>

    )

}