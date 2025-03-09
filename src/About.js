import React from 'react'
import './App.css';
import ab from './ab.webp'
import ph from './ph.webp'
import img2 from './img2.webp'
import img3 from './img3.webp'
const About = () => {
//   const myStyle = {
//     backgroundImage:
//         "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//     height: "100vh",
//     marginTop: "-70px",
//     fontSize: "25px",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
// };
  return (
    <div>
        <h1></h1>
        <article className='no'>An Amount tracker is a tool or application that helps individuals or businesses monitor their spending habits by recording and categorizing expenses over a specific period. Here’s how an expense tracker typically works and why it’s useful:</article>
        <h1 className='ke'>Key Features of an Amount Tracker</h1>
        <div className='ol'>
      <article className='an'>
          <h4 className='ex'>1.Amount Recording: Log individual expenses manually or import transactions from bank accounts, credit cards, or receipts.</h4><br></br>
          <img src={ab} className='cl'></img>
          <h4 className='ex'>2.Categorization: Sort expenses into categories (e.g., groceries, transportation, entertainment) to analyze spending in specific areas.</h4>

      </article>
    </div>
<h4 className='ex'>3.Budget Setting: Set monthly or weekly budgets for each category, making it easier to avoid overspending.</h4> 
<h4 className='ex'>4.Reports and Analytics: Generate reports that show spending patterns, trends, and overall financial health.</h4> 

  {/* <div style={myStyle}> */}
    <article className='so'>
        <h4 className='ex'>5.Alerts and Reminders: Some trackers can send notifications to remind you of bills or when you’re nearing a category budget limit.</h4>
        <h3 className='to'>Types of Amount Trackers</h3>
        <h4 className='ty'> .Mobile Apps: Apps like Mint, YNAB (You Need a Budget), and PocketGuard offer real-time expense tracking on smartphones.<img src={ph} className='img'></img></h4>
       <h4 className='ty'>. Spreadsheets: Some people prefer creating their own expense trackers using Google Sheets or Excel, allowing for a customizable and offline solution.</h4>
       <h4 className='ty'><img src={img2} className='img2'></img>. Web-based Trackers: Tools such as Zoho Expense and Expensify are popular for personal and business use, often offering additional features like team expense management.</h4>
    </article>
      <article className='be'>
        <h2 className='of'> Benefits of Using an Expense Tracker</h2>
        <div className='io'>
          <div className='io2'>
        <h4 className='fg'> .Financial Awareness: By regularly recording expenses, you become more aware of where your money goes.</h4>
        <h4 className='fg'> .Improved Budgeting: Knowing your spending patterns helps in setting realistic budgets and financial goals.</h4>
        <h4 className='fg'> .Saving Goals: Trackers help monitor discretionary spending, allowing you to set aside more money for savings.</h4>
        <h4 className='fg'> .Reduced Financial Stress: By knowing how much you’re spending, you’re more likely to feel in control and avoid the anxiety of unexpected expenses.</h4>
        </div>
        <div>
        <img src={img3} className='img3'></img>
        </div>
        </div>
       <h3 className='po'> An expense tracker is a powerful way to gain control over your finances, reduce unnecessary spending, and work towards your financial goals with clarity. Let me know if you'd like more details on any specific aspect!</h3>
      </article>
      <h1>THANK YOU FOR VISITING</h1>
  </div>
// </div>
  )
}

export default About