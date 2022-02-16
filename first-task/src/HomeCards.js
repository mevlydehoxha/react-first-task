import React from 'react';
import Card from './components/Cards/Card';
import './HomeCards.css';

const contents=[{
    id:'1',
    version:'3.3.0',
    date:'(14/05/2018)',
    button:'New',
    img:'',
    name:'Kevin Joe',
    description:'File System changes from Dokan to CBFS Host Cloud Drive is now a network deive Vanous bug fixes and stability improvements Share premissions re-design and optimization.'
},
{
    id:'2',
    version:'3.1.0',
    date:'(20/05/2015)',
    button:'Fix',
    img:'',
    name:'Kevin Joe',
    description:'Introducing Host Cloud Drive - virtual drive functionality New Share Options and management New more user Friendly design Synnc optimizations Various performance improvements and bug fixes.'

},
{
    id:'3',
    version:'3.1.0',
    date:'(20/05/2015)',
    button:'Improvement',
    img:'',
    name:'Kevin Joe',
    description:'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes.'

},
{
    id:'4',
    version:'3.3.0',
    date:'(14/05/2018)',
    button:'New',
    img:'',
    name:'Kevin Joe',
    description:'File System changes from Dokan to CBFS Host Cloud Drive is now a network deive Vanous bug fixes and stability improvements Share premissions re-design and optimization.'
},
{
    id:'5',
    version:'3.1.0',
    date:'(20/05/2015)',
    button:'Fix',
    img:'',
    name:'Kevin Joe',
    description:'Introducing Host Cloud Drive - virtual drive functionality New Share Options and management New more user Friendly design Synnc optimizations Various performance improvements and bug fixes.'

},
{
    id:'6',
    version:'3.1.0',
    date:'(20/05/2015)',
    button:'Improvement',
    img:'',
    name:'Kevin Joe',
    description:'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes.'

},
{
    id:'7',
    version:'3.3.0',
    date:'(14/05/2018)',
    button:'New',
    img:'',
    name:'Kevin Joe',
    description:'File System changes from Dokan to CBFS Host Cloud Drive is now a network deive Vanous bug fixes and stability improvements Share premissions re-design and optimization.'
},
{
    id:'8',
    version:'3.1.0',
    date:'(20/05/2015)',
    button:'Fix',
    img:'',
    name:'Kevin Joe',
    description:'Introducing Host Cloud Drive - virtual drive functionality New Share Options and management New more user Friendly design Synnc optimizations Various performance improvements and bug fixes.'

},
{
    id:'9',
    version:'3.1.0',
    date:'(20/05/2015)',
    button:'Improvement',
    img:'',
    name:'Kevin Joe',
    description:'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes.'

}
];
function HomeCards(){
    return(
            <div className="HomeCards">
            {contents.map((content) => 
                <div key={content.id}>
                    <Card
                    version={content.version}
                    date={content.date}
                    button={content.button}
                    img={content.img} 
                    name={content.name} 
                    description={content.description}/>
                </div>
                )}
        </div>

    );

}
export default HomeCards;