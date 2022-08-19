import { useEffect, useState } from 'react';
import ReactSelect from 'react-select';
// import Select from 'react-select';
import { FilterData, Gender, Store, Stores } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.scss';


type Props = {
    onFilterChange: (filter: FilterData) => void;
}

export default function Fitler({ onFilterChange }: Props) {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const [store, setStore] = useState<Stores>();
    const [allStore, setAllStores] = useState<Store[]>();
    const [selectStore, setSelectStore] = useState<Store[]>([]);

    useEffect(() => {
        makeRequest
            .get('/stores')
            .then(res => {
                setSelectStore(res.data)
                console.log(res.data)
            });
    }, []);

    const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStore = event.target.value as Stores;

        setStore(selectedStore);
        console.log(selectedStore);
        onFilterChange({ stores: selectedStore });
    }


    return (
        <div className="container filter-container">
            <div className="base-card filter-content">
                {/* <select className="form-select filter-select" value={store} onChange={onChangeStore}>
                    <option value="">Selecione uma loja</option>
                    {
                        allStore?.map(stores => (
                            <option key={stores.id} value={stores.id}>{stores.name}</option>
                        ))                        
                    }
                    <option value="Araguari">Araguari</option>
                    <option value="Ituiutaba">Ituiutaba</option>
                    <option value="Uberaba">Uberaba</option>
                    <option value="Uberlândia">Uberlândia</option>
                </select> */}

                <ReactSelect 
                    options={selectStore}
                    classNamePrefix="filter-select"
                    getOptionLabel={(store: Store) => store.name}
                    getOptionValue={(store: Store) => String(store.id)}
                />
            </div>
        </div>
    )
}
