import React from 'react'



const ListChamp = () => {


    const [champList, setChampList] = useState([]);



    useEffect(() => {
        getAllChampion()
        .then(response => {

            const data = response.data;

            setChampList(data)

        })
        .catch(
            err => {
                console.log(err.data);
            }
        )



    }, [])
    










  return (
    <div>ListChamp</div>
  )
}

export default ListChamp;