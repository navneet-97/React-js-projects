import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResult';
export const BASE_URL = "http://localhost:9000"

const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [selectedBtn, setSelectedBtn] = useState('all')

    useEffect(() => {
        setLoading(true)
        const fetchFood = async () => {
            try {
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setData(data);
                setFilteredData(data);
                setLoading(false)
            } catch (error) {
                setError("Unable to fetch data");
            }
        }
        fetchFood();
    }, []);

    const searchFood = (e) => {
        const searchValue = e.target.value;
        if (searchValue === "") {
            setFilteredData(null)
            return
        }
        const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredData(filter)
    }

    const filterFood = (type) => {
        if (type === 'all') {
            setFilteredData(data)
            setSelectedBtn('all')
            return;
        }
        const filter = data?.filter(item => item.type === type);
        setFilteredData(filter)
        setSelectedBtn(type)
    }

    const filterBtns = [
        {
            name: "All",
            type: "all"
        },
        {
            name: "Breakfast",
            type: "breakfast"
        },
        {
            name: "Lunch",
            type: "lunch"
        },
        {
            name: "Dinner",
            type: "dinner"
        },
    ];

    if (error) return <div>{error}</div>;
    if (loading) return <div>loading.....</div>;

    return (
        <>
            <Container>
                <TopContainer>
                    <div className='logo'>
                        <img src="/logo.svg" alt="logo" />
                    </div>
                    <div className='search'>
                        <input onChange={searchFood} type="text" placeholder='Search Food...' />
                    </div>
                </TopContainer>

                <FilterContainer>
                    {filterBtns.map((btn) => (
                        <Button
                            isSelected={selectedBtn === btn.type}
                            key={btn.name}
                            onClick={() => filterFood(btn.type)}
                        >{btn.name}</Button>
                    ))}
                </FilterContainer>
            </Container>
            <SearchResult data={filteredData} />
        </>
    )
}

export default App

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`
const TopContainer = styled.section`
    height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;

    .search {
        input {
            background-color: transparent;
            border: 1px solid red;
            color: white;
            border-radius: 5px;
            height: 40px;
            font-size: 16px;
            padding: 0 10px;
            &::placeholder {
                color: white;
            }
        }
    }

    @media (0 < width < 600px) {
        flex-direction: column;
        height: 120px;
    }
`

const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 40px;
`

export const Button = styled.button`
    background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
    outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
    border-radius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #f22f2f;
    }
`;