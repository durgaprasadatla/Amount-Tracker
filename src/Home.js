import React from 'react'
import './App.css';
import dp from './dp.png';
import excel from './excel.jpg'
import bill from './bill.png';
import budget from './budget.avif';
import update from './update.jpg';
import ex from './ex.png'
import durga from './durga.jpg'

const Home = () => {
  return (
    <div>
        <h1 className='am'>AMOUNT TRACKER</h1>
<div className='ex1'>
      <div className='ho'>
                <artical className="pa">An Amount Tracker Is A Tool, Often In The Form Of An App, SpreadSheet, 
                    Or NoteBook, Used To Record, Categorize, And Analyze Personal Or Business Spending. 
                    It Helps You Understand Where Your Money Is Going By Logging Every Expense—like Groceries, Bills, Dining Out, Or Transportation.

        With An Expenses Tracker, You Can:

        <h4 className='se'>1.Set budgets for different categories to stay within spending limits.</h4>
        <h4 className='se'>2.Track spending patterns over time, which helps reveal habits and areas for improvement.</h4>
        <h4 className='se'>3.Identify unnecessary expenses and find ways to save.</h4>
       <h4 className='se'>4. Stay on top of bills and due dates, reducing the chance of late fees.</h4>
        Achieve financial goals by keeping a close eye on cash flow, enabling better planning for savings, debt reduction, or investments.
        It's a practical tool for gaining control over finances and making informed decisions. Many digital trackers also offer insights, alerts,
        and visual summaries, making it easier to stay on track.</artical>
        <div>
          <img src={dp} herf="./dp" width={600} className='im'/>
        </div>
      </div>  
      </div> 
      <div className='main'>
            <h2>USES OF AMOUNT TRACKER</h2>
          <artical className='container'>An amount tracker is a tool or system used to monitor and record various amounts—typically financial expenses, income, savings, or other
              quantities. It can be a physical ledger, a spreadsheet, or even a 
              digital app. Here's a quick guide to setting one up:
            <h4>1. Decide on the Format
            Spreadsheet (Excel, Google Sheets): Great for customization and tracking multiple categories.
            App (Mint, YNAB, or custom app): Offers automated tracking and reports.
            Notebook or Bullet Journal: Perfect for simplicity and hands-on tracking. <img src={excel} herf='./excel' className='im2'></img></h4>  
            <h4>2. Define Categories
            Common financial categories include income, savings, bills, groceries, entertainment, etc.
            Add any custom categories specific to your needs. <img src={bill} herf="./bill" className='im3'></img></h4>
            <div className='go'>
                    <h4 className='na'>3. Set Goals or Budgets for Each Category
                  Setting monthly or weekly targets helps in staying within limits.<img src={budget} herf="./budget" className='im4'></img></h4>
                  <h4 className='na1'><img src={update} className='im5'></img>4. Regularly Update the Tracker
                  Record daily or weekly to avoid backlog.
                  If using a digital app, sync it to automate updates.</h4>
                  <h4 className='na'>5. Analyze and Adjust
                  Review the totals at the end of each month to adjust budgets or spending habits.
                  Look for areas where you can save or need to allocate more funds.<img src={ex} className='im6'></img></h4>
            </div>
          </artical>
          <div className='dp1'>
            <div className='dp2'>
          <img src={durga} className='dp3'></img>
          <h2>Durga Prasad Atla</h2>
            </div>
            <div className='dp4'>
            <h5 className='dp5'>AMOUNT TRACKER</h5>
                <h5 className='dp6'>Presented by Durga Preasad Atla</h5>
                <h5 className='dp7'>I Am Java, React js ,React Router Developer</h5>
                <h5 className='dp8'>TECNOLOGYS: React Js,React Router,JavaScript, HTML , CSS etc</h5>
                <h5 className='dp6'>Contact: 9515670223 <br />G-mail:ataladurgaprasad@gmail.com</h5>
                <h2 className='dp9'>THANK YOU VISITING</h2>
            </div>
          </div>
      </div>
   </div>
    
  )
}

export default Home        