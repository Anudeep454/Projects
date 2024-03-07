import React,{useState, useEffect} from 'react'

const Products = () => {
    const[products, setProducts] = useState([])
    const[count, setCount] = useState(0)
    const[cartItems, setCartItems] = useState([])
    const[cartValue, setCartValue] = useState(0)
    const [loading,setloading]=useState(true)
    

    useEffect(() => {
        try{
            fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            setloading(false)
        }
        catch(err){
            setloading(true);
            console.log(err)
            
        }
        console.log("useEffect")
    }, [])

    const addCart = (prod) => {
       
        const data = [...cartItems, prod]
		setCartItems(data)
        const value = cartItems.reduce((prev, current) => prev + current.price, 0)
        setCartValue(value)
       
        setCount(count+1)
    }


    return (
        <div>
				{loading && <p>Loading.............</p>}
				<div>
					<header className='bg-lightblue'>
						<img
							src='https://media.istockphoto.com/id/1266252971/vector/online-shop-logo-design.jpg?s=612x612&w=0&k=20&c=UtXBlVqaijOagZXPDiEZNlDoBRfE8o7RW8Sb1VUdUeg='
							alt='logo'
						/>
						<p>Cart:{count}</p>
						<p>
							cartItems:
							{cartItems.map((prod) => (
								<li key={prod.id}>{prod.title}</li>
							))}
						</p>
						<p>cartValue:{cartValue}</p>
					</header>
					<ul className='cardContainer'>
						{products.map((prod, index) => (
							<li key={index}>
								<div className='text xxl-center font-semibold underline'>
									<img
										src={prod.image}
										alt={prod.title}
										className= 'h-50 w-50'/>
									
									<h2 className='text xxl-center'> {prod.title}</h2>
									<p className='text xl-center'>Price:{prod.price}</p>
									<p>Rating:{prod.rating.rate}/5.0</p>
									<button onClick={() => addCart(prod)}>Buy</button>
								</div>
                                </li>
						))}
					</ul>
				</div>
			</div>
		)
                        }
export default Products
