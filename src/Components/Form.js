import {useState} from 'react';
import Item from './Item';
import {v4 as uuidv4} from 'uuid';


export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: 'Coder le back office', id: uuidv4()},
        {txt: 'Maintenir l\'application', id: uuidv4()},
        {txt: 'Développer les nouvelles fonctionnalités', id: uuidv4()},
    ]);

    const [stateInput, setStateInput] = useState();

    const deleteElement = id => {
        // console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        });
        setDataArr(filteredState);
    };

    const addTodo = e => {
        // On retire le comportement de base du formulaire
        e.preventDefault();

        // On créer une copie du tableau actuel
        const newArr = [...dataArr]
        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4;

        // On ajoute les nouvelles données dans le tableau
        newArr.push(newTodo);
        setDataArr(newArr);

        // On reset l'état de l'input
        setStateInput("");
    };
    
    const linkedInput = e => {
        setStateInput(e);
    };
    
    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form action="" className="mb-3" onSubmit={addTodo}>
                <label htmlFor="todo" className="form-label mt-3">Chose à faire :</label>
                <input type="text" className='form-control' id="todo" value={stateInput} onInput={ e => linkedInput(e.target.value) } />
                
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste des choses à faire</h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (
                        <Item txt={item.txt} key={item.id} id={item.id} delFunc={deleteElement} />
                    )
                })}
            </ul>
        </div>
    );

};