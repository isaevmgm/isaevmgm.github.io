import React, {useEffect, useState} from 'react';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
    }, []);



    return (
        <div className='main'>
            <div>
                <div className='person-data'>
                    Данные о пользователях:
                </div>
            </div>
            <div className='block'>
                {loading ? (
                    <div>
                        идет загрузка
                    </div>
                ) : data.map(item => {
                    return(
                        <div>
                            <div className='elem'>
                                <span className='element'>Имя:</span> {item.name}
                            </div>
                            <div className='elem'>
                                <span className='element'>Email:</span> {item.email}
                            </div>
                            <div className='elem'>
                                <span className='element'>Номер телефона:</span> {item.phone}
                            </div>
                            <div className='elemc'>
                                <span className='elementc'>Город:</span> {item.address.city}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default App;
