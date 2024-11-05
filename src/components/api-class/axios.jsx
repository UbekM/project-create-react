import { useEffect, useState } from "react";
import axios from 'axios';

const AxiosData = () => {
    const [statedata, setStateData] = useState([]);

    useEffect(() => {
        const FetchFunc =  async () => {
            try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setStateData(response.data);
            }
            catch (err) {
                console.log(err);  
            }
        }
        FetchFunc();
    })

    return (
        <div className="mx-auto h-screen  my-8">
        <h1 className="font-bold text-2xl py-4 text-center text-blue-500">List of Products returned by our endpoint</h1>
        <div>
            {statedata.map((items) => (
                <div className=" w-1/2 mx-auto p-4 bg-black mb-8 text-white " key={items.id}>
                    <div className="flex">
                    <p className="pr-4 text-blue-500">Title:</p> <span>{items.title}</span>
                    </div>

                    <div className="flex">
                    <p className="pr-4 text-blue-500">Price:</p> <span>{items.price}</span>
                    </div>

                    <div className="flex">
                    <p className="pr-4 text-blue-500">Description:</p> <span>{items.description}</span>
                    </div>
                   <img src={items.image}/>
                </div>
            ))}
        </div>
        </div>
    )
}
export default AxiosData;