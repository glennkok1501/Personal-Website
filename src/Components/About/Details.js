const Details = () => {

    const year = 2001

    const calAge = (year) => {
        const todaysDate = new Date()
        const currentYear = todaysDate.getFullYear()
        return (currentYear - year).toString()
    }

    return ( 
        <div>
            <h5><b>"Be hungry. And always be the hardest. worker in the room.</b></h5>
            <p>
                I am a self-motivated individual and creative team player eager to gain new experiences where I can utilize my technical skills and knowledge.
                I strongly feel that Cyber Security is the path I want to take and my aim is to pursue a career in that Industry. Information Technology (IT) is a field that I believe I can excel in as I am a keen learner when it comes to any aspects of IT.
            </p>
            
            <table className="table mt-4">
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <td>Kok Jia Cheng, Glenn</td>
                    </tr>

                    <tr>
                        <th>Age</th>
                        <td>{calAge(year)}</td>
                    </tr>

                    <tr>
                        <th>Language</th>
                        <td>English (Written, Spoken),<br/>Chinese (Spoken)</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>kokglenn15@gmail</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Details;