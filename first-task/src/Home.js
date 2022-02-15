import './Home.css';
import List from './components/Lists/List';
import img from './placeholder-image.png';

const lists=[{
  id:'1',
  title:'The TLD',
  description: 'Does the domain extention math the language of the domain name?'
},
{
  id:'2',
  title:'Domain Length',
  description:'Is the domain short enough to remember?'
},
{
  id:'3',
  title:'Language',
  description:'How complex is the actual domain name?'
},
{
  id:'4',
  title:'International recognition',
  description:'Can the domain name be used on an international scale?'
},
{
  id:'5',
  title:'Search engine',
  description:'Does the domain follow search engine guidelines?'
},
{
  id:'6',
  title:'Advertising Potential',
  description:'Could the domain be used for advertising campaings?'
},
{
  id:'7',
  title:'Sales Opportunities',
  description:'Can the domain name be used on an international scale?'
},
{
  id:'8',
  title:'Typo susceptibility',
  description:'How high is the risk of mistyping the domain name?'
},
{
  id:'9',
  title:'Business potential',
  description:'Can the domain be used as your company address?'
}
];

function Home() {
  return (
    <div className="Home">
       <div className="container">
            {lists.map((list) => 
            <div key={list.id}>
             <List img={img} title={list.title} description={list.description} />
            </div>
            )} 
        </div>
    </div>

  );
}
export default Home;
