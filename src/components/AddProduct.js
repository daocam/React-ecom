import { useState } from 'react';

const AddProduct = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name) {
            alert('Please add a product')
            return
        }

        onAdd({ name, description, price, category})
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type="text" placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input type="text" placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input type="text" placeholder="99$"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Category</label>
                <input type="text" placeholder="Video Game"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-block" value="Save Product" />
        </form>
    )
}

export default AddProduct;