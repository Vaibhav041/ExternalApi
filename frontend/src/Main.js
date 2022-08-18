import React, {useState, useEffect} from 'react'

const Main = () => {
    const [list, setList] = useState([]);
    const getData = async () => {
        let result = await fetch('http://localhost:9000/');
        result = await result.json();
        console.log(result);
        if (result) {
            setList(result);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    
  return (
    <div className='List'>
        <ul style={{"font-weight":"bold"}}>
            <li>Name</li>
            <li>UserName</li>
            <li>Email</li>
            <li>Website</li>
        </ul>
        {
            list.map((item) => {
                return(
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.username}</li>
                        <li>{item.email}</li>
                        <li>{item.website}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}

export default Main