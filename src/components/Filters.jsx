import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';


function Filter() {

const dispatch = useDispatch();
const selectedFilter = useSelector((state) => state.filter.selectedFilter)
    const filters = [
        { title: "Économique", icon: "fa-money-bill-wave" },
        { title: "Familial", icon: "fa-child" },
        { title: "Romantique", icon: "fa-heart" },
        { title: "Nos pépites", icon: "fa-fire" },
    ];

    const handleFilterClick = (filterTitle) => {
        dispatch(setFilter(filterTitle));
    }
    return (
        <div className="filtres">
            <div className="filtre">
                <span>Filtres</span>
            </div>
            <div className="filtre-content">
                {filters.map((filter, index) => (
                   <button 
                   key={index}
                   onClick={() => handleFilterClick(filter.title)}
                        className={`filter-button ${selectedFilter === filter.title ? 'active' : ''}`}
                        title={filter.title}
                    >
                        <i className={`fa-solid ${filter.icon}`}></i> {filter.title}
                   </button>
                ))}
            </div>

            <div className="cercle">
            <i className="fa-solid fa-info"></i>
            <p>Plus de 500 logements sont disponibles dans cette ville</p>
          </div>
        </div>
    );
}

export default Filter;
