export const ParentComponent = () =>{
    return (
        <section>
            <h1>Component A</h1>
            <ChildComponent data = "React js"/>
        </section>
    )
}

const ChildComponent = (Props) =>{
    return(
        <>
            <h1>Hello i am Component B</h1>
            <GrandChildComponent data = {Props.data}/>
        </>
    )
}

const GrandChildComponent = (Props) =>{
    return (
        <>
            <h1>Hello i am component C</h1>
            <GrandGrandChildComponent data = {Props.data}/>
        </>
    )
}
const GrandGrandChildComponent = (Props) =>{
    return (
        <>
            <h1>Hello i am component C and i love {Props.data}</h1>
            <GrandGrandGrandChildComponent data = {Props.data}/>
        </>
    )
}
const GrandGrandGrandChildComponent = (Props) =>{
    return (
        <>
            <h1>Hello i am component D . and i love {Props.data}</h1>
        </>
    )
}