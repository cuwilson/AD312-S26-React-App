import { useImmer } from 'use-immer';
import { useState } from "react";
import "./ShoppingListWithImmer.css";

interface ShoppingListObject {
    id: number;
    name: string;
    quantity: number;
    details: {
        category: string;
        notes: string;
    }
}

function ShoppingList() {
    const [list, setList] = useImmer<ShoppingListObject[]>([]);

    const [nameInput, setNameInput] = useState("");
    const [quantInput, setQuantInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("");
    const [noteInput, setNoteInput] = useState("");
    //we are either editing an ID, or it's null
    const [editingId, setEditingId] = useState<number | null>(null);

    function clearInputs() {
        setNameInput("");
        setQuantInput("");
        setCategoryInput("");
        setNoteInput("");
    }

    function addItem() {
        const newItem = {
            id: Date.now(), name: nameInput, quantity: Number(quantInput),
            details: {
                category: categoryInput,
                notes: noteInput
            }
        }
        setList(draft => { draft.push(newItem) })

        clearInputs();
    }


    function updateItem(id: number) {
        setList(draft => {
            const item = draft.find(item => item.id === id);

            if (!item) return;

            if (nameInput !== "") item.name = nameInput;
            if (quantInput !== "") item.quantity = Number(quantInput);
            if (categoryInput !== "") item.details.category = categoryInput;
            if (noteInput !== "") item.details.notes = noteInput;
        });

        setEditingId(null);
        clearInputs();
    }

    function removeItem(id: number) {
        setList(draft =>
            draft.filter(item => item.id !== id)
        )

        if (editingId === id) {
            setEditingId(null);
            clearInputs();
        }
    }

    function startEdit(item: ShoppingListObject) {
        setEditingId(item.id);
        setNameInput(item.name);
        setQuantInput(String(item.quantity));
        setCategoryInput(item.details.category);
        setNoteInput(item.details.notes);
    }

    function handleSubmit() {
        if (editingId !== null) {
            updateItem(editingId);
        } else {
            addItem();
        }
    }

    function cancelEdit() {
        setEditingId(null);
        clearInputs();
    }


    return (
        <div className="container shopping-container">
            <h1>Shopping List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Item name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantInput}
                    onChange={(e) => setQuantInput(e.target.value)}
                />

                <select className={categoryInput === "" ? "placeholder" : ""}
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                >
                    <option value="" disabled hidden>Select category</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Fridge">Fridge</option>
                    <option value="Pantry">Pantry</option>
                    <option value="Household">Household</option>
                </select>

                <input
                    type="text"
                    placeholder="Notes"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                />

                <button onClick={handleSubmit}>
                    {editingId !== null ? "Save Changes" : "Add Shopping List Item"}
                </button>
                {editingId !== null && (
                    <button onClick={cancelEdit}>Cancel Edit</button>
                )}
            </div>

            <ul className="shopping-list">
                {list.map((item) => (
                    <li key={item.id}
                        className={`shopping-item ${item.id === editingId ? "editing" : ""}`}>
                        <div className="shopping-text">
                            <span>{item.name}</span>
                            <span> Quantity: {item.quantity}</span>
                            <span> Category: {item.details.category}</span>
                            <span> Notes: {item.details.notes}</span>
                        </div>
                        <button onClick={() => startEdit(item)}>Edit</button>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;



