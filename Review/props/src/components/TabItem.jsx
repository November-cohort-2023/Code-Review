
function TabItem(props){

    console.log(props)

    /* props is an object
    
       How do I know how many key value pairs I have?

       It's however many I pass down when I render the component
    */
    return(
        <div>
            <p>{props.tabName}</p>
        </div>
    )
}

export default TabItem