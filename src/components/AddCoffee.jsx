// import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insetedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Coffee added successfully! ',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a New Coffee</h2>
            <form onSubmit={handleAddCoffee} >
                {/* From Row */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Qty" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* From Row */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Coffee Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Coffee Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* From Row */}
                <div className="md:flex gap-4 mb-8">
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Coffee Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text"> Coffee Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Coffee Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* From Row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Coffee Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block bg-red-950 text-white" />
            </form>
        </div>
    );
};

export default AddCoffee;