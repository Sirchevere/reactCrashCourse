
const App = () => {
    const name = "Misa"
    const names = ["Alexander", "Alexander1", "Alexander2"]
    const logead = true;
    const styles = {
        color: 'red',
        fontSize: '55px'
    }

    return (
        <>
        <div className='text-5xl'>
            App
        </div>
            <p style={styles}>Hello {name}</p>
            <ul>
                {names.map((name,index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            {
                logead && <h1>Logeado</h1>
            }
        </>
    );
};

export default App;