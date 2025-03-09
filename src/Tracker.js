import React,{useState,useEffect} from "react";
import './App.css';


function ExpenseTracker(){
    const [Category,setCategory] =useState('');
    const [productName, setProductName]=useState('');
    const [amount,setAmount]=useState('');
    const [expenses,setExpenses]=useState([]);

    useEffect(()=>{
        const savedExpenses =JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(savedExpenses);
    },[]);

    useEffect(()=>{
        localStorage.setItem('expenses',JSON.stringify(expenses));
    },[expenses]);
    
    const addExpense=()=>{
        if(!Category || !productName || !amount){
            alert('Please fill Out All Fields');
            return;
        }


    const newExpense={
        id:Date.now(),
        date:new Date().toLocaleDateString(),
        Category,
        productName,
        amount:parseFloat(amount),
    };
    setExpenses([...expenses,newExpense]);
    setCategory('');
    setProductName('');
    setAmount('');
};

    const totalExpenses=expenses.reduce((total,expense)=>total+ expense.amount,0)
    return(
        <div style={{padding:"20px" ,maxWidth:"600px",margin:"o auto"}} className="tra">
            <h1 className="ma">Amount Tracker</h1>

            <div>
                <input type="text"
                 placeholder="Product Type" 
                 value={Category}
                 onChange={(e)=>setCategory(e.target.value)}
                 style={{margin:"10px"}}
                 className="in"
                 />
                <input type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e)=>setProductName(e.target.value)}
                style={{margin:"10px"}}
                className="in"
                />
                <input type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                className="in"
                />
                <button className="bu" onClick={addExpense}>Submit</button>

            </div>


            <h3>Total Amount</h3>
            <tabel>
                <thead>
                    <tr>
                        <th style={{padding:"20px"}}>Date</th>
                        <th style={{padding:"20px"}}>Product Type</th>
                        <th style={{padding:"20px"}}>Product Name</th>
                        <th style={{padding:"20px"}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense)=>(
                        <tr key={expense.id}>
                            <td>{expense.date}</td>
                            <td>{expense.Category}</td>
                            <td>{expense.productName}</td>
                            <td>RS{expense.amount.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </tabel>
            <h1 className="ma">Total Expenses:Rs{totalExpenses.toFixed(2)}</h1>
        </div>
    )
}
export default ExpenseTracker;