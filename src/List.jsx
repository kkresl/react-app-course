import { } from 'react';

const items = [

    {
        task: "Learn react",
        icon: "🍏",
        isCompleted: false,

    },

    {
        task: "Learn js",
        icon: "🍏",
        isCompleted: true,

    },

    {
        task: "Learn English",
        icon: "🍏",
        isCompleted: false,

    },

]


export const List = () => {

    return (
        <div> 
            {
                items.map((item, index) => {
                    return (
                        <section key = {index} className = {item.isCompleted ? "complited" : "" } >
                            <span> {item.icon} </span>
                            <h4> {item.task} </h4>
                        </section> 
                    )
                })
            }

        </div>
    );

};