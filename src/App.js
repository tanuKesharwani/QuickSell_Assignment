
import './App.css';
import React,{useState} from 'react';
import Card from './Components/Card';
import CardHeading from './Components/CardHeading';
// import options from './icons'; // Import the options from options.js
function App() {
  const[action,setAction] = useState('Status')
  const [filteredName, setfilteredName] = useState({});
  const[status,setSatausData] = useState(null);
  const[priority,setByPriority] = useState(null);
  

   function filterByName(tickets, users) {
    const filteredName = {};

    tickets.forEach((ticket) => {
      const user = users.find((u) => u.id === ticket.userId);
      if (user) {
        if (!filteredName[user.name]) {
          filteredName[user.name] = [];
        }
        filteredName[user.name].push(ticket);
      }
    });

    return filteredName;
  }
  function filterByStatus(tickets) {
    const groupedData = {};
      tickets.forEach((ticket) => {
      const status = ticket.status;
        if (!groupedData[status]) {
        groupedData[status] = [];
      }
        groupedData[status].push(ticket);
    });
  
    return groupedData;
  }
  function filterByPriority(tickets){
    const groupedData1 = {};
    tickets.forEach((ticket)=>{
      const priority = ticket.priority;

      if(!groupedData1[priority])
      {
        groupedData1[priority] = [];
      }
      groupedData1[priority].push(ticket);
    });
    return groupedData1;
  }
  fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        const filteredName = filterByName(data.tickets, data.users);
        setfilteredName(filteredName);
        const groupedStatus = filterByStatus(data.tickets);
        setSatausData(groupedStatus);
        const filterByPrioritya = filterByPriority(data.tickets);
        setByPriority(filterByPrioritya);
      })
      .catch((error) => console.error('Error fetching data:', error));


  return (
    <div className='appMain'>
      <div style={{backgroundColor:'rgb(238, 235, 235)',height:'59px',width:"110%",margin:'-10px'}}>
      <select className='HeadingSelection' value={action} onChange={(e)=>setAction(e.target.value)} >
                        <option value="slect"disabled >Select option </option>
                        <option value="Status" >Status</option>

                        <option value="Name">Name</option>
                        <option value="Priority">Priority</option>

                        
      </select>
      </div>
      {action==='Status' &&
         <div className='AppSectionMain'>
        
          
         <div className='forBacklog'>
         <CardHeading
              icon='Backlog'
              title='Backlog'
              count={status && status['Backlog']?status['Backlog'].length:0}
            />
         {status && status['Backlog']&&status['Backlog'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}
            />
            </div>
        ))}
        </div>

         <div className='forTodo'>
         <CardHeading
              icon='Todo'
              title='Todo'
              count={status && status['Todo']?status['Todo'].length:0}
            />
         {status && status['Todo']&& status['Todo'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}
         </div>
         <div className='forinProgress'>
         <CardHeading
              icon='In progress'
              title='In progress'
              count={status && status['In progress']?status['In progress'].length:0}
            />
         {status && status['In progress']&&status['In progress'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}
         </div>
         <div className='forDone'>
         <CardHeading
              icon='Done'
              title='Done'
              count={status && status['Done']?status['Done'].length:0}
            />
         {status && status['Done']&& status['Done'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}

         </div>
         <div className='forCanceled'>
         <CardHeading
              icon='Canceled'
              title='canceled'
              count={status && status['Canceled']?status['Canceled'].length:0}
            />
         {status && status['Canceled']&& status['Canceled'].map((item) => (
            <div style={{marginTop:'10px'}}>
            <Card 
              id={item.id}
              title ={item.title}
              tag={item.tag[0]}
              priority={item.priority}
              profile={true}

            />
            </div>
        ))}

         </div>
       </div>
     
      } 

      {action==='Name' &&
       <div className='NameDivs'>
        {Object.keys(filteredName).map((gd) => (
        <div key={gd} className='nameitems' >
         <CardHeading
          icon='profile'
          title={gd}
          count = {filteredName[gd].length}

         />
         
          {filteredName[gd].map((item) => (
             <div style={{marginTop:'10px'}}>
             <Card 
               id={item.id}
               title={item.title}
               profile={false}
               status={item.status}
               priority={item.priority}
               tag={item.tag[0]}
              />
              </div>
          ))}
        </div>
      ))}
      </div>
        }

      {action==='Priority'&&
       <div className='AppSectionMain'>
        
        {/* for nopriority   */}
       <div className='forBacklog'>
       <CardHeading
            icon={0}
            title='No priority'
            count={priority && priority[0]?priority[0].length:0}
          />
       {priority && priority[0]&&priority[0].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status={item.status}
            profile={true}

          />
          </div>
      ))}
      </div>
       {/* for urgenet */}
       <div className='forTodo'>
       <CardHeading
            icon={4}
            title='Urgent'
            count={priority && priority[4]?priority[4].length:0}
          />
       {priority && priority[4]&& priority[4].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status={item.status}
            profile={true}

          />
          </div>
      ))}
       </div>
       {/* for high */}
       <div className='forinProgress'>
       <CardHeading
            icon={3}
            title='High'
            count={priority && priority[3]?priority[3].length:0}
          />
       {priority && priority[3]&&priority[3].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status ={item.status}
            profile={true}

          />
          </div>
      ))}
       </div>
       {/* for medium */}
       <div className='forDone'>
       <CardHeading
            icon={2}
            title='Medium'
            count={priority && priority[2]?priority[2].length:0}
          />
       {priority && priority[2]&& priority[2].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
           status = {item.status}
           profile={true}

          />
          </div>
      ))}
        {/* for low */}
       </div>
       <div className='forCanceled'>
       <CardHeading
            icon={1}
            title='Low'
            count={priority && priority[1]?priority[1].length:0}
          />
       {priority && priority[1]&& priority[1].map((item) => (
          <div style={{marginTop:'10px'}}>
          <Card 
            id={item.id}
            title ={item.title}
            tag={item.tag[0]}
            status = {item.status}

          />
          </div>
      ))}

       </div>
     </div>
    } 
    
    </div>


  );
}

export default App;
