import { useEffect, useState } from 'react';
import { store } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.scss';

export default function Fitler() {


    const [allStore, setAllStores] = useState<store[]>();

    useEffect(() => {
        makeRequest
            .get('/stores')
            .then(res => {
                setAllStores(res.data)
                console.log(res.data)
            });
    }, []);


    return (
        <div className="container filter-container">
            <div className="base-card filter-content">
                <select className="form-select filter-select">
                    <option value="">Selecione uma loja</option>
                    {
                        allStore?.map(stores => (
                            <option key={stores.id} value={stores.id}>{stores.name}</option>
                        ))                        
                    }
                    {/* <option value="">Araguari</option>
                    <option value="">BSB</option>
                    <option value="">Tarere</option> */}
                </select>
            </div>
        </div>
    )
}
