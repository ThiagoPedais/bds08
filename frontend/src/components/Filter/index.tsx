import { useCallback, useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import { FilterData, Store } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.scss';


type Props = {
    onFilterChange: (filter: FilterData) => void;
}

export default function Fitler({ onFilterChange }: Props) {


    const [selectStore, setSelectStore] = useState<Store[]>([]);

    const getStores = useCallback(() => {
        makeRequest
        .get('/stores')
        .then((response) => {
            setSelectStore(response.data);
        });
      }, []);

    useEffect(() => {
        getStores();
    }, [getStores]);

    const handleChangeStore = (value?: Store) => {
        const selectedStore = value as Store;
        console.log(selectedStore);
        onFilterChange({ store: selectedStore });
      };


    return (
        <div className="container filter-container">
            <div className="base-card filter-content">
                <ReactSelect 
                    options={selectStore}
                    classNamePrefix="filter-select"
                    getOptionLabel={(store: Store) => store.name}
                    getOptionValue={(store: Store) => String(store.id)}
                    onChange={(value) => handleChangeStore(value as Store)}
                />
            </div>
        </div>
    )
}
