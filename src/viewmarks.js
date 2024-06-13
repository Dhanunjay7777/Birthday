

import React, { useState, useEffect } from 'react';
 // Import CSS file for styling

const Viewmark = () => {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        fetchStudentData();
    }, []);

    const fetchStudentData = () => {
        const url = 'http://localhost:5000/markinfo/submit'; // Change the URL as per your backend endpoint

        // Make an HTTP GET request to fetch trip registration data
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the tripData state with the fetched trip registration data
                setStudentData(data);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching trip registration data:', error);
            });
    };

    // const handlePrint = () => {
    //     window.print();
    // };

    return (
        <div>
<h2 style={{ textAlign: 'center', color: 'blue', textDecoration: 'underline' }}>Student Marks Data</h2>
            <div className="button10-container">
    {/* <button10 onClick={handlePrint} className="custom-button10">🖨️Print</button10> */}
</div>
            <table className="trip-table">
                
                <thead>
                    <tr>
                        <th>Maths</th>
                        <th>Science</th>
                        <th>Physics</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student, index) => (
                        <tr key={index}>
                            <td>{student.maths}</td>
                            <td>{student.science}</td>
                            <td>{student.physics}</td>
                          
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Viewmark;