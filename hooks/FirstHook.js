import React, { useState, useEffect } from 'react';
import getStudentName from '../mockAPI/api';

function FirstHook() {
    // Declare a new state variable, which we'll call "id"
    const [id, setStudentId] = useState(101);
    
    useEffect(() => {
        document.getElementsByTagName('button')[0].disabled = true;
        getStudentName(id).then((studentData) => {
            if (studentData) {
                document.getElementById('studentDetails').innerHTML = `Student Id: ${id} correspond to ${studentData.name}`;
            }
            else {
                document.getElementById('studentDetails').innerHTML = `No record found for Student Id: ${id}`;
            }
        }).finally(() => {
            document.getElementsByTagName('button')[0].disabled = false;
        });
    },[id]);

    return (
        <div>
            <p>ID: {id} </p><p id="studentDetails"></p>
            <button onClick={() => setStudentId(id + 1)}>
                Click me
      </button>
        </div>
    );
}

export default FirstHook;