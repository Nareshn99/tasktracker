import React from 'react'

function InputTask2({value,setValue,handleSubmit}) {

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()) {
          this.props.addTodoProps(this.state.title,this.state.discription);
          this.setState({
            title: '',
            discription:''
          });
        } else {
          alert('Please write item');
        }
      }

    return (
        <div className='w-75 p-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label className="form-label">Create Catagory</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Catagory</button>
            </form>
        </div>
    )
}

export default InputTask2